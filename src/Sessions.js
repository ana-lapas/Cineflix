import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Agenda from "./Agenda";

export default function Sessions() {
    const { idFilme } = useParams();
    const [movieSessions, setTimeSessions] = useState([]); //Pegar a imagem do objeto para passar para o poster

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then((resposta) => {
            setTimeSessions(resposta.data)
        });

        promise.catch((erro) => {
            if(erro) alert("Erro na requisição! Tente de novo");
        })
    }, []);

    return (<><FilmeConfig>
            <div>
                <h1>Selecione um filme:</h1>
            </div>
            <ul>
                {(movieSessions.length === 0) ? "" : (movieSessions.days.map((schedule) =>
                    <Agenda key={schedule.id} schedule={schedule} />))}
            </ul>
        </FilmeConfig>
        <Footer>
            <div color="#ffffff"><img src={movieSessions.posterURL} alt="" /></div>
            <p>{movieSessions.title}</p>
        </Footer></>)
}
const FilmeConfig = styled.div`
    width: 350px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: #ffffff;    
    a{
        text-decoration: none;
    }
    h1{
        color:#293845;
        font-family: 'Roboto', sans-serif;
        font-weight:400;
        font-size: 24px;
        line-height: 28px;
        margin-top: 100px;
        margin-bottom:20px;
}`
const Footer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #9eadba;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 117px;
    z-index: 1;
    a{
        text-decoration: none;
        color:#293845;
    }
    img{
        width: 48px;
        height: 72px;
        margin: 18px;
        margin-top: 18px;
        border: 13px solid #ffffff;
        border-radius: 2px;
    }
    p{
        color:#293845;
        font-family: 'Roboto', sans-serif;
        font-weight:400;
        font-size: 20px;
        line-height: 24.5px;
        }
`