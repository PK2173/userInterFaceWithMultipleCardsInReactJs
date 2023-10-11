import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./components/services/Services";
import Contect from "./components/contect/Contect";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Homeje from "./components/homje/Homeje";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" exact Component={Homeje} />
          <Route path="/Services" exact Component={Services} />
          <Route path="/Contect" exact Component={Contect} />
          <Route path="/About" exact Component={About} />
          <Route path="*" exact Component={Homeje} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
