import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import IconLogin from "../../../assets/img/iconLogin.png";
import logo from "../../../assets/img/logo.svg";
import { AuthContext } from "../../../context/auth";
import { api } from '../../../services/api';
import {
  DivButtons, DivContainerLeft, DivContainerRight, DivInput, DivLeft,
  DivRight, Section, TextAutor
} from "./style";

export const MailRecovery = () =>{
  const [email, setEmail] = useState('');
  const [codigo, setCodigo] = useState('');
  const [codigoTemp, setCodigoTemp] = useState('');
  const [mailId, setMailId] = useState([]);
  const [statusCode, setStatusCode] = useState(0);
  const notify = () => toast("");
  const {setAutorPasswordRecovery,setEmailJwt} = useContext(AuthContext)
  const [showModalAviso, setShowModalAviso] = useState(false);
  const [close, setClose] = useState(false);

  const mailSchema = yup.object().shape({
    email: yup.string().required().email(),
  });

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(mailSchema)
  })

  const navigate = useNavigate();
  const recoveryCode = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  useEffect(() => {
    setCodigoTemp(recoveryCode(6));
  },[statusCode])

  const handleCodigo = () => {
    console.log(codigoTemp)
    console.log(mailId);
    if(codigo !== codigoTemp) {
      console.log("Codigo incorreto");
    } else {
      console.log("Codigo Ok");
      setEmailJwt(email)
      setAutorPasswordRecovery(mailId?.idAutor)
      navigate("/password/new");
    }
  }
  
  const getMailId = async () => {
    const item = await api.get((`/autores/verify/${email}`)).then(res => {
      setMailId(res?.data);
      setStatusCode(res?.status);
      console.log(res?.status);
    }).catch(res => {
      setMailId(res?.data);
      setStatusCode(res?.status);
      toast.warn("O email informado não está cadastrado.");
      console.log(res?.status);
    });
  }

  const handleMail = () => {
    if(statusCode === 0) {
      handleShowModalAviso();
    }
    const mailBody = {email: email, codigo: codigoTemp};
    getMailId();  
    const idTemp = mailId?.idAutor;
    if(statusCode === 200) {
      api.post("/email", mailBody).then(res => {
        console.log("Sending mail...", res,
        toast.success("Email enviado com sucesso!"))}).catch(err => {
          console.log(err,
          toast.error("Erro no envio do email. Tente novamente!"))});
      }
    }

    const handleClose = () => {  
        setShowModalAviso(false)
    };

    const handleShowModalAviso = () => setShowModalAviso(true);

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
        <form onSubmit={handleSubmit(handleMail)}>
          <DivInput>
            <label for="email">Email de recuperação</label>
            <input type="text" value={email} placeholder="Digite seu email" {...register("email")} name="email" onChange={(e) => setEmail(e.target.value)} required/>
            <p>{errors.email?.message}</p>
            <DivButtons>
              <button style={{marginTop: "1rem"}} type="submit" className="enviar_mail">Enviar Email</button>
              <ToastContainer />
            </DivButtons>
            <Modal show={showModalAviso} style={{top: "42rem"}} >   
                <Modal.Body style={{fontSize: "1.8rem",fontWeight: "700"}}>Por favor, confirme o email de recuperação: <b>{email}</b></Modal.Body>
              <Modal.Footer>
               <Button style={{ width: "6rem", height: "3rem"}} variant="secondary" onClick={handleClose}>
                Voltar 
               </Button>
               <Button style={{ width: "6rem", height: "3rem"}} variant="success" type="submit" onClick={handleMail}>
                  Confirmar
               </Button>
              </Modal.Footer>
            </Modal>
          </DivInput>
        </form>
          <DivInput>
            <label for="codigo de recuperacao">Digite o código de recuperação</label>
            <input type="text" placeholder="código de recuperação" name="codigo de recuperacao" onChange={(e) => setCodigo(e.target.value)} required/>
          </DivInput>
          <DivButtons>
            <button className="enviar_codigo" onClick={handleCodigo}>Validar Código</button>
          </DivButtons>
      </DivContainerRight>
    </DivRight>
  </Section>
  );
}


