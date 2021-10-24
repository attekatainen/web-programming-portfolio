import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../App.css";

export default function Tehtava4() {
  const style = {
    fontSize: "16px",
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var text = `const express = require("express");
  const bodyParser = require("body-parser");
  const mysql = require("mysql");
  const app = express().use(bodyParser.json());
  app.get("/", function (req, res) {
    return res.send({ error: true, message: "hello" });
  });
  
  // Sql connection
  const con = mysql.createConnection({
    host: "localhost",
    user: "kt",
    password: "password",
    database: "henkilo",
    multipleStatements: true,
  });
  
  // Connect to database
  con.connect((err) => {
    if (err) {
      console.log("Error connecting to Db");
      return;
    }
    console.log("Connection established");
  });
  
  // All users
  app.get("/users", (req, res) => {
    con.query("SELECT * FROM henkilot", (err, rows, fields) => {
      if (err) throw err;
      res.send(rows);
    });
  });
  
  // User with id
  app.get("/users/:id", (req, res) => {
    con.query(
      "SELECT * FROM henkilot WHERE id = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
      }
    );
  });
  
  // Add user
  app.post("/users", (req, res) => {
    let emp = req.body;
    var sql =
      "SET @id = ?;SET @nimi = ?;SET @puhelin = ?; \
        CALL add_henkilo(@id,@nimi,@puhelin);";
    con.query(sql, [emp.id, emp.nimi, emp.puhelin], (err, rows, fields) => {
      if (err) throw err;
      rows.forEach((element) => {
        if (element.constructor == Array)
          res.send("Inserted henkilo id : " + element[0].id);
      });
    });
  });
  
  // Edit user
  app.put("/users", (req, res) => {
    let emp = req.body;
    var sql =
      "SET @id = ?;SET @nimi = ?;SET @puhelin = ?; \
          CALL edit_henkilo(@id,@nimi,@puhelin);";
    con.query(sql, [emp.id, emp.nimi, emp.puhelin], (err, rows, fields) => {
      if (err) throw err;
      res.send("Updated succesfully");
    });
  });
  
  // Delete user
  app.delete("/users/:id", (req, res) => {
    con.query(
      "DELETE FROM henkilot WHERE id = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (err) throw err;
        res.send("Deleted succesfully");
      }
    );
  });
  
  // Add headers
  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
  
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
  
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    // Pass to next layer of middleware
    next();
  });
  
  // Port
  app.listen(3000, function () {
    console.log("Server listening at port 3000");
  });
  module.exports = app;
  `;

  return (
    <div className="content">
      <div>
        <h4>Tehtävä 4</h4>
        <h5>
          "Luo Node.js sovellus jossa käytät express:iä ja mysql:ää (MariaDb
          tässä)..."
        </h5>
        <br></br>
        <p style={style}>
          - Tässä tehtävässä tein tietokantasovelluksen backendin, joka on
          yhteydessä MariaDB-tietokantaan.
          <br></br>- Tietokannasta pystyy hakemaan, lisäämään, muokkaamaan ja
          poistamaan henkilöitä.
          <br></br>- Testasin ohjelmaa Postman-sovelluksella, jotta kaikki
          toiminnot toimivat oikein.
          <br></br>- Tässä tehtävässä opin käyttämään tietokantaa
          JavaScript-projektissa. Opin myös käyttämään Postman-sovellusta.
          <br></br>- Mielestäni onnistuin tehtävässä hyvin, koska ohjelma toimii
          toivotulla tavalla.
        </p>
        <Button variant="primary" onClick={handleShow}>
          Näytä koodi
        </Button>

        <br></br>
        <br></br>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Puhelinluettelo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {text.split("\n").map((item, key) => {
                return (
                  <span key={key}>
                    {item}
                    <br />
                  </span>
                );
              })}
            </p>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
