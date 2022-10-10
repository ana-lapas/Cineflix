import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Poster({ m }){
    return(
    <PosterImg>
        <Link to={`/sessoes/${m.id}`}>
        <img src={m.posterURL} alt={m.title} />
        </Link>
    </PosterImg>
    )
}
const PosterImg = styled.div`
    height:210px;
    width:145px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    margin-bottom: 15px;
    a{
        text-decoration: none;
        color:#293845;
    }

    img{
        height: 193px;
        width: 129px;
        border: 15px solid #ffffff;       
        border-radius: 7px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);   
    }
`