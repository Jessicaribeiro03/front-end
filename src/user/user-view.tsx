import React from "react";

import { MDBCard, MDBCardBody, MDBCardImage, MDBTypography, MDBCardText } from "mdb-react-ui-kit";
import { Button } from "@mui/material";
import { Container, ContainerContent, ContainerForm } from "./style";

export default class UserView extends React.Component {

  render() {

    return (


      <Container className="vh-100">
        <ContainerContent>
          <MDBCard style={{ borderRadius: '15px', width: 450 }}>
            <MDBCardBody className="text-center">
              <ContainerForm>
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                
                <MDBTypography tag="h4" className="mb-3">LOGIN</MDBTypography>
                <input className="mb-2" type="text" name="Nome do usuário" placeholder="Nome do usuário" />
                <input className="mb-2" type="text" name="Sobrenome" placeholder="Sobrenome" />
                <Button variant="contained" disableElevation>Entrar</Button>

              </ContainerForm>
            </MDBCardBody>
          </MDBCard>
        </ContainerContent>
      </Container>
    )


  }


}