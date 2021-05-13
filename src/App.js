
import './App.css';

import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import Navigation from './componets/Navigation';
import Card from './componets/Card';
import { todos } from './todos.json';
import { Component } from 'react';
import Formulario from './componets/Formulario';


function App(){
  
  



  const enviarDatos = async (datosObj) => {
    await db.collection('tareas').doc().set(datosObj)
  }

  const [tareas, setTareaArray] = useState([]);
 

  const getTarea= async () => {
     db.collection("tareas").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs)
      setTareaArray(docs);
      
    });
  };


    useEffect(() => {
      getTarea();
      console.log('recogiendo datos...')
    }, [])

  const CARDS = tareas.map(tarea => {
    return <Card titulo={tarea.titulo} responsable={tarea.responsable} prioridad={tarea.prioridad} descripcion={tarea.descripcion} idTarea={tarea.id}/>
  });
    console.log(tareas)

    return (
      <div className="App ">
        
        <Navigation numeroTareas= {tareas.length}/>
        <div className= "container-fluid">
        <div className = "row">
          <div className="col-md-4 d-flex justify-content-center">
            <Formulario enviarDatos = {enviarDatos}/> 
          </div>
          <div className="col-md-8">
            <div className="row ">
              {CARDS}
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  
}


export default App;
