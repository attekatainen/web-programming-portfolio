const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express().use(bodyParser.json());
const port = 5000;

app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "urheilija",
  multipleStatements: true,
});

// Yhdistetään tietokantaan
con.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

// Kaikki urheilijat
app.get("/urheilijat", (req, res) => {
  con.query("SELECT * FROM urheilijat", (err, results) => {
    if (err) throw err;
    res.status(200).send(results);
  });
});

// Urheilijan lisäys
app.post("/urheilijat/add", (req, res) => {
  const etunimi = req.body.etunimi;
  const sukunimi = req.body.sukunimi;
  const kutsumanimi = req.body.kutsumanimi;
  const svuosi = req.body.svuosi;
  const paino = req.body.paino;
  const laji = req.body.laji;
  const saavutukset = req.body.saavutukset;

  const insert_urheilija =
    "INSERT INTO urheilijat (etunimi, sukunimi, kutsumanimi, svuosi, paino, laji, saavutukset) VALUES (?,?,?,?,?,?,?)";
  con.query(
    insert_urheilija,
    [etunimi, sukunimi, kutsumanimi, svuosi, paino, laji, saavutukset],
    (err) => {
      if (err) {
        res.status(400).send();
      } else {
        res.status(200).send("OK");
      }
    }
  );
});

// Urheilijan muokkaus
app.put("/urheilijat/edit", (req, res) => {
  const id = req.body.id;
  const etunimi = req.body.etunimi;
  const sukunimi = req.body.sukunimi;
  const kutsumanimi = req.body.kutsumanimi;
  const svuosi = req.body.svuosi;
  const paino = req.body.paino;
  const laji = req.body.laji;
  const saavutukset = req.body.saavutukset;

  const update_urheilija =
    "UPDATE urheilijat SET etunimi = ?, sukunimi = ?, kutsumanimi = ?, svuosi = ?, paino = ?, laji = ?, saavutukset = ? WHERE id = ?";
  con.query(
    update_urheilija,
    [
      etunimi,
      sukunimi,
      kutsumanimi,
      svuosi,
      paino,
      laji,
      saavutukset,
      id,
    ],
    (err, result) => {
      if (err) {
        res.status(400).send();
      } else {
        res.status(200).send("OK");
      }
    }
  );
});

// Urheilijan poisto
app.delete("/urheilijat/delete/:id", (req, res, next) => {
  var id = req.params.id;
  var sql = `DELETE FROM urheilijat WHERE id=${id}`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send("Succesfully deleetd urheilija");
  });
});

app.listen(port, () => {
  console.log(`Server listening on port 5000`);
});
