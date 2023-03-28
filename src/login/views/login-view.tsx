import React from "react";
import { Container, ContainerContent, LineHr, ButtonContainer } from "./style";
import { Paper, Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Tooltip, Avatar, createTheme } from '@mui/material';
import { Google } from 'react-bootstrap-icons';
import logo from '../../assets/logo.png';
import ButtonComponent from "./components/button-component";
import ButtonAppBar from "./components/appbar-component";
import logo3 from '../../assets/logo3.jpg'

export default class LoginView extends React.Component{

    render(){


        return (
            <>                
                <ButtonAppBar />            
                <Container className="vh-100">                 
                    <Paper sx={{width: 600, height: 600}}>
                        <ContainerContent>
                            <img src={logo3} alt="" />
                            <LineHr />
                            <h4>Lista de Tarefas</h4>
                            <LineHr />
                            <hr></hr>
                            <h3>Login</h3>  
                            <hr></hr>
                            <ButtonComponent type="facebook" text="Sign in with Facebook"/>
                            <ButtonComponent type="google" text="Sign in with Google"/>                            
                            

                        </ContainerContent>   
                    </Paper>                              
                </Container>
            </>
        )            
    }
}


interface Props{

    sendAuthCode: any;
}