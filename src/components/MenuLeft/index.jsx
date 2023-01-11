import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Scrollbars } from 'react-custom-scrollbars';
import IconBuffet from "../../assets/img/iconBuffet.png";
import api from "../../services/api";
import { Aniversariantes } from "../Aniversariantes";
import {
   DivFIxed, DivMenu, DivMenuDaily, DivPrediction, MenuLeftContainer, TextBuffetMenuDaily, TextGarrison, TextGarrisonTitle, TextMainCourse,
   TextMainCourseTitle, TextOption, TextOptionTitle, TextPrincipal
} from "./style";

export const MenuLeft = () => {
   const [cardapio,setCardapio] =useState([])
   const date = new Date().toDateString().slice(0,3);

   function Cardapios() {
      api.get("/cardapios").then(res => {
         setCardapio(res.data)
      })
   }
   useEffect(() => {
      Cardapios();
     
   },[])
   
return (
   <MenuLeftContainer >
      <DivFIxed>
         <div className="aniversario">
            <Aniversariantes />
            <Link to="/aniversariantes" tabIndex={0}>Aniversariantes do mês</Link>
         </div>
         <DivPrediction>
            <img tabIndex={0}   src={"https://www.tempo.com/wimages/foto6e3b22fbed3e1ed7e4c6641c42d27697.png"} alt="previsao do tempo" />
         </DivPrediction>
            <DivMenu>
               <TextPrincipal tabIndex={0}>Cardápio de Hoje
                  <img  src={IconBuffet} alt="" />
               </TextPrincipal>

               {cardapio?.map((item,index) => {
                  if (date === item?.diaDaSemana) {
                     return (
                        <>
                        <DivMenuDaily key={index}>
                           <TextBuffetMenuDaily>Buffet de Salada</TextBuffetMenuDaily>
                           <TextMainCourseTitle>Prato Principal</TextMainCourseTitle>
                           <TextMainCourse>{item?.pratoPrincipal}</TextMainCourse>
                           <TextOptionTitle>Opção:</TextOptionTitle>
                           <TextOption>{item?.opcao}</TextOption>
                           <TextGarrisonTitle>Guarnição</TextGarrisonTitle>
                           <TextGarrison>{item?.guarnicao}</TextGarrison>
                        </DivMenuDaily>
                        <Link  to="/cardapio" tabIndex={0}>Cardapio da semana</Link>
                        </>
                     )
                  }
               })}
            </DivMenu>
         </DivFIxed>
      </MenuLeftContainer>


   )
};