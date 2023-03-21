import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
`

export const ContainerContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;  
    margin-top: 5rem;      
    height:  100%;

    img{
        width: 100px;   
        margin-bottom: 2rem;     
    }
`

export const LineHr = styled.div`
    height: 2px;
    width:80%;
    background-color: black;
    
`

interface Props{
    type: string;    
}

export const ButtonContainer = styled.div<Props>`
    height: 50px;
    width: 200px;    
    border-radius: 10px;    
    cursor: pointer;
    box-shadow: 1px 1px 1px gray;    
    background-color: ${props => props.type || "white"};
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;

    span{
        font-weight: 500;
        font-size: 0.8em;
        color: black;
        padding-left: 1rem;
    }   

    .facebook{
        background-color: #4267B2
    }

    .google{
        background-color: #4267B2;
    }    
`
