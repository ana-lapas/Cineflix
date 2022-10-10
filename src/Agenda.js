import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Agenda({schedule}){
    console.log("Entrou no agenda")
    console.log(schedule)
    return(
    <DiaHorarios>        
        <p>{schedule.weekday} - {schedule.date}</p>
        <ul>
            { schedule.showtimes.map((i) =>
            <li key={i.id}>
                <Link to={`/assentos/${i.id}`}>
                    <div onClick={() => alert(i.id)}>{i.name}</div>
                </Link>
            </li> )}
        </ul>
    </DiaHorarios>        
    )
}
    const DiaHorarios = styled.div`
        display: flex;
        flex-direction: row;
        background-color: #ffffff;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        a{
            text-decoration: none;
            color:#293845;
        }
        p{
            color:#293845;
            font-family: 'Roboto', sans-serif;
            font-weight:400;
            font-size: 20px;
            line-height: 24.5px;
            margin-top: 10px;
            margin-bottom:10px;
            margin-left: 25px;
        }
        ul{
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            margin-top: 10px;
        }
        li{
            background-color: #E8833A;
            color: #ffffff;
            font-family: 'Roboto', sans-serif;
            font-weight:400;
            font-size: 18px;
            line-height: 21px;
            margin-top: 10px;
            width: 83px;
            height:43px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;   
            margin-left: 25px;
        }
`