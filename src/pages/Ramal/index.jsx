
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import editar from "../../assets/img/botao-editar.png";
import { SlideCarousel } from "../../components/Carousel";
import { MenuLeft } from "../../components/MenuLeft";
import { MenuRight } from '../../components/MenuRight';
import api from "../../services/api";
import {
  DivBoard, DivContainer, DivName, DivNumber, DivRamal, Section, Text, TextName, TextNumber, TextPrincipal
} from "./style";
export const Ramal = () =>{

  const [departamentos,setDepartamentos] = useState([])
  const [funcionarios,setFuncionarios] = useState([])
  const [showModalAviso, setShowModalAviso] = useState(false);

  function Departamentos() {
    api.get("/departamentos").then(res => {
      setDepartamentos(res.data)
      console.log(res.data)
    })
  }
  
  function Funcionarios() {
    api.get("/funcionarios").then(res => {
      console.log(res.data)
      setFuncionarios(res.data)
    })
  }

  useEffect(() => {
  Departamentos()
  Funcionarios()
  },[])

  


  return (
    <Section>
    <MenuLeft />
      <DivContainer>
        <SlideCarousel />
        <DivRamal>
            <Text>Ramal</Text>
          {departamentos?.map((departamento) => (
            <div  className='ramal' key={departamento?.idDepartamento}>
              <TextPrincipal>
                {departamento?.nome}</TextPrincipal>  
              {funcionarios?.map((funcionario) => {  
                if( funcionario?.departamento.idDepartamento ===  departamento?.idDepartamento && funcionario.numeroRamal !== null && funcionario.numeroRamal !== "") return (
                <DivBoard key={funcionario?.idFuncionario}>
                    <DivName>
                      <TextName>
                      <Link to={`/arearh/ramal/editar/${funcionario?.idFuncionario}`}>
                      <img src={editar} alt="Botao Editar Postagem" />
                      </Link>
                        {funcionario?.nome}</TextName> 
                    </DivName>
                    <DivNumber>
                      <TextNumber>{funcionario?.numeroRamal}</TextNumber>
                    </DivNumber>
                  </DivBoard>
                )
                })}
            </div>
          ))}
        </DivRamal>
      </DivContainer>
    <MenuRight />
</Section>
  );

  
}


