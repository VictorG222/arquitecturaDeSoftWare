const req = require("express/lib/request");

//const connection = require("mysql/lib/Connection");
try {
    let productController = {};

    productController.addProduct = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO products (name, price, image, stock, stats, date) VALUES ('"+ req.body.name 
                +"', '"+ req.body.price
                +"', '"+ req.body.image
                +"', '"+ req.body.stock
                +"', '"+ req.body.stats
                +"', '"+ req.body.date +"');",
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
    
    productController.getProduct = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT * FROM products WHERE name="+req.params.name+";",
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

    productController.deleteProduct = async (req, res) => {
        if(connection){
            await connection.query(
                "DELETE FROM products WHERE id="+req.params.id+";",
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

    
    module.exports = productController;
} catch (error) {
    
}
