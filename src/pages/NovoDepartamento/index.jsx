import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { MenuAdminLeft } from "../../components/MenuAdminLeft";
import api from "../../services/api";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import {
  ButtonEnviar, DivContainer, DivDepartamento, DivInputs, DivLeft, DivListDepartaments, HeaderDepartaments, Main, Section, TextIdDepartament, TextNameDepartament, TextPrincipal
} from "./style";


export const NovoDepartamento = () => {
  const [nomeDepartamento, setNomeDepartamento] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [aux,setAux] = useState(false);
  const navigate = useNavigate();

  const departamentoSchema = yup.object().shape({
    departamento: yup.string().required("Por favor, informe o nome do novo departamento.").min(1).max(100),
  });

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(departamentoSchema)
  })

  function adicionarDepartamento() {
    api.post("/departamentos",
      {
        "nome":  nomeDepartamento
      }).then(res => {
        toast.success(`Departamento adicionado com Sucesso!`,{autoClose:2000})
        if(aux ===false){
          setAux(true)
        } else {
          setAux(false)
        }
    }).catch(res => {
        toast.error(`Ocorreu um erro ao adicionar o novo departamento. Por favor, tente novamente!`,{autoClose:2000})
    });
  }

  const pickDepartments = () => {
    api.get("/departamentos").then(res => {
        setDepartamentos(res.data)
    })
}

  useEffect(() => {
    pickDepartments()
    
  },[aux])


    return (
    <Section>
      <MenuAdminLeft />
      <Main>
          <DivContainer>
            <DivLeft>
              <TextPrincipal tabIndex={0}>DADOS DO DEPARTAMENTO</TextPrincipal>

                <form onSubmit={handleSubmit(adicionarDepartamento)}>
                  <DivInputs>
                    <input type="text" value={nomeDepartamento} placeholder="Digite o Nome do departamento" {...register("departamento")} name="departamento" onChange={(e) => setNomeDepartamento(e.target.value)} />
                    <p>{errors.departamento?.message}</p>
                  </DivInputs>

                  <ButtonEnviar type="submit">Salvar</ButtonEnviar> 
                </form>
                <TextPrincipal tabIndex={0}>LISTA DOS DEPARTAMENTOS</TextPrincipal>
             
                <DivListDepartaments tabIndex={0}>
                <HeaderDepartaments>
                  <TextNameDepartament>Nome do Departamento</TextNameDepartament>
                  <TextIdDepartament>Codigo Departamento</TextIdDepartament>
                </HeaderDepartaments>
                  {departamentos?.map((dep) => (
                    <DivDepartamento tabIndex={0}>
                      <h2>{dep?.nome}</h2>
                      <span>{dep?.idDepartamento}</span>
                    </DivDepartamento>
                  ))}
                </DivListDepartaments>
          
            </DivLeft>
          </DivContainer>    
      </Main>
  </Section>
    )
}
