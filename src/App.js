import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ButtonAppBar from "./components/UI/ButtonAppBar/ButtonAppBar";
import Divider from "@material-ui/core/Divider";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/UI/Footer/Footer";
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
        <Route path="/blogs" exact>
          <Blogs />
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
      <Fade triggerOnce delay={200} fraction={0.4}>
        <Footer />
      </Fade>
    </div>
  );
}

export default App;
