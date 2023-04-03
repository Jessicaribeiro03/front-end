import styled from "styled-components";



export const Container = styled.div`
display:block;



`
export const NavBar = styled.nav`
background-color: #3C345C;
text-color: white;
`
export const Forms= styled.div`
display: grid;
box-sizing: border-box;
margin: 0px 500px 0px 570px;
padding-top: 5% ;
width: 50%;
justify-content: between;




`
export const Button = styled.button`
  display:inline-block;
 
  
  background-color: #3C345C;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #C7C5D0;
  }
  &:active {
    color:#7A729B;
  }
`
