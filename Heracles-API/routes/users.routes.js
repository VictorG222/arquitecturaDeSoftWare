try {
    const express = require('express');
    const router = express.Router();
    const userController = require('../controllers/users.controller');

    router.post('/', userController.addUser);
    router.get('/:status/:limit', userController.getUsers);
    router.delete('/:userID', userController.deleteUser);

    module.exports = router;

} catch (error) {

    
}

