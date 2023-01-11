
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { MenuAdminLeft } from "../../components/MenuAdminLeft";
import { postSchema } from "../../components/Validation/PostValidation";
import api from "../../services/api";
import { ButtonEnviar, DivContainer, DivInputs, DivLeft, Main, Section, TextPrincipal } from "./style";

export const AreaPostagem = () => {
  const [titulo, setTitulo] = useState("")
  const [imagemUrl, setImagemUrl] = useState("")
  const [descricao, setDescricao] = useState("")

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(postSchema)
  })

  
  function salvarProduto() {
    console.log("ok")

    api.post("/posts/save", {
      "titulo": titulo,
      "descricao":  window.btoa(unescape(encodeURIComponent(descricao.replace(/\s/g, "_").replace(/\"/g, '|').replace(/\'/g, '/')))),
      "imagemUrl": imagemUrl,
      "imagem": [],
      "dataPostagem": new Date()
    }).then(res => {
      toast.success(`Postagem Feita com Sucesso!`, { autoClose: 3000 })
    
    })

  }

 const [image,setImage] = useState('')

 function handleImage(e) {
  setImage(e.target.files[0])
 }    
  const bodyFormData = new FormData();

  function salvarPostagemComFoto() {
    bodyFormData.append('post', JSON.stringify({
      "titulo": titulo,
      "descricao": window.btoa(unescape(encodeURIComponent(descricao.replace(/\s/g, "_").replace(/\"/g, '|').replace(/\'/g, '/'))))
      ,
      "imagemUrl": imagemUrl,
      "imagem": [],
      "dataPostagem": new Date()
    }));
  
    bodyFormData.append('imagem', image);  

    api.post("/posts/save+image", bodyFormData, {
      headers: { "Content-Type": "multipart/form-data" }
    }).then(res => {
      toast.success(`Postagem Feita com Sucesso!`, { autoClose: 3000 })
    })
  }



  return (
    <Section>
      <MenuAdminLeft />
      <Main>
        <DivContainer>
          <DivLeft>
            <TextPrincipal tabIndex={0}>DADOS DA POSTAGEM</TextPrincipal>
            <form onSubmit={handleSubmit(() => {
                if(image === null|| image === undefined || image === "") {
                  salvarProduto()
                } else {
                  salvarPostagemComFoto()
                }
                })}>
              <DivInputs>
                <div className="inputText">
                  <input type="text" value={titulo} placeholder="Titulo da Postagem" {...register("titulo")} name="titulo" onChange={(e) => setTitulo(e.target.value)} />
                  <p>{errors.titulo?.message}</p>
                  <input type="text" value={imagemUrl} placeholder="Link da Imagem" {...register("link")} name="link" onChange={(e) => setImagemUrl(e.target.value)} />
                  <p>{errors.link?.message}</p>
                </div>

                <input type="file"  name="image" accept="image/*" id="image" onChange={(e) => handleImage(e)} />
                <p>{errors.descricao?.message}</p>
                <textarea type="text" value={descricao} placeholder="Descriçao da Postagem" {...register("descricao")} name="descricao" onChange={(e) => setDescricao(e.target.value)} />
              </DivInputs>
              <ButtonEnviar type="submit">Postar</ButtonEnviar>
              </form>
          </DivLeft>
        </DivContainer>
      </Main>
    </Section>
  )
}