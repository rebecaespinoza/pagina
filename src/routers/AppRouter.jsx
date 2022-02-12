import React from 'react';
import{ Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Inicio from '../pages/Inicio';
import Seguridad from '../pages/Seguridad';
import Compania from '../pages/Compania';
import Ayuda from '../pages/Ayuda';
import CompaniaOferta from '../pages/CompaniaOferta';
import CompaniaFuncion from '../pages/CompaniaFuncion';

function AppRouter() {
  return (
    <Routes>
        <Route index exact path='/' element={<Home/>}></Route>
        <Route path= '/login' element={<Login/>}></Route>
        <Route path= '/registro' element={<Registro/>}></Route>
        <Route path= '/inicio'element={<Inicio/>}></Route>   
        <Route path='/seguridad'element={<Seguridad/>}></Route>    
        <Route path='/compania'element={<Compania/>}></Route>
        <Route path='/lo-que-ofrecemos'element={<CompaniaOferta/>}></Route>
        <Route path='/como-funciona'element={<CompaniaFuncion/>}></Route>
        <Route path='/ayuda'element={<Ayuda/>}></Route>
        <Route path='*' element={<Home/>}></Route>
      
    </Routes> 
  );
}

export default AppRouter;
