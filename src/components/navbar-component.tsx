import React from "react";
import { NavBar } from "../home/view/style";
import UserModel from "../profile/model/user-model";
import profile1 from "../assets/profile1.jpg";





interface Props {

    user?: UserModel | undefined;
}

export default class NavBarComponent extends React.Component<Props> {
    render() {
        return (

            <NavBar className="navbar navbar-expand-lg  ">

                <div className="container-fluid">

                    <a className="navbar-brand text-white" href="https://ibb.co/R6mgmsr">
                        <img src="https://i.ibb.co/R6mgmsr/Daily-Tasks.jpg" alt="Daily-Tasks" />
                    </a>

                    <div className="text-white">
                        <h2>Daily Tasks</h2>
                    </div>

                    <ul className="navbar-nav d-flex flex-row me-1 text-white">


                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle d-flex align-items-center text-white"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src={this.props.user !== undefined ? this.props.user.profileImageUrl : profile1}
                                    

                                    //  apontar uma image invalida par ao : profile
                                    className="rounded-circle"
                                    height="50"
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
        )
    }

}