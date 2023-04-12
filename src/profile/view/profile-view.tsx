import React from "react";
import BootstrapDatePickerComponent from "../../components/datapicker-component";
import NavBarComponent from "../../components/navbar-component";
import profile1 from "../assets/profile1.jpg";
import UserModel from "../model/user-model";
import { Container, Forms, Button, ImageBox } from "./style";


interface Props {

    user?: UserModel | undefined;
}


export class ProfileView extends React.Component<Props> {
    render() {
        return (
            <Container>
                <NavBarComponent />
                <ImageBox>
                <img
                    src={this.props.user !== undefined ? this.props.user.profileImageUrl : 'https://png.pngitem.com/pimgs/s/445-4457103_no-profile-picture-jpg-hd-png-download.png'}
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