import React from "react";
import { Container, ContainerContent, LineHr, ButtonContainer } from "./style";
import { Paper, Box } from '@mui/material';
import { Google } from 'react-bootstrap-icons';
import logo from '../../assets/logo.png';
import ButtonComponent from "./components/button-component";


export default class LoginView extends React.Component{
    render(){
        return (
            <Container className="vh-100">                                                
                    <Paper sx={{width: 600, height: 600}}>
                        <ContainerContent>
                            <img src={logo} alt="" />
                            <LineHr />
                            <h4>Lista de Tarefas</h4>
                            <LineHr />
                            <h1>Login</h1>  

                            <ButtonComponent type="facebook" text="Sign in with Facebook"/>
                            <ButtonComponent type="google" text="Sign in with Google"/>                            
                            
                        </ContainerContent>   
                    </Paper>                              
            </Container>
        )
    }
}