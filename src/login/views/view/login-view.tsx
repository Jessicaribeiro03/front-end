import React from "react";
import { Container, ContainerContent, LineHr, ButtonContainer } from "./style";
import { Paper, Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Tooltip, Avatar, createTheme } from '@mui/material';
import { Google } from 'react-bootstrap-icons';
import logo from '../../assets/logo.png';
import ButtonComponent from "../components/buttons-component";
import ButtonAppBar from "../components/appbar-component";
import logo2 from '../../assets/logo3.jpg'
import SocialButton from "../components/social-button";


interface Props {
    sendAuthCode: any;
}



export default class LoginView extends React.Component<Props>{

    render() {


        return (
            <>
                <ButtonAppBar />
                <Container className="vh-100">
                    <Paper sx={{ width: 600, height: 600 }}>
                        <ContainerContent>
                            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyFZmEJxWF7fBRwOEnsOF7AV_9FeqBOPUmw&usqp=CAU`} alt="" />
                            <LineHr />
                            <h4>Lista de Tarefas</h4>
                            <LineHr />
                            <hr></hr>
                            <h3>Login</h3>
                            <hr></hr>
                            <SocialButton sendAuthCode={this.props.sendAuthCode} type="facebook" text="Sign in with Facebook" />
                            <SocialButton sendAuthCode={this.props.sendAuthCode} type="google" text="Sign in with Google" />


                        </ContainerContent>
                    </Paper>
                </Container>
            </>
        )
    }
}


interface Props {

    sendAuthCode: any;
}