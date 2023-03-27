import React from "react";
import { IconsFolder } from "../../assets/icons";
import { Container, NavBar, ContainerTask, Button, Text, Tasks, TaskCount, LIST, NewTask } from "./style";



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
                               <div className="col-10">
                                <input type="novaTarefa" className="form-control flex-fill" id="novaTarefaInput" aria-describedby="novaTarefaHelp" placeholder="Nova tarefa..."/>
                                 </div>
                             <div className="col-auto">
                                     <Button type="submit" className="btn btn-primary mb-3" >Add</Button>
                                 </div>
                            </form>
                    </NewTask>
                <Tasks>
                <div className="card" style={{width:"57rem"}}>
                    <div className="card-header">
                        <h5>teste</h5>
                        </div>
                        <div className="card-body">
                        
                            
                            <div className="input-group-text">
                            
                                <input className="form-check-input " type="radio" value="" aria-label="Checkbox for following text input"/>

                                <input type="text" className="form-control mx-3" aria-label="Text input with checkbox"/>
                                <IconsFolder/> 
                        
                        </div>  
                       </div>    
                                    
                </div>
                
                
                </Tasks>               
            </div>
                
            </ContainerTask>

            </Container>
        )
    }
}