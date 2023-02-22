

import { yupResolver } from '@hookform/resolvers/yup';
import md5 from "md5";
import { useContext, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import IconLogin from "../../assets/img/iconLogin.png";
import logo from "../../assets/img/logo.svg";
import { NewUserSchema } from "../../components/Validation/NewUserValidation";
import { AuthContext } from "../../context/auth";
import { api } from '../../services/api';
import {
  DivButtons, DivContainerLeft, DivContainerRight, DivInput, DivLeft,
  DivRight, Section, TextAutor
} from "./style";


export const CreateAccount = () =>{

  const {setAdminPass,setSenhaAdmin,setNameUser} = useContext(AuthContext)
  const [nome,setNome] = useState('')
  const [email,setEmail] = useState('')
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [codigoEspecial, setCodigoEspecial] = useState('');
  const [codigo, setCodigo] = useState('');
  const [inputState, setInputState] = useState(true);
  const [showModalAviso, setShowModalAviso] = useState(false);
  const [close, setClose] = useState(false);
  const navigate = useNavigate();


  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(NewUserSchema)
  })

  const handleNewUser = async () => {
    await api.get(`/autores/verify/${email}`).then(res => {
      toast.warn("O email informado já está cadastrado.");
    }).catch(err => 
      // Adicionar loader no registro do JWT (Página de login)
      api.post('/auth/registro', {
        "usuarioNome" : nome,
        "userEmail":email,
        "userPassword": senha
      }).then(res => {
        createAutor();
      }).catch(err => 
          console.log(err)
      ));
  }


  const createAutor = () => {
    let hash = md5(senha);
    const userData = {email: email, password: hash}

    api.post(`/autores`, userData).then(res => {
      console.log("Saving new user...", res)
      setTimeout(() => {
          navigate('/login');
          console.log("ok")
        }, 5000);
        setNameUser(nome)
        toast.success("Usuário cadastrado com sucesso! Por favor, Aguarde 7 segundos que você será redirecionado para o login.")
    }).catch(err => 
      console.log(err)
    )
  }

  const generateCode = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const mailBody = {email: "mariolucas.2000@outlook.com", codigo: codigoEspecial};
  const sendMail = async () => {
    const response = api.post("/email/createAccount", mailBody).then(res => console.log("Sending mail...", res), ).catch(err => console.log(err))
        
    if(response.status === 200) {
      toast.success("Email enviado com sucesso!");
    } else if(response.status === 500) {
      toast.error("Erro no envio do email. Tente novamente!");
    }
  }

  const handleCodigo = () => {
     sendMail();
  }

  const validarCodigo = () => {
    if(codigo !== codigoEspecial) {
      toast.error("Código incorreto. Acesso negado.");
    } else {
      toast.info("Codigo Confirmado!");
      setInputState(false);
    }
  }

  const handleClose = () => {  
      setShowModalAviso(false)
    };
  
  const highlightText = {
    color: '#7B9B46'
  }

  useEffect(() => {
    setCodigoEspecial(generateCode(10));
    setShowModalAviso(true);
  },[])


  return (
  <Section>
    <Modal show={showModalAviso} style={{top: "42rem"}} >   
        <Modal.Body style={{fontSize: "2rem",fontWeight: "700"}}>
          Olá! Para criar uma nova conta Autor/Colaborador, é necessário que você solicite um código especial. Basta você clicar no botão <span style={highlightText}>"Solicitar Código"</span> e ele será enviado para o email do seu Administrador.
          <br></br>Após o recebimento, basta colar o código no campo <span style={highlightText}>"Código"</span> e apertar o botão <span style={highlightText}>"Confirmar Código"</span>. Caso o valor esteja correto, os campos de preenchimento serão desbloqueados.
        </Modal.Body>
        <Modal.Footer>
        <Button style={{ width: "8.5rem", height: "5rem", fontWeight: "700", fontSize: "1.5rem"}} variant="success" onClick={handleClose}>
          Ok, entendi!
        </Button>
        </Modal.Footer>
    </Modal>
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
        <TextAutor>Área de cadastro de novo <span>Autor</span></TextAutor>
        <form onSubmit={handleSubmit(handleNewUser)}>
          <DivInput>
            <label for="email" >Email</label>
            <input type="text" value={email} readOnly={inputState} placeholder="Digite seu email" {...register("email")} name="email" onChange={(e) => {
              setEmail(e.target.value)
              setAdminPass(e.target.value)
              }  } required />
            <p>{errors.email?.message}</p>

            <label for="nome" >Nome</label>
            <input type="text" value={nome} readOnly={inputState} placeholder="Digite seu nome" {...register("nome")} name="nome" onChange={(e) => {setNome(e.target.value)}} required />
            <p>{errors.nome?.message}</p>

            <label for="senha">Senha</label>
            <input type="password" value={senha} readOnly={inputState} placeholder="Digite sua senha" {...register("senha")} name="senha" onChange={(e) => {
              setSenhaAdmin(e.target.value)
              setSenha(e.target.value)
            }} />
            <p>{errors.senha?.message}</p>

            <label for="confirmar senha">Confirmar senha</label>
            <input type="password" value={confirmarSenha} readOnly={inputState} placeholder="Digite sua senha" {...register("confirmarSenha")} name="confirmarSenha" onChange={(e) => setConfirmarSenha(e.target.value)} />
            <p>{errors.confirmarSenha && "Senhas diferentes."}</p>

            <label for="confirmar senha">Codigo</label>
            <input type="text" value={codigo} placeholder="Digite o Codigo Especial" name="Digite o Codigo Especial" onChange={(e) => setCodigo(e.target.value)} required/>
            <p>{errors.codigo?.message}</p>
          </DivInput>
          <DivButtons>
            <button type="submit" className="cadastrar" disabled={inputState} >Cadastrar</button>
            <button className="cadastrar" onClick={handleCodigo}>Solicitar Código</button>
            <button className="cadastrar" onClick={validarCodigo}>Confirmar o Código</button> 
          </DivButtons>
        </form>
      </DivContainerRight>
    </DivRight>
  </Section>
  );
}

