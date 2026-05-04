const { supabase } = require('../config/supabase');

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      error: "Authentification requise. Jeton manquant.",
      code: "UNAUTHORIZED"
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({
        success: false,
        error: "Session invalide ou expirée.",
        code: "INVALID_TOKEN"
      });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Erreur lors de la vérification de l'auth.",
      code: "INTERNAL_ERROR"
    });
  }
};

module.exports = { authenticate };
