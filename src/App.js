import "./App.css";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
    </Router>
  );
}

export default App;
