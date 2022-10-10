import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sucesso(){
    return(<>
<p>Teste</p>
    {<Sucess>
        <div>
            <h1>Pedido feito </h1>
            <h1>com sucesso!</h1>
        </div>
        <div>
            <p>Filme e sessões</p>
        </div>
        <div>
            <p>Ingressos</p>
        </div>
        <div>
            <p>Comprador</p>
        </div>
        <button>
            <Link to="/">Voltar para home</Link>
        </button>
    </Sucess> }</>
    )
}
const Sucess = styled.div`
    width: 100%;
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
        color: #247A6B;
        font-family: 'Roboto', sans-serif;
        font-weight:400;
        font-size: 24px;
        line-height: 28px;
        margin-top: 100px;
        margin-bottom:20px;
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