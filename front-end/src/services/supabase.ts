import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '[Supabase] Variables d\'environnement manquantes.\n' +
    'Crée un fichier .env à la racine du projet avec :\n' +
    '  VITE_SUPABASE_URL=https://xxxx.supabase.co\n' +
    '  VITE_SUPABASE_ANON_KEY=eyJhbGci...\n' +
    'L\'authentification est désactivée en mode développement sans ces variables.'
  );
}

// On crée toujours un client valide — si les clés sont absentes on passe
// des valeurs factices pour éviter le crash de createClient.
export const supabase = createClient(
  supabaseUrl ?? 'https://placeholder.supabase.co',
  supabaseAnonKey ?? 'placeholder-anon-key'
);

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

