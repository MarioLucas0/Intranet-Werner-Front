import { useEffect, useState } from "react";
import ImgBirthday from "../../assets/img/felizaniversario 1.svg";
import { api } from "../../services/api";
import { Divbirthday, TextData, TextNameEmployee } from './style';

export const Aniversariantes = () => {
   var showdate = new Date();
   const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
   var displayTodaysDate = showdate.getDate() + " de " + monthNames[showdate.getMonth()] + " de " + showdate.getFullYear();


   // document.write("The current month is " + monthNames[d.getMonth()]);

   const [aniversariantes, setAniversariantes] = useState([])
   const HandleAniversariantes = () => {
      api.get("/funcionarios/aniversariantes/dia").then(res => {
         setAniversariantes(res?.data)
      }).catch((err) => {
         console.log(err)
      })
      // setAniversariantes(pessoas)
   }

   useEffect(() => {
      HandleAniversariantes();
   }, []);

   return (
      <Divbirthday>
         <TextData tabIndex={0}>{displayTodaysDate}</TextData>
         <img src={ImgBirthday} alt="" />

         {aniversariantes?.sort((a, b) => a.nome.localeCompare(b.nome)).map((aniversariante, index) => (
            <Divbirthday key={index}>
               <TextNameEmployee>{aniversariante?.nome}</TextNameEmployee>
               {/* <TextBirthday>{aniversariante?.nome}</TextBirthday> */}
            </Divbirthday>
         ))}
      </Divbirthday>
   )
}