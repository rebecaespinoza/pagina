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
                src="https://cdn-icons.flaticon.com/png/512/3840/premium/3840653.png?token=exp=1644606409~hmac=6825da79994524e7506dd0a6d4e4ea8d"
                className="img"
                alt=""
              />
            </div>
            <div>
              <h2 className="h2">El usuario abre la app</h2>
              <img
                src="https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1644606409~hmac=a100b82d4af09baf4895051db3aed963"
                className="img"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://cdn-icons.flaticon.com/png/512/3840/premium/3840739.png?token=exp=1644606409~hmac=9bf7b419360798c2cf3a72ee80c84b74"
                className="img"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cdn-icons.flaticon.com/png/512/3840/premium/3840753.png?token=exp=1644606824~hmac=16e4583b3376a7c7cbe7fae64deab4b9"
                className="img"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cdn-icons.flaticon.com/png/512/3840/premium/3840754.png?token=exp=1644606874~hmac=c83a4b5f0f0a5bffad4f892aed449351"
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
