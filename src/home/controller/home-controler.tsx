
import React from "react";

import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";

interface Props {
  userId: number;
}
interface State {
  tasks: TaskEntity[];
  task: string;
}


export default function HomeController extends React.Component(props: Props){

  constructor (props: Props) {
    super(props);
    this.state = { task: [], task: "" };
  
  }
  handleChange = (event) => {
    console.log(this.state);
    this.setState({[event.target.name]: event.target.value} as Pick <State, keyof State>);
  }



  return (
    <HomeView user={getUserFromCookies()} />

  )
}



