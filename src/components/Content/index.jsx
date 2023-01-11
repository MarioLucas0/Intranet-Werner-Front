import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../context/auth';
import { AniversariantePost } from '../../pages/AniversariantePost';
import { AniversarianteView } from '../../pages/AniversarianteView';
import { Apostilas } from '../../pages/Apostilas';
import { AreaCardapio } from '../../pages/AreaCardapio';
import { EditarCardapio } from '../../pages/AreaCardapio/EditarCardapio';
import { AreaPostagem } from '../../pages/AreaPostagem';
import { EditarPostagem } from '../../pages/AreaPostagem/EditarPostagem';
import { AreaRh } from '../../pages/AreaRh';
import { Cardapio } from '../../pages/Cardapio';
import { CreateAccount } from '../../pages/CreateAccount';
import { DocumentationRh } from '../../pages/Documentacao/Rh';
import { Documentation } from '../../pages/Documentacao/TI';
import { Home } from '../../pages/Home';
import { InfoPostagem } from '../../pages/InfoPostagem';
import { ListaFuncionarios } from '../../pages/ListaFuncionarios';
import { Login } from '../../pages/Login';
import { Manuais } from '../../pages/Manuais';
import { NotFound } from '../../pages/NotFound';
import { NovoDepartamento } from '../../pages/NovoDepartamento';
import { NovoFuncionario } from '../../pages/NovoFuncionario';
import { Ramal } from '../../pages/Ramal';
import { EditarFuncionarioRamal } from '../../pages/Ramal/EditarFuncionarioRamal';
import { MailRecovery } from '../../pages/RecuperacaoSenha/MailRecovery';
import { PasswordRecovery } from '../../pages/RecuperacaoSenha/PasswordRecovery';




export const Content = () => {
  
      const Private = ({children}) => {
          const { authenticated,loading } = useContext(AuthContext)
          
          if(loading) {
            return <div>Carregando...</div>
          }
          if(!authenticated) {
            return <Navigate to="/login" />
          }

          return children
      }


      
   



  return (

    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/arearh/postagem" element={ <Private > <AreaPostagem /> </Private>} />
      <Route exact path="/arearh/postagem/editar/:id" element={ <Private ><EditarPostagem /> </Private> } />
      <Route exact path="/ramal" element={<Ramal />} />
      <Route exact path="/cardapio" element={ <Cardapio />} />
      <Route exact path="/arearh/cardapio" element={ <Private> <AreaCardapio /> </Private> } />
      <Route exact path="/arearh/novo/funcionario" element={ <Private> <NovoFuncionario /> </Private> } />
      <Route exact path="/arearh/novo/departamento" element={ <Private> <NovoDepartamento /> </Private> } />
      <Route exact path="/arearh/funcionarios" element={ <Private> <ListaFuncionarios /> </Private> } />
      <Route exact path="/arearh/areacardapio/editar/:id" element={<Private><EditarCardapio /></Private>} />
      <Route exact path="/arearh/ramal/editar/:id" element={<Private><EditarFuncionarioRamal /></Private>} />
      <Route exact path="/arearh/exclusao" element={<Private><AreaRh /> </Private>} />
      <Route exact path="/arearh/areapostagem" element={<Private><AreaPostagem /></Private>} />
      <Route exact path="/new/account" element={<CreateAccount /> } />
      <Route exact path="/postagem" element={<InfoPostagem /> } />
      <Route exact path="/password/mailrecovery" element={<MailRecovery />} />
      <Route exact path="/password/new" element={<PasswordRecovery />} />
      <Route exact path="/arearh/aniversariantesPost" element={<Private><AniversariantePost /> </Private>} />
      <Route exact path="/apostilas" element={<Apostilas />  } />
      <Route exact path="/documentacaoTi" element={<Private><Documentation/> </Private>} />
      <Route exact path="/documentacaoRh" element={<Private> <DocumentationRh/> </Private>} />
      <Route exact path="/manuais" element={<Manuais />} />
      <Route  path="/aniversariantes" element={<AniversarianteView />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  )
  

};

