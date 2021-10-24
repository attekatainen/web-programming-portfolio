import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../App.css";
import Kuva2 from "../images/Puhelinluettelo.JPG";
import Kuva3 from "../images/Palindromi.JPG";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Tehtava1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var text = `class Henkilo {
    constructor(etunimet, sukunimi, kutsumanimi, svuosi) {
      this.etunimet = etunimet;
      this.sukunimi = sukunimi;
      this.kutsumanimi = kutsumanimi;
      this.svuosi = svuosi;
    }
  }

  class Urheilija extends Henkilo {
    constructor(
      etunimet,
      sukunimi,
      kutsumanimi,
      svuosi,
      paino,
      laji,
      saavutukset
    ) {
      super(etunimet, sukunimi, kutsumanimi, svuosi);
      this.paino = paino;
      this.laji = laji;
      this.saavutukset = saavutukset;
    }
  
    setPaino(props) {
      this.paino = props;
    }
  
    setLaji(props) {
      this.laji = props;
    }
  
    setSaavutukset(props) {
      this.saavutukset = props;
    }
  }
  
  getPaino = (props) => {
    return props.paino;
  };
  
  getLaji = (props) => {
    return props.laji;
  };
  
  getSaavutukset = (props) => {
    return props.saavutukset;
  };
  
  var urheilija1 = new Urheilija(
    "Seppo Kalevi",
    "Taalasmaa",
    "Seppo",
    new Date("1950"),
    87,
    "Koripallo",
    "Suomen mestaruus 2001, Suomen mestaruus 2005"
  );
  
  var urheilija2 = new Urheilija(
    "Taavi Olli",
    "Virtanen",
    "Taavi",
    new Date("1992"),
    72,
    "Jalkapallo",
    "Veikkausliiga mestaruus 2019"
  );
  
  console.log(urheilija1);
  
  console.log(urheilija2);
  
  console.log(getPaino(urheilija1));
  
  urheilija1.setPaino(50);
  
  console.log(getPaino(urheilija1));
  
  urheilija1.setLaji("Golf");
  
  console.log(urheilija1);`;

  return (
    <div className="content">
      <div>
        <h4>Tehtävä 1</h4>
        <h5>
          "Tee sovellus, joka kysyy syötettävän sanan (merkkijono). Sovellus
          testaa onko sana palindromi ts. sana on sama toisinpäin..."
        </h5>
        <br></br>
        <p>
          - Tässä tehtävässä tein algoritmin, joka tarkastaa onko käyttäjän
          syöttämä merkkijono palindromi.
          <br></br>- Otin käyttöön readline-syncin, jotta käyttäjältä saadaan
          luettua syöte ja tällä syötteellä kutsuin funktiota, joka palauttaa
          true, jos sana on palindromi ja false, jos sana ei ole palindromi.
          <br></br>- Tässä tehtävässä opin tarkastamaan, onko annettu merkkijono
          palindromi.
          <br></br>- Mielestäni onnistuin tehtävässä hyvin, koska ohjelma toimii
          toivotulla tavalla.
        </p>
        <img src={Kuva3} className="kuva" alt="Kuva3" />
      </div>
      <div>
        <h4>Tehtävä 2</h4>
        <h5>
          "Tee puhelinluettelo. Puhelinluetteloon lisäät taulukkoon objekteja
          (eli henkilöitä joilla nimi ja puhelinnumero). Käyttäjältä kysytään
          henkilön nimi ja puhelinnumero..."
        </h5>
        <br></br>
        <p>
          - Tässä tehtävässä tein puhelinluettelon, jossa kysytään ensin
          käyttäjältä nimi ja puhelinnumero ja luodaan henkilö antamien tietojen
          perusteella. Käyttäjältä myös kysytään haettavaa henkilöä. Jos
          käyttäjän syöttämän henkilön nimi löytyy, ohjelma tulostaa kyseisen
          henkilön puhelinnumeron.
          <br></br>- Otin käyttöön readline-syncin, jotta käyttäjältä saadaan
          luettua syöte ja tällä syötteellä luodaan henkilö.
          <br></br>- Tässä tehtävässä opin luomaan henkilön ja taulukon, johon
          henkilöt tallennetaan.
          <br></br>- Mielestäni onnistuin tehtävässä hyvin, koska ohjelma toimii
          toivotulla tavalla.
        </p>
        <img src={Kuva2} className="kuva2" alt="Kuva2" />
      </div>
      <div>
        <h4>Tehtävä 3 / Urheilija I</h4>
        <h5>
          "Kehitystehtävänä on määritellä olio-ohjelmointikielille ominainen
          luokkamäärittely ja periytyminen JavaScript-kielellä..."
        </h5>
        <br></br>
        <p>
          - Tässä tehtävässä loin Henkilo-luokan ja Urheilja-luokan, joka perii
          Henkilo-luokan.
          <br></br>- Tein luokille konstruktorit sekä get- ja set-funktiot.
          <br></br>- Loin kaksi urheilijaa ja kokeilin tulostaa nämä urheilijat
          consoleen, sekä kokeilin get- ja set-funktioita näille urheilijoille
          ja kaikki toimi niin kuin pitääkin.
          <br></br>- Tässä tehtävässä opin perimään luokan ja tekemään get- ja
          set-funktiot sekä käyttämään niitä oikein.
          <br></br>- Onnistuin tehtävässä hyvin.
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
