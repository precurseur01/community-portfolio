const supabaseService = require('../services/supabaseService');
const { supabase } = require('../config/supabase');

const clientController = {
  getAll: async (req, res) => {
    try {
      const { page, limit, search, statut, secteur } = req.query;
      const { data, total, error } = await supabaseService.list('clients', {
        page: parseInt(page) || 1,
        limit: parseInt(limit) || 20,
        search,
        filters: { statut, secteur },
        searchFields: ['nom', 'email', 'entreprise']
      });

      if (error) throw error;

      res.json({
        success: true,
        data,
        meta: { page: parseInt(page) || 1, limit: parseInt(limit) || 20, total }
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message, code: "FETCH_ERROR" });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const { data, error } = await supabase
        .from('clients')
        .select(`
          *,
          projets (*),
          inscriptions_formation (*, formations(titre))
        `)
        .eq('id', id)
        .single();

      if (error) return res.status(404).json({ success: false, error: "Client non trouvé", code: "NOT_FOUND" });

      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const { data, error } = await supabase.from('clients').insert([req.body]).select();
      if (error) throw error;
      res.status(201).json({ success: true, data: data[0] });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { data, error } = await supabase.from('clients').update(req.body).eq('id', id).select();
      if (error) throw error;
      res.json({ success: true, data: data[0] });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { error } = await supabase.from('clients').delete().eq('id', req.params.id);
      if (error) throw error;
      res.json({ success: true, message: "Client supprimé avec succès" });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  getDashboard: async (req, res) => {
    try {
      const { data, error } = await supabase
        .from('v_dashboard_clients')
        .select('*')
        .eq('id', req.params.id)
        .single();
      if (error) throw error;
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

module.exports = clientController;
