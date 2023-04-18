import { Paper } from "@mui/material";
import React from "react";
import { IconsFolder } from "../../assets/icons";
import NavBarComponent from "../../components/navbar-component";
import UserModel from "../../profile/model/user-model";
import { Container, ContainerTask, Button, Tasks, NewTask, ButtonIcon } from "./style";
import { TaskEntity } from "../../task/entities/taskEntity";


interface Props {
    user?: UserModel | undefined;
    handleChange: any;
    handleSubmit: any;
    tasks: TaskEntity[];
}

interface State {
    task: string;
}


export class HomeView extends React.Component<Props>{

    render() {
        const { tasks } = this.props;
        return (
            <Container>
                <NavBarComponent user={this.props.user} />
                <ContainerTask>
                    <Paper sx={{ width: 950, height: 600 }} style={{
                        margin: 10,

                    }}>
                        <NewTask>
                            <div>
                                <form className="row g-3 my-5" onSubmit={this.props.handleSubmit}>

                                    <div className="col-10 ">
                                        <input name="task" id="task" onChange={this.props.handleChange} placeholder="Nova tarefa..." />
                                    </div>
                                    <div className="col-2">
                                        <Button type="submit" className="btn" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi bi-plus-square-fill" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>

                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </NewTask>
                        <Tasks>
                            <div className="card" style={{ width: "57rem" }}>
                                <div className="card-header">
                                    <h5>Minhas Tarefas</h5>
                                </div>
                                <div className="card-body">
                                    {
                                        tasks.map((task) => {
                                            return (
                                                <div className="input-group-text">
                                                    <input className="form-check-input " type="checkbox" value="" aria-label="Checkbox for following text input" />
                                                    <span className="form-control mx-3">{task.description}</span>
                                                    <IconsFolder />
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </Tasks>
                    </Paper>

                </ContainerTask>

            </Container>
        )
    }


   // private handleDeleteConfirmDialog = () => {
       // this.props.handleDeleteTask(this.state.taskToWork.id)
        //this.setState({dialogUpdateOpen: false, taskToWork});

    }

    
}