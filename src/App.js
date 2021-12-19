import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import InputData from "./components/InputData";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={InputData} />
        <Route path="/data" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
