
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { MenuAdminLeft } from "../../../components/MenuAdminLeft";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import api from "../../../services/api";
import { ButtonEnviar, DivContainer, DivInputs, DivLeft, Main, Section, TextPrincipal } from "./style";

export const EditarFuncionarioRamal = () => {
  const [nome, setNome] = useState("")
  const [dataNascimento, setDataNascimento] = useState("")
  const [numeroRamal, setNumeroRamal] = useState("")
  const [funcionario, setFuncionario] = useState("")
  const {id} = useParams()
  const navigate = useNavigate();
  
  const employeeSchema = yup.object().shape({
    nomeFuncionario: yup.string().required("Por favor, informe o nome do novo funcionário.").min(1).max(100),
    numeroRamal: yup.string().required("Por favor, informe o número do ramal").min(1).max(50),
  });

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(employeeSchema)
  })

  function editarFuncionarioRamal() {
    console.log("ok")
    api.put(`/funcionarios/${id}`, {
      "nome": nome === "" ? funcionario?.nome : nome ,
      "dataNascimento" : dataNascimento === "" ? funcionario?.dataNascimento : dataNascimento,
      "numeroRamal": numeroRamal === "" ? funcionario?.numeroRamal : numeroRamal,
      "departamento": {
        "idDepartamento": funcionario?.departamento.idDepartamento,
      }
    }).then(() => {
      toast.success(`Dados Atualizados com Sucesso!`, { autoClose: 1500 })
      setTimeout(() => {
        console.log("ok")
        navigate("/ramal");
      }, 2500);
    }).catch(res => {
      toast.error("Ocorreu um erro ao atualizar os dados deste funcionário. Por favor, tente novemante!")
    })
  }

  useEffect(() => {
    api.get(`/funcionarios/${id}`).then(res => {  
      setFuncionario(res.data)
      setNumeroRamal(res.data.numeroRamal)
      setNome(res.data.nome)
      // setDataNascimento(res.data.dataNascimento)
      console.log(res.data)
    })
  },[])


  return (
    <Section>
      <MenuAdminLeft />
      <Main>
        <DivContainer>
          <DivLeft>
            <TextPrincipal tabIndex={0}>NOVOS DADOS DO FUNCIONÁRIO</TextPrincipal>
            <form onSubmit={handleSubmit(editarFuncionarioRamal)}>
              <DivInputs>
                <input type="text" value={nome} placeholder="Nome do Funcionário" {...register("nomeFuncionario")} name="nomeFuncionario" onChange={(e) => setNome(e.target.value)} />
                <p>{errors.nomeFuncionario?.message}</p>
                {/* <input type="text" value={dataNascimento} placeholder="Digite a data de nascimento" onChange={(e) => setDataNascimento(e.target.value)} readOnly/> */}
                <input type="text" value={numeroRamal} placeholder="Digite o número da ramal" {...register("numeroRamal")} name="numeroRamal" onChange={(e) => setNumeroRamal(e.target.value)} />
                <p>{errors.numeroRamal && "Por favor, informe o número do ramal."}</p>
              </DivInputs>
              <ButtonEnviar type="submit">Salvar</ButtonEnviar>
            </form>
          </DivLeft>
        </DivContainer>
      </Main>
    </Section>
  )
}