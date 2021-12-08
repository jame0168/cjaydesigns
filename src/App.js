import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  Redirect
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.scss";

import { NavBar } from "./nav";
import { MainPage } from "./pages/mainpage";
import { ErrorPage } from "./pages/errorpage";
import { WorkPage } from "./pages/workpage";
import { Footer } from "./footer";
import { LoadingScreen } from "./loading";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 9000);
  }, []);

  return (
    <Router>
      <React.Fragment>
        {loading === false ? (
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/work" component={WorkPage} />
              <Route exact path="/404" component={ErrorPage} />
              <Redirect to="/404" />
            </Switch>
            <Footer />
          </div>
        ) : (
          <LoadingScreen />
        )}
      </React.Fragment>
    </Router>
  );
}
