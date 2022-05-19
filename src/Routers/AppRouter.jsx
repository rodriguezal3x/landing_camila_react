import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MyNavbar from '../Components/NavBar/MyNavbar';
import Home from '../Pages/Home';
import Nosotros from '../Pages/Nosotros';
import Servicios from '../Pages/Servicios';
import Contacto from '../Pages/Contacto';

const AppRouter = () => {
  return (
    <Router>
        <MyNavbar/>

        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/nosotros' element={<Nosotros/>} />
            <Route exact path='/servicios' element={<Servicios/>} />
            <Route exact path='/contacto' element={<Contacto/>} />
        </Routes>
    </Router>
  )
}

export default AppRouter