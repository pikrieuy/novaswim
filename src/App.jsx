// ─────────────────────────────────────────
//  src/App.jsx
// ─────────────────────────────────────────

import { useState, useCallback, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { supabase } from "./supabase";
import { useStore } from "./store/useStore";
import "./styles/global.css";

import StarField  from "./components/StarField";
import Header     from "./components/Header";
import Ticker     from "./components/Ticker";
import CartPanel  from "./components/CartPanel";
import BottomNav  from "./components/BottomNav";
import Toast      from "./components/Toast";

// Lazy-loaded pages for code splitting
const AuthPage     = lazy(() => import("./pages/AuthPage"));
const HomePage     = lazy(() => import("./pages/HomePage"));
const DetailPage   = lazy(() => import("./pages/DetailPage"));
const ProfilePage  = lazy(() => import("./pages/ProfilePage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));

// These export multiple components, import them normally but lazy
const CategoryPagesModule = lazy(() => import("./pages/CategoryPages").then(m => ({ default: m.CategoryPage })));
const SearchPageModule    = lazy(() => import("./pages/CategoryPages").then(m => ({ default: m.SearchPage })));
const CartPageModule      = lazy(() => import("./pages/CheckoutPages").then(m => ({ default: m.CartPage })));
const AddressPageModule   = lazy(() => import("./pages/CheckoutPages").then(m => ({ default: m.AddressPage })));
const CheckoutPageModule  = lazy(() => import("./pages/CheckoutPages").then(m => ({ default: m.CheckoutPage })));
const SuccessPageModule   = lazy(() => import("./pages/CheckoutPages").then(m => ({ default: m.SuccessPage })));
const OrdersPageModule    = lazy(() => import("./pages/OtherPages").then(m => ({ default: m.OrdersPage })));
const SellerPageModule    = lazy(() => import("./pages/OtherPages").then(m => ({ default: m.SellerPage })));
const NotifPageModule     = lazy(() => import("./pages/OtherPages").then(m => ({ default: m.NotifPage })));
const ChatPageModule      = lazy(() => import("./pages/OtherPages").then(m => ({ default: m.ChatPage })));

import { CATEGORY_MAP } from "./data/products";

// Loading fallback for lazy pages
function PageLoader() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 300, flexDirection: "column", gap: 12 }}>
      <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "var(--pink)", letterSpacing: 2, animation: "pulse-pink 1.5s infinite" }}>LOADING</div>
      <div style={{ width: 60, height: 3, background: "rgba(255,255,255,0.1)", overflow: "hidden" }}>
        <div style={{ width: "40%", height: "100%", background: "var(--cyan)", animation: "marquee 1s linear infinite" }} />
      </div>
    </div>
  );
}

export default function App() {
  const store = useStore();

  // ── Auth State ──
  const [user,        setUser]        = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    }).catch(() => {
      setAuthLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  // ── Routing State ──
  const navigateRouter = useNavigate();
  const location = useLocation();
  const [cartPanelOpen, setCartPanelOpen] = useState(false);
  const [searchVal,     setSearchVal]     = useState("");
  const [globalToast,   setGlobalToast]   = useState("");

  const showToast = useCallback((msg) => {
    setGlobalToast(msg);
    setTimeout(() => setGlobalToast(""), 3500);
  }, []);

  useEffect(() => {
    const handleToastEvent = (e) => showToast(e.detail);
    window.addEventListener('toast', handleToastEvent);
    return () => window.removeEventListener('toast', handleToastEvent);
  }, [showToast]);

  const navigate = useCallback((page, param) => {
    if (page === "cart_panel") { setCartPanelOpen(true); return; }
    if (page === "back") {
      navigateRouter(-1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    // Mapping from old page names to routes
    let path = "/";
    if (CATEGORY_MAP[page]) path = `/category/${page}`;
    else if (page === "home") path = "/";
    else if (page === "detail") path = `/detail/${param}`;
    else if (page === "search") path = param ? `/search?q=${encodeURIComponent(param)}` : "/search";
    else path = `/${page}`;
    
    navigateRouter(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigateRouter]);

  const handleAddCart = useCallback((product) => {
    store.addToCart(product);
    showToast(`✓ ${product.name} ditambahkan ke keranjang!`);
    const cartIcon = document.querySelector('.cart-icon-bounce');
    if (cartIcon) {
      cartIcon.style.animation = 'none';
      cartIcon.offsetHeight; // reflow
      cartIcon.style.animation = 'cartBounce 0.4s ease';
    }
  }, [store, showToast]);

  const handleLogout = async () => {
    if (!window.confirm("Yakin ingin logout dari NEXWEAR?")) return;
    await supabase.auth.signOut();
    setUser(null);
    navigate("home");
    showToast("✓ Berhasil logout!");
  };

  const commonProps = {
    navigate,
    allProducts: store.allProducts,
    onAddCart:   handleAddCart,
    isWishlisted: store.isWishlisted,
    onToggleWishlist: store.toggleWishlist,
  };

  // Parse current route to pass to components that still use `currentPage` prop (like Header/BottomNav)
  const pathname = location.pathname;
  let currentHeaderPage = "home";
  if (pathname.startsWith('/category/')) currentHeaderPage = pathname.replace('/category/', '');
  else if (pathname.startsWith('/detail/')) currentHeaderPage = "detail";
  else if (pathname !== "/") currentHeaderPage = pathname.slice(1);

  // ── Loading ──
  if (authLoading) {
    return (
      <div style={{ minHeight: "100vh", background: "#05020f", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 14, color: "#ff2d78", letterSpacing: 3, textShadow: "0 0 20px rgba(255,45,120,0.5)", animation: "pulse 1.5s ease-in-out infinite" }}>
          NEXWEAR
        </div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "'Share Tech Mono', monospace", letterSpacing: 2 }}>
          LOADING...
        </div>
      </div>
    );
  }

  // ── Belum login ──
  if (!user) {
    return (
      <>
        <StarField />
        <Suspense fallback={<PageLoader />}>
          <AuthPage onLogin={setUser} />
        </Suspense>
      </>
    );
  }

  // ── Sudah login ──
  return (
    <div style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
      <StarField />
      <Toast msg={globalToast} />

      <Header
        currentPage={currentHeaderPage}
        navigate={navigate}
        cartCount={store.cartCount}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        user={user}
        onLogout={handleLogout}
      />

      <Ticker />

      <main style={{ position: "relative", maxWidth: 1300, margin: "0 auto", padding: "0 0 40px" }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage {...commonProps} />} />
            <Route path="/search" element={<SearchPageModule {...commonProps} />} />
            
            {Object.keys(CATEGORY_MAP).map(key => (
              <Route key={key} path={`/category/${key}`} element={<CategoryPagesModule catKey={key} {...commonProps} />} />
            ))}
            
            <Route path="/detail/:id" element={
              <DetailPage allProducts={store.allProducts} navigate={navigate} addToCart={store.addToCart} addReview={store.addReview} />
            } />
            
            <Route path="/cart" element={
              <CartPageModule cart={store.cart} cartTotal={store.cartTotal} couponDiscount={store.couponDiscount} navigate={navigate} removeFromCart={store.removeFromCart} updateCartQty={store.updateCartQty} applyCoupon={store.applyCoupon} />
            } />
            
            <Route path="/address" element={
              <AddressPageModule addresses={store.addresses} selectedAddressId={store.selectedAddressId} setSelectedAddressId={store.setSelectedAddressId} saveAddress={store.saveAddress} deleteAddress={store.deleteAddress} navigate={navigate} />
            } />
            
            <Route path="/checkout" element={
              <CheckoutPageModule cart={store.cart} cartTotal={store.cartTotal} couponDiscount={store.couponDiscount} addresses={store.addresses} selectedAddressId={store.selectedAddressId} shippingCost={store.shippingCost} setShippingCost={store.setShippingCost} navigate={navigate} placeOrder={store.placeOrder} />
            } />
            
            <Route path="/success" element={<SuccessPageModule navigate={navigate} />} />
            <Route path="/orders" element={<OrdersPageModule orders={store.orders} cancelOrder={store.cancelOrder} completeOrder={store.completeOrder} navigate={navigate} />} />
            <Route path="/seller" element={<SellerPageModule sellerProducts={store.sellerProducts} orders={store.orders} navigate={navigate} saveSellerProduct={store.saveSellerProduct} deleteSellerProduct={store.deleteSellerProduct} currentUser={store.currentUser} />} />
            <Route path="/profile" element={<ProfilePage user={user} navigate={navigate} />} />
            <Route path="/wishlist" element={<WishlistPage allProducts={store.allProducts} wishlist={store.wishlist} toggleWishlist={store.toggleWishlist} isWishlisted={store.isWishlisted} navigate={navigate} onAddCart={handleAddCart} />} />
            <Route path="/notif" element={<NotifPageModule navigate={navigate} />} />
            <Route path="/chat" element={<ChatPageModule navigate={navigate} />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <CartPanel
        isOpen={cartPanelOpen}
        onClose={() => setCartPanelOpen(false)}
        cart={store.cart}
        navigate={navigate}
      />

      <BottomNav
        currentPage={currentHeaderPage}
        navigate={navigate}
        cartCount={store.cartCount}
      />
    </div>
  );
}