// ─────────────────────────────────────────
//  src/store/useStore.js
// ─────────────────────────────────────────

import { supabase } from '../supabase'
import { useState, useMemo, useCallback, useEffect } from "react";
import { DEFAULT_ADDRESSES, COUPONS } from "../data/products";
import { genId } from "../utils";

export function useStore() {

  // ─────────────────────────────────────────
  //  CURRENT USER
  // ─────────────────────────────────────────
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setCurrentUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setCurrentUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // ─────────────────────────────────────────
  //  PRODUCTS (publik — semua user bisa lihat)
  // ─────────────────────────────────────────
  const [products, setProducts]             = useState([]);
  const [sellerProducts, setSellerProducts] = useState([]);

  useEffect(() => {
    supabase
      .from('products')
      .select('*')
      .then(({ data, error }) => {
        if (error) {
          console.error('❌ Supabase error:', error)
        } else {
          const mapped = data.map(p => ({
            ...p,
            id:         'p' + p.id,
            oldPrice:   p.old_price,
            desc:       p.description,
            badgeClass: p.badge_class,
            badgeText:  p.badge_text,
            reviews:    [],
            bonus:      [],
          }))
          setProducts(mapped)
        }
      })
  }, [])

  // ─────────────────────────────────────────
  //  SELLER PRODUCTS (per user)
  // ─────────────────────────────────────────
  useEffect(() => {
    supabase
      .from('seller_products')
      .select('*')
      // tidak ada filter user_id — semua produk tampil di toko
      .then(({ data, error }) => {
        if (error) {
          console.error('❌ Seller products error:', error)
        } else {
          const mapped = (data || []).map(p => ({
            ...p,
            oldPrice:   p.old_price,
            desc:       p.description,
            badgeClass: p.badge_class,
            badgeText:  p.badge_text,
            bonus:      p.bonus || [],
            reviews:    [],
          }))
          setSellerProducts(mapped)
        }
      })
  }, [currentUser])

  // ─────────────────────────────────────────
  //  CART
  // ─────────────────────────────────────────
  const [cart, setCart] = useState([]);

  // ─────────────────────────────────────────
  //  ORDERS (per user)
  // ─────────────────────────────────────────
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!currentUser) return;
    supabase
      .from('orders')
      .select('*, order_items(*)')
      .eq('user_id', currentUser.id)
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (error) console.error('Orders error:', error)
        else setOrders(data || [])
      })
  }, [currentUser])

  // ─────────────────────────────────────────
  //  ADDRESS
  // ─────────────────────────────────────────
  const [addresses, setAddresses]                 = useState(DEFAULT_ADDRESSES);
  const [selectedAddressId, setSelectedAddressId] = useState("a1");

  // ─────────────────────────────────────────
  //  CHECKOUT EXTRAS
  // ─────────────────────────────────────────
  const [shippingCost, setShippingCost]     = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);

  // ─────────────────────────────────────────
  //  DERIVED
  // ─────────────────────────────────────────
  const allProducts = useMemo(
    () => [...products, ...sellerProducts],
    [products, sellerProducts]
  );
  const cartTotal = useMemo(
    () => cart.reduce((s, ci) => s + ci.price * ci.qty, 0),
    [cart]
  );
  const cartCount = useMemo(
    () => cart.reduce((s, ci) => s + ci.qty, 0),
    [cart]
  );

  // ─────────────────────────────────────────
  //  CART ACTIONS
  // ─────────────────────────────────────────
  const addToCart = useCallback((product, size = "M", color = "Neon Pink", qty = 1) => {
    setCart((prev) => {
      const existing = prev.find(
        (ci) => ci.productId === product.id && ci.size === size && ci.color === color
      );
      if (existing) {
        return prev.map((ci) =>
          ci.id === existing.id ? { ...ci, qty: ci.qty + qty } : ci
        );
      }
      return [
        ...prev,
        {
          id:        genId("ci"),
          productId: product.id,
          name:      product.name,
          emoji:     product.emoji,
          bg:        product.bg,
          price:     product.price,
          size,
          color,
          qty,
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback((cartItemId) => {
    setCart((prev) => prev.filter((ci) => ci.id !== cartItemId));
  }, []);

  const updateCartQty = useCallback((cartItemId, delta) => {
    setCart((prev) =>
      prev.map((ci) =>
        ci.id === cartItemId ? { ...ci, qty: Math.max(1, ci.qty + delta) } : ci
      )
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  // ─────────────────────────────────────────
  //  COUPON
  // ─────────────────────────────────────────
  const applyCoupon = useCallback(
    (code) => {
      const rate = COUPONS[code.toUpperCase()] || 0;
      if (rate) {
        setCouponDiscount(Math.floor(cartTotal * rate));
        return true;
      }
      setCouponDiscount(0);
      return false;
    },
    [cartTotal]
  );

  // ─────────────────────────────────────────
  //  ORDER
  // ─────────────────────────────────────────
  const placeOrder = useCallback(async (orderData) => {
    const newOrder = {
      total:   orderData.total,
      status:  'Dikemas',
      date:    new Date().toLocaleDateString('id-ID'),
      courier: orderData.courier,
      payment: orderData.payment,
      address: orderData.address,
      user_id: currentUser?.id,  // ← per user
    }

    const { data, error } = await supabase
      .from('orders')
      .insert(newOrder)
      .select()
      .single()

    if (error) { console.error('Gagal simpan order:', error); return }

    const items = cart.map(item => ({
      order_id:   data.id,
      product_id: String(item.id),
      name:       item.name,
      price:      item.price,
      qty:        item.qty,
      size:       item.size,
      color:      item.color,
      emoji:      item.emoji,
    }))

    await supabase.from('order_items').insert(items)

    setOrders(prev => [{ ...data, order_items: items }, ...prev])
    setCart([])
  }, [cart, currentUser])

  // ─────────────────────────────────────────
  //  REVIEWS
  // ─────────────────────────────────────────
  const addReview = useCallback((productId, review) => {
    setSellerProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, reviews: [...p.reviews, review] } : p
      )
    );
  }, []);

  // ─────────────────────────────────────────
  //  SELLER PRODUCTS ACTIONS
  // ─────────────────────────────────────────
  const saveSellerProduct = useCallback(async (data, editingId) => {
    const record = {
      id:          editingId || genId("sp"),
      name:        data.name        || "",
      price:       data.price       || 0,
      old_price:   data.oldPrice    || 0,
      emoji:       data.emoji       || "🌸",
      bg:          data.bg          || "linear-gradient(135deg,#0d0020,#3d0080,#ff2d78)",
      cat:         data.cat         || "bikini",
      badge_class: data.badgeClass  || "pcb-new",
      badge_text:  data.badgeText   || "NEW",
      sold:        data.sold        || "0",
      rating:      data.rating      || 5,
      description: data.desc        || "",
      flash:       data.flash       || false,
      stock:       data.stock       || 0,
      revenue:     data.revenue     || 0,
      bonus:       data.bonus       || [],
      user_id:     currentUser?.id, // ← per user
    }

    if (editingId) {
      const { error } = await supabase
        .from('seller_products')
        .update(record)
        .eq('id', editingId)
        .eq('user_id', currentUser?.id)
      if (error) { console.error('Gagal update produk:', error); return }
      setSellerProducts(prev => prev.map(p =>
        p.id === editingId
          ? { ...p, ...data, oldPrice: record.old_price, desc: record.description, badgeClass: record.badge_class, badgeText: record.badge_text }
          : p
      ))
    } else {
      const { error } = await supabase
        .from('seller_products')
        .insert(record)
      if (error) { console.error('Gagal tambah produk:', error); return }
      setSellerProducts(prev => [...prev, {
        ...record,
        oldPrice:   record.old_price,
        desc:       record.description,
        badgeClass: record.badge_class,
        badgeText:  record.badge_text,
        reviews:    [],
      }])
    }
  }, [currentUser])

  const deleteSellerProduct = useCallback(async (id) => {
    const { error } = await supabase
      .from('seller_products')
      .delete()
      .eq('id', id)
      .eq('user_id', currentUser?.id)
    if (error) { console.error('Gagal hapus produk:', error); return }
    setSellerProducts(prev => prev.filter(p => p.id !== id))
  }, [currentUser])

  // ─────────────────────────────────────────
  //  ADDRESS ACTIONS
  // ─────────────────────────────────────────
  const saveAddress = useCallback((formData) => {
    const newAddr = { id: genId("a"), ...formData };
    setAddresses((prev) => [...prev, newAddr]);
    setSelectedAddressId(newAddr.id);
    return newAddr;
  }, []);

  const deleteAddress = useCallback((id) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
    setSelectedAddressId((prev) => (prev === id ? null : prev));
  }, []);

  // ─────────────────────────────────────────
  //  RETURN
  // ─────────────────────────────────────────
  return {
    currentUser,
    allProducts,
    sellerProducts,
    cart,
    cartTotal,
    cartCount,
    orders,
    addresses,
    selectedAddressId,
    shippingCost,
    couponDiscount,
    setOrders,
    setSelectedAddressId,
    setShippingCost,
    addToCart,
    removeFromCart,
    updateCartQty,
    clearCart,
    applyCoupon,
    placeOrder,
    addReview,
    saveSellerProduct,
    deleteSellerProduct,
    saveAddress,
    deleteAddress,
  };
}