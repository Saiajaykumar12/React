import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm'

function App() {
  return (
    <>
      {/* <Navbar title="my utils" dropdown="Location"/> */}
      <Navbar/>
      <div className="container" mt-3>
      <TextForm/>
      </div>
    </>
  );
}


export default App;
