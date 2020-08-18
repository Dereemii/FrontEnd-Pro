/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Barra_Progreso } from "../component/Cursos/barra_progreso";
import { Context } from "../store/appContext";
import "../../styles/App.css";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { Link } from "react-router-dom";



export const Admin_curso = () => {

  
  const { store, actions } = useContext(Context);
 

  return(
    <>
    <div className="container">
        <div className="row">Lecciones</div>
        <div className="row">
            
        <table className="table m-3">
    <thead className="thead-dark">
        <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Imagen</th>
        </tr>
    </thead>
    {store.lecciones.map((item, index) =>(
        <tbody>
        <tr>
    <th scope="col">{index}</th>
        <td>{item.id}</td>
        <td>{item.nombre}</td>
        <td></td>
        </tr>
       
    </tbody>
    ))}
    </table>
        </div>
        
</div>
<div className="container">
<div className="row">Preguntas</div>
    <div className="row">
    <table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Enunciado</th>
      <th scope="col">Imagenes</th>
    </tr>
  </thead>
  {store.preguntas.map((item, index) =>(
  <tbody>
    <tr>
      <th scope="row">{index}</th>
      <td>{item.id}k</td>
      <td>{item.enunciado}</td>
      <td>@{item.imagenes}</td>
    </tr>
    
  </tbody>))}
</table> 
    </div>

</div>

<div className="container">
        <div className="row">Respuestas</div>
        <div className="row">
            
        <table className="table m-4">
    <thead className="thead-dark">
        <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Respuesta A</th>
        <th scope="col">Opcion A</th>
        <th scope="col">Respuesta B</th>
        <th scope="col">Opcion B</th>
        <th scope="col">Respuesta C</th>
        <th scope="col">Opcion C</th>
        <th scope="col">Pregunta</th>
        <th scope="col">Leccion</th>
        </tr>
    </thead>
    {store.respuestas.map((item, index) =>(
  <tbody>
    <tr>
      <th scope="row">{index}</th>
      <td>{item.id}k</td>
      <td>{item.respuesta_a}</td>
      <td>@{item.opcion_a}</td>
      <td>@{item.respuesta_b}</td>
      <td>{item.opcion_b}</td>
      <td>@{item.respuesta_c}</td>
      <td>@{item.opcion_c}</td>
      <td>@{item.pregunta.enunciado}</td>
      <td>@{item.pregunta.leccion.nombre}</td>
    </tr>
    
  </tbody>))}
    </table>
        </div>
        
</div>
              
    </>)
      
};



  

  

