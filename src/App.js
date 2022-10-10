import GlobalStyle from './globalStyles';
import PaginaInicial from './PaginaInicial';
import Logo from './Logo';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Sessions from './Sessions';
import SeatsSelection from './SeatsSelection';
export default function App(){
    return(
    <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>        
            <Route path="/" element={<PaginaInicial />} />    
            <Route path="/sessoes/:idFilme" element={<Sessions />} />
            <Route path="/assentos/:idSessao" element={<SeatsSelection />} />
        </Routes>
    </BrowserRouter>
    )
}