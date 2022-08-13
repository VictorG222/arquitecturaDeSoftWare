try {
    const express = require('express');
    const router = express.Router();
    const productController = require('../controllers/product.controller');

    router.post('/', productController.addProduct);
    router.get('/:name', productController.getProduct);
    router.delete('/:id', productController.deleteProduct);

    module.exports = router;

} catch (error) {

    
}
