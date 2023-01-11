import React from 'react';
import imageABVtex from "../../../assets/img/imageABVtex.png";
import imageAniversariantes from "../../../assets/img/imageAniversariantes.png";
import imageApostila from "../../../assets/img/imageApostila.png";
import imageBtnDocumentacaoTi from "../../../assets/img/imageBtnDocumentacaoTi.png";
import imageBtnTutorial from "../../../assets/img/imageBtnTutorial.png";
import imageCardapio from "../../../assets/img/imageCardapio.png";
import imageCodigoABVtex from "../../../assets/img/imageCodigoABVtex.png";
import imadeCodigoConduta from "../../../assets/img/imageCodigoConduta.png";
import imageDocumentacaoTi from "../../../assets/img/imageDocumentacaoTi.png";
import imageEditarPost from "../../../assets/img/imageEditarPost.png";
import imageEditarPostagem from "../../../assets/img/imageEditarPostagem.png";
import imageListaAniversariantes from "../../../assets/img/imageListaAniversariantes.png";
import imageListaApostilas from "../../../assets/img/imageListaApostilas.png";
import imageListaCardapio from "../../../assets/img/imageListaCardapio.png";
import imageListaRamal from "../../../assets/img/imageListaRamal.png";
import imageManuais from "../../../assets/img/imageManuais.png";
import imageMenuAdm from "../../../assets/img/imageMenuAdm.png";
import imageModalTutorial from "../../../assets/img/imageModalTutorial.png";
import imagePageCodigoConduta from "../../../assets/img/imagePageCodigoConduta.png";
import imageRamal from "../../../assets/img/imageRamal.png";

import './style.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export const DocumentationRh = () => {
  return (
    <section className='sectionDocumentation '>
      <div className="container">
      <h1 className="h1 text-bold border-bottom border-success d-flex justify-content-center mt-5 pb-3">Explicando Funcionalidades da Aplicação</h1>
        <div className="section">
          <h2 className="mt-6 text-bold">Editar Postagem</h2>
          <img className='border border-secondary' src={imageEditarPostagem} alt="" />
          <div className='border pt-3 pb-3 mt-4 mb-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          <p >Ao clicar neste botão, você será redirecionado para uma página onde poderá editar a postagem que você escolheu. Lá, você poderá alterar o título, o conteúdo e qualquer outra informação da postagem. Depois de fazer as alterações desejadas, basta clicar no botão <strong >Postar</strong> para atualizar a postagem com as mudanças que você fez.</p>
          </div>
          <h3>Página de Edição de Postagem</h3>
          <img src={imageEditarPost } alt="" />
          <p></p>
        </div>  
        <div className=" border-bottom border-success mt-5 pb-3"></div>
        <div className="section">
          <h2 className="mt-6 text-bold">Visualizar Aniversariantes</h2>
          <img className='border border-secondary' src={imageAniversariantes} alt="" />
          <div className='border pt-3 pb-3 mt-4 mb-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          <p >Ao clicar neste botão, você será redirecionado para uma página onde poderá visualizar a lista de aniversariantes de cada mês. Nessa página, 
            você terá acesso a uma lista de todos os aniversariantes, agrupados por mês, e poderá ver as informações de cada pessoa, como nome e data de aniversário.</p>
          </div>
          <h3>Página com a Lista de Aniversariantes</h3>
          <img src={imageListaAniversariantes} alt="" />
          <p></p>
        </div> 
        <div className=" border-bottom border-success mt-5 pb-3"></div>
        <div className="section">
          <h2 className="mt-6 text-bold">Visualizar Cardápio</h2>
          <img className='border border-secondary' src={imageCardapio} alt="" />
          <div className='border pt-3 pb-3 mt-4 mb-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          <p >Ao clicar neste botão, você será redirecionado para uma página onde poderá visualizar a lista de pratos da semana. Nessa página, você encontrará uma lista de pratos para cada dia da semana, incluindo o prato principal, a guarnição e uma opção vegetariana ou vegana, caso exista. Assim, você poderá planejar suas refeições com antecedência e garantir que terá sempre opções deliciosas e saudáveis à sua disposição.</p>
          </div>
          <h3>Página com a Lista de Pratos</h3>
          <img src={imageListaCardapio} alt="" />
          <p></p>
        </div> 
        <div className=" border-bottom border-success mt-5 pb-3"></div>
        <div className="section">
          <h2 className="mt-6 text-bold">Visualizar Codigo de Conduta</h2>
          <img className='border border-secondary' src={imadeCodigoConduta} alt="" />
          <div className='border pt-3 pb-3 mt-4 mb-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          <p >Ao clicar neste botão, você será redirecionado para uma página onde poderá ler e baixar o Código de Conduta da Werner. Neste documento, você encontrará as diretrizes e valores que guiam a atuação da nossa empresa e de todos os nossos funcionários e parceiros. O Código de Conduta da Werner foi criado para garantir que todos estejamos comprometidos com o mais alto padrão de ética e integridade em nossas atividades profissionais. Além disso, o código estabelece as expectativas que temos em relação ao comportamento dos nossos funcionários e parceiros e as medidas que tomamos para garantir o cumprimento dessas expectativas. Ao ler e seguir o Código de Conduta da Werner, todos contribuímos para uma cultura de respeito e responsabilidade na empresa.</p>
          </div>
          <h3>Pagina com a Pdf do Codigo de Conduta</h3>
          <img src={imagePageCodigoConduta} alt="" />
          <p></p>
        </div> 
        <div className=" border-bottom border-success mt-5 pb-3"></div>
        <div className="section">
          <h2 className="mt-6 text-bold">Visualizar Ramal</h2>
          <img className='border border-secondary' src={imageRamal} alt="" />
          <div className='border pt-3 pb-3 mt-4 mb-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          <p >Ao clicar neste botão, você será redirecionado para a página de ramal, onde poderá visualizar a lista de todos os departamentos e funcionários, com seus respectivos números de ramal e nomes.</p>
          </div>
          <h3>Pagina de Ramal</h3>
          <img src={imageListaRamal} alt="" />
          <p></p>
        </div> 
        <div className=" border-bottom border-success mt-5 pb-3"></div>
        <div className="section">
          <h2 className="mt-6 text-bold">Visualizar Apostilas</h2>
          <img className='border border-secondary' src={imageApostila} alt="" />
          <div className='border pt-3 pb-3 mt-4 mb-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          <p >Ao clicar neste botão, você será redirecionado para a página de apostilas, onde poderá visualizar a lista de todas as apostilas disponíveis para download, visualização e salvamento. Além disso, você também terá a opção de adicionar uma nova apostila ao sistema clicando no botao <strong>Escolher arquivo</strong>.</p>
          </div>
          <h3>Pagina de Apostilas</h3>
          <img src={imageListaApostilas} alt="" />
          <p></p>
        </div>
        <div className=" border-bottom border-success mt-5 pb-3"></div>
        <div className="section">
          <h2 className="mt-6 text-bold">Visualizar Manuais</h2>
          <img className='border border-secondary' src={imageManuais} alt="" />
          <div className='border pt-3 pb-3 mt-4 mb-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          <p >Ao clicar neste botão, você será redirecionado para a página de manuais, onde poderá visualizar a lista de todas os manuais disponíveis para download, visualização e salvamento. Além disso, você também terá a opção de adicionar um novo manual ao sistema clicando no botao <strong>Escolher arquivo</strong>.</p>
          </div>
          <h3>Pagina de Apostilas</h3>
          <img src={imageListaApostilas} alt="" />
          <p></p>
        </div> 
        <div className=" border-bottom border-success mt-5 pb-3"></div>
        <div className="section">
          <h2 className="mt-6 text-bold">Visualizar Codigo de Conduta ABVTex</h2>
          <img className='border border-secondary' src={imageABVtex} alt="" />
          <div className='border pt-3 pb-3 mt-4 mb-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          <p >Ao clicar neste botão, você será redirecionado para uma página onde poderá ler e baixar o Código de Conduta da AbvTex. Este documento estabelece os padrões de comportamento e ética esperados de todos os funcionários da empresa, bem como as medidas que serão tomadas em caso de violação desses padrões. É importante que todos os funcionários leiam e compreendam as disposições deste código para garantir a integridade e a transparência de nossas operações.</p>
          </div>
          <h3>Pagina com o Pdf do Codigo de Conduta ABVTex</h3>
          <img src={imageCodigoABVtex} alt="" />
          <p></p>
        </div>   
        <div className=" border-bottom border-success mt-5 pb-3"></div>
        <div className="section">
          <h2 className="mt-6 text-bold">Visualizar DocumentaçãoTI</h2>
          <img className='border border-secondary' src={imageBtnDocumentacaoTi} alt="" />
          <div className='border pt-3 pb-3 mt-4 mb-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          <p >Ao clicar neste botão, você será redirecionado para uma página de documentação da aplicação destinada ao pessoal de TI. Nesta página, serão apresentadas informações sobre as versões da aplicação, as dependências necessárias para o seu funcionamento e explicações detalhadas de algumas das funções e métodos utilizados na aplicação. Esta documentação é importante para ajudar os profissionais de TI a entender como a aplicação funciona e como ela pode ser gerenciada e mantida com eficiência.</p>
          </div>
          <h3>Pagina com a  Documentação destinada ao pessoal de TI </h3>
          <img src={imageDocumentacaoTi} alt="" />
          <p></p>
        </div>   
        <div className=" border-bottom border-success mt-5 pb-3"></div>
        <div className="section">
          <h2 className="mt-6 text-bold">Visualizar Tutorial Intranet</h2>
          <img className='border border-secondary' src={imageBtnTutorial} alt="" />
          <div className='border pt-3 pb-3 mt-4 mb-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          <p >Ao clicar neste botão, uma janela modal será aberta na página principal, contendo um tutorial simples que explicará alguns aspectos da tela principal. Este tutorial é uma ótima maneira de aprender mais sobre o funcionamento da tela principal e como aproveitar ao máximo as suas funcionalidades.</p>
          </div>
          <h3>Modal com o Tutorial Intranet Werner</h3>
          <img src={imageModalTutorial} alt="" />
          <p></p>
        </div>   
        <div className=" border-bottom border-success mt-5 pb-3"></div>
        <div className="section">
          <h2 className="mt-6 text-bold">Abrir Menu ADM</h2>
          <img className='border border-secondary' src={imageMenuAdm} alt="" />
          <div className='border pt-3 pb-3 mt-4 mb-4 alturaLista d-flex flex-column align-items-baseline bg-light boxVersion'>
          <p>Ao clicar no botão no canto superior direito, você abrirá o menu de administração, onde encontrará todas as opções de configuração e gerenciamento disponíveis para o administrador. Este menu oferece acesso a todas as ferramentas e recursos necessários para gerenciar o sistema de maneira eficiente e mantê-lo atualizado e em funcionamento perfeito.</p>
          </div>
          <p></p>
        </div>   
      </div>
    </section>
  );
};