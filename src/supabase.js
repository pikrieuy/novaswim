import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://vdioceplsxmwlzhimedq.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkaW9jZXBsc3htd2x6aGltZWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MjYwMzMsImV4cCI6MjA4ODMwMjAzM30.4YWBap2o_j5GzySXddUYX0AvPdtxDX2b7LfyUOk3m48'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)