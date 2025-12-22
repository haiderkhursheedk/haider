import { createClient } from '@supabase/supabase-js'

// Define types for your database if you want TypeScript support
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      [key: string]: {
        Row: Record<string, Json | undefined>
        Insert: Record<string, Json | undefined>
        Update: Record<string, Json | undefined>
      }
    }
  }
}

// Use these if you have specific table structures
// export type Tables<T extends keyof Database['public']['Tables']> = 
//   Database['public']['Tables'][T]['Row']

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Helper function to get the user session
export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// Helper function to get the user session on the client side
export const getSession = async () => {
  const { data: { session } } = await supabase.auth.getSession()
  return session
}