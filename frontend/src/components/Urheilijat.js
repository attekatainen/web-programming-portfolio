import React, { Component } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import "../App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Urheilijat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      etunimi: "",
      sukunimi: "",
      kutsumanimi: "",
      svuosi: "",
      paino: "",
      laji: "",
      saavutukset: "",
      showEdit: false,
      showAdd: false,
      showError: false,
      showSucces: false,
      urheilija: [],
      urheilijat: [
        {
          etunimi: "",
          sukunimi: "",
          kutsumanimi: "",
          svuosi: "",
          paino: "",
          laji: "",
          saavutukset: "",
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.getUrheilijat = this.getUrheilijat.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value,
     });
  };

  handleShowEdit(param) {
    this.closeAdd();
    this.setState({
      id: param.id,
      etunimi: param.etunimi,
      sukunimi: param.sukunimi,
      kutsumanimi: param.kutsumanimi,
      svuosi: param.svuosi,
      paino: param.paino,
      laji: param.laji,
      saavutukset: param.saavutukset,
      showEdit: true
    })
  }

  handleShowAdd() {
    this.closeAdd();
    this.setState({
      showAdd: true
    })
  }

  handleClose() {
    this.setState({
      showEdit: false,
      showAdd: false
    })
  }

  closeAdd() {
    this.setState({
      showError: false,
      showSucces: false
    })
  }

  editHandler = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/urheilijat/edit", this.state)
      .then((response) => {
        console.log(response);
        this.setState({
          showSucces: true
        });
      })
      .catch((err) => this.setState({
        showError: true
      }));
      this.handleClose();
  };

  submitHandler(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/urheilijat/add", this.state)
      .then((response) => {
        console.log(response.status);
        this.setState({
          showSucces: true
        });
      })
      .catch((err) => this.setState({
        showError: true
      }));
      this.handleClose();
  };

  getUrheilijat() {
    const that = this;
    axios
      .get("http://localhost:5000/urheilijat")
      .then(function (response) {
        that.setState({
          urheilijat: response.data,
        });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getUrheilijat();
  }

  componentDidUpdate() {
    this.getUrheilijat();
  }

  deleteurheilija = (id, etunimi, sukunimi) => {
    this.closeAdd();
    if (
      window.confirm(
        "Haluatko varmasti poistaa urheilijan " + etunimi + " " + sukunimi + "?"
      )
    )
      axios
        .delete("http://localhost:5000/urheilijat/delete/" + id)
        .then((response) => {
          console.log(response);
        })
        .then(this.getUrheilijat())
        .catch((err) => console.error(err));
  };

  render() {
    const {etunimi, sukunimi, kutsumanimi, svuosi, paino, laji, saavutukset} = this.state.urheilijat;
    return (
    <>
    <div className="error-div">
      <Alert className="error-alert" variant="danger" show={this.state.showError} onClose={() => this.closeAdd()} dismissible>
        <Alert.Heading style={{fontSize:"16px", marginBottom:"0px"}}>Tietojen tallentaminen ep??onnistui!</Alert.Heading>
      </Alert>
      <Alert className="error-alert" variant="success" show={this.state.showSucces} onClose={() => this.closeAdd()} dismissible>
        <Alert.Heading style={{fontSize:"16px", marginBottom:"0px"}}>Tietojen tallentaminen onnistui!</Alert.Heading>
      </Alert>
    </div>
    <div className="content-nogap ">
      <Modal show={this.state.showEdit} onHide={() => this.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Muokkaa urheilijaa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.editHandler}>
            <label className="mb-0">Etunimi</label>
            <input 
              type="text"
              name="etunimi"
              className="form-control mb-2"
              placeholder="Etunimi"
              required="required"
              value={this.state.etunimi}
              onChange={this.handleChange}
            />
            <label className="mb-0">Sukunimi</label>
            <input 
              type="text"
              name="sukunimi"
              className="form-control mb-2"
              placeholder="Sukunimi"
              required="required"
              value={this.state.sukunimi}
              onChange={this.handleChange}
            />
            <label className="mb-0">Kutsumanimi</label>
            <input 
              type="text"
              name="kutsumanimi"
              className="form-control mb-2"
              placeholder="Kutsumanimi"
              required="required"
              value={this.state.kutsumanimi}
              onChange={this.handleChange}
            />
            <label className="mb-0">Syntym??vuosi</label>
            <input 
              type="text"
              name="svuosi"
              className="form-control mb-2"
              placeholder="vvvv"
              required="required"
              value={this.state.svuosi}
              onChange={this.handleChange}
            />
            <label className="mb-0">Paino</label>
            <input 
              type="text"
              name="paino"
              className="form-control mb-2"
              placeholder="Paino"
              required="required"
              value={this.state.paino}
              onChange={this.handleChange}
            />
            <label className="mb-0">Laji</label>
            <input 
              type="text"
              name="laji"
              className="form-control mb-2"
              placeholder="Laji"
              required="required"
              value={this.state.laji}
              onChange={this.handleChange}
            />
            <label className="mb-0">Saavutukset</label>
            <input 
              type="text"
              name="saavutukset"
              className="form-control mb-3"
              placeholder="Saavutukset"
              required="required"
              value={this.state.saavutukset}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary">Tallenna</button>
          </form>
          </Modal.Body>
      </Modal>
      
      <Modal show={this.state.showAdd} onHide={() => this.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Lis???? urheilija</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.submitHandler}>
            <label className="mb-0">Etunimi</label>
            <input 
              type="text"
              name="etunimi"
              className="form-control mb-2"
              placeholder="Etunimi"
              required="required"
              value={etunimi}
              onChange={this.handleChange}
            />
            <label className="mb-0">Sukunimi</label>
            <input 
              type="text"
              name="sukunimi"
              className="form-control mb-2"
              placeholder="Sukunimi"
              required="required"
              value={sukunimi}
              onChange={this.handleChange}
            />
            <label className="mb-0">Kutsumanimi</label>
            <input 
              type="text"
              name="kutsumanimi"
              className="form-control mb-2"
              placeholder="Kutsumanimi"
              required="required"
              value={kutsumanimi}
              onChange={this.handleChange}
            />
            <label className="mb-0">Syntym??vuosi</label>
            <input 
              type="text"
              name="svuosi"
              className="form-control mb-2"
              placeholder="vvvv"
              required="required"
              value={svuosi}
              onChange={this.handleChange}
            />
            <label className="mb-0">Paino</label>
            <input 
              type="text"
              name="paino"
              className="form-control mb-2"
              placeholder="Paino"
              required="required"
              value={paino}
              onChange={this.handleChange}
            />
            <label className="mb-0">Laji</label>
            <input 
              type="text"
              name="laji"
              className="form-control mb-2"
              placeholder="Laji"
              required="required"
              value={laji}
              onChange={this.handleChange}
            />
            <label className="mb-0">Saavutukset</label>
            <input 
              type="text"
              name="saavutukset"
              className="form-control mb-3"
              placeholder="Saavutukset"
              required="required"
              value={saavutukset}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary">Lis???? urheilija</button>
          </form>
        </Modal.Body>
      </Modal>
    <div>
      <h5>Teht??v?? 6</h5>
        <p>
          Toteuta JavaScript-palvelinsovellus, joka tarjoaa REST-rajapinnan
          kautta tiedon urheilijoista
        </p>
    </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Etunimi</th>
            <th scope="col">Sukunimi</th>
            <th scope="col">kutsumanimi</th>
            <th scope="col">Syntym??vuosi</th>
            <th scope="col">Paino</th>
            <th scope="col">Laji</th>
            <th scope="col">Saavutukset</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.urheilijat.map((urheilija, id) => {
            return (
              <tr key={id}>
                <td>{urheilija.id}</td>
                <td>{urheilija.etunimi}</td>
                <td>{urheilija.sukunimi}</td>
                <td>{urheilija.kutsumanimi}</td>
                <td>{urheilija.svuosi}</td>
                <td>{urheilija.paino}</td>
                <td>{urheilija.laji}</td>
                <td>{urheilija.saavutukset}</td>
                <td>
                  <Button 
                    variant="primary"
                    onClick={() => this.handleShowEdit(urheilija)}>Muokkaa</Button>
                </td>
                <td>
                  <Button 
                      variant="danger"
                      onClick={() => this.deleteurheilija(urheilija.id, urheilija.etunimi, urheilija.sukunimi)}>
                      Poista
                  </Button>    
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button onClick={() => this.handleShowAdd()}>Lis???? urheilija</Button>
      <p style={{marginTop:"50px"}}>
          - T??m?? teht??v?? koostuu backendista ja frontendist??, jotka ovat yhteydess?? toisiinsa.
          Backendill?? loin tietokantayhteyden ja tein toiminnallisuudet tietojen hakemiseen, lis????miseen,
          muokkaukseen ja poistamiseen. Frontendill?? tein k??ytt??liittym??n ja sill?? my??s kutsun backendi??, jotta
          saan tiedot siirtym????n backendilt?? frontendille ja toisinp??in.
          <br></br>- Backendill?? k??ytin get-, post-, put- ja delete-metodeja tietojen hakemiseen, lis????miseen,
          muokkaukseen ja poistamiseen. Frontendill?? k??ytin react-bootstrappia muun muassa nappien ulkoasuun ja axiosia
          backend kutsuja varten.
          <br></br>- Teht??v?? opetti hyvin server-client vuorovaikutusta ja mielest??ni onnistuin teht??v??ss?? ihan hyvin. Jos jotain
          teht??v??ss?? voisi tehd?? viel?? paremmin, niin urheilijat-komponentista tuli aika pitk??, niin selkeyden vuoksi
          olisi voinut tehd?? omat komponentit urheilijoiden lis??ykselle, muokkaamiselle ja poistamiselle.
      </p>
    </div>
    </>
    );
  }
}

export default Urheilijat;
