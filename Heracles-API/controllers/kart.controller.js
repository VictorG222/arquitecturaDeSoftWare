const req = require("express/lib/request");

//const connection = require("mysql/lib/Connection");
try {
    let kartController = {};

    kartController.addKart = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO kart (product_id, user_id, quantity) VALUES ('" +
                req.body.product_id +"', '"+ req.body.user_id +"', '"+ req.body.quantity +"');",
                (err, rows)=> {
                    if (err){
                        res.status(500).json(err);
                    }else{
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };
    
    kartController.getKart = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT k.id, k.quantity, k.product_id, k.user_id, p.name, p.price, p.image, p.stock "+
                "FROM kart AS k INNER JOIN products AS p "+
                "ON k.product_id=p.id WHERE k.status=1 AND p.stats=1 AND k.user_id="+req.params.user_id+";",
                (err, rows)=> {
                    if (err){
                        res.status(500).json(err);
                    }else{
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    kartController.deleteOneKart = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE kart SET status="+req.body.status+" WHERE id="+req.body.id+";",
                (err, rows)=> {
                    if (err){
                        res.status(500).json(err);
                    }else{
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };


    kartController.deleteKart = async (req, res) => {
        if(connection){
            await connection.query(
                "DELETE FROM kart WHERE user_id="+req.params.user_id+";",
                (err, rows)=> {
                    if (err){
                        res.status(500).json(err);
                    }else{
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    
    module.exports = kartController;
} catch (error) {
    
}
