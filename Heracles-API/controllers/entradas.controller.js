const req = require("express/lib/request");

//const connection = require("mysql/lib/Connection");
try {
    let entradasController = {};

    entradasController.addEntrada = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO entradas (fecha, tipo, status) VALUES ('"+ req.body.fecha +"', '"+ req.body.tipo +"', '"+ req.body.status +"');",
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
    
    entradasController.getEntradas = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT * FROM entradas WHERE status="+req.params.status+" ORDER BY tipo DESC LIMIT "+req.params.limit+";",
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

    entradasController.deleteEntrada = async (req, res) => {
        if(connection){
            await connection.query(
                "DELETE FROM entradas WHERE id="+req.params.id+";",
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
    module.exports = entradasController;
} catch (error) {
    
}
