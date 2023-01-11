import { useContext } from "react";
import { Link } from "react-router-dom";
import CodigoCondutaABVTEX from "../../assets/doc/Código-de-conduta-ABVTEX.pdf";
import { AuthContext } from "../../context/auth";
import Tutorial from "../Tutorial";
import {
    MenuRightContainer, Option, Ul
} from "./style";

export const MenuRight = (props) => {
    const {setPostagem,authenticated,setDarkMode,darkMode} = useContext(AuthContext)
return (
    <MenuRightContainer>
    <Ul>
    <Option>
        <Link className="tabNavigation" tabIndex={0}  target="_blank" >Código de Conduta Werner</Link>
    </Option>
    <Option>
        <Link className="tabNavigation" tabIndex={0} to="/ramal">Ramais</Link>
    </Option>
   <Option>
        <Link className="tabNavigation" tabIndex={0} to="/apostilas">Apostilas</Link>
    </Option>
    <Option>
        <Link className="tabNavigation" tabIndex={0} to="/manuais">Manuais</Link>
    </Option>
    <Option>
        <Link className="tabNavigation" tabIndex={0} to={CodigoCondutaABVTEX} target="_blank">Código de Conduta ABVTex</Link>
    </Option>

    {authenticated ?  
                
        <>
            <Option>
            <Link className="tabNavigation" tabIndex={0} to="/documentacaoTi">Documentação TI</Link>
            </Option>
            <Option>
            <Link className="tabNavigation" tabIndex={0} to="/documentacaoRh">Documentação RH</Link>
            </Option>
        </>
            : ""}

    <Option>
        <Tutorial/>
    </Option>
    </Ul>
    </MenuRightContainer>

    )
};