try {
    const express = require('express');
    const router = express.Router();
    const entradasController = require('../controllers/entradas.controller');

    router.post('/', entradasController.addEntrada);
    router.get('/:status/:limit', entradasController.getEntradas);
    router.delete('/:id', entradasController.deleteEntrada);

    module.exports = router;

} catch (error) {

    
}
