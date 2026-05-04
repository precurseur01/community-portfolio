const { supabase } = require('../config/supabase');

const checkFormationAccess = (statusesRequis = ['accepte', 'en_cours', 'termine']) => {
  return async (req, res, next) => {
    const userId = req.user.id;
    const { formationId, coursId } = req.params;

    try {
      let fId = formationId;

      if (!fId && coursId) {
        const { data: cours } = await supabase
          .from('cours')
          .select('module:modules_formation(formation_id)')
          .eq('id', coursId)
          .single();
        fId = cours?.module?.formation_id;
      }

      if (!fId) return next();

      const { data: inscription, error } = await supabase
        .from('inscriptions_formation')
        .select('statut')
        .eq('client_id', userId)
        .eq('formation_id', fId)
        .single();

      if (error || !inscription || !statusesRequis.includes(inscription.statut)) {
        return res.status(403).json({
          success: false,
          error: "Accès refusé. Inscription valide requise.",
          code: "FORBIDDEN_ACCESS"
        });
      }

      req.inscription = inscription;
      next();
    } catch (err) {
      next(err);
    }
  };
};

module.exports = { checkFormationAccess };
