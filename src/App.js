import React from "react";
import ButtonAppBar from "./components/UI/ButtonAppBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/UI/Footer/Footer";
import Divider from "@material-ui/core/Divider";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Switch>
        <Route path="/" key="none" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/shows" exact>
          <Shows />
        </Route>
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="*" key="/default">
          <Redirect to="/blog" />
        </Route>
      </Switch>
      <Divider style={{ marginTop: "6vh" }} />
      <Fade triggerOnce delay={200} fraction={0.3}>
        <Footer />
      </Fade>
    </div>
  );
}

export default App;
