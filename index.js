const express = require("express");
const app = express();
const mysql= require("mysql");
const cors = require("cors");
//  Configuração com o Bd
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'alfa',
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let mysql = "INSERT INTO games ( name, cost, category ) VALUES (?, ?, ?)";
   db.query(mysql, [name, cost, category], (err, result) => { // executar o comando/instrução no Bd
        if (err) console.log(err);
        else res.send(result);
    });
});

app.post("/search", (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;
  
    let mysql = 
        "SELECT * FROM games WHERE name = ? AND cost = ? AND category=?";
    db.query(mysql, [name, cost, category], (err, result) => {
      res.send(result);
    });
  });
//  Trazer dados do bd
app.get("/getCards", (req, res) => {
    let mysql = "SELECT * from games";
    db.query(mysql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.put('/edit', (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;
    let mysql = "UPDATE games SET name = ?, cost = ?, category = ? WHERE id = ?";
    db.query( mysql, [name, cost, category, id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    let mysql = 'DELETE FROM games WHERE id = ?';
    db.query(mysql, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => (
    console.log("Servidor rodando normalmente na porta 3001")
));

// // Testar conexão com bd. Apagar depois.
// app.get('/', (req, res) => {
//    let SQL =
//    "INSERT INTO games ( name, cost, category ) VALUES ( 'Far Cry 4', '130', 'Ação')";

//    db.query(SQL, (err, result) => {
//        console.log(err);
//    });
// });