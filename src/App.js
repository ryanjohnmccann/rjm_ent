import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ButtonAppBar from "./components/UI/ButtonAppBar/ButtonAppBar";
import Divider from "@material-ui/core/Divider";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import Blogs from "./pages/Blogs";
import IndividualBlog from "./pages/IndividualBlog";
import IndBlogExplore from "./components/IndBlogExplore/IndBlogExplore";
import IndividualShow from "./pages/IndividualShow";
import WatchShow from "./pages/WatchShow";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/UI/Footer/Footer";
import Cookies from "universal-cookie";

function App() {
  const cookies = new Cookies();
  cookies.set({ secure: true, sameSite: "none" });
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
        <Route path="/shows/:showID" exact>
          <IndividualShow />
        </Route>
        <Route path="/shows/watch/:watchShowID" exact>
          <WatchShow />
        </Route>
        <Route path="/blogs" exact>
          <Blogs />
        </Route>
        <Route path="/blogs/:blogID" exact>
          <IndividualBlog />
        </Route>
        <Route path="/blogs/explore/:blogPageID">
          <IndBlogExplore />
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
      <Footer />
    </div>
  );
}

export default App;
