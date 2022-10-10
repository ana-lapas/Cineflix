import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import ShowSeats from "./ShowSeats";

export default function SeatsSelection() {
    const { idSessao } = useParams();
    const [seatsTotal, setSeatsTotal] = useState(null); //Salva as info da API
    const [name, setName] = useState("");
    const [cpf, setCPF] = useState("");
    const [selectedSeats, setSelectedSeats] = useState([]); //Verificar disponibilidade de assentos
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
        promise.then((resposta) => {
            setSeatsTotal(resposta.data);

        })

        promise.catch((err) => {
            if (err) alert("Erro na requisição! Tente de novo");
        })
    }, []);
    function comprarIngresso(event) {
        event.preventDefault();
        const requisicao = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: [selectedSeats],
            name: name,
            cpf: cpf,
        })
        requisicao.then((resposta) => {
            return <Navigate to="/sucesso" />
        })

        requisicao.catch((err) => {
            if (err) alert("Erro na requisição! Tente de novo");
        })
        
    }
    return (
        <>
            {seatsTotal === null ?
                "Carregando" : (<>
                    <SeatsTotalPage>
                        <div>
                            <h1>Selecione o(s) assento(s):</h1>
                        </div>
                        <ul>
                            {(seatsTotal.length === 0) ? "" : <ShowSeats key={seatsTotal.seats.id} assentos={seatsTotal.seats} 
                            selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />}
                        </ul>
                        <form onSubmit={comprarIngresso}>
                            <div>
                                <label htmlFor="name">Nome do comprador:</label>
                                <input id='name' type='text' placeholder="Digite o seu nome..." onChange={e => setName(e.target.value)} focus required></input>
                            </div>
                            <div>
                                <label htmlFor="cpf">CPF do comprador:</label>
                                <input id='cpf' type='number' placeholder="Digite o seu CPF..." minLength={10} onChange={e => setCPF(e.target.value)} focus required ></input>
                            </div>
                            <button type="submit">Reservar asssento(s)</button>
                        </form>
                        
                    </SeatsTotalPage>
                    <Footer>
                        <div><img src={seatsTotal.movie.posterURL} alt="" /></div>
                        <div>
                            <p>{seatsTotal.movie.title}</p>
                            <p>{seatsTotal.day.weekday} - {seatsTotal.name}</p>
                        </div>
                    </Footer></>)
            }
        </>)
}
const SeatsTotalPage = styled.div`
        width: 350px;
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
            display: flex;
            flex-direction: row;   
            flex-wrap: wrap;
        }
        form{
            margin-bottom:117px;
            display: flex;
            width:100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
        }
        form.div{
            margin-top: 10px;
        }
        label{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size:18px;
            line-height:21px;
            color: #293845;
            margin-top: 10px;
            justify-content: center;
            align-items: center;
        }
        input{
            height:51px;
            width: 327px;
            border-radius: 3px;
            border: 1px solid #D5D5D5;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size:18px;
            line-height:21px;
            font-style: italic;
            padding-left: 18px;
            color: #afafaf;
        }
        button{
            background-color: #E8833A;
            color: #ffffff;
            font-family: 'Roboto', sans-serif;
            font-weight:400;
            font-size: 18px;
            line-height: 21px;
            margin-top: 10px;
            width: 225px;
            height:43px;
            border: none;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;   
            margin-left: 25px;
            margin-bottom: 10px;
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