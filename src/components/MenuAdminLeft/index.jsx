

import { Link } from "react-router-dom";
import { formatDate } from "../../utils/dateFormat";
import {
  MenuRightContainer, Option, TextData, Ul
} from "./style";

export const MenuAdminLeft = () =>{

  const date = new Date().toISOString()

  return (
    <MenuRightContainer>
    <Ul>
    <TextData tabIndex={0}>{formatDate(date)}</TextData>
    <Option>
        <Link tabIndex={0} to="/arearh/postagem">Nova Postagem</Link>
    </Option>
    <Option>
        <Link tabIndex={0} to="/arearh/cardapio">Atualizar Cardápio</Link>
    </Option>
    <Option>
        <Link tabIndex={0} to="/arearh/aniversariantesPost">Atualizar Aniversários</Link>
    </Option>
    <Option>
        <Link tabIndex={0} to="/">Gerenciar Autores</Link>
    </Option>
    </Ul>
    </MenuRightContainer>

  );
}


