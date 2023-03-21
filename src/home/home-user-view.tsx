import React from "react";
import { NewTask } from "./style";

export class UserView extends React.Component{
    render(){
        return(
                <div className="container-flex">
                    {/* NavBar Hamburger  */}
                    <div className="collapse " id="navbarToggleExternalContent">
                        <div className="bg-dark p-4 ">
                            <h5 className="text-white h4">Collapsed content</h5>
                            <span className="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                        </div>
                        <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid justify-content-end">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        </nav>
                        {/* NavBar Hamburger */}
                        {/* NavTabs */}
                        <div className="container mt-5" >
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                            </li>
                        </ul>
                            <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                            </div>
                            </div>
                             {/* NavTabs */}
                        {/* Formularios */}
                        {/* Adicionar Nova Tarefa */}
                                <NewTask>
                                 
                                     
                                 <form className="d-flex justify-content-center align-items-center">
                                     <div className="form-outline flex-fill">
                                        <input type="text" id="form2" className="form-control" />
                                        <label className="form-label" htmlFor="form2">New task...</label>
                                    </div>
                                    <div className="position-sticky  ">
                                        <button type="submit" id="buttonAdd" className="btn btn-info ">Add</button>
                                    </div>
                                </form>
                                
                                
                                </NewTask>



                        {/* Adicionar Nova Tarefa */}
                        
                        <div>
                        <ul className="list-group p-5 justify-content-between">
                                <li className="list-group-item d-flex flex-fill ">
                                    <input className="form-check-input m-3" type="checkbox" value="" aria-label="..."/>
                                    <input className="form-control " type="text" placeholder="Default input" aria-label="default input example"/>
                                    {/* Icones */}
                                    <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                    </svg>
                                    </button>
                                    <button>
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                    </svg>
                                    </button>
                                    {/* Icones */}
                                   
                                </li>
                              </ul>
                              </div>
                               
                 </div>
        )
    };
}