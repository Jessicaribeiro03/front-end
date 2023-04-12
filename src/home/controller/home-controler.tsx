
import React from "react";

import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";
import { HomeView } from "../view/home-user-view";
import { TaskEntity } from "../../task/entities/taskEntity";
import CreateTaskService from "../../task/models/services/create-task-service";



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

  componentDidMout(): void {
    const user = getUserFromCookies();
    this.setState({ userId: user.id })

  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { tasks, task, userId } = this.state;
    const date = Date.now();

    var newTask = new TaskEntity();

    newTask.status = false;
    newTask.creationDate = date;
    newTask.description = task;
    newTask.userId = userId;

    const createdTask = await CreateTaskService(newTask);
    tasks.push(createdTask);
    this.setState({ tasks: tasks, task: '' })




  }


  render() {


    return (
      <HomeView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        user={getUserFromCookies()} />

    )
  }
}



