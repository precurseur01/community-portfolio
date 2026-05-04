const { supabase } = require('../config/supabase');

const inscriptionController = {
  subscribe: async (req, res) => {
    try {
      const { formation_id } = req.body;
      const client_id = req.user.id;
      const { data, error } = await supabase.from('inscriptions_formation').insert([{ client_id, formation_id, statut: 'en_attente' }]).select();
      if (error) throw error;
      res.status(201).json({ success: true, data: data[0] });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  getMyFormations: async (req, res) => {
    try {
      const { data, error } = await supabase.from('inscriptions_formation').select('*, formations(*)').eq('client_id', req.user.id);
      if (error) throw error;
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

module.exports = inscriptionController;
