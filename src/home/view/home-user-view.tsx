import React from "react";
import { Container, NavBar, ContainerTask, Button, Text, Tasks, TaskCount, LIST, NewTask, Icons  } from "./style";



export class UserView extends React.Component{
    render(){
        return(
            <Container>
                    {/* <!-- Navbar --> */}
                     <NavBar className="navbar navbar-expand-lg  ">
                    {/* <!-- Container wrapper --> */}
                    <div className="container-fluid">
                        {/* <!-- Navbar brand --> */}
                        <a className="navbar-brand text-white" href="#">Brand</a>
                            <div className="text-white">
                            <h1>TODOLIST</h1>
                            </div>

                        {/* <!-- Icons --> */}
                        <ul className="navbar-nav d-flex flex-row me-1 text-white">
                            
            
                        <li className="nav-item dropdown">
                        <a
                        className="nav-link dropdown-toggle d-flex align-items-center"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                            className="rounded-circle"
                            height="45"
                            alt="Avatar"
                            loading="lazy"
                        />
                        </a>
                        <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdownMenuLink">
                        <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link text-white" href="#"><i className="fas fa-envelope mx-1"></i> Contact</a>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link text-white" href="#"><i className="fas fa-cog mx-1"></i> Settings</a>
                            </li>
                        </ul>
                    </li>
                    </ul>
                </div>
                </NavBar>
        
    

    {/* <!-- Container wrapper --> */}

{/* <!-- Navbar --> */}

            <ContainerTask>
            <div>
                <NewTask>
                        <form className="row g-3 my-5">
                             <div className="col-auto">

                            </div>
                               <div className="col-auto">
                            
                                <input type="novaTarefa" className="form-control flex-fill" id="novaTarefaInput" aria-describedby="novaTarefaHelp" placeholder="Nova Tarefa"/>
                                 </div>
                             <div className="col-auto">
                                     <Button type="submit" className="btn btn-primary mb-3" >Add</Button>
                                 </div>
                            </form>
                    </NewTask>

                <Tasks>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        First checkbox
                        <Icons>
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            </svg>
                            </button>
                            <button >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                            </svg>
                        </button>
                        </Icons>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        Second checkbox
                    </li>
                    </ul>
                <TaskCount>
                   
                </TaskCount>
                <TaskCount>
                    
                </TaskCount>
                </Tasks>
                <div>
                <ul>
                   </ul>
                </div>
            </div>
                
            </ContainerTask>

            </Container>
        )
    }
}