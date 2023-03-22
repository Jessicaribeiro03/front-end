import React from "react";

export class UserView extends React.Component{
    render(){
        return(
                <div className="container-flex">
                    {/* NavBar Hamburger  */}
                    <div className="collapse " id="navbarToggleExternalContent">
                        <div className="bg-dark p-4 ">
                            <h5 className="text-white h4">Perfil</h5>
                            <span className="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                        </div>
                        <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid justify-content-start">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        </nav>
                        {/* NavBar Hamburger */}
                        {/* Adicionar Nova Tarefa */}
                           
                                 
                                    
                                <form className="d-flex justify-content-center align-items-center mx-5 my-5">
                                     <div className="form-outline flex-fill">
                                     <input className="form-control " type="text" placeholder="Nova Tarefa... " aria-label="default input example"/>
                                    </div>
                                    <div className="d-grid gap-2 col-1 mx-auto">
                                        <button  className="btn btn-info btn-md mx-2 ">Add</button>
                                    </div>
                                    </form>
                                
                                
                          


                        {/* Adicionar Nova Tarefa */}

                        <div className="container">
                            <div className="row">
                                
                                    <div className="card d-flex flex-fill">
                                        <div className="card-header">
                                        <ul className="nav nav-tabs card-header-tabs my-2" id="listaTarefa" role="tablist">
                                                <li className="nav-item">
                                                <a className="nav-link active" href="#description" role="tab" aria-controls="description" aria-selected="true">Todas as tarefas</a>
                                                </li>
                                                <li className="nav-item">
                                                <a className="nav-link"  href="#history" role="tab" aria-controls="history" aria-selected="false">Não concluídas</a>
                                                </li>
                                                <li className="nav-item">
                                                <a className="nav-link" href="#deals" role="tab" aria-controls="deals" aria-selected="false">Concluídas</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="ex1-content">
                                            <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
                                                aria-labelledby="ex1-tab-1">
                                                <ul className="list-group mb-0">
                                                <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded">
                                                    <input className="form-check-input me-2" type="checkbox" value=""  />
                                                    <span>Ir ao mercado</span>
                                                </li>
                                                <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded">
                                                    <input className="form-check-input me-2" type="checkbox" value=""  />
                                                   <span>Arrumar a casa</span>
                                                </li>
                                                <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded">
                                                    <input className="form-check-input me-2" type="checkbox" value="" />
                                                    <span>Passear com o cachorro</span>
                                                </li>
                                                </ul>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            
                            
                 </div>
        )
    };
}