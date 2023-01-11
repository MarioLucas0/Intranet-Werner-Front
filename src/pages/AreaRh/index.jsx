
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { SlideCarousel } from "../../components/Carousel";
import { MenuAdminLeft } from "../../components/MenuAdminLeft";
import api from "../../services/api";
import { formatDate } from "../../utils/dateFormat";
import {
  ButtonEnviar, DivButtons, DivContainer, DivInput, DivInputCheck, DivMenuRight, HeaderInputs, LabelAutor,
  LabelData, LabelTitle, Li, Section, TextCheck, TextData, TextTitle, Ul
} from "./style";

export const AreaRh = () =>{
  const [postagens,setPostagens] = useState([])
  const [aux,setAux] = useState(false)

  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });
  
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { languages } = userinfo;
    
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }
  
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };

  function getPosts() {
  
  api.get("/posts").then(res => {
      setPostagens(res.data)
    }) 
  
  }

  function excluirPostagem() {
    try {
      userinfo?.response.map((ids) => (
        api.delete(`/posts/${ids}`).then(res => {      
          setAux(true)
        })
      ))
      toast.success(`Postagem Apagada com sucesso!`,{autoClose:2000})
    } catch (error) {
      toast.error(`Aconteceu Algum Problema!`,{autoClose:2000})
    }
  }

  useEffect(() => {
    getPosts()
    setAux(false)
  },[aux])


  return (
  <Section>
    <MenuAdminLeft />
    <DivContainer>
        <SlideCarousel />
      <DivMenuRight>
      <HeaderInputs>
        <TextCheck>Selecionar</TextCheck>
        <TextData>Data</TextData>
        <TextTitle>Titulo</TextTitle>
        <p className="textAutor">Autor</p>
      </HeaderInputs>
      <Ul >
        {postagens?.map((post,index) => {
          
            return (
                <Li key={post?.idPost} index={index}>
                    <DivInput>
                      <DivInputCheck>
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="languages"
                        value={post?.idPost}
                        id="flexCheckDefault"
                        onChange={handleChange}
                      />
                    </DivInputCheck>
                      <LabelData htmlFor={`custom-checkbox-${post?.idPost}`}>{formatDate(post?.dataPostagem)}</LabelData>
                      <LabelTitle htmlFor={`custom-checkbox-${post?.idPost}`}>{post?.titulo.substring(0,25) + "..."}</LabelTitle>
                      <LabelAutor htmlFor={`custom-checkbox-${post?.idPost}`}>RH</LabelAutor>
                    </DivInput>  
                </Li>
                
            );
          })} 
        </Ul>
        <DivButtons>
      <ButtonEnviar onClick={() => excluirPostagem()}>Excluir</ButtonEnviar>
      </DivButtons> 
      </DivMenuRight>
    </DivContainer>
  </Section>
  );


}


