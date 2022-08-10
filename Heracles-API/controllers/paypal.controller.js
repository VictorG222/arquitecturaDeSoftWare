const req = require("express/lib/request");

//const connection = require("mysql/lib/Connection");
try {
    let paypalController = {};

    paypalController.addPaypal = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO paypal_order (paypal_order_id, paypal_payer_id, paypal_payer_email, paypal_country_code, paypal_amount, paypal_currency, status, created_date) VALUES ('"+ req.body.paypal_order_id 
                +"', '"+ req.body.paypal_payer_id 
                +"', '"+ req.body.paypal_payer_email 
                +"', '"+ req.body.paypal_country_code 
                +"', '"+ req.body.paypal_amount 
                +"', '"+ req.body.paypal_currency 
                +"', '"+ req.body.status 
                +"', '"+ req.body.created_date +"');",
                (err, rows)=> {
                    if (err){
                        console.log(err);
                    }else{
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };
    
    paypalController.getPaypal = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT * FROM paypal_order WHERE created_date > "+req.params.fecha_inicial+" AND created_date < "+req.params.fecha_final+";",
                (err, rows)=> {
                    if (err){
                        console.log(err);
                    }else{
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    
    module.exports = paypalController;
} catch (error) {
    
}
