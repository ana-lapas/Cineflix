import { useState } from "react";
import styled from "styled-components";

//Renderiza os assentos
export default function ShowSeats({ assentos, selectedSeats, setSelectedSeats }) {    
    return (<>
    <Circles> 
        <ul>
            {(assentos.length === 0) ? "" :
            (assentos.map((seat) => (
            <li key={seat.id} ><Seat seat={seat} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} /></li>)))}  
        </ul>                             
    </Circles>
    <Exemplo>
        <div className="ex">
           <div><Circles><div className="seated selected"></div></Circles>   <p>Selecionado</p></div>
            <div><Circles><div className="seated disponivel" ></div></Circles><p>Disponível</p>    </div>
           <div> <Circles><div className="seated indisponivel"></div></Circles><p>Indisponível</p>  </div>
        </div>        
    </Exemplo>
    </>)
}
function Seat({seat, selectedSeats, setSelectedSeats}){
    const [selected, setSelected] = useState(false);
    function selecionar(){
        if(seat.isAvailable === false){
            handleSeat(seat, selectedSeats, setSelectedSeats);

        } else{ 
            setSelected(!selected)
            handleSeat(seat, selectedSeats, setSelectedSeats)}
    }
    return (<>
    {!selected ? 
        (<CirclesDiv isAvailable={seat.isAvailable} className={`${seat.isAvailable}`} onClick={() => 
            selecionar()}>{seat.name}</CirclesDiv>
        ) : (
        <CirclesDiv isAvailable={seat.isAvailable} className="selected" onClick={() => selecionar()}>{seat.name}</CirclesDiv>)}
    </>

    )
}
function handleSeat(seat, selectedSeats, setSelectedSeats) {
    if (!seat.isAvailable === true) {
        alert("Esse assento não está disponível");
        return;
    }

    if (seat.isAvailable) {
        const filteredSeats = selectedSeats.filter((s) => !(s.id === seat.id)); 
        setSelectedSeats([...filteredSeats]);
    }
    setSelectedSeats([...selectedSeats, seat.id]);
    return;
}

const Circles = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    a{
        text-decoration: none;
        color:#293845;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size:11px;
        line-height:13px;
    }
    ul{
        display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
        margin-bottom: 10px;
    }
    .seated{
        width: 26px;
        height: 26px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid ${(seat) => ((!seat.isAvailable) ? "#7b8b99" : "#F7c52b")};
        background-color: ${(seat) => ((!seat.isAvailable) ? "#C3CFD9" : "#FBE192")};
        margin-right: 5px;
        margin-bottom: 5px;
    }    
    .selected{
        border: 1px solid  "#0e7d71";
        background-color: #1aae9e;
    }
    .disponivel{
        border: 1px solid #7b8b99;
        background-color: #C3CFD9;
    }
    .indisponivel{
        border: 1px solid #F7c52b;
        background-color: #FBE192;
    }
`
const CirclesDiv = styled.div`
        width: 26px;
        height: 26px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid ${(props) => (props.isAvailable ? "#7b8b99" : "#F7c52b")};
        background-color: ${(props) => (props.isAvailable ? "#C3CFD9" : "#FBE192")};
        margin-right: 5px;
        margin-bottom: 5px;
        .selected{
        border: 1px solid  "#0e7d71";
        background-color: #1aae9e;
    }
`
const Exemplo = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;        
        p{
          color:#293845;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size:13px;
        line-height:13px; 
        margin-right:20px;
        margin-left: 20px;
        }
        .ex{
            display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        }`