import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { faDice } from "@fortawesome/free-solid-svg-icons";


export const Editar_Usuario = (props) => {
  const { store, actions } = useContext(Context);
  const { currentUser } = store;
  const avatar = !!currentUser || currentUser !== "invitado" || currentUser !== undefined ? actions.obtenerAvatar(currentUser.usuario.avatar) : "../../img/avatar.JPG";
  
  useEffect(() =>{
      
  }, [])

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
          
        <div className="row justify-content-center m-4 border panel">
            <div className="col-12">
              <h4 className="text-center m-2">Editar información de contacto</h4>
            </div>
        </div>
        <div className="row justify-content-center">
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
            <div className="row justify-content-center">
              <div className="col-md-auto">
                <label htmlFor="nombre_usuario" className="form-label">
                  Nombre
                </label>
                <input
                  type="nombre_usuario"
                  id="nombre_usuario"
                  name="nombre_usuario"
                  className="form-control"
                  placeholder="Su nombre de usuario"
                  defaultValue={store.currentUser.usuario.nombre_usuario}
                  onChange={actions.handleChange}
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-auto">
                <label htmlFor="correo" className="form-label">
                  Correo
                </label>
                <input
                  type="correo"
                  id="correo"
                  name="correo"
                  className="form-control"
                  placeholder="correo@ejemplo.com"
                  defaultValue={store.currentUser.usuario.correo}
                  onChange={actions.handleChange}
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center mb-4">
              <div className="col-md-auto">
                <label htmlFor="telefono" className="form-label">
                  Telefono
                </label>
                <input
                  type="telefono"
                  id="telefono"
                  name="telefono"
                  className="form-control"
                  placeholder="+569 12345678"
                  defaultValue={store.currentUser.usuario.telefono}
                  onChange={actions.handleChange}
                  required
                />
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary form-control my-4">
              Actualizar
            </button>
          </form>} 
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
                <button type="submit" className="btn btn-primary form-control my-4">
                  Actualizar
                </button>
          </form>
        </div>
      </div>
      
      <Footer/>
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
