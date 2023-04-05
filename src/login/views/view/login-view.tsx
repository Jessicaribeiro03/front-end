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
                        
                            <a href="https://ibb.co/R6mgmsr">
                                <img src="https://i.ibb.co/R6mgmsr/Daily-Tasks.jpg" alt="Daily-Tasks" />
                            </a>
                            <hr></hr>
                            
                            


                        {/* <SocialButton sendAuthCode={this.props.sendAuthCode} type="facebook" text="Sign in with Facebook" /> */}
                        <SocialButton sendAuthCode={this.props.sendAuthCode} type="google" text="Sign in with Google" />


                    </ContainerContent>
                </Paper>
            </Container>
            </>
        )
    } ''
}


interface Props {

    sendAuthCode: any;
}