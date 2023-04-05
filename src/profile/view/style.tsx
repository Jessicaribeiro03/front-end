import styled from "styled-components";



export const Container = styled.div`
display:block;

`
export const NavBar = styled.nav`
background-color: #3C345C;
text-color: white;
`
export const Forms= styled.div`
display: flex;
flex-direction:row;
flex:1;

justify-content: center;




`
export const Button = styled.button`
  display:inline-block;
  margin: 5px;
 
  
  background-color: #3C345C;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #C7C5D0;
  }
  &:active {
    color:#7A729B;
  }
`
export const ImageBox = styled.div`
display: flex;
flex-direction:row;
flex:1;
padding-top: 5px;
justify-content: center;
`