import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Charts from "./components/Charts"
import Data from "./components/Data"
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Home' exact component={Home} />
        <Route path='/Charts' component={Charts} />
        <Route path='/Data' component={Data} />
      </Switch>
    </Router>
  );
}

export default App;