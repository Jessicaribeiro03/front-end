
import React from "react";

import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";
import TaskEntity from "../../task/taskEntity";
import { HomeView } from "../view/home-user-view";



interface State {
  tasks: TaskEntity[];
  task: string;
  userId: number;
}


export default class HomeController extends React.Component< State>{

  constructor(props) {
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


  render() {


    return (
      <HomeView handleChange={this.handleChange}
        user={getUserFromCookies()} />

    )
  }
}



