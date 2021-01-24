import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import InputData from "./components/InputData";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={InputData} />
        <Route path="/Dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
