import React from "react";

export class UserView extends React.Component<Props, State>{
    render(){
        return(
                <div>
                    {/* NavBar Hamburger */}
                    <div className="collapse " id="navbarToggleExternalContent">
                        <div className="bg-dark p-4 ">
                            <h5 className="text-white h4">Collapsed content</h5>
                            <span className="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                        </div>
                        <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid justify-content-end">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        </nav>
                        {/* NavBar Hamburger */}
                        
                        {/* Formularios */}
                        <ul className="list-group p-5 gap-1">
                                <li className="list-group-item d-flex  ">
                                    <input className="form-control m-auto" type="text" placeholder="Default input" aria-label="default input example"/>
                                    <input className="form-check-input m-5 " type="checkbox" value="" aria-label="..."/>
                                   
                                </li>
                                <li className="list-group-item d-flex  ">
                                    <input className="form-control m-auto" type="text" placeholder="Default input" aria-label="default input example"/>
                                    <input className="form-check-input m-5 " type="checkbox" value="" aria-label="..."/>
                                   
                                </li>
                                <li className="list-group-item d-flex  ">
                                    <input className="form-control m-auto" type="text" placeholder="Default input" aria-label="default input example"/>
                                    <input className="form-check-input m-5 " type="checkbox" value="" aria-label="..."/>
                                   
                                </li>
                                <li className="list-group-item d-flex  ">
                                    <input className="form-control m-auto" type="text" placeholder="Default input" aria-label="default input example"/>
                                    <input className="form-check-input m-5 " type="checkbox" value="" aria-label="..."/>
                                   
                                </li>
                               
                                </ul>
                                {/* Formularios */}
                 </div>
        )
    };
}