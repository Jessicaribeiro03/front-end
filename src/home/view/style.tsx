

import styled from "styled-components";



export const Container = styled.div`
display:block;

`
export const NavBar = styled.nav`
background-color: #3C345C;
text-color: white;
img{
  width:60px;
}
`

export const ContainerTask = styled.div`
display: flex;
align-items: center;
flex-direction: column;

`
export const Button = styled.button`
display:flex;
flex:1;
background-color: #3C345C;
color: white;
border-radius: 10px;
margin-left: -5px;
&:hover,
  &:focus {
    color: #C7C5D0;
  }
  &:active {
    color:#7A729B;
  }

`
export const Text = styled.input`

border: 2px solid #000;
`;
export const TaskCount = styled.span`
  margin: 10px;
`;
export const Tasks = styled.div`
display:flex;
align-items:center;
margin:15px;
justify-content: space-envely;




`;
export const LIST = styled.li`
    listStyle:"none";
    text-decoration: "line-through"
    `;

export const NewTask = styled.div`
display:flex;
background:red;
margin:50px;


    
    
    `
export const ContainerIcon = styled.div`
    display:flex;
    

    
    `
export const ButtonIcon = styled.button`
display:block;
border: none;
background-color: #3C345C;
color: white;
height: 25px;
width: 25px;
align-items:center;

border-radius: 10px;
margin: 2px;
&:hover,
  &:focus {
    color: #C7C5D0;
  }
  &:active {
    color:#7A729B;
  }
    
   
    
    `

