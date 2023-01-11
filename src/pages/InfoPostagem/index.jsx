import { useContext } from "react";
import { SlideCarousel } from "../../components/Carousel";
import { MenuLeft } from "../../components/MenuLeft";
import { MenuRight } from "../../components/MenuRight";
import { AuthContext } from "../../context/auth";
import { formatDate } from "../../utils/dateFormat";
import {
  DivContainer, DivContentPost, DivContext, Post, PostTitle, Section,
  TextData, TextDescricao
} from "./style";
export const InfoPostagem = () =>{
  const {postagem} = useContext(AuthContext)
  
  return (
<Section>
      <MenuLeft />
      <DivContainer>
          <SlideCarousel />
        <DivContext>
        
            <Post key={postagem?.idpostagem}>
              <TextData>
                {"Postado em "+ formatDate(postagem?.dataPostagem)}
              </TextData>
              <PostTitle>{postagem?.titulo}</PostTitle>
              <DivContentPost>
                <img src={postagem?.imagem === null || postagem?.imagem === "" ? postagem?.imagemUrl : "data:application/image;base64," + postagem?.imagem} alt="" />
              <TextDescricao>
                {decodeURIComponent(escape(window.atob(postagem?.descricao).replace(/_/g, " ").replace(/\|/g, '"').replace(/\//g, "'")))}
              </TextDescricao>
              </DivContentPost>
            </Post>
        
        </DivContext>
      </DivContainer>
      <MenuRight />
    </Section>

  );
}


