import React, { useContext } from "react";
import { Context } from "../../store/appContext";

export const crearCurso = (props) => {
    /* const { store, actions } = useContext(Context); */


    return (
      <>
        <div className="container">
        <form className="m-3">
        <div className="form-row">
        <h3>Crear Curso</h3>
        </div>
            <div className="form-row">
                
                <div className="form-group col">
                    <label for="inputEmail4">Nombre de la leccion</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="ingresa un nombre"/>
                </div>
            </div>
            <div className="form-row">
                
                <div className="form-group col-md-6">
                    <label for="inputEmail4">Pregunta</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="ingresa una pregunta"/>
                </div>
            </div>
            <div className="form-group">
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFileLang" lang="es"/>
                    <label class="custom-file-label" for="customFileLang">Seleccionar Archivo</label>
                </div>
            </div>
            <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
        </div>
      </>
    );
  };
  