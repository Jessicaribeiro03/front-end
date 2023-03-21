import React from "react";
import { ButtonContainer } from "../style";
import { Google, Facebook } from "react-bootstrap-icons";

interface Props{
    type: string;
    text: string;
}

export default class ButtonComponent extends React.Component<Props>{
    render(){
        const { type, text } = this.props;
        var colorType;
        if(type === "facebook"){
            colorType = "red";
        }else{
            colorType = "#4267B2";
        }
        return (
            <ButtonContainer type={colorType}>
                <Facebook color="white" />
                <span>{text}</span>
            </ButtonContainer>
        );
    }
    
}