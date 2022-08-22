try {
    const express = require('express');
    const router = express.Router();
    const kartController = require('../controllers/kart.controller');

    router.post('/', kartController.addKart);
    router.get('/:user_id/', kartController.getKart);
    router.put('/', kartController.deleteOneKart);
    router.delete('/:user_id', kartController.deleteKart);

    module.exports = router;

} catch (error) {

    
}
