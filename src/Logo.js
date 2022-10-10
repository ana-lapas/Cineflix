import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Logo(){
     /*<img src={logoImg} alt="CineFlix Logo" />*/
    return(<>
    <Topo>
      <Link to="/">
      <h1>CINEFLIX</h1> 
      </Link>
    </Topo>    
    </>)
}
const Topo = styled.div`
background-color: #C3CFD9;
height:80px;
width: 100%;
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left: 0;
z-index:1;
a{
        text-decoration: none;
        color: #E8833A;
    }
h1{
   font-family: 'Roboto', sans-serif;
   font-weight:400;
   font-size: 34px;
   line-height: 40px;
}
`