

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { MenuAdminLeft } from "../../../components/MenuAdminLeft";
import api from "../../../services/api";
import { ButtonEnviar, DivContainer, DivInputs, DivLeft, Main, Section, TextPrincipal } from "./style";


export const EditarCardapio = () => {
  const [pratoPrincipal,setPratoPrincial] =useState("")
  const [opcao,setOpcao] =useState("")
  const [guarnicao,setGuarnicao] =useState("")
  const [cardapio,setCarpio] = useState("")
  const {id} = useParams()
  const navigate = useNavigate();

  function editarCardapio() {
    api.put(`/cardapios/${id}`,{
    "pratoPrincipal": pratoPrincipal ===  "" || pratoPrincipal.match(/^(\s)+$/)  ? cardapio.pratoPrincipal: pratoPrincipal,
		"opcao":  opcao ===  "" || opcao.match(/^(\s)+$/)  ? cardapio.opcao : opcao ,
		"guarnicao": guarnicao ===  "" || guarnicao.match(/^(\s)+$/)  ? guarnicao.opcao : guarnicao
    }).then(res => {
      toast.success(`Prato Alterado com Sucesso!`,{autoClose:1000})
      setTimeout(() => {
        navigate("/cardapio");
      }, 2000);
    })
  }

  useEffect(() => {
    api.get(`/cardapios/${id}`).then(res => {
      setCarpio(res.data)
      setOpcao(res.data.opcao)
      setGuarnicao(res.data.guarnicao)
      setPratoPrincial(res.data.pratoPrincipal)
      console.log(res)
    })
  },[])


    return (
    <Section>
      <MenuAdminLeft />
      <Main>
          <DivContainer>
            <DivLeft>
              <TextPrincipal tabIndex={0}>DADOS DO PRATO</TextPrincipal>
            {/*   <input type="text" value={titulo}  placeholder="Titulo da Postagem" {...register("titulo")} name="titulo" onChange={(e) => setTitulo(e.target.value)} />
                  <p>{errors.titulo?.message}</p> */}
                <DivInputs>
                  <input type="text" value={pratoPrincipal} placeholder="Digite o Prato Principal" name="pratoPrincipal" onChange={(e) => setPratoPrincial(e.target.value)} />
                  <input type="text" value={opcao} placeholder="Digite a Opcao" onChange={(e) => setOpcao(e.target.value)} />
                  <input type="text" value={guarnicao} placeholder="Digite Guarnicao" onChange={(e) => setGuarnicao(e.target.value)}/>
                  
                </DivInputs>
            <ButtonEnviar onClick={editarCardapio}>Salvar</ButtonEnviar> 
            </DivLeft>
          </DivContainer>    
      </Main>
  </Section>
    )
}
