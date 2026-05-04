const { supabase } = require('../config/supabase');

const formationController = {
  getAll: async (req, res) => {
    try {
      const { data, error } = await supabase.from('formations').select('*').eq('actif', true);
      if (error) throw error;
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const { data, error } = await supabase.from('formations').select('*, modules_formation(*, cours(*))').eq('id', id).single();
      if (error) return res.status(404).json({ success: false, error: "Formation non trouvée" });
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

module.exports = formationController;
