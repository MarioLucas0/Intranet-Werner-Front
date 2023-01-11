
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { MenuAdminLeft } from "../../../components/MenuAdminLeft";
import api from "../../../services/api";
import { ButtonEnviar, DivContainer, DivInputs, DivLeft, Main, Section, TextPrincipal } from "./style";


export const EditarPostagem = () => {
 
  const [imagemUrl,setImagemUrl] =useState("")
  const [descricao,setDescricao] =useState("")
  const [postagem,setPostagem] = useState([])
  const [image,setImage] = useState('')
  const {id} = useParams()
  const navigate = useNavigate();
  const [titulo,setTitulo] =useState("")
  const date = new Date();

  const editSchema = yup.object().shape({
    titulo: yup.string().notRequired(),
    link: yup.string().url(),
    descricao: yup.string()
  });

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(editSchema)
  })

  function editarPostagem() {
    api.put(`/posts/${id}`,{
      "titulo": titulo ===  "" || titulo.match(/^(\s)+$/)  ? postagem.titulo : titulo,
      "descricao": descricao ===  ""  || descricao.match(/^(\s)+$/) ?  postagem.descricao : window.btoa(unescape(encodeURIComponent(descricao.replace(/\s/g, "_").replace(/\"/g, '|').replace(/\'/g, '/')))),
      "imagem": postagem.imagem,
      "dataPostagem": postagem.dataPostagem,
      "imagemUrl": imagemUrl ===  "" || imagemUrl.match(/^(\s)+$/) ? postagem.imagemUrl : imagemUrl
    }).then(res => {
      toast.success(`Postagem Atualizada com Sucesso!`,{autoClose:1000})
      setTimeout(() => {
        navigate("/"); 
      }, 2000);
    })
  }

  function handleImage(e) {
  setImage(e.target.files[0])
  }    
  const bodyFormData = new FormData();




  function editarPostagemComFoto() {

    bodyFormData.append('post', JSON.stringify({
      "titulo": titulo ===  "" || titulo.match(/^(\s)+$/)  ? postagem.titulo : titulo,
      "descricao": descricao ===  ""  || descricao.match(/^(\s)+$/) ?  postagem.descricao : 
      window.btoa(unescape(encodeURIComponent(descricao.replace(/\s/g, "_").replace(/\"/g, '|').replace(/\'/g, '/'))))
      
      ,
      "imagemUrl": imagemUrl ===  "" || imagemUrl.match(/^(\s)+$/) ? postagem.imagemUrl : imagemUrl,
      "imagem": [],
      "dataPostagem": postagem.dataPostagem
    }));
  
    bodyFormData.append('imagem', image);  

    api.put(`/posts/update+image/${id}`, bodyFormData, {
      headers: { "Content-Type": "multipart/form-data" }
    }).then(res => {
      toast.success(`Postagem Feita com Sucesso!`, { autoClose: 3000 })

    })
  }


  useEffect(() => {
    api.get(`/posts/${id}`).then(res => {
      setPostagem(res.data)
      setTitulo(res.data.titulo)
      setDescricao(window.btoa(unescape(encodeURIComponent(descricao.replace(/\s/g, "_").replace(/\"/g, '|').replace(/\'/g, '/')))))
      console.log(res.data)
    })
  },[])


    return (
    <Section>
      <MenuAdminLeft />
      <Main>
        <DivContainer>
          <DivLeft>
            <TextPrincipal tabIndex={0}>DADOS DA POSTAGEM</TextPrincipal>
            <form onSubmit={handleSubmit(() => {
                if(image === null|| image === undefined || image === "") {
                  editarPostagem()
                } else {
                  editarPostagemComFoto()
                }
                })}>
              <DivInputs>
                <div className="inputText">
                  <input type="text" value={titulo}  placeholder="Titulo da Postagem" {...register("titulo")} name="titulo" onChange={(e) => setTitulo(e.target.value)} />
                  <p>{errors.titulo?.message}</p>
                  <input type="text" value={imagemUrl} placeholder="Link da Imagem" {...register("link")} name="link" onChange={(e) => setImagemUrl(e.target.value)} />
                  <p>{errors.link?.message}</p>
                </div>

                <input type="file" name="image" accept="image/*" id="image" onChange={(e) => handleImage(e)} />
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


