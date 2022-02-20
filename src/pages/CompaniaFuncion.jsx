import React from "react";
import NavBar from "../components/NavBar";
import CardHeader from "../components/CardHeader";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../estilos/CompaniaFuncion.css";
import GridCardFuncion from "../components/GridCardFuncion";
function CompaniaFuncion() {
  return (
    <div>
      <div>
        <NavBar />

        <div class="container-fluid h-custom">
          <h1 className="titulo">Como usar la App</h1>
          <p className="parrafo">
            Nuestro servicio principal es desarrollar tecnología que conecte a
            los conductores con los usuarios a pedido. Conoce cómo funciona la
            app paso a paso
          </p>
        </div>

        <div className="img">
          <div className="t">
            <div>
              <h2 className="h2">El usuario abre la app</h2>
              <p className="p">
                El usuario ingresa su destino en la casilla ¿A dónde vas?,
                revisa cada opción de viaje según el tamaño del vehículo, precio
                y tiempo estimado de llegada, elige la opción que quiere y,
                luego, confirma el inicio de viaje.
              </p>
              <img
                src="./public/numero-1.png"
                className="img"
                alt=""
              />
            </div>
            <div>
              <h2 className="h2">El usuario abre la app</h2>
              <img
                src="./public/numero-2.png"
                className="img"
                alt=""
              />
            </div>

            <div>
              <img
                src="./public/numero-3.png"
                className="img"
                alt=""
              />
            </div>
            <div>
              <img
                src="./public/numero-4.png"
                className="img"
                alt=""
              />
            </div>
            <div>
              <img
                src="./public/numero-5.png"
                className="img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <GridCardFuncion />
    </div>
  );
}

export default CompaniaFuncion;
