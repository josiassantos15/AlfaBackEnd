const express = require("express");
const app = express();
const mysql= require("mysql");
const cors = require("cors");
//  Configuração com o Bd
// const db = mysql.createPools({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'nomeBd',
// });

app.use(cors());
app.use(express.json());

// Testar conexão com bd. Apagar depois.
// app.get('/', (req, res) => {
//    let SQL =
//    "INSERT INTO games ( name, cost, category ) VALUES ( 'Far Cry', '120', 'Ação')";

//    db.query(SQL, (err, result) => {
//        console.log(err);
//    });
// });

app.listen(3001, () => (
    console.log("Servidor rodando normalmente")
));
