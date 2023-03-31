
import React from "react";
import LoginView from "../view/login-view";
import { auth } from "../../models/service/login-service";
import jwtDecode from "jwt-decode"; 
import Cookies from "js-cookie"; 
import { useNavigate } from "react-router-dom";


export default function LoginControler() {

        const navigate = useNavigate ();
        

    async function sendAuthCode(authCode: string) {
       const response = await auth(authCode['acess_token']);
       const tokenDecoded = jwtDecode (response['acess_token']); 
    
        Cookies.set(
            'acess_token',
            response ['acess_token'],
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
