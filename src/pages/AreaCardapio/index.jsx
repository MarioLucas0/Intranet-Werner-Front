import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuAdminLeft } from "../../components/MenuAdminLeft";
import api from "../../services/api";
import {
  ButtonEditar, Card, Cards, DivButtons, DivContainerInfo,
  DivInfo, Section
} from "./style";

export const AreaCardapio = () => {
  const [cardapios,setCardapios] =useState([])


  let diasDaSemana = ["","Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado","Domingo"]

  function Cardapios() {
    api.get("/cardapios").then(res => {
      console.log(res)
      setCardapios(res.data)
    })
  }

  useEffect(() => {
    Cardapios()

  },[])
  


    return (
    <Section>
      <MenuAdminLeft />
      <Cards>
      {cardapios?.sort((a, b) => a.idCardapio - b.idCardapio).map((item) => (
        <Card>
        <h1>{diasDaSemana[item?.idCardapio]}</h1> 
          <DivContainerInfo tabIndex={0}> 
            <DivInfo>
                  <h3>Prato principal: <span>{item?.pratoPrincipal}</span></h3>
                  <h3>Opção:  <span>{item?.opcao}</span></h3>
                  <h3>Guarnição:  <span>{item?.guarnicao}</span></h3>
            </DivInfo>
            <DivButtons>
            <Link to={`/arearh/areacardapio/editar/${item?.idCardapio}`}>
                <ButtonEditar tabIndex={-1}> 
                  EDITAR
                  </ButtonEditar>
                </Link> 
            </DivButtons>
          </DivContainerInfo>
      </Card>
      ))}
        
        
      </Cards>
  </Section>
    )
};
  