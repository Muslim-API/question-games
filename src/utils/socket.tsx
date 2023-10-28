import { createClient } from '@supabase/supabase-js';
import React from 'react';

const supabase = createClient('', '');

// Create a context to provide the Supabase client to your components
export const SupabaseContext = React.createContext(supabase);
