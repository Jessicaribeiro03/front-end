
import React from "react";
import LoginView from "../view/login-view";


export default function LoginControler() {

    async function sendAuthCode(authCode: string) {
        console.log(authCode)
    }

    return (
        <LoginView sendAuthCode={sendAuthCode} />

    )
}
