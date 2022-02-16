import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Mapa from "../components/Mapa"


function Ayuda() {
  return (
    <div>
      <NavBar />
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3">
            <h1>Busca Academias</h1>
          </div>
          <div class="col-sm-9" >
            <Mapa/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ayuda;
