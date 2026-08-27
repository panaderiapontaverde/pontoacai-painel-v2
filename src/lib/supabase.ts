import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vzwzgbxgkgucqmpkfwki.supabase.co';
const supabaseKey = 'sb_publishable_IsFUC4bbF7-xK5hK5Wyyfw_Q2rFLCVa';

export const supabase = createClient(supabaseUrl, supabaseKey);
