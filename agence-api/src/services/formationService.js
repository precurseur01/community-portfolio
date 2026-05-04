const { supabaseAdmin } = require('../config/supabase');

const formationService = {
  calculateProgress: async (inscriptionId) => {
    const { data: inscription } = await supabaseAdmin
      .from('inscriptions_formation')
      .select('formation_id')
      .eq('id', inscriptionId)
      .single();

    const { count: totalCours } = await supabaseAdmin
      .from('cours')
      .select('id', { count: 'exact', head: true })
      .eq('module:modules_formation(formation_id)', inscription.formation_id);

    const { count: coursTermines } = await supabaseAdmin
      .from('progression_cours')
      .select('id', { count: 'exact', head: true })
      .eq('inscription_id', inscriptionId)
      .eq('statut', 'termine');

    return totalCours > 0 ? Math.round((coursTermines / totalCours) * 100) : 0;
  }
};

module.exports = formationService;
