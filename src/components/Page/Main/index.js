import { Switch, Route } from "react-router-dom";
import "./Main.css";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Education from "./Education";
import Portofolio from "./Portofolio";
import NotFound from "./NotFound";

export default function Main() {
  return (
    <main className="App-content">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/education" exact component={Education} />
        <Route path="/portofolio" exact component={Portofolio} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}
