import React from "react";
import { IconsFolder } from "../../assets/icons";
import NavBarComponent from "../../components/navbar-component";
import { Container,  ContainerTask, Button, Text, Tasks, TaskCount, LIST, NewTask } from "./style";





export class HomeView extends React.Component{
    
    
    render(){
        return(
            <Container>
                   <NavBarComponent/>
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
                                <IconsFolder />
                                
                                                        
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