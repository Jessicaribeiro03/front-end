
import { useGoogleLogin } from "@react-oauth/google";
import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Facebook, Google } from "react-bootstrap-icons";
import { text } from "stream/consumers";
import { ButtonContainer } from "../view/style";


interface Props {
    sendAuthCode: any;
    type: string;
    text: string;
}
interface State {


}




export default function SocialButton(props: Props) {
    const login = useGoogleLogin({
        onSuccess: credentialResponse => {
            console.log(credentialResponse);
            sendAuthCode(credentialResponse);
        },
    });


    const { sendAuthCode, text, type } = props;
    var colorType;
    if (type === "facebook") {
        colorType = "#4267B2";
    } else {
        colorType = "#5c508d";
    }
    return (
        <>

            <ButtonContainer onClick={() => login()} type={colorType}>
                {type == "facebook" ? <Facebook color="white" /> : <Google color="white" />}
                <span>{text}</span>


            </ButtonContainer>


        </>
    )


}
