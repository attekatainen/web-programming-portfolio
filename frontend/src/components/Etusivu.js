import React, { Component } from "react";

export default class Etusivu extends Component {
  render() {
    return (
      <div className="content-nogap ">
        <h2>Web-ohjelmointi Portfolio - Atte Katainen</h2>
        <p>
          Tämä on portfolio Karelia-ammattikorkeakoulun Web-ohjelmoinnin
          kurssilla tekemistäni tehtävistä.<br></br> Tehtävät ovat jaettuina
          viikkoihin, kuten kurssillakin. Voit navigoida viikkojen välillä,
          joista löytyvät jokaisen tehtävän tehtävänanto, <br></br> kuinka
          tehtävän tein ja tehtävän ratkaisu.
        </p>
      </div>
    );
  }
}
