import { Component, useEffect, useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import { db } from "../firebase";
function Formulario(props){
    //SE USA HOOK, AQUI NO EXISTE EL OBJETO STATE, SE USA EL useSTATE PARA DECLARAR QUE ESE ES EL ESTADO

    const valoresIniciales ={
        'titulo': '',
        'descripcion': '',
        'responsable': '',
        'prioridad': 'Baja'
    }
    const [values, setValues] = useState(valoresIniciales)

    
    



    
    
   const handleInput = (e) =>{
       e.target.classList.remove('is-invalid')
    
    const {value , name } = e.target;
    setValues({...values, [name]:value}) //AQUI SE INTRODUCEN LOS VALORES AL ESTADO (values es la constante de arriba)
       
    };

    const handleSubmit = (e) => {
        var inputs = document.querySelectorAll('.form-control')
        var error = 0;
        
        inputs.forEach(element => {
            if (element.value == '') {
                error++;
                element.classList.add('is-invalid')
            }else{
                element.classList.remove('is-invalid')
            }
        });
        
            if (error == 0 ) {
                
                props.enviarDatos(values);
                setValues({...valoresIniciales});
                inputs.forEach(element => {
                    element.value = "";
                });
            }
        
            
        
        
    }

    return(
        <div className="col-xl-7 mt-4 mx-auto col-sm-12">
            <div className="card " style={{ borderRadius: "30px", backgroundColor: "rgba(255, 255, 255, 0.466)", boxShadow: " 10px 8px 30px -8px rgba(0,0,0,0.7)" }}>
                <div className="col-md-12">
                    
                    <div className="form-group mt-3">
                        <label className="col-form-label" for="inputDefault">Titulo</label>
                        <input type="text" name="titulo" onChange={handleInput} class="form-control" style={{ backgroundColor: "rgba(255, 255, 255, 0.466)" }} placeholder="Realizar compras" id="inputDefault"></input>
                    </div>
                    <div className="form-group mt-3">
                    <label classNem="col-form-label"  >Prioridad</label>
                    <select className="custom-select" name="prioridad" onChange={handleInput} style={{ backgroundColor: "rgba(255, 255, 255, 0.466)" }} >
                        <option selected="" value="Baja">Baja</option>
                        <option value="Media">Media</option>
                        <option value="Alta">Alta</option>
                    </select>
                    </div>
                    <div className="form-group">
                        <label classNem="col-form-label"  for="inputDefault">Descripcion</label>
                        <input type="text" onChange={handleInput} name="descripcion" class="form-control" style={{ backgroundColor: "rgba(255, 255, 255, 0.466)" }} placeholder="Compra mensual de comida" id="inputDefault"></input>
                    </div>
                    <div className="form-group">
                        <label classNem="col-form-label" for="inputDefault">Responsable</label>
                        <input type="text" onChange={handleInput} name="responsable" class="form-control" style={{ backgroundColor: "rgba(255, 255, 255, 0.466)" }} placeholder="Juan" id="inputDefault"></input>
                    </div>
                    <div className="form-group">
                        <button type="button" onClick = {handleSubmit} class="btn w-100 my-3 btn-info" >Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulario;