const express = require('express');
const router = express.Router();
const carimanController = require('../controllers/CarimanController');

router.get('/cariman', carimanController.getCariman);
router.get('/cariman/:id', carimanController.getCariman);
router.get('/rekomendasi', carimanController.getSuggestion);
router.get('/search', carimanController.getSearch);

module.exports = router;