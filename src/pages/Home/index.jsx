import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gifLoader from "../../assets/img/gifloader.gif";
import Pesquisa from "../../assets/img/Pesquisa.svg";
import { SlideCarousel } from "../../components/Carousel";
import { MenuLeft } from "../../components/MenuLeft";
import { MenuRight } from "../../components/MenuRight";
import ModalAviso from "../../components/modalNotification";
import { AuthContext } from "../../context/auth";
import { getPosts } from "../../services/api";

import {
  ButtonLimpar, DivContainer, DivContentPost, DivContext, DivInput, DivInputs, DivLoader, Post, PostTitle, Section, TextDescricao
} from "./style";

export const Home = () =>{
  const [posts,setPosts] = useState([])
  const [busca, setBusca] = useState("");
  const {setPostagem,authenticated,setDarkMode,darkMode} = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false)


  useEffect(() => {
  
  (async () => {
    const response = await getPosts()
      setPosts(response.data)
      setIsLoading(false)
      console.log(response.data)
    })() 
  },[])

  const loaderPostagem = () => (
    <DivLoader >
        <img style={{height: "33rem"}} src={gifLoader} alt="Gif Loader" ></img>
        <p style={{fontSize: "1.8rem", fontWeight: 700,position: "absolute",top: "27rem"}}>Carregando..., Aguarde Por Favor!</p>
    </DivLoader>
)
  const handleDarkMode = () => {
    console.log("ok")
    if(darkMode) {
      setDarkMode(false)
    }
    if(!darkMode) {
      setDarkMode(true)
    }
  }

  const limpar = () => {
    if(busca !== "") {
      setBusca("")
      
    }
  }

  const postagemFiltrados = posts?.filter((post) => post.titulo.toUpperCase().includes(busca.toUpperCase())) 
  
  useEffect(() => {
    setOpenModal(true)
  })
  return (

    <Section>
      <MenuLeft />
      <DivContainer>
          <SlideCarousel />
        {/*   <>
          <button style={{width: "10rem"}} onClick={handleDarkMode}>BTN DARKMODE</button>
          </> */}
        <DivInputs>
            <DivInput>
              <input type="text" className="filtro" placeholder="Digite o Titulo da postagem" value={busca}  onChange={(e) => setBusca(e.target.value)}/>
              <img src={Pesquisa} alt="" />
            </DivInput>
              <ButtonLimpar onClick={limpar}>Limpar Filtro</ButtonLimpar> 
          </DivInputs>
        
        <DivContext>
          {isLoading ? loaderPostagem() : postagemFiltrados?.sort((a, b) => b.idPost - a.idPost).map((post) => (
            
            <Post key={post?.idPost}>
              <PostTitle>{post?.titulo}</PostTitle>
              <DivContentPost>
              <TextDescricao>{
                  decodeURIComponent(escape(window.atob(post?.descricao).replace(/_/g, " ").replace(/\|/g, '"').replace(/\//g, "'"))).substring(0,320)  + "..."}
              </TextDescricao>
              <Link tabIndex={0} to="/postagem" onClick={() => {
                  setPostagem(post)
              }}>Veja mais...</Link>
              </DivContentPost>
            </Post>
          ))}
        </DivContext>
      </DivContainer>
      <MenuRight />
  
      <ModalAviso isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        Conteúdo do modal
      </ModalAviso>
    </Section>

  );
}


