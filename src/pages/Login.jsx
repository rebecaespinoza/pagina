import React,{ useState } from "react";
import {useDispatch, useSelector } from 'react-redux';
import "../estilos/Login.css";
import { useForm } from "../hooks/useForm";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { login } from "../actions/auth";
import{ startLoginEmailContrasena , startGoogleLogin} from "../actions/auth";

function Login()
{
  const dispatch = useDispatch();
  const {loading}= useSelector( state => state.ui );

  const [formValues, handleInputChange ] = useForm({
     email :'rebe@gmail.com',
     contrasena:'12334'
  });
  const { email, contrasena} = formValues;

  /*const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");*/

  const handleLogin = (e) => {
    e.preventDefault();
    /*console.log(email, contrasena);*/
    dispatch( startLoginEmailContrasena(email, contrasena) );
  }

  const handleGoogleLogin = () =>{
    dispatch( startGoogleLogin() );
  }

  return (
    <>
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </div>

            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleLogin}>
                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0">Inicia Sesion</p>
                </div>

                

                <p class="text-center fw-bold mx-3 mb-0">
                  <optgroup></optgroup>
                </p>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3">
                    Email
                  </label>
                  <input
                    type="text"
                    id="form3Example3"
                    class="form-control form-control-lg"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={handleInputChange}
                    /*onChange={(e) => setEmail(e.target.value)}*/
                  />
                </div>

                <div class="form-outline mb-3">
                  <label class="form-label" for="form3Example4">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Ingrese su contraseña"
                    value={contrasena}
                    onChange={handleInputChange}
                    /*onChange={(e) => setContrasena(e.target.value)}*/
                  />
                </div>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="form-check mb-0"></div>
                  <a href="#!" class="text-body justify-end">
                    Olvido su contraseña?
                  </a>
                </div>

                <div className="auth__social-networks">
                  <div className="btn-google" onClick={handleGoogleLogin}>
                    <div className="google-icon-wrapper">
                      <img
                        className="google-icon-wrapper"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="google button"
                      />
                    </div>
                    <p className="btn-text">
                      <b>Sign in with google</b>
                    </p>
                  </div>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
               <button 
               type="submit"
               class="btn btn-primary btn-lg" 
               disabled={loading}
               >Iniciar
               </button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">
                    No tienes cuenta?{" "}
                    <Link to="/registro">
                      <a class="justify-content-end ml-2">Registrate</a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div class="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
