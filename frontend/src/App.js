import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Etusivu from "./components/Etusivu";
import Tehtava1 from "./components/Tehtava1";
import Tehtava4 from "./components/Tehtava4";
import Tehtava5 from "./components/Tehtava5";
import Navbar from "./components/Navbar";
import Urheilijat from "./components/Urheilijat";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Etusivu} />
        <Route path="/Tehtava1" component={Tehtava1} />
        <Route path="/Tehtava4" component={Tehtava4} />
        <Route path="/Tehtava5" component={Tehtava5} />
        <Route path="/Tehtava6" component={Urheilijat} />
      </Switch>
    </Router>
  );
}

export default App;
