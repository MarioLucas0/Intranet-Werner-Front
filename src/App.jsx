import { useContext } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Content } from './components/Content/index';
import { NavBar } from "./components/NavBar";
import { AuthContext } from "./context/auth";
import GlobalStyle from './style/global';

export const  App = ()  => {

  const {darkMode} = useContext(AuthContext)
  console.log(darkMode)

  return (
    <Router>
        <GlobalStyle darkMode={darkMode} />
        <ToastContainer />
        <NavBar/>
        <Content/>
       {/*  <Vlibras /> */}
  </Router>

  );
}


