
import React from "react";
import LoginView from "../view/login-view";
import { auth } from "../../models/service/login-service";
import jwtDecode from "jwt-decode"; 
import Cookies from "js-cookie"; 
import { useNavigate } from "react-router-dom";


export default function LoginControler() {

        const navigate = useNavigate ();
        

    async function sendAuthCode(authCode: string) {
       const response = await auth(authCode['access_token']);
       const tokenDecoded = jwtDecode (response['token']); 
    
        Cookies.set(
            'acess_token',
            response ['token'],
            {expires: 1}
        );
        if (tokenDecoded['birthday'] !== null){
            navigate ('/home/');
            
        }else{
            navigate ('/profile/'); 
        }
    
    }

    return (
        <LoginView sendAuthCode={sendAuthCode} />

    )
}
