const { supabase } = require('../config/supabase');

const authController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) return res.status(401).json({ success: false, error: "Identifiants invalides" });
      res.json({ success: true, data: { session: data.session, user: data.user } });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  signup: async (req, res) => {
    console.log('📝 Nouvelle tentative d\'inscription:', req.body.email);
    const { email, password, fullName } = req.body;
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          }
        }
      });

      if (error) return res.status(400).json({ success: false, error: error.message });
      
      res.status(201).json({ 
        success: true, 
        message: "Inscription réussie. Veuillez vérifier votre email.",
        data: { user: data.user } 
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  me: async (req, res) => {
    res.json({ success: true, data: req.user });
  },

  logout: async (req, res) => {
    try {
      await supabase.auth.signOut();
      res.json({ success: true, message: "Déconnexion réussie" });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

module.exports = authController;
