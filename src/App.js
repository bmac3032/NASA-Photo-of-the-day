import "./App.css";
import Home from "../src/Pages/Home";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/home" component={Home} />
    </Router>
  );
}

export default App;
