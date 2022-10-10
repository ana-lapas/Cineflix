import { useState } from "react";
import styled from "styled-components";

//Renderiza os assentos
export default function ShowSeats({ assentos }) {
    const [selectedSeats, setSelectedSeats] = useState([]); //Verificar disponibilidade de assentos
    console.log(assentos)
    console.log(assentos.seats)    

    return (<>
    <Circles>        
            {(assentos.length === 0) ? "" :
            (assentos.seats.map((seat) => (<li><VerificaAssento 
            key={seat.id} 
            seat={seat} 
            handleSeat={handleSeat} 
            selectedSeats={selectedSeats} 
            setSelectedSeats={setSelectedSeats}/> </li>)))}
    </Circles>
    </>)
}
function VerificaAssento({ seat, handleSeat }) {
    console.log("Entrou no verifica assentos")
    {!seat.selected ? (
        <div className={`Circles ${seat.isAvailable}`} onClick={() => handleSeat(seat)}>
            {seat.id}
        </div>
    ) : (
    <div className={`Circles selected`} onClick={() => handleSeat(seat)}>
        {seat.id}
    </div>
)}}
function handleSeat({seat, selectedSeats, setSelectedSeats}) {
    console.log("Entrou no seat")
    if (seat.isAvailable === false) {
        return;
    }
    seat.isAvailable = !seat.isAvailable;
    if (!seat.isAvailable) {
        const filteredSeats = selectedSeats.filter((s) => !(seat.id === seat.id));
        setSelectedSeats([...filteredSeats]);
        return;
    }
    setSelectedSeats([...selectedSeats, seat]);
    return;
}


const Circles = styled.div`
    display: flex;
    flex-direction: row;
    background-color: red;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    a{
        text-decoration: none;
        color:#293845;
    }
    li{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid ${({isAvailable}) => (isAvailable ? "#7b8b99" : "#F7c52b")};
        background-color: ${({isAvailable}) => (isAvailable ? "#C3CFD9" : "#FBE192")};
    }
    .selected{
        border: 1px solid #0e7d71;
        background-color: #1aae9e;
    }   
`