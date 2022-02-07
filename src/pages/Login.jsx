import React from 'react';
import { Form,  Button,  } from "react-bootstrap";
import '../estilos/Login.css'

function Login() {
  return(
    <>
  <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Inicia Sesion</p>
          </div>

    
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Ingrese su email" />
            <label class="form-label" for="form3Example3">Email</label>
          </div>

       
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Ingrese su contraseña" />
            <label class="form-label" for="form3Example4">contraseña</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
           
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Olvido su contraseña?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg">Iniciar</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">No tienes cuenta? <a href="#!"
                class="link-danger">Registrarse</a></p>
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
