import { yupResolver } from '@hookform/resolvers/yup';
import pt from 'date-fns/locale/pt';
import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { MenuAdminLeft } from "../../components/MenuAdminLeft";
import api from "../../services/api";
import { ButtonEnviar, DivContainer, DivInputs, DivLeft, Main, Section, TextPrincipal } from "./style";

registerLocale('pt', pt)


export const NovoFuncionario = () => {
  const [nome,setNome] = useState("")
  const [departamentos, setDepartamentos] = useState([]);
  const [departamento, setDepartamento] = useState([]);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [numeroRamal, setNumeroRamal] = useState("")
  
  const employeeSchema = yup.object().shape({
    nomeFuncionario: yup.string().required("Por favor, informe o nome do novo funcionário.").min(1).max(100),
    numeroRamal: yup.string().min(1).max(50),
  });

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(employeeSchema)
  })

  function adicionarFuncionario() {
    console.log(departamento)
    api.post("/funcionarios",
      {
        "nome": nome.toLowerCase(),
        "dataNascimento": startDate.toLocaleDateString(),
        "numeroRamal": numeroRamal,
        "departamento": {
          "idDepartamento": departamento
        }
      }).then(res => {
        toast.success(`Funcionario cadastrado com Sucesso!`,{autoClose:2000})
      setTimeout(() => {
        navigate("/arearh/funcionarios");
      }, 3000);
    }).catch(res => {
        toast.error(`Ocorreu um erro ao cadastrar o novo funcionário. Por favor, tente novamente!`,{autoClose:2000})
        toast.error(`DICA: Verifique se o departamento do funcionário foi preenchido.`,{autoClose:10000})
    })
  }

  const pickDepartments = () => {
    api.get("/departamentos").then(res => {
        setDepartamentos(res.data)
    })
}
const handleDateChangeRaw = (e) => {
  e.preventDefault();
}

  useEffect(() => {
    pickDepartments()
  })


    return (
    <Section>
      <MenuAdminLeft />
      <Main>
          <DivContainer>
            <DivLeft>
              <TextPrincipal tabIndex={0}>DADOS DO FUNCIONARIO</TextPrincipal>
                <form onSubmit={handleSubmit(adicionarFuncionario)}>
                  <DivInputs>
                    <input type="text" className='inputText' name="nomeFuncionario" value={nome} placeholder="Digite o Nome do Funcionario" {...register("nomeFuncionario")} onChange={(e) => setNome(e.target.value)} />
                    <p>{errors.nomeFuncionario?.message}</p>
                    <input type="text" className='inputText' name="numeroRamal" value={numeroRamal} placeholder="Digite o numero da ramal (se houver)" {...register("numeroRamal")} onChange={(e) => setNumeroRamal(e.target.value)} />
                    <p>{errors.numeroRamal && "Por favor, informe o número do ramal."}</p>

                    <div>
                      <label >Informe a data de nascimento do funcionario</label>
                      <DatePicker
                        className='inputDate'
                        selected={startDate}
                        locale="pt"
                        onChange={(Date) => setStartDate(Date)}
                        dateFormat="dd/MM/yyyy"
                        inputFormat="dd/MM/yyyy"
                        value={startDate}
                        onChangeRaw={handleDateChangeRaw}
                
                    />
                    </div>

                    <div className='options'>
                      <label >Escolha o Departamento desse Funcionario</label>
                      <select  onChange={(e) => setDepartamento(e.target.value)}>
                      <option  selected disabled>Escolha</option>
                      {departamentos?.map(dep => (
                      
                          <option  value={dep.idDepartamento} >{dep.nome.toUpperCase()}</option>
                      
                      ))}
                      </select>
                    </div>
                  </DivInputs>
                  <ButtonEnviar type="submit">Salvar</ButtonEnviar> 
                </form>
            </DivLeft>
          </DivContainer>    
      </Main>
  </Section>
    )
}
