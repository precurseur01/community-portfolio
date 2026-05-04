const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({
    success: false,
    error: "Erreur de validation des données.",
    details: errors.array(),
    code: "VALIDATION_ERROR"
  });
};

module.exports = { validate };
