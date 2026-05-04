const { supabase } = require('../config/supabase');
const supabaseService = require('../services/supabaseService');

const projetController = {
  getAll: async (req, res) => {
    try {
      const { page, limit, search, statut, client_id } = req.query;
      const { data, total, error } = await supabaseService.list('projets', {
        page: parseInt(page) || 1,
        limit: parseInt(limit) || 20,
        search,
        filters: { statut, client_id },
        searchFields: ['nom', 'description']
      });
      if (error) throw error;
      res.json({ success: true, data, meta: { total } });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const { data, error } = await supabase
        .from('projets')
        .select(`
          *,
          projets_services (*, services(nom)),
          factures (*),
          publications (*)
        `)
        .eq('id', id)
        .single();

      if (error) return res.status(404).json({ success: false, error: "Projet non trouvé" });
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const { data, error } = await supabase.from('projets').insert([req.body]).select();
      if (error) throw error;
      res.status(201).json({ success: true, data: data[0] });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  addService: async (req, res) => {
    try {
      const { id } = req.params;
      const { data, error } = await supabase
        .from('projets_services')
        .insert([{ ...req.body, projet_id: id }])
        .select();
      if (error) throw error;
      res.status(201).json({ success: true, data: data[0] });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
};

module.exports = projetController;
