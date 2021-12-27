
import React from "react";
import {Route,Routes } from "react-router-dom";
import Home from "../pages/home/index";
import Pesquisa from "../pages/cidades_digitadas/index";
import Localizacao from "../pages/cidades_localizacao/index";



export default function Routess()
{
   return(
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/pesquisa" element={<Pesquisa/>}/>
        <Route exact path="/localizacao" element={<Localizacao/>}/>
      
        
    </Routes>
   ); 
}