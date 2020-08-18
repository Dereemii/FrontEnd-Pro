import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";

export const CrearCurso = (props) => {

    const { store, actions } = useContext(Context);

    return (
      <>
            <div className="container border pt-2 mt-5 justify-content-center">
                <div className="container mb-4">
                    
                            <div className="row justify-content-center mb-3">
                                <span>Crear curso</span>
                            </div>
                            <form className="container border pt-4" onSubmit={e => actions.handle_registrar_nombre_leccion(e)}>
                                <div className="form-row">
                                <span htmlFor="nombre_usuario" className="form-label">
                                            1. Ingresa el nombre de la leccion
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

                            <div className="container border">
                            <form className="container border mt-4 " onSubmit={e => actions.handle_registrar_pregunta(e)}>
                                <div className="form-row">
                                    <span>2. Agregar pregunta (1 de 5)</span>
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
                                <div className="row m-2">
                                    <span>3. Agregar respuestas  </span>
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
                                            <select type="opcion_a" name="opcion_a" id="opcion_a" className="form-control" onChange={actions.handleBoolean} defaultValue="seleccionar" required>
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
                                            <select type="opcion_b" name="opcion_b" id="opcion_b" className="form-control" onChange={actions.handleBoolean} defaultValue="seleccionar" required>
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
                                            <select type="opcion_c" name="opcion_c" id="opcion_c" className="form-control" onChange={actions.handleBoolean} defaultValue="seleccionar" required>
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
                            <div className="container border">
                            <form className="container border mt-4 " onSubmit={e => actions.handle_registrar_pregunta(e)}>
                                <div className="form-row">
                                    <span>4. Agregar pregunta (2 de 5)</span>
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
                                <div className="row m-2">
                                    <span>5. Agregar respuestas  </span>
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
                                            <select type="opcion_a" name="opcion_a" id="opcion_a" className="form-control" onChange={actions.handleBoolean} defaultValue="seleccionar" required>
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
                                            <select type="opcion_b" name="opcion_b" id="opcion_b" className="form-control" onChange={actions.handleBoolean} defaultValue="seleccionar" required>
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
                                            <select type="opcion_c" name="opcion_c" id="opcion_c" className="form-control" onChange={actions.handleBoolean} defaultValue="seleccionar" required>
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
                
                            <div className="container border">
                            <form className="container border mt-4 " onSubmit={e => actions.handle_registrar_pregunta(e)}>
                                <div className="form-row">
                                    <span>6. Agregar pregunta (3 de 5)</span>
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
                                <div className="row m-2">
                                    <span>7. Agregar respuestas  </span>
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
                                            <select type="opcion_a" name="opcion_a" id="opcion_a" className="form-control" onChange={actions.handleBoolean} defaultValue="seleccionar" required>
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
                                            <select type="opcion_b" name="opcion_b" id="opcion_b" className="form-control" onChange={actions.handleBoolean} defaultValue="seleccionar" required>
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
                                            <select type="opcion_c" name="opcion_c" id="opcion_c" className="form-control" onChange={actions.handleBoolean} defaultValue="seleccionar" required>
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
                
                            <div className="container border">
                            <form className="container border mt-4 " onSubmit={e => actions.handle_registrar_pregunta(e)}>
                                <div className="form-row">
                                    <span>8. Agregar pregunta (4 de 5)</span>
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
                                <div className="row m-2">
                                    <span>9. Agregar respuestas  </span>
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
                                            <select type="opcion_a" name="opcion_a" id="opcion_a" className="form-control" onChange={actions.handleBoolean} defaultValue="seleccionar" required>
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
                                            <select type="opcion_b" name="opcion_b" id="opcion_b" className="form-control" onChange={actions.handleBoolean} defaultValue="seleccionar" required>
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
                                            <select type="opcion_c" name="opcion_c" id="opcion_c" className="form-control" onChange={actions.handleBoolean} defaultValue="seleccionar" required>
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
      </>
    );
  };
  