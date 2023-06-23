import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Specials from "./components/Special";

function App() {
  return (
    <div>
      <React.Fragment>
        <Nav />
        <Main />
        <Specials />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
