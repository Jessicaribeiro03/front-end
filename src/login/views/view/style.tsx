import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F4F4F4;
    
`

export const ContainerContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;  
    padding-top: 70px;
    margin: 70px;     
 
    
    

    img{
        width: 200px;   
        margin-bottom: 2rem;
        border-radius:50%; 
            
    }
    hr{
        border-left: 3px;
        border-style: solid;
        border-color: black;    
        height: 460px;
        opacity:50%;
        

            position:absolute;
            left: 49%;

    }
`

export const Box = styled.div`
box-sizing:border-box;
padding: 40px;
border: 1px solid red;

    
`

interface Props {
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

export const handleOpenUserMenu = styled.div`
    width: 150px; 
    margin-bottom: 2rem


`

