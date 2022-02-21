import React from "react";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import formulario from "../components/Formulario";
import GridCards from "../components/GridCards";
import NavBar from "../components/NavBar";
import Registro from "./Registro";
import estudiantes from "../imagenes/estudiantes.jpg";
import estudiantesIcono from "../imagenes/estudiantesIcono.png";
import estudiar from "../imagenes/estudiar.png";
import universidades from "../imagenes/universidades.png";
import formacion from "../imagenes/formacion.png";

import "../estilos/home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <>
      <NavBar />

      <div className="c-img">
        <img
          src={estudiantes}
          /*className= "d-block w-100"*/
          className="img-1"
          alt=""
        />
        <div className="text">
          <h1 className="h1">Accede a Nuestros servicios</h1>
          <h4 className="h4">Registratre de manera segura y confiable</h4>
          <div className="button">
            <Link to="/registro">
              <button
                className="btn btn-info btn-lg"
                style={{ borderRadius: "25px", color: "#fff" }}
              >
                {" "}
                Registrarse
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div >

      <h1 className="texto">¿Por qué tener una cuenta con nosotros?</h1>
      </div>
    <div className="contenedor">
      
    <div className="hijo-contenedor">
        <div
          className="fondo1"
          style={{ maxWidth: "18rem"}}
        >
          <div className="card-header">
            <h3 className="pasos" style={{color:"white"}}>Estudiantes</h3>
          <img
          src={estudiantesIcono}
          className="img-card"
          alt=""
          />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={{color:"white"}}>Warning card title</h5>
            <p className="card-text" style={{color:"white"}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        </div>
        <div className="hijo-contenedor">
        <div
          className="fondo2"
          style={{ maxWidth: "18rem" , borderRadius:"10px"}}
        >
          <div className="card-header">
            <h3 className="pasos" style={{color:"white"}}>Academias</h3>
          <img
          src={estudiar}
          className="img-card"
          alt=""
          />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={{color:"white"}}>Warning card title</h5>
            <p className="card-text" style={{color:"white"}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        </div>
        <div className="hijo-contenedor">
        <div
          className="fondo3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">
            <h3 className="pasos" style={{color:"white"}}>Centros de estudios</h3>
          <img
          src={universidades}
          className="img-card"
          alt=""
          />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={{color:"white"}}>Warning card title</h5>
            <p className="card-text" style={{color:"white"}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        </div>
        <div className="hijo-contenedor">
        <div
          className="fondo4"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">
            <h3 className="pasos" style={{color:"white"}}>Docentes Particulares</h3>
          <img
          src={formacion}
          className="img-card"
          alt=""
          />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={{color:"white"}}>Warning card title</h5>
            <p className="card-text" style={{color:"white"}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        
        </div>
        
       
        </div>
        <div>
          <h1 className="texto">¿Qué necesito para abrir mi Cuenta?</h1>
          <p className="titulo-requisito">Requisitos</p>
        </div>
        <div class="row">
  <div class="col-sm-6">
    <div class="card" style={{borderRadius:"20px"}}>
      <div class="card-body">
        <h5 class="card-title"  style={{fontSize:"30px" ,textAlign:"center" }}>Academias , Centros de estudios y Docentes </h5>
        <p class="card-texto">Pasos</p>
        <li>Estar Ubicadas en el Centro de la ciudad de Guayaquil.</li>
        <li>Docentes tener el titulo validado por el senecyt</li>
        <li>Aceptar mostrar su subicacion actual</li>
        
       
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card" style={{borderRadius:"20px"}}>
      <div class="card-body">
        <h5 class="card-title"  style={{fontSize:"30px" , textAlign:"center"}}>Estudiantes</h5>
        <div className="estudiantes-card">
        <p className="card-texto">Pasos</p>
        <li>Tener correo de Gmail</li>
        <li>Estar cursando ultimo año de colegio</li>
        <li>Tener titulo de bachiller</li>
        </div>
      </div>
    </div>
  </div>
</div>
         
    </>
  );
}

export default Home;
