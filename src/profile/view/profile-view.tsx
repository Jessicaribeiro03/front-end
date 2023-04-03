import React from "react";
import BootstrapDatePickerComponent from "../../components/datapicker-component";
import NavBarComponent from "../../components/navbar-component";

import { Container, Forms, Button } from "./style";


export class ProfileView extends React.Component {
    render() {
        return (
            <Container>
                <NavBarComponent />
                <Forms>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputNome4">Nome</label>
                                <input type="nome" className="form-control" id="inputNome4" placeholder="Nome"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputSobrenone4">Sobrenone</label>
                                <input type="sobrenone" className="form-control" id="inputSobrenone4" placeholder="Sobrenone"/>
                            </div>
                            
                        <BootstrapDatePickerComponent/>
                        </div>
                        <Button type="submit" className="btn  my-3">Salvar Alterações</Button>
                    </form>

                </Forms>

            </Container>
        )
    }

}