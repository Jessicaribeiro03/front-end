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
            colorType = "#4267B2";
        }else{
            colorType = "#DB4437";
        }
        return (
            <ButtonContainer type={colorType}>
                {type == "facebook" ? <Facebook color="white" /> : <Google color="white" />}
                <span>{text}</span>
            </ButtonContainer>
        );
    }
    
}