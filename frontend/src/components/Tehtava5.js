import React, { Component } from "react";
import "../App.css";
import kuva from "../images/Teht5.JPG";

export default function Tehtava5() {
  return (
    <div className="content">
      <div>
        <h4>Tehtävä 4</h4>
        <h5>
          "Kokeile tehdä käyttöliittymä puhelinluetteloon jossa käytät edellä
          tekemääsi backendiä. Tässä vaiheessa tehdään ensin vain taulukko
          henkilöistä..."
        </h5>
        <br></br>
        <p>
          - Tässä tehtävässä tein Käyttöliittymän edellisen viikon tehtävä 3
          backendiin.
          <br></br>- Yksinkertainen taulukko, joka hakee tiedot tietokannasta.
          <br></br>- Tässä tehtävässä opin hakemaan tietoa tietokannasta ja
          näyttämään sen taulukossa.
          <br></br>- Mielestäni onnistuin tehtävässä hyvin, koska ohjelma toimii
          toivotulla tavalla.
        </p>
        <img src={kuva} className="kuva2" alt="kuva" />
      </div>
    </div>
  );
}
