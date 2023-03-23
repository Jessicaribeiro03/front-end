import React from "react";
import { Container, Stack, Avatar, Paper } from "@mui/material";
import { LineHr } from "../login/views/style";

export default class UserView extends React.Component{

    render(){
        
        return(
            <Container>

                <LineHr />
                    <h4>Lista de Tarefas</h4>
                <LineHr />

                <Paper sx={{width: 600, height: 600}}>

                    <Stack direction="row" spacing={2}>
                        <Avatar alt="Remy Sharp" src="/broken-image.jpg" />
                    </Stack>

                    <form>
                        <input type="text" name="Usuário" placeholder="Usuário" />
                        <input type="text" name="Senha" placeholder="Senha" />
                        <button type="submit">Entrar</button>
                    </form>
                </Paper>   

            </Container>
        )


    }


}