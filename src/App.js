import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.scss";

import { NavBar } from "./nav";
import { Main } from "./main";
import { Footer } from "./footer";
import { LoadingScreen } from "./loading";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 9000);
  }, []);

  return (
    <React.Fragment>
      {loading === false ? (
        <div className="App">
          <NavBar />
          <Main />
          <Footer />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </React.Fragment>
  );
}
