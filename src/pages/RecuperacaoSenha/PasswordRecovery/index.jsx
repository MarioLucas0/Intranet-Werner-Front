import { yupResolver } from '@hookform/resolvers/yup';
import md5 from "md5";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import * as yup from 'yup';
import IconLogin from "../../../assets/img/iconLogin.png";
import logo from "../../../assets/img/logo.svg";
import { AuthContext } from "../../../context/auth";
import { api } from '../../../services/api';
import {
  DivButtons, DivContainerLeft, DivContainerRight, DivInput, DivLeft,
  DivRight, Section, TextAutor
} from "./style";

export const PasswordRecovery = () =>{
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [emailAutor,setEmailAutor] = useState('');
  const {idAutorpasswordRecovery,emailJwt} = useContext(AuthContext)
  const [accountJwt,setAccoutJwt] = useState('');
  const navigate = useNavigate();
  const {logout} = useContext(AuthContext)

  const newPassSchema = yup.object().shape({
    senha: yup.string().required().min(6).max(16),
    confirmarSenha: yup.string().oneOf([yup.ref("senha"), null])
  });

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(newPassSchema)
  })
  
  const handleNewPassword = () => {
    // Passar os dados do autor completos
    // Alterar apenas o password
    const saveNewPassword = async () => {
      api.put(`/autores/${idAutorpasswordRecovery}`,{
          "email": emailAutor.email,
          "password": md5(senha)
          
        }).then(res => console.log("Saving new password...", res),toast.success("Senha atualizada com sucesso!")).catch(err => {
          toast.error("Ocorreu um erro ao atualizar a senha. Por favor, tente novamente!") 
          console.log(err)
        });
    }
    const saveNewPasswordJwt = async () => {
      api.put(`/auth/update/${accountJwt?.userId}`,{
        "userEmail": accountJwt.userEmail,
        "userPassword": senha
      }).then(res => console.log("Saving new password...", res)).catch(err => console.log(err), )
  }
    saveNewPasswordJwt()
    saveNewPassword();
    navigate("/login");
  }

  const handleAccountJwt = () => {
    api.get(`/auth/verify/${emailJwt}`).then(res => {
      setAccoutJwt(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  } 

  const handleAccountAutor = () => {
    api.get(`/autores/${idAutorpasswordRecovery}`).then(res => {
      setEmailAutor(res.data)
    }).catch(err => console.log(err))
  }

  useEffect(() => { 
    handleAccountAutor()
    handleAccountJwt()
  },[])


  return (
    <Section>
    <DivLeft>
      <DivContainerLeft>
        <img src={logo} alt="" />
        <h1>WERNER <span>TECIDOS</span></h1>
        </DivContainerLeft>
      </DivLeft>
      <DivRight>
        <DivContainerRight>
        <Link className="voltarContainer" to="/login">
        <BsFillArrowLeftCircleFill className="iconVoltar"></BsFillArrowLeftCircleFill>
        <span className="voltar">VOLTAR</span>
        </Link>
          {/* <p>{String(authenticated)}</p> */}
          <img src={IconLogin} alt="" /> 
          <TextAutor tabIndex={0}>Recuperação de Senha</TextAutor>
          <form onSubmit={handleSubmit(handleNewPassword)}>
            <DivInput>
              <label for="senha">Nova senha</label>
              <input type="password" placeholder="Digite a nova senha" {...register("senha")} name="senha" onChange={(e) => setSenha(e.target.value)} required/>
              <p>{errors.senha?.message}</p>
              <label for="confirmar senha">Confirme a senha</label>
              <input type="password" placeholder="Digite a nova senha" {...register("confirmarSenha")} name="confirmarSenha" onChange={(e) => setConfirmarSenha(e.target.value)} required/>
              <p>{errors.confirmarSenha && "Senhas diferentes."}</p>
            </DivInput>
            <DivButtons>
              <button className="entrar" type="submit">Confirmar</button>
              <ToastContainer />
            </DivButtons>
          </form>
        </DivContainerRight>
      </DivRight>
    </Section>
  );
}


