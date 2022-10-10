import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowSeats from "./ShowSeats";


export default function SeatsSelection(){
    console.log("Entrou no seatsselection");
    const { idSessao } = useParams();
    console.log(idSessao)// Verificar se pegou o mesmo id da sessão do filme
    const [seatsTotal, setSeatsTotal] = useState([]); //Pegar a imagem do objeto para passar para o poster
    console.log(seatsTotal)
    
    useEffect(() => {
        console.log("entrou no usefect");
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}`);
        promise.then((resposta) => { 
            console.log(resposta.data);
            setSeatsTotal(resposta.data);
        })

        promise.catch((err) => {
            console.log(err.response.data);
            if(err) alert("Erro na requisição! Tente de novo");
        })
    }, []);
    
    return(<>
    <SeatsTotalPage>
        <div>
          <h1>Selecione o(s) assento(s):</h1>
        </div>        
        <ul>
            {(seatsTotal.length === 0) ? "" : (seatsTotal.map((assentos) => <li key={assentos.id}><ShowSeats key={assentos.id} assentos={assentos} /></li>))}
        </ul>
            
    </SeatsTotalPage>
        
    <Footer>        
        <div><img src={seatsTotal.movie.posterURL} alt="" /></div>
        <div>
            <p>{seatsTotal.movie.title}</p> 
            <p>{seatsTotal.day.weekday} - {seatsTotal.name}</p>  
        </div>
        
    </Footer>
    </>)
}
const SeatsTotalPage = styled.div`
width: 350px;
background-color: palegreen;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
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
}
ul {
    flex-direction: row;   
    flex-wrap: wrap;
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

    /*
        
        <forms>
            <label>Nome do comprador:</label>
            <input id='name'></input>
            <label>CPF do comprador:</label>
            <input id='cpf' ></input>
        </forms>*/
    