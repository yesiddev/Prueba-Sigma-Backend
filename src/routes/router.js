const express = require('express');
const router = express.Router();
const { home, add } = require('../controllers/api.controller');

module.exports = () => {
  router.get('/', home);

  router.post('/add', add);

  return router;
};
