import { createClient } from "@supabase/supabase-js";
import React from "react";

const supabase = createClient(
  "https://zgogwulfztkwjlkmkuxv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpnb2d3dWxmenRrd2psa21rdXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3NjUxMjMsImV4cCI6MjAxMzM0MTEyM30.ZEYrZCP_tuJCM0tDPatn0eGe7r6wv4nIwmoM6CSb3Z4"
);

// Create a context to provide the Supabase client to your components
export const SupabaseContext = React.createContext(supabase);
