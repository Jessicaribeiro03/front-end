import React from "react";
import BootstrapDatePickerComponent from "../../components/datapicker-component";
import NavBarComponent from "../../components/navbar-component";

import { Container, Forms, Button, ImageBox } from "./style";


export class ProfileView extends React.Component {
    render() {
        return (
            <Container>
                <NavBarComponent />
                <ImageBox>
                <img
                    src={`data:image/jpeg;base64,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`}

                    //  apontar uma image invalida par ao : profile
                    className="rounded-circle"
                    height="150"

                    alt="Avatar"
                    loading="lazy"
                />
                </ImageBox>

                <Forms>
                    <form>
                        <div className="form-row">

                            <div className="form-group col-md-12">
                                <label htmlFor="inputNome4">Nome</label>
                                <input type="nome" className="form-control" id="inputNome4" placeholder="Nome" />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="inputSobrenone4">Sobrenone</label>
                                <input type="sobrenone" className="form-control" id="inputSobrenone4" placeholder="Sobrenone" />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="inputSobrenone4">Email</label>
                                <input className="form-control" type="text" value="email@email.com" aria-label="Disabled input example" disabled />
                            </div>

                            <BootstrapDatePickerComponent />
                        </div>
                        <Button type="submit" className="btn  my-3">Salvar Alterações</Button>
                        <button type="button" className="btn btn-danger btn-rounded  ">Cancelar</button>

                    </form>

                </Forms>

            </Container >
        )
    }

}