import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { useHistory, Link } from "react-router-dom";

export const RegistrarCurso = (props) => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container">
                <div className="row m-4 ">Registrar curso</div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-nombre-tab" data-toggle="tab" href="#nav-nombre" role="tab" aria-controls="nav-nombre" aria-selected="true">Nombre, imagen</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-pregunta1" role="tab" aria-controls="nav-pregunta1" aria-selected="false">Pregunta 1</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-pregunta2" role="tab" aria-controls="nav-pregunta2" aria-selected="false">Pregunta 2</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-pregunta3" role="tab" aria-controls="nav-pregunta3" aria-selected="false">Pregunta 3</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-pregunta4" role="tab" aria-controls="nav-pregunta4" aria-selected="false">Pregunta 4</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-pregunta5" role="tab" aria-controls="nav-pregunta5" aria-selected="false">Pregunta 5</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-nombre" role="tabpanel" aria-labelledby="nav-nombre-tab">
                        { !!store.msg_leccion && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Excelente!</strong> {store.msg_leccion}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>)}
                        <div className="container border">
                            <div className="row">
                            <form className="col border pt-4" onSubmit={e => actions.handle_registrar_nombre_leccion(e)}>
                            <div className="form-row">
                                <span htmlFor="nombre_usuario" className="form-label">
                                    Ingresa el nombre de la leccion
                                        </span>
                            </div>
                            <div className="form-row mt-4 justify-content-center">
                                <div className="col-8">

                                    <input
                                        type="nombre_leccion"
                                        id="nombre_leccion"
                                        name="nombre_leccion"
                                        className="form-control"
                                        placeholder="Ingresa el nombre de la lección"
                                        defaultValue={store.nombre_leccion}
                                        onChange={actions.handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-3">
                                    <button type="submit" className="btn btn-primary form-control mb-4">
                                        Registrar nombre
                                    </button>
                                </div>
                            </div>
                        </form>
                            </div>
                        <div className="row">
                        <form className="col p-4 m-4" onSubmit={id => actions.handle_imagenes_leccion(id)}>
                            <div className="input-group">
                                <div class="custom-file">
                                    <input 
                                    type="file" 
                                    name="imagen_leccion"
                                    className="custom-file-input" 
                                    id="imagen_leccion"
                                    onChange={actions.handle_files}
                                    required
                                    />
                                        <label className="custom-file-label" for="imagen_leccion">{store.imagen_leccion !== null ? store.imagen_leccion.name : "sube una imagen" }</label>
                                </div>
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button">Subir imagen</button>
                                </div>
                            </div>
                        </form>
                        </div>
                        
                        </div>
                        
                    </div>
                    <div className="tab-pane fade" id="nav-pregunta1" role="tabpanel" aria-labelledby="nav-pregunta1-tab">
                    <div className="container border">
                        { !!store.msg_pregunta && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Excelente!</strong> {store.msg_pregunta}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>)}
                            <form className="container border mt-4 " onSubmit={e => actions.handle_registrar_pregunta(e)}>
                                <div className="form-row">
                                    <span>Agregar pregunta 1</span>
                                </div>
                                    <div className="form-row mt-4 justify-content-center">
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-primary" type="button" onClick={() => actions.getLecciones()}>ID de la lección</button>
                                                </div>
                                                <input
                                                    type="id_nueva_leccion"
                                                    id="id_nueva_leccion"
                                                    name="id_nueva_leccion"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_leccion}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    required
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <label for="inputEmail4">Pregunta</label>
                                    </div>
                                    <div className="form-row justify-content-center">
                                    <div className="col-8">
                                    
                                        <input
                                            type="enunciado"
                                            id="enunciado"
                                            name="enunciado"
                                            className="form-control"
                                            placeholder="Ingresar pregunta 1"
                                            defaultValue={store.enunciado}
                                            onChange={actions.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-3">
                                    <button type="submit" className="btn btn-primary form-control mb-4">
                                        Registrar pregunta
                                    </button>
                                    </div>
                                </div>
                                </form>
                            <div className="container border mt-4 py-4">
                            { !!store.msg_respuestas && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Excelente!</strong> {store.msg_respuestas}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>)}
                                <div className="row m-2">
                                    <span>Agregar respuestas  </span>
                                </div>                               
                                <form onSubmit={e => actions.handle_registrar_respuestas(e)}>
                                <div className="form-group row mt-4">
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-primary" type="button" onClick={() => actions.getLecciones()}>ID de la pregunta</button>
                                                </div>
                                                <input
                                                    type="id_nueva_pregunta"
                                                    id="id_nueva_pregunta"
                                                    name="id_nueva_pregunta"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_pregunta}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    required/>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-group row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta A</label>
                                            <input
                                                type="respuesta_a"
                                                id="respuesta_a"
                                                name="respuesta_a"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="opcion_a" >Opcion</label>
                                            <select type="opcion_a" name="opcion_a" id="opcion_a" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_a">seleccionar</option>
                                                <option name="opcion_a">verdadero</option>
                                                <option name="opcion_a">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta B</label>
                                            <input
                                                type="respuesta_b"
                                                id="respuesta_b"
                                                name="respuesta_b"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputState">Opcion</label>
                                            <select type="opcion_b" name="opcion_b" id="opcion_b" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_b">seleccionar</option>
                                                <option name="opcion_b">verdadero</option>
                                                <option name="opcion_b">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta C</label>
                                            <input
                                                type="respuesta_c"
                                                id="respuesta_c"
                                                name="respuesta_c"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputState">Opcion</label>
                                            <select type="opcion_c" name="opcion_c" id="opcion_c" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_c">seleccionar</option>
                                                <option name="opcion_c">verdadero</option>
                                                <option name="opcion_c">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">Registrar respuestas</button>
                                </form>
                            </div>
                            </div>
                    </div>
                    <div className="tab-pane fade" id="nav-pregunta2" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div className="container border">
                    { !!store.msg_pregunta && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Excelente!</strong> {store.msg_pregunta}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>)}
                            <form className="container border mt-4 " onSubmit={e => actions.handle_registrar_pregunta(e)}>
                                <div className="form-row">
                                    <span>Agregar pregunta 2</span>
                                </div>
                                    <div className="form-row mt-4 justify-content-center">
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-primary" type="button" onClick={() => actions.getLecciones()}>ID de la lección</button>
                                                </div>
                                                <input
                                                    type="id_nueva_leccion"
                                                    id="id_nueva_leccion"
                                                    name="id_nueva_leccion"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_leccion}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    required
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <label for="inputEmail4">Pregunta</label>
                                    </div>
                                    <div className="form-row justify-content-center">
                                    <div className="col-8">
                                    
                                        <input
                                            type="enunciado"
                                            id="enunciado"
                                            name="enunciado"
                                            className="form-control"
                                            placeholder="Ingresar pregunta 1"
                                            defaultValue={store.enunciado}
                                            onChange={actions.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-3">
                                    <button type="submit" className="btn btn-primary form-control mb-4">
                                        Registrar pregunta
                                    </button>
                                    </div>
                                </div>
                                </form>
                            <div className="container border mt-4 py-4">
                            { !!store.msg_respuestas && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Excelente!</strong> {store.msg_respuestas}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>)}
                                <div className="row m-2">
                                    <span>Agregar respuestas  </span>
                                </div>                               
                                <form onSubmit={e => actions.handle_registrar_respuestas(e)}>
                                <div className="form-row mt-4">
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-primary" type="button" onClick={() => actions.getRespuestas()}>ID de la pregunta</button>
                                                </div>
                                                <input
                                                    type="id_nueva_pregunta"
                                                    id="id_nueva_pregunta"
                                                    name="id_nueva_pregunta"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_pregunta}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    aria-label=""
                                                    aria-describedby="basic-addon1" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta A</label>
                                            <input
                                                type="respuesta_a"
                                                id="respuesta_a"
                                                name="respuesta_a"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="opcion_a" >Opcion</label>
                                            <select type="opcion_a" name="opcion_a" id="opcion_a" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_a">seleccionar</option>
                                                <option name="opcion_a">verdadero</option>
                                                <option name="opcion_a">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta B</label>
                                            <input
                                                type="respuesta_b"
                                                id="respuesta_b"
                                                name="respuesta_b"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputState">Opcion</label>
                                            <select type="opcion_b" name="opcion_b" id="opcion_b" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_b">seleccionar</option>
                                                <option name="opcion_b">verdadero</option>
                                                <option name="opcion_b">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta C</label>
                                            <input
                                                type="respuesta_c"
                                                id="respuesta_c"
                                                name="respuesta_c"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputState">Opcion</label>
                                            <select type="opcion_c" name="opcion_c" id="opcion_c" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_c">seleccionar</option>
                                                <option name="opcion_c">verdadero</option>
                                                <option name="opcion_c">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">Registrar respuestas</button>
                                </form>
                            </div>
                            </div>
                    </div>
                    <div className="tab-pane fade" id="nav-pregunta3" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div className="container border">
                    { !!store.msg_pregunta && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Excelente!</strong> {store.msg_pregunta}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>)}
                            <form className="container border mt-4 " onSubmit={e => actions.handle_registrar_pregunta(e)}>
                                <div className="form-row">
                                    <span>Agregar pregunta 3</span>
                                </div>
                                    <div className="form-row mt-4 justify-content-center">
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-primary" type="button" onClick={() => actions.getLecciones()}>ID de la lección</button>
                                                </div>
                                                <input
                                                    type="id_nueva_leccion"
                                                    id="id_nueva_leccion"
                                                    name="id_nueva_leccion"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_leccion}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    required
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <label for="inputEmail4">Pregunta</label>
                                    </div>
                                    <div className="form-row justify-content-center">
                                    <div className="col-8">
                                    
                                        <input
                                            type="enunciado"
                                            id="enunciado"
                                            name="enunciado"
                                            className="form-control"
                                            placeholder="Ingresar pregunta 1"
                                            defaultValue={store.enunciado}
                                            onChange={actions.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-3">
                                    <button type="submit" className="btn btn-primary form-control mb-4">
                                        Registrar pregunta
                                    </button>
                                    </div>
                                </div>
                                </form>
                            <div className="container border mt-4 py-4">
                            { !!store.msg_respuestas && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Excelente!</strong> {store.msg_respuestas}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>)}
                                <div className="row m-2">
                                    <span>Agregar respuestas  </span>
                                </div>                               
                                <form onSubmit={e => actions.handle_registrar_respuestas(e)}>
                                <div className="form-row mt-4">
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-primary" type="button" onClick={() => actions.getRespuestas()}>ID de la pregunta</button>
                                                </div>
                                                <input
                                                    type="id_nueva_pregunta"
                                                    id="id_nueva_pregunta"
                                                    name="id_nueva_pregunta"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_pregunta}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    aria-label=""
                                                    aria-describedby="basic-addon1" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta A</label>
                                            <input
                                                type="respuesta_a"
                                                id="respuesta_a"
                                                name="respuesta_a"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="opcion_a" >Opcion</label>
                                            <select type="opcion_a" name="opcion_a" id="opcion_a" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_a">seleccionar</option>
                                                <option name="opcion_a">verdadero</option>
                                                <option name="opcion_a">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta B</label>
                                            <input
                                                type="respuesta_b"
                                                id="respuesta_b"
                                                name="respuesta_b"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputState">Opcion</label>
                                            <select type="opcion_b" name="opcion_b" id="opcion_b" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_b">seleccionar</option>
                                                <option name="opcion_b">verdadero</option>
                                                <option name="opcion_b">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta C</label>
                                            <input
                                                type="respuesta_c"
                                                id="respuesta_c"
                                                name="respuesta_c"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputState">Opcion</label>
                                            <select type="opcion_c" name="opcion_c" id="opcion_c" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_c">seleccionar</option>
                                                <option name="opcion_c">verdadero</option>
                                                <option name="opcion_c">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">Registrar respuestas</button>
                                </form>
                            </div>
                            </div>
                    </div>
                    <div className="tab-pane fade" id="nav-pregunta4" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div className="container border">
                    { !!store.msg_pregunta && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Excelente!</strong> {store.msg_pregunta}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>)}
                            <form className="container border mt-4 " onSubmit={e => actions.handle_registrar_pregunta(e)}>
                                <div className="form-row">
                                    <span>Agregar pregunta 4</span>
                                </div>
                                    <div className="form-row mt-4 justify-content-center">
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-primary" type="button" onClick={() => actions.getLecciones()}>ID de la lección</button>
                                                </div>
                                                <input
                                                    type="id_nueva_leccion"
                                                    id="id_nueva_leccion"
                                                    name="id_nueva_leccion"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_leccion}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    required
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <label for="inputEmail4">Pregunta</label>
                                    </div>
                                    <div className="form-row justify-content-center">
                                    <div className="col-8">
                                    
                                        <input
                                            type="enunciado"
                                            id="enunciado"
                                            name="enunciado"
                                            className="form-control"
                                            placeholder="Ingresar pregunta 1"
                                            defaultValue={store.enunciado}
                                            onChange={actions.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-3">
                                    <button type="submit" className="btn btn-primary form-control mb-4">
                                        Registrar pregunta
                                    </button>
                                    </div>
                                </div>
                                </form>
                            <div className="container border mt-4 py-4">
                            { !!store.msg_respuestas && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Excelente!</strong> {store.msg_respuestas}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>)}
                                <div className="row m-2">
                                    <span>Agregar respuestas  </span>
                                </div>                               
                                <form onSubmit={e => actions.handle_registrar_respuestas(e)}>
                                <div className="form-row mt-4">
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-primary" type="button" onClick={() => actions.getRespuestas()}>ID de la pregunta</button>
                                                </div>
                                                <input
                                                    type="id_nueva_pregunta"
                                                    id="id_nueva_pregunta"
                                                    name="id_nueva_pregunta"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_pregunta}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    aria-label=""
                                                    aria-describedby="basic-addon1" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta A</label>
                                            <input
                                                type="respuesta_a"
                                                id="respuesta_a"
                                                name="respuesta_a"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="opcion_a" >Opcion</label>
                                            <select type="opcion_a" name="opcion_a" id="opcion_a" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_a">seleccionar</option>
                                                <option name="opcion_a">verdadero</option>
                                                <option name="opcion_a">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta B</label>
                                            <input
                                                type="respuesta_b"
                                                id="respuesta_b"
                                                name="respuesta_b"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputState">Opcion</label>
                                            <select type="opcion_b" name="opcion_b" id="opcion_b" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_b">seleccionar</option>
                                                <option name="opcion_b">verdadero</option>
                                                <option name="opcion_b">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta C</label>
                                            <input
                                                type="respuesta_c"
                                                id="respuesta_c"
                                                name="respuesta_c"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputState">Opcion</label>
                                            <select type="opcion_c" name="opcion_c" id="opcion_c" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_c">seleccionar</option>
                                                <option name="opcion_c">verdadero</option>
                                                <option name="opcion_c">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">Registrar respuestas</button>
                                </form>
                            </div>
                            </div>
                    </div>
                    <div className="tab-pane fade" id="nav-pregunta5" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div className="container border">
                    { !!store.msg_pregunta && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Excelente!</strong> {store.msg_pregunta}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>)}
                            <form className="container border mt-4 " onSubmit={e => actions.handle_registrar_pregunta(e)}>
                                <div className="form-row">
                                    <span>Agregar pregunta 5</span>
                                </div>
                                    <div className="form-row mt-4 justify-content-center">
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-primary" type="button" onClick={() => actions.getLecciones()}>ID de la lección</button>
                                                </div>
                                                <input
                                                    type="id_nueva_leccion"
                                                    id="id_nueva_leccion"
                                                    name="id_nueva_leccion"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_leccion}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    required
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <label for="inputEmail4">Pregunta</label>
                                    </div>
                                    <div className="form-row justify-content-center">
                                    <div className="col-8">
                                    
                                        <input
                                            type="enunciado"
                                            id="enunciado"
                                            name="enunciado"
                                            className="form-control"
                                            placeholder="Ingresar pregunta 1"
                                            defaultValue={store.enunciado}
                                            onChange={actions.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-3">
                                    <button type="submit" className="btn btn-primary form-control mb-4">
                                        Registrar pregunta
                                    </button>
                                    </div>
                                </div>
                                </form>
                            <div className="container border mt-4 py-4">
                            { !!store.msg_respuestas && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Excelente!</strong> {store.msg_respuestas}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>)}
                                <div className="row m-2">
                                    <span>Agregar respuestas  </span>
                                </div>                               
                                <form onSubmit={e => actions.handle_registrar_respuestas(e)}>
                                <div className="form-row mt-4">
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-primary" type="button" onClick={() => actions.getRespuestas()}>ID de la pregunta</button>
                                                </div>
                                                <input
                                                    type="id_nueva_pregunta"
                                                    id="id_nueva_pregunta"
                                                    name="id_nueva_pregunta"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_pregunta}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    aria-label=""
                                                    aria-describedby="basic-addon1" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta A</label>
                                            <input
                                                type="respuesta_a"
                                                id="respuesta_a"
                                                name="respuesta_a"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="opcion_a" >Opcion</label>
                                            <select type="opcion_a" name="opcion_a" id="opcion_a" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_a">seleccionar</option>
                                                <option name="opcion_a">verdadero</option>
                                                <option name="opcion_a">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta B</label>
                                            <input
                                                type="respuesta_b"
                                                id="respuesta_b"
                                                name="respuesta_b"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputState">Opcion</label>
                                            <select type="opcion_b" name="opcion_b" id="opcion_b" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_b">seleccionar</option>
                                                <option name="opcion_b">verdadero</option>
                                                <option name="opcion_b">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label for="inputEmail4">Respuesta C</label>
                                            <input
                                                type="respuesta_c"
                                                id="respuesta_c"
                                                name="respuesta_c"
                                                className="form-control"
                                                placeholder="Ingresa la respuesta " 
                                                onChange={actions.handleChange}
                                                required
                                                />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputState">Opcion</label>
                                            <select type="opcion_c" name="opcion_c" id="opcion_c" className="form-control" onChange={actions.handleChange} defaultValue="seleccionar" required>
                                                <option name="opcion_c">seleccionar</option>
                                                <option name="opcion_c">verdadero</option>
                                                <option name="opcion_c">falso</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">Registrar respuestas</button>
                                </form>
                            </div>
                            </div>
                    </div>

                </div>
            </div>

        </>
    );
};
