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
        <h4>Teht??v?? 1</h4>
        <h5>
          "Tee sovellus, joka kysyy sy??tett??v??n sanan (merkkijono). Sovellus
          testaa onko sana palindromi ts. sana on sama toisinp??in..."
        </h5>
        <br></br>
        <p>
          - T??ss?? teht??v??ss?? tein algoritmin, joka tarkastaa onko k??ytt??j??n
          sy??tt??m?? merkkijono palindromi.
          <br></br>- Otin k??ytt????n readline-syncin, jotta k??ytt??j??lt?? saadaan
          luettua sy??te ja t??ll?? sy??tteell?? kutsuin funktiota, joka palauttaa
          true, jos sana on palindromi ja false, jos sana ei ole palindromi.
          <br></br>- T??ss?? teht??v??ss?? opin tarkastamaan, onko annettu merkkijono
          palindromi.
          <br></br>- Mielest??ni onnistuin teht??v??ss?? hyvin, koska ohjelma toimii
          toivotulla tavalla.
        </p>
        <img src={Kuva3} className="kuva" alt="Kuva3" />
      </div>
      <div>
        <h4>Teht??v?? 2</h4>
        <h5>
          "Tee puhelinluettelo. Puhelinluetteloon lis????t taulukkoon objekteja
          (eli henkil??it?? joilla nimi ja puhelinnumero). K??ytt??j??lt?? kysyt????n
          henkil??n nimi ja puhelinnumero..."
        </h5>
        <br></br>
        <p>
          - T??ss?? teht??v??ss?? tein puhelinluettelon, jossa kysyt????n ensin
          k??ytt??j??lt?? nimi ja puhelinnumero ja luodaan henkil?? antamien tietojen
          perusteella. K??ytt??j??lt?? my??s kysyt????n haettavaa henkil????. Jos
          k??ytt??j??n sy??tt??m??n henkil??n nimi l??ytyy, ohjelma tulostaa kyseisen
          henkil??n puhelinnumeron.
          <br></br>- Otin k??ytt????n readline-syncin, jotta k??ytt??j??lt?? saadaan
          luettua sy??te ja t??ll?? sy??tteell?? luodaan henkil??.
          <br></br>- T??ss?? teht??v??ss?? opin luomaan henkil??n ja taulukon, johon
          henkil??t tallennetaan.
          <br></br>- Mielest??ni onnistuin teht??v??ss?? hyvin, koska ohjelma toimii
          toivotulla tavalla.
        </p>
        <img src={Kuva2} className="kuva2" alt="Kuva2" />
      </div>
      <div>
        <h4>Teht??v?? 3 / Urheilija I</h4>
        <h5>
          "Kehitysteht??v??n?? on m????ritell?? olio-ohjelmointikielille ominainen
          luokkam????rittely ja periytyminen JavaScript-kielell??..."
        </h5>
        <br></br>
        <p>
          - T??ss?? teht??v??ss?? loin Henkilo-luokan ja Urheilja-luokan, joka perii
          Henkilo-luokan.
          <br></br>- Tein luokille konstruktorit sek?? get- ja set-funktiot.
          <br></br>- Loin kaksi urheilijaa ja kokeilin tulostaa n??m?? urheilijat
          consoleen, sek?? kokeilin get- ja set-funktioita n??ille urheilijoille
          ja kaikki toimi niin kuin pit????kin.
          <br></br>- T??ss?? teht??v??ss?? opin perim????n luokan ja tekem????n get- ja
          set-funktiot sek?? k??ytt??m????n niit?? oikein.
          <br></br>- Onnistuin teht??v??ss?? hyvin.
        </p>
        
        <Button variant="primary" onClick={handleShow}>
          N??yt?? koodi
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
