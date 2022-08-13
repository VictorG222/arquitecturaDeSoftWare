try {
    const express = require('express');
    const app = express();
    const morgan = require('morgan');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const connection = require('./database/database');

    const port = process.env.PORT || 3000;
    
    //Settings
    app.set('port', port);
    
    //Middlewares
    app.use(morgan('dev')); 
    app.use(bodyParser.json());
    /*app.use((req, res, next) => {
        const allowedOrigins = ['http://127.0.0.1', 'http://localhost', 'https://www.admin.mykey.com.mx/', 'https://www.admin.mykey.com.mx'];
        const origin = req.headers.origin;
        if (allowedOrigins.includes(origin)) {
                res.setHeader('Access-Control-Allow-Origin', origin);
        }
        res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Access-Control-Allow-Credentials', true);
        return next();
    });*/
    app.use(cors({ origin: '*'}));
    //app.use(cors());     
    
    //Routes
    app.use('/api/users', require('./routes/users.routes'));
    app.use('/api/entradas', require('./routes/entradas.routes'));
    app.use('/api/paypal', require('./routes/paypal.routes'));
    app.use('/api/product', require('./routes/products.routes'));
    
    //Server
    app.listen(port, () => {
        console.log('server on port: ' + port); 
    }); 

} catch (error) {
    
}