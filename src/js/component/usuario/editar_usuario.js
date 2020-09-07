import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { Link, useHistory } from "react-router-dom";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
/* ---------------- Estilos css: _editarUsuario.scss */

export const Editar_Usuario = (props) => {

  const IconoAdress = <FontAwesomeIcon icon={faAddressBook} />;
  const { store, actions } = useContext(Context);
  /* const { currentUser } = store; */
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState("null");
  const avatar = !!store.currentUser ? actions.obtenerAvatar(store.currentUser.usuario.avatar) : "../../img/avatar.JPG";
  


 /*  useEffect(()=> {
    if(store.currentUser !== null){
      console.log("currentUser: " +store.currentUser)
      setCurrentUser(store.currentUser);
    }
    if(!store.estaAut){
        console.log("Editar no esta autenticado")
        history.push("/login")
    } else{
        console.log("Editar esta autenticado")
        history.push("/editar_usuario")
    };

   

}, []) */

  return (
    
    <>
    <Navbar/>
      <div className="container m-4">
      { !!store.msg && (
      <div className="alert alert-success alert-dismissible fade show" role="alert"
          > 
            <strong>Excelente!</strong> {store.msg}
            <Link type="button" className="btn btn-success ml-2" to="/login">Login</Link>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>)}
          { !!store.error && (<div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Holy guacamole!</strong> {store.error}
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>)}
{/* ------------------- BANNER: EDITAR INFORMACIÓN DE CONTACTO ----------------------- */}
        <div className="row justify-content-center m-4  panel">
            <div className="col-12">
              <h4 className="text-center m-2 ">Editar información de contacto</h4>
            </div>
        </div>

{/* ----------- TARJETA 1 ---- EDITAR DATOS DE USUARIO ------------------------------- */}
        <div className="row justify-content-center container-fluid m-0 ">
          {<form className="tarjeta col-md-auto" onSubmit={e => actions.handleRegister(e, props.history)}>
            <div className="row ">
              <div className="col-10"></div>
              <div className="col-2">
                <button type="button" className="close" aria-label="Close" data-toggle="modal" data-target="#salir">
                  <span aria-hidden="true">
                    &times;
                  </span>
                </button>
              </div>
            </div>
            <span className="iconoAdress">{IconoAdress}</span>
{/* -------------------- EDITAR NOMBRE DE USUARIO ------------------------------- */}
            <div className="row justify-content-center">
              <div className="col-md-auto">
                <label htmlFor="nombre_usuario" className="form-label enunciado_Editar_Usuario">
                  Nombre
                </label>
                <input
                  type="nombre_usuario"
                  id="nombre_usuario"
                  name="nombre_usuario"
                  className="form-control"
                  placeholder="Su nombre de usuario"
                  defaultValue={!!store.currentUser ? store.currentUser.usuario.nombre_usuario : ""}
                  onChange={actions.handleChange}
                  required
                />
              </div>
            </div>
{/* -------------------- EDITAR CORREO DEL USUARIO ------------------------------- */}
            <div className="row justify-content-center">
              <div className="col-md-auto">
                <label htmlFor="correo" className="form-label enunciado_Editar_Usuario">
                  Correo
                </label>
                <input
                  type="correo"
                  id="correo"
                  name="correo"
                  className="form-control"
                  placeholder="correo@ejemplo.com"
                  defaultValue={!!store.currentUser ? store.currentUser.usuario.correo: ""}
                  onChange={actions.handleChange}
                  required
                />
              </div>
            </div>
{/* -------------------- EDITAR TELEFONO DE USUARIO ------------------------------- */}
            <div className="row justify-content-center mb-4">
              <div className="col-md-auto">
                <label htmlFor="telefono" className="form-label enunciado_Editar_Usuario">
                  Teléfono
                </label>
                <input
                  type="telefono"
                  id="telefono"
                  name="telefono"
                  className="form-control"
                  placeholder="+569 12345678"
                  defaultValue={!!store.currentUser ? store.currentUser.usuario.telefono: ""}
                  onChange={actions.handleChange}
                  required
                />
              </div>
            </div>
            
            <button type="submit" className="btn button1 form-control my-4">
              Actualizar
            </button>
          </form>} 
{/* ------------------ FIN TARJETA 1 ------------------------------------------------- */}

{/* ---------------------- INICIO DE SEGUNDA TARJETA CON FOTO ----------------------- */}
          <form className="tarjeta col-4 m-4" onSubmit={e => actions.actualizarAvatar(e, props.history)}>
            <div className="tarjeta-contenido text-center border-0" >
              {<img 
              className="tarjeta-foto-perfil rounded-circle m-3 img-tarjeta img-fluid "
              src={avatar} alt="img-fluid"/>}
              <div className="tarjeta-cuerpo my-3">
                <h5 className="titulo">Actualizar foto de perfil</h5>
              </div>
            </div>
            <div className="row justify-content-center m-4">
              <div className="col-md-auto">
                <label className="custom-file-label sm" htmlFor="validatedCustomFile">{!!store.avatar ? store.avatar.name : "Selecciona una imagen"}</label>
                <input 
                type="file" 
                className="custom-file-input" 
                id="avatar" 
                name="avatar"
                onChange={actions.handle_files}
                required
                />
              </div>
            </div>
                <button type="submit" className="btn button1 form-control my-4">
                  Actualizar
                </button>
          </form>
        </div>
      </div>
      
      <Footer/>
{/* ------------------------ MODAL DE OPCIONES ------------------------------------------ */}
      <div className="modal fade" id="salir" tabindex="-1" role="dialog" aria-labelledby="salir" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="salir">Abandonar</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h5>Los cambios no se guardaran !</h5>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light" data-dismiss="modal">regresar</button>
                <Link type="button" className="btn btn-danger" to="/seleccion_curso/:usuario">Abandonar</Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
