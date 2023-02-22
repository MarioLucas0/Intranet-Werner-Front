import { yupResolver } from '@hookform/resolvers/yup';
import md5 from "md5";
import { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import gifloader from "../../assets/img/gifloader.gif";
import IconLogin from "../../assets/img/iconLogin.png";
import logo from "../../assets/img/logo.svg";
import { userSchema } from "../../components/Validation/UserValidation";
import { AuthContext } from "../../context/auth";
import { api } from "../../services/api";
import {
  DivButtons, DivContainerLeft, DivContainerRight, DivInput, DivLeft,
  DivRight, Section, TextAutor
} from "./style";

export const Login = () =>{
const {login} = useContext(AuthContext)

  const navigate = useNavigate();
  const [email,setEmail] = useState("")
  const [senha,setSenha] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const notify = () => toast("");
  
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(userSchema)
  })

  const handlejwt =  () => {
    const credentials = {
      "email": 'lucas123@gmail.com',
      "password": '123456'
      }
    api.post('/auth/login', credentials).then((response) => {
            login(email,senha)
            }).catch((error) => {
            });
      }


	const handleLogin = async () => {
    const credentials = {
      email: email,
      password: `${md5(senha)}`
    }

    api.post('/autores/login', credentials).then((response) => {
      handlejwt()
      navigate('/') 
    }).catch((error) => {
      console.log(error);
      toast.error("Usuário ou senha incorretos.");
    });
  }

  const gifLoader = () => (
 
    <div style={{background: "#00000026",width: "55rem",
    height: "68rem",display: "flex",alignItems: "center",justifyContent: "center"}}>
      <img style={{width: "33rem", height: "30rem",margin: 0}} src={gifloader} alt="loader" />
    </div>
  )
  
  return (
  <Section>
  <DivLeft>
    <DivContainerLeft>
      <img src={logo} alt="logotipo werner tecidos" />
      <h1>WERNER <span>TECIDOS</span></h1>
    </DivContainerLeft>
    </DivLeft>
    <DivRight>
    <DivContainerRight>
        <img src={IconLogin} alt="" /> 
        <TextAutor tabIndex={0}>Área do <span>Autor</span></TextAutor>
       <form onSubmit={handleSubmit(handleLogin)}>
        <DivInput>
            <label for="email">Login</label>
            <input type="text" value={email} placeholder="Digite seu email" {...register("email")} name="email" onChange={(e) => setEmail(e.target.value)} />
            <p>{errors.email?.message}</p>
            <label for="senha">Senha</label>
            <input type="password" value={senha} placeholder="Digite sua senha" {...register("senha")} name="senha" onChange={(e) => setSenha(e.target.value)} />
            <p>{errors.senha?.message}</p>
            <Link className="toRecover" to="/password/mailrecovery">Recuperar Senha</Link>
            <DivButtons>
              <button type="submit" className="entrar">Entrar</button>
              <button className="recuperarSenha" tabIndex={-1}><Link to="/new/account">Criar Conta</Link></button>
            </DivButtons>
        </DivInput>
        </form>
      </DivContainerRight>
    </DivRight>
  </Section>
  );
}


