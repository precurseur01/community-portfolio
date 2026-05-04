const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('🔌 Tentative de connexion Supabase...');
console.log('🔗 URL:', supabaseUrl ? 'Configurée' : 'Manquante');
console.log('🔑 Key:', supabaseKey ? 'Configurée' : 'Manquante');

if (!supabaseUrl || !supabaseKey) {
  console.warn('⚠️ Variables Supabase manquantes dans le fichier .env. L\'authentification risque de ne pas fonctionner.');
}

// Client public
const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseKey || 'placeholder-key'
);

// Client admin
const supabaseAdmin = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseServiceKey || 'placeholder');

module.exports = { supabase, supabaseAdmin };
