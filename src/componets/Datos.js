
import React , {useState,useEffect} from 'react';

import { db } from "../firebase";
import Formulario from "./Formulario";
const Datos =() =>{
    
    return(
        <Formulario enviarDatos = {enviarDatos}/>
    )
}
export default Datos;