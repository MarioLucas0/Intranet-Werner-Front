import { useEffect, useState } from "react";
import imgCardapio from "../../assets/img/imgCardapio.svg";
import { SlideCarousel } from "../../components/Carousel";
import { MenuLeft } from "../../components/MenuLeft";
import { MenuRight } from "../../components/MenuRight";
import api from "../../services/api";
import {
  DivCardapio, DivContainer, InfoCardapio, Section,
  TextBuffet, TextData, Warning
} from "./style";

export const Cardapio = () =>{
  const [cardapios,setCardapios] =useState([])

  let diasDaSemana = ["","Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado","Domingo"]

  function Cardapios() {
    api.get("/cardapios").then(res => {
      setCardapios(res.data)
    })
  }

  useEffect(() => {
    Cardapios()

  },[])
  


  return (
  <Section>
    <MenuLeft />
      <DivContainer>
      <SlideCarousel/>

          <img src={imgCardapio} alt="" />
          <h2 >ALMOÇO/JANTAR/CEIA</h2>
          <DivCardapio>
            {cardapios?.sort((a, b) => a.idCardapio - b.idCardapio).map((item) => (
                
                <InfoCardapio>
                
                <TextData tabIndex={0}>{diasDaSemana[item?.idCardapio]}</TextData>
                <TextBuffet>Buffet de saladas</TextBuffet>
                <h3>Prato principal: <span>{item?.pratoPrincipal}</span></h3>
                <h3>Opção:  <span>{item?.opcao}</span></h3>
                <h3>Guarnição: <span>{item?.guarnicao}</span></h3>
                </InfoCardapio>
            ))}
              <Warning> <span>OBS.: CARDÁPIO SUJEITO A ALTERAÇÕES</span>. Além das sugestões do cardápio, temos as opções de ovos e omelete . Basta fazer a anotaçã o na folha de opção no dia anterior.</Warning>
          </DivCardapio>
      </DivContainer>
    <MenuRight />
  </Section>
  );
}


