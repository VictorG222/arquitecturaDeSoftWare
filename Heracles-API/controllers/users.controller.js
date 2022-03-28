//const connection = require("mysql/lib/Connection");
try {
    let userController = {};

    userController.addUser = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO users (US_name, US_apellido, US_edad, US_sexo, fecha_de_renovacion, estado_membresia, status, US_email, UID) VALUES ('"
                + req.body.US_name +"', '"
                + req.body.US_apellido +"', '"
                + req.body.US_edad +"', '"
                + req.body.US_sexo +"', '"
                + req.body.fecha_de_renovacion +"', '"
                + req.body.estado_membresia +"', '"
                + req.body.status +"', '"
                + req.body.US_email +"', '"
                + req.body.UID +"');",
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
    module.exports = userController;
} catch (error) {
    
}
