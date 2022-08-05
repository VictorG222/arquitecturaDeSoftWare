try {
    const express = require('express');
    const router = express.Router();
    const paypalController = require('../controllers/paypal.controller');

    router.post('/', paypalController.addPaypal);
    router.get('/', paypalController.getPaypal);

    module.exports = router;

} catch (error) {

    
}
