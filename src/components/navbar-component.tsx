import React from "react";
import { NavBar } from "../home/view/style";
import { profile } from "console";


interface Props {
  
    user?: UserModel | undefined; 
}

export default function NavBarComponent(){
    return(
         
         <NavBar className="navbar navbar-expand-lg  ">
         
              <div className="container-fluid">
             
                  <a className="navbar-brand text-white" href="#">Brand</a>
                      <div className="text-white">
                           <h1>TODOLIST</h1>
                       </div>

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
                             src={user !== undefined ? user.profileImageUrl : profile} 
                            //  apontar uma image invalida par ao : profile
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
    )
}