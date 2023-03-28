import React from "react";

import { MDBCard, MDBCardBody, MDBCardImage, MDBTypography, MDBCardText } from "mdb-react-ui-kit";
import { Button, Paper } from "@mui/material";
import { Container, ContainerContent, ContainerForm } from "./style";
import { LineHr } from "../../login/views/view/style";
import ButtonAppBar from "../../login/views/components/appbar-component";


export default class UserView extends React.Component {

  render() {

    return (
      
      <ButtonAppBar />            
      <Container className="vh-100">                 
        <Paper sx={{width: 600, height: 600}}>
      

        <form>

        <div className="mt-3 mb-4">
          <MDBCardImage src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png"
          className="rounded-circle" fluid style={{ width: '100px' }} />
        </div>

          <div class="form-floating mb-3">
            <input type="nome" class="form-control" id="floatingInput" placeholder="nome">
            <label for="floatingInput">Nome</label>
          </div>


          <div class="form-floating">
            <input type="sobrenome" class="form-control" id="floatingPassword" placeholder="sobrenome">
            <label for="sobrenome">Sobrenome</label>
          </div>

          <div class="form-floating">
            <input type="Data de Nascimento" class="form-control" id="floatingPassword" placeholder="nascimento">
            <label for="nascimento">Data de Nascimento</label>
          </div>


          <div class="form-floating">
            <input type="email" class="form-control" id="floatingPassword" placeholder="email">
            <label for="email">Email</label>
          </div>


        </form>

      </Container>

              
    )


  }


}