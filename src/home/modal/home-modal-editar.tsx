import React from "react";

export default function ModalEditar() {
    return (

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="false">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title fs-5" id="staticBackdropLabel">Editar Tarefa</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <input type="editTask" className="form-control"/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn  text-black" style={{background: "#e6e2d7" }} data-bs-dismiss="modal">Cancelar</button>
        <button type="button" className="btn btn-secondary" style={{background: "#3c345c" }}>Salvar</button>
      </div>
    </div>
  </div>
</div>
)}
