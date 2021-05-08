import React, { Component } from 'react';
import logo from '../logo.svg';
class Navigation extends Component{
    render(){
       return( 
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
               <a className="navbar-brand" href="#"> Tareas <span className="ml-2 badge badge-pill bagde-success bg-white text-dark">{this.props.numeroTareas}</span></a>
               

            
           </nav>
       ); 
    }
}
export default Navigation;