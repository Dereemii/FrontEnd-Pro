import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { useHistory, Link } from "react-router-dom";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
import ThemeMode from "../ThemeMode";

export const RegistrarCurso = (props) => {

    const { store, actions } = useContext(Context);
    const [nombre_leccion, setNombre_leccion] = useState("show active");
    const [nombre_active, setNombre_active] = useState("active");
    const [active1, setActive1] = useState("");
    const [active2, setActive2] = useState("");
    const [active3, setActive3] = useState("");
    const [active4, setActive4] = useState("");
    const [active5, setActive5] = useState("");
    const [pregunta1, setPregunta1] = useState("");
    const [pregunta2, setPregunta2] = useState("");
    const [pregunta3, setPregunta3] = useState("");
    const [pregunta4, setPregunta4] = useState("");
    const [pregunta5, setPregunta5] = useState("");
    const [aria_nombre, setAria_nombre] = useState("true")
    const [aria1, setAria1] = useState("");
    const [aria2, setAria2] = useState("");
    const [aria3, setAria3] = useState("");
    const [aria4, setAria4] = useState("");
    const [aria5, setAria5] = useState("");

    function seleccion_nombre() {
        setNombre_leccion("show active");
        setPregunta1("");
        setPregunta2("");
        setPregunta3("");
        setPregunta4("");
        setPregunta5("");
        setNombre_active("active");
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("");
        setAria_nombre("true")
        setAria1("false");
        setAria2("false");
        setAria3("false");
        setAria4("false");
        setAria5("false");

    };
    function seleccion_p1() {
        setNombre_leccion("");
        setPregunta1("show active");
        setPregunta2("");
        setPregunta3("");
        setPregunta4("");
        setPregunta5("");
        setActive1("active");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("");
        setAria1("true");
        setAria_nombre("false");
        setAria2("false");
        setAria3("false");
        setAria4("false");
        setAria5("false");
    };
    function seleccion_p2() {
        setNombre_leccion("");
        setPregunta1("");
        setPregunta2("show active");
        setPregunta3("");
        setPregunta4("");
        setPregunta5("");
        setActive1("");
        setActive2("active");
        setActive3("");
        setActive4("");
        setActive5("");
        setAria_nombre("false");
        setAria1("false");
        setAria2("true");
        setAria3("false");
        setAria4("false");
        setAria5("false");
    };
    function seleccion_p3() {
        setNombre_leccion("");
        setPregunta1("");
        setPregunta2("");
        setPregunta3("show active");
        setPregunta4("");
        setPregunta5("");
        setActive1("");
        setActive2("");
        setActive3("active");
        setActive4("");
        setActive5("");
        setAria_nombre("false");
        setAria1("false");
        setAria2("false");
        setAria3("true");
        setAria4("false");
        setAria5("false");
    };
    function seleccion_p4() {
        setNombre_leccion("");
        setPregunta1("");
        setPregunta2("");
        setPregunta3("");
        setPregunta4("show active");
        setPregunta5("");
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("active");
        setActive5("");
        setAria_nombre("false");
        setAria1("false");
        setAria2("false");
        setAria3("false");
        setAria4("true");
        setAria5("false");
    };
    function seleccion_p5() {
        setNombre_leccion("");
        setPregunta1("");
        setPregunta2("");
        setPregunta3("");
        setPregunta4("");
        setPregunta5("show active");
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("active");
        setAria_nombre("false");
        setAria1("false");
        setAria2("false");
        setAria3("false");
        setAria4("false");
        setAria5("true");
    };


    return (
        <>
            <Navbar />
            <div className="container ">

                <div className="row m-4 font-weight-bold tituloRegistrar">Registrar curso <span className="mx-5"><ThemeMode /></span> {/* Agrego para revisar */}</div>
                <nav className="navRegistrarCurso border-0">
                    {/*------------------------------------ AGREGO CLASE: itemNav--------------------------------------------------*/}
                    <div className="nav nav-tabs navRegistrarCurso border-0" id="nav-tab" role="tablist">
                        <a className={"nav-item nav-link " + nombre_active + " itemNav"} id="nav-nombre-tab" data-toggle="tab" href="#nav-nombre" role="tab" aria-controls="nav-nombre" aria-selected={aria_nombre} onClick={() => seleccion_nombre()}>Nombre, imagen</a>
                        <a className={"nav-item nav-link " + active1 + " itemNav"} id="nav-profile-tab" data-toggle="tab" href="#nav-pregunta1" role="tab" aria-controls="nav-pregunta1" aria-selected={aria1} onClick={() => seleccion_p1()}>Pregunta 1</a>
                        <a className={"nav-item nav-link " + active2 + " itemNav"} id="nav-contact-tab" data-toggle="tab" href="#nav-pregunta2" role="tab" aria-controls="nav-pregunta2" aria-selected={aria2} onClick={() => seleccion_p2()}>Pregunta 2</a>
                        <a className={"nav-item nav-link " + active3 + " itemNav"} id="nav-contact-tab" data-toggle="tab" href="#nav-pregunta3" role="tab" aria-controls="nav-pregunta3" aria-selected={aria3} onClick={() => seleccion_p3()}>Pregunta 3</a>
                        <a className={"nav-item nav-link " + active4 + " itemNav"} id="nav-contact-tab" data-toggle="tab" href="#nav-pregunta4" role="tab" aria-controls="nav-pregunta4" aria-selected={aria4} onClick={() => seleccion_p4()}>Pregunta 4</a>
                        <a className={"nav-item nav-link " + active5 + " itemNav"} id="nav-contact-tab" data-toggle="tab" href="#nav-pregunta5" role="tab" aria-controls="nav-pregunta5" aria-selected={aria5} onClick={() => seleccion_p5()}>Pregunta 5</a>
                    </div>
                </nav>

                {/* ------------------------------- SECCION PAGINA 1 - INGRESA EL NOMBRE DE LA LECCIÓN E IMAGEN------------------- */}

                <div className="tab-content" id="nav-tabContent">
                    <div className={"tab-pane fade " + nombre_leccion} id="nav-nombre" role="tabpanel" aria-labelledby="nav-nombre-tab">
                        {!!store.msg_leccion && (
                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Excelente!</strong> {store.msg_leccion}
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>)}
                        <div className="container border-0">
                            <div className="row justify-content-center">
                                <form className="col-6 tarjeta-contactos m-4 border-0" onSubmit={e => actions.handle_registrar_nombre_leccion(e)}>
                                    <div className="tarjeta-cuerpo my-3">
                                        <h4 className="titulo text-center">Ingresa el nombre de la leccion</h4> 
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
                                            <button type="submit" className="btn button1  mb-4">
                                                Registrar nombre
                                    </button>
                                        </div>
                                    </div>
                                </form>
                                <form className="col-6 tarjeta-contactos m-4 border-0">
                                    <div className="tarjeta-cuerpo my-3">
                                        <h4 className="titulo text-center">Agregar imagen </h4>
                                    </div>
                                    <div className="row justify-content-center m-4">
                                        <div className="col-7 mt-4">
                                            <label className="custom-file-label sm" htmlFor="validatedCustomFile">"Selecciona una imagen"</label>
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="avatar"
                                                name="avatar"
                                                onChange={actions.handle_files}
                                                required
                                            />
                                        </div>
                                        <div className="col-4">
                                        <button type="submit" className="btn button1 form-control my-4">
                                            Agregar imagen
                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-6 tarjeta-contactos">
                                        <div className="row justify-content-center m-4 border-0">
                                            <div className="col-4">
                                                <button className="btn button4 btn-block" id="nombre_leccion">
                                                    Salir
                                            </button>
                                            </div>
                                            <div className="col-4">
                                                <button className="btn btn-success btn-block" id="nombre_leccion" onClick={() => seleccion_p1()}>
                                                    Continuar
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={"tab-pane fade " + pregunta1} id="nav-pregunta1" role="tabpanel" aria-labelledby="nav-pregunta1-tab">
                        <div className="container border-0">
                            {!!store.msg_pregunta && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>Excelente!</strong> {store.msg_pregunta}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>)}
                        <div className="container border-0">
                            <div className="row justify-content-center">
                            <form className="col-6 tarjeta-contactos m-4 border-0" onSubmit={e => actions.handle_registrar_pregunta(e)}>
                                        <div className="tarjeta-cuerpo my-3">
                                            <h4 className="titulo text-center">Agregar Pregunta </h4>
                                        </div>
                                <div className="form-row mt-4 justify-content-center">
                                    <div className="col-2">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <button className="btn button-outline" type="button" onClick={() => actions.getLecciones()}>ID lección</button>
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
                                <div className="form-row mx-4">
                                    <div className="tarjeta-cuerpo mx-4">
                                        <h4 className="titulo">Pregunta 1 </h4>
                                    </div>
                                </div>
                                
                                <div className="form-row justify-content-center mx-4">
                                    <div className="col">

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
                                        <button type="submit" className="btn button1 mb-4">
                                            Registrar pregunta
                                    </button>
                                    </div>
                                </div>
                            </form>
                            <form className="col-6 tarjeta-contactos m-2 border-0">
                                    <div className="tarjeta-cuerpo my-3">
                                        <h4 className="titulo text-center">Agregar imagen de la pregunta</h4>
                                    </div>
                                    <div className="row justify-content-center m-4">
                                        <div className="col-7 mt-4">
                                            <label className="custom-file-label sm" htmlFor="validatedCustomFile">"Selecciona una imagen"</label>
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="avatar"
                                                name="avatar"
                                                onChange={actions.handle_files}
                                                required
                                            />
                                        </div>
                                        <div className="col-4">
                                        <button type="submit" className="btn button1 form-control my-4">
                                            Agregar imagen
                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="container border-0">
                        {!!store.msg_respuestas && (
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Excelente!</strong> {store.msg_respuestas}
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>)}
                            <div className="row justify-content-center">
                                <form className="col-6 tarjeta-contactos m-2 border-0" onSubmit={e => actions.handle_registrar_respuestas(e)}>
                                    <div className="tarjeta-cuerpo my-3">
                                        <h4 className="titulo text-center">Agregar respuestas </h4>
                                    </div>
                                    <div className="form-row mt-4 justify-content-center">
                                        <div className="col-3">
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <button className="btn button-outline" type="button" onClick={() => actions.getLecciones()}>ID pregunta</button>
                                                </div>
                                                <input
                                                    type="id_nueva_pregunta"
                                                    id="id_nueva_pregunta"
                                                    name="id_nueva_pregunta"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_pregunta}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    required />
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
                                    <div className="container">
                                        <div className="row">
                                            <button type="submit" className="btn button5 mt-3">Registrar respuestas</button>
                                        </div>
                                        <div className="row justify-content-center m-4">
                                            <div className="col-3">
                                                <button className="btn button3 btn-block" id="nombre_leccion" onClick={() => seleccion_nombre()}>
                                                    Anterior
                                            </button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-success btn-block" id="nombre_leccion" onClick={() => seleccion_p2()}>
                                                    Continuar
                                            </button>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                            
                            {/*----------------------- SECCION AGREGAR RESPUESTAS PREGUNTA 1 -------------------------------------*/}


                        </div>

                    </div>
                    <div className={"tab-pane fade " + pregunta2} id="nav-pregunta2" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div className="container border-0">
                            {!!store.msg_pregunta && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>Excelente!</strong> {store.msg_pregunta}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>)}
                        <div className="container border-0">
                            <div className="row justify-content-center">
                            <form className="col-6 tarjeta-contactos m-4 border-0" onSubmit={e => actions.handle_registrar_pregunta(e)}>
                                        <div className="tarjeta-cuerpo my-3">
                                            <h4 className="titulo text-center">Agregar Pregunta </h4>
                                        </div>
                                <div className="form-row mt-4 justify-content-center">
                                    <div className="col-2">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <button className="btn button-outline" type="button" onClick={() => actions.getLecciones()}>ID lección</button>
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
                                <div className="form-row mx-4">
                                    <div className="tarjeta-cuerpo mx-4">
                                        <h4 className="titulo">Pregunta 2 </h4>
                                    </div>
                                </div>
                                
                                <div className="form-row justify-content-center mx-4">
                                    <div className="col">

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
                                        <button type="submit" className="btn button1 mb-4">
                                            Registrar pregunta
                                    </button>
                                    </div>
                                </div>
                            </form>
                            <form className="col-6 tarjeta-contactos m-2 border-0">
                                    <div className="tarjeta-cuerpo my-3">
                                        <h4 className="titulo text-center">Agregar imagen de la pregunta</h4>
                                    </div>
                                    <div className="row justify-content-center m-4">
                                        <div className="col-7 mt-4">
                                            <label className="custom-file-label sm" htmlFor="validatedCustomFile">"Selecciona una imagen"</label>
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="avatar"
                                                name="avatar"
                                                onChange={actions.handle_files}
                                                required
                                            />
                                        </div>
                                        <div className="col-4">
                                        <button type="submit" className="btn button1 form-control my-4">
                                            Agregar imagen
                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="container border-0">
                        {!!store.msg_respuestas && (
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Excelente!</strong> {store.msg_respuestas}
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>)}
                            <div className="row justify-content-center">
                                <form className="col-6 tarjeta-contactos m-2 border-0" onSubmit={e => actions.handle_registrar_respuestas(e)}>
                                    <div className="tarjeta-cuerpo my-3">
                                        <h4 className="titulo text-center">Agregar respuestas </h4>
                                    </div>
                                    <div className="form-row mt-4 justify-content-center">
                                        <div className="col-3">
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <button className="btn button-outline" type="button" onClick={() => actions.getLecciones()}>ID pregunta</button>
                                                </div>
                                                <input
                                                    type="id_nueva_pregunta"
                                                    id="id_nueva_pregunta"
                                                    name="id_nueva_pregunta"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_pregunta}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    required />
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
                                    <div className="container">
                                        <div className="row">
                                            <button type="submit" className="btn button5 mt-3">Registrar respuestas</button>
                                        </div>
                                        <div className="row justify-content-center m-4">
                                            <div className="col-3">
                                                <button className="btn button3 btn-block" id="nombre_leccion" onClick={() => seleccion_p1()}>
                                                    Anterior
                                            </button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-success btn-block" id="nombre_leccion" onClick={() => seleccion_p3()}>
                                                    Continuar
                                            </button>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className={"tab-pane fade " + pregunta3} id="nav-pregunta3" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div className="container border-0">
                            {!!store.msg_pregunta && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>Excelente!</strong> {store.msg_pregunta}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>)}
                        <div className="container border-0">
                            <div className="row justify-content-center">
                            <form className="col-6 tarjeta-contactos m-4 border-0" onSubmit={e => actions.handle_registrar_pregunta(e)}>
                                        <div className="tarjeta-cuerpo my-3">
                                            <h4 className="titulo text-center">Agregar Pregunta </h4>
                                        </div>
                                <div className="form-row mt-4 justify-content-center">
                                    <div className="col-2">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <button className="btn button-outline" type="button" onClick={() => actions.getLecciones()}>ID lección</button>
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
                                <div className="form-row mx-4">
                                    <div className="tarjeta-cuerpo mx-4">
                                        <h4 className="titulo">Pregunta 3 </h4>
                                    </div>
                                </div>
                                
                                <div className="form-row justify-content-center mx-4">
                                    <div className="col">

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
                                        <button type="submit" className="btn button1 mb-4">
                                            Registrar pregunta
                                    </button>
                                    </div>
                                </div>
                            </form>
                            <form className="col-6 tarjeta-contactos m-2 border-0">
                                    <div className="tarjeta-cuerpo my-3">
                                        <h4 className="titulo text-center">Agregar imagen de la pregunta</h4>
                                    </div>
                                    <div className="row justify-content-center m-4">
                                        <div className="col-7 mt-4">
                                            <label className="custom-file-label sm" htmlFor="validatedCustomFile">"Selecciona una imagen"</label>
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="avatar"
                                                name="avatar"
                                                onChange={actions.handle_files}
                                                required
                                            />
                                        </div>
                                        <div className="col-4">
                                        <button type="submit" className="btn button1 form-control my-4">
                                            Agregar imagen
                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="container border-0">
                        {!!store.msg_respuestas && (
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Excelente!</strong> {store.msg_respuestas}
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>)}
                            <div className="row justify-content-center">
                                <form className="col-6 tarjeta-contactos m-2 border-0" onSubmit={e => actions.handle_registrar_respuestas(e)}>
                                    <div className="tarjeta-cuerpo my-3">
                                        <h4 className="titulo text-center">Agregar respuestas </h4>
                                    </div>
                                    <div className="form-row mt-4 justify-content-center">
                                        <div className="col-3">
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <button className="btn button-outline" type="button" onClick={() => actions.getLecciones()}>ID pregunta</button>
                                                </div>
                                                <input
                                                    type="id_nueva_pregunta"
                                                    id="id_nueva_pregunta"
                                                    name="id_nueva_pregunta"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_pregunta}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    required />
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
                                    <div className="container">
                                        <div className="row">
                                            <button type="submit" className="btn button5 mt-3">Registrar respuestas</button>
                                        </div>
                                        <div className="row justify-content-center m-4">
                                            <div className="col-3">
                                                <button className="btn button3 btn-block" id="nombre_leccion" onClick={() => seleccion_p2()}>
                                                    Anterior
                                            </button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-success btn-block" id="nombre_leccion" onClick={() => seleccion_p4()}>
                                                    Continuar
                                            </button>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                         </div>
                    <div className={"tab-pane fade " + pregunta4} id="nav-pregunta4" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div className="container border-0">
                            {!!store.msg_pregunta && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>Excelente!</strong> {store.msg_pregunta}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>)}
                        <div className="container border-0">
                            <div className="row justify-content-center">
                            <form className="col-6 tarjeta-contactos m-4 border-0" onSubmit={e => actions.handle_registrar_pregunta(e)}>
                                        <div className="tarjeta-cuerpo my-3">
                                            <h4 className="titulo text-center">Agregar Pregunta </h4>
                                        </div>
                                <div className="form-row mt-4 justify-content-center">
                                    <div className="col-2">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <button className="btn button-outline" type="button" onClick={() => actions.getLecciones()}>ID lección</button>
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
                                <div className="form-row mx-4">
                                    <div className="tarjeta-cuerpo mx-4">
                                        <h4 className="titulo">Pregunta 4 </h4>
                                    </div>
                                </div>
                                
                                <div className="form-row justify-content-center mx-4">
                                    <div className="col">

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
                                        <button type="submit" className="btn button1 mb-4">
                                            Registrar pregunta
                                    </button>
                                    </div>
                                </div>
                            </form>
                            <form className="col-6 tarjeta-contactos m-2 border-0">
                                    <div className="tarjeta-cuerpo my-3">
                                        <h4 className="titulo text-center">Agregar imagen de la pregunta</h4>
                                    </div>
                                    <div className="row justify-content-center m-4">
                                        <div className="col-7 mt-4">
                                            <label className="custom-file-label sm" htmlFor="validatedCustomFile">"Selecciona una imagen"</label>
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="avatar"
                                                name="avatar"
                                                onChange={actions.handle_files}
                                                required
                                            />
                                        </div>
                                        <div className="col-4">
                                        <button type="submit" className="btn button1 form-control my-4">
                                            Agregar imagen
                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="container border-0">
                        {!!store.msg_respuestas && (
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Excelente!</strong> {store.msg_respuestas}
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>)}
                            <div className="row justify-content-center">
                                <form className="col-6 tarjeta-contactos m-2 border-0" onSubmit={e => actions.handle_registrar_respuestas(e)}>
                                    <div className="tarjeta-cuerpo my-3">
                                        <h4 className="titulo text-center">Agregar respuestas </h4>
                                    </div>
                                    <div className="form-row mt-4 justify-content-center">
                                        <div className="col-3">
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <button className="btn button-outline" type="button" onClick={() => actions.getLecciones()}>ID pregunta</button>
                                                </div>
                                                <input
                                                    type="id_nueva_pregunta"
                                                    id="id_nueva_pregunta"
                                                    name="id_nueva_pregunta"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_pregunta}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    required />
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
                                    <div className="container">
                                        <div className="row">
                                            <button type="submit" className="btn button5 mt-3">Registrar respuestas</button>
                                        </div>
                                        <div className="row justify-content-center m-4">
                                            <div className="col-3">
                                                <button className="btn button3 btn-block" id="nombre_leccion" onClick={() => seleccion_p3()}>
                                                    Anterior
                                            </button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-success btn-block" id="nombre_leccion" onClick={() => seleccion_p5()}>
                                                    Continuar
                                            </button>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className={"tab-pane fade " + pregunta5} id="nav-pregunta5" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div className="container border-0">
                            {!!store.msg_pregunta && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>Excelente!</strong> {store.msg_pregunta}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>)}
                        <div className="container border-0">
                            <div className="row justify-content-center">
                            <form className="col-6 tarjeta-contactos m-4 border-0" onSubmit={e => actions.handle_registrar_pregunta(e)}>
                                        <div className="tarjeta-cuerpo my-3">
                                            <h4 className="titulo text-center">Agregar Pregunta </h4>
                                        </div>
                                <div className="form-row mt-4 justify-content-center">
                                    <div className="col-2">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <button className="btn button-outline" type="button" onClick={() => actions.getLecciones()}>ID lección</button>
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
                                <div className="form-row mx-4">
                                    <div className="tarjeta-cuerpo mx-4">
                                        <h4 className="titulo">Pregunta 5</h4>
                                    </div>
                                </div>
                                
                                <div className="form-row justify-content-center mx-4">
                                    <div className="col">

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
                                        <button type="submit" className="btn button1 mb-4">
                                            Registrar pregunta
                                    </button>
                                    </div>
                                </div>
                            </form>
                            <form className="col-6 tarjeta-contactos m-2 border-0">
                                    <div className="tarjeta-cuerpo my-3">
                                        <h4 className="titulo text-center">Agregar imagen de la pregunta</h4>
                                    </div>
                                    <div className="row justify-content-center m-4">
                                        <div className="col-7 mt-4">
                                            <label className="custom-file-label sm" htmlFor="validatedCustomFile">"Selecciona una imagen"</label>
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="avatar"
                                                name="avatar"
                                                onChange={actions.handle_files}
                                                required
                                            />
                                        </div>
                                        <div className="col-4">
                                        <button type="submit" className="btn button1 form-control my-4">
                                            Agregar imagen
                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="container border-0">
                        {!!store.msg_respuestas && (
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Excelente!</strong> {store.msg_respuestas}
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>)}
                            <div className="row justify-content-center">
                                <form className="col-6 tarjeta-contactos m-2 border-0" onSubmit={e => actions.handle_registrar_respuestas(e)}>
                                    <div className="tarjeta-cuerpo my-3">
                                        <h4 className="titulo text-center">Agregar respuestas </h4>
                                    </div>
                                    <div className="form-row mt-4 justify-content-center">
                                        <div className="col-3">
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <button className="btn button-outline" type="button" onClick={() => actions.getLecciones()}>ID pregunta</button>
                                                </div>
                                                <input
                                                    type="id_nueva_pregunta"
                                                    id="id_nueva_pregunta"
                                                    name="id_nueva_pregunta"
                                                    className="form-control"
                                                    defaultValue={store.id_nueva_pregunta}
                                                    onChange={actions.handleChange}
                                                    placeholder="ID"
                                                    required />
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
                                    <div className="container">
                                        <div className="row">
                                            <button type="submit" className="btn button5 mt-3">Registrar respuestas</button>
                                        </div>
                                        <div className="row justify-content-center m-4">
                                            <div className="col-3">
                                                <button className="btn button3 btn-block" id="nombre_leccion" onClick={() => seleccion_p4()}>
                                                    Anterior
                                            </button>
                                            </div>
                                            <div className="col-3">
                                                <Link className="btn btn-success btn-block" id="nombre_leccion" to="/administrador">
                                                    Terminar
                                            </Link>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
