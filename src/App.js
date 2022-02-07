import "./App.css";
import{ Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";





function App() {
  return (
    <div >
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path= '/login' element={<Login/>}></Route>
      <Route path= '/registro' element={<Registro/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
