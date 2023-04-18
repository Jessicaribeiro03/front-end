
import React from "react";

import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";
import { HomeView } from "../view/home-user-view";
import { TaskEntity, User } from "../../task/entities/taskEntity";
import CreateTaskService from "../../task/models/services/create-task-service";
import getTasksService from "../../task/models/services/get-task-service";
import { DeleteTaskService } from "../../task/models/services/delete-task-service";



interface State {
  tasks: TaskEntity[];
  task: string;
  userId: number;


}

interface Props {

}

export default class HomeController extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props);
    this.state = { tasks: [], task: '', userId: 0 };

  }
  handleChange = (event) => {
    console.log(this.state);
    this.setState({ [event.target.name]: event.target.value } as Pick<State, keyof State>);
  }

  componentDidMount(): void {
    const user = getUserFromCookies();
    this.setState({ userId: user.id });
    this.getTasks(user.id);

  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { tasks, task, userId } = this.state;
    const date = Date.now();

    var newTask = new TaskEntity();

    newTask.status = false;
    newTask.creationDate = date;
    newTask.description = task;

    var user = new User();
    user.id = userId;
    newTask.user = user;
    const createdTask = await CreateTaskService(newTask);
    tasks.push(createdTask);
    this.setState({ tasks: tasks, task: '' });
  }

  async getTasks(userId: number): Promise<void> {
    const tasks = await getTasksService(userId);
    console.log('Tarefas', tasks);
    this.setState({ tasks: tasks });
  }


  handleDeleteTask = async(taskId) =>{
    const deleteResult = await DeleteTaskService (taskId);
    this.getTasks({userId: user.id});
    this.getTasks(user.id);

    if(deleteResult === 200){
      this.getTasks();
    }else {
      alert('Ocorreu um erro ao excluir a tarefa');
    }

    
  }

 


  render() {


    return (
      <HomeView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        user={getUserFromCookies()}
        tasks={this.state.tasks}

      />

    )
  }
}



