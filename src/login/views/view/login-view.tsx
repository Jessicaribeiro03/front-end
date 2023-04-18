import React from "react";
import { Container, ContainerContent } from "./style";
import { Paper } from '@mui/material';
import ButtonAppBar from "../components/appbar-component";
import SocialButton from "../components/social-button";
import UserModel from "../../../profile/model/user-model";





interface Props {
    sendAuthCode: any;
    user?: UserModel | undefined;
}



export default class LoginView extends React.Component<Props>{

    render() {


        return (
            <>
                <ButtonAppBar />
                <Container className="vh-100">
                    <Paper sx={{ width: 600, height: 460 }}>
                        <ContainerContent>
                        
                            <a >
                                <h2>Lista de Tarefa</h2>
                                <img src="https://estudareaprender.com/wp-content/uploads/listas-de-tarefas-significado-1024x576.jpeg" alt="Things" />
                            </a>
                            
                            
                            


                        {/* <SocialButton sendAuthCode={this.props.sendAuthCode} type="facebook" text="Sign in with Facebook" /> */}
                        <SocialButton sendAuthCode={this.props.sendAuthCode} type="google" text="Sign in with Google" />


                    </ContainerContent>
                </Paper>
            </Container>
            </>
        )
    } ''
}


