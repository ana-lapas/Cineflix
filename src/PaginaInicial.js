import styled from "styled-components";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Poster from './Poster';

export default function PaginaInicial(){
    const [movies, setMovies] = useState(undefined);
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(resposta => { 
            setMovies(resposta.data);
        })

        promise.catch(err => {
            if(err) alert("Erro na requisição! Tente de novo");
        })
    }, []);
    
    return(
    <SelectMovie>
        <div>
            <h1>Selecione um filme:</h1>
        </div>
        <ul>
            {(movies === undefined) ? "" : (movies.map((m) =><li key={m.id}><Poster key={m.id} m={m} /></li>))}         
        </ul>         
        </SelectMovie>
    );
}
const SelectMovie = styled.div`
width: 350px;
background-color: #ffffff;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
a{
        text-decoration: none;
        color:#293845;
    }
h1{
   color:#293845;
   font-family: 'Roboto', sans-serif;
   font-weight:400;
   font-size: 24px;
   line-height: 28px;
   margin-top: 100px;
   margin-bottom:20px;
}
ul {
    flex-direction: row;   
    flex-wrap: wrap;
}
li{
    display:flex;
    justify-content: center;
    align-items: center;
}`