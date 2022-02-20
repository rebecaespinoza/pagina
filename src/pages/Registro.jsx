import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import validator  from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../actions/ui";
import { startRegistroEmailContrasenaName } from "../actions/auth";

function Registro (){

  const dispatch = useDispatch();
  const {msgError} = useSelector( state=> state.ui);



  const [formValues, handleInputChange] = useForm({
    name: "Rebeca",
    email: "juanito@gmail.com",
    contrasena: "123456",
    contrasena2: "123456",
  });
  const { name, email, contrasena, contrasena2 } = formValues;
  
  const handleRegistro = (e) => {
    e.preventDefault();

    if( isFormValid() ){
      dispatch(startRegistroEmailContrasenaName( email, contrasena, name));
    }
   
  }

  const isFormValid =() =>{

    if( name.trim().length === 0 ){
      dispatch(  setError('nombre requerido'))
      return false;
    }else if( !validator.isEmail( email)){
     dispatch( setError('Email no valido'))
      return false;

    }else if ( contrasena !== contrasena2 || contrasena.length < 5 ){
      dispatch( setError('contrasena maximo 6 caracteres'));
      return false;
    }
    dispatch(removeError());
    return true;
    

  }

  return (
    <>
      <section class="vh-100" style={{ backgroundColor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Registrate
                      </p>

                      <form class="mx-1 mx-md-4" onSubmit={handleRegistro}>
                         {
                           msgError &&
                           (
                              <div className="auth_alert-error">
                               {msgError}
                                </div>
                            )
                            }
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              value={name}
                              onChange={handleInputChange}
                            />
                            <label class="form-label" for="form3Example1c">
                              Nombre
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              class="form-control"
                              value={email}
                              onChange={handleInputChange}
                            />
                            <label class="form-label" for="form3Example3c">
                              Email
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              value={contrasena}
                              onChange={handleInputChange}
                            />
                            <label class="form-label" for="form3Example4c">
                              Contraseña
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              class="form-control"
                              value={contrasena2}
                              onChange={handleInputChange}
                            />
                            <label class="form-label" for="form3Example4cd">
                              Repite tu contraseña
                            </label>
                          </div>
                        </div>
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <Link to='/login'><button 
                            type="submit"
                            class="btn btn-primary btn-lg">
                              Registrate
                            </button></Link>
                        </div>
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button 
                            type="submit"
                            class="btn btn-primary btn-lg">
                              Registrate2
                            </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registro;
