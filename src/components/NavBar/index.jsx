import { useContext, useEffect, useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoIosListBox } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdCelebration } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { SlLogin } from "react-icons/sl";
import { Link } from 'react-router-dom';
import iconUser from '../../assets/img/iconUser.svg';
import iconLogout from '../../assets/img/log-out.png';
import logo from "../../assets/img/logo.png";
import { AuthContext } from "../../context/auth";
import "./style.css";
import { DivContainerMenuAccount, DivDropDown, DivLogo, DivMenuTrigger, DropdownItem, MainContainer, Option, Ul } from "./style.jsx";

import React from 'react';

export const NavBar = () => {
    const {logout,authenticated,setAuthenticated} = useContext(AuthContext)
    const [isMobile, setMobile] = useState(false)
    const [show,setShow] = useState(false);
    const [userLoged,setUserLoged] = useState([])

 const showMenu = () => {
    if(show === true) {
        setShow(false)
    }
    if(show === false) {
        setShow(true)
    }
 }

 useEffect(() => {
    const recoveredUser = localStorage.getItem('user')
    
    if(recoveredUser) {
     setUserLoged(JSON.parse(recoveredUser))
    }

 },[show])


return (
    <nav className="navbar2">
            <DivLogo>
            <Link to="/">
                <img tabIndex={0} className="logo" src={logo} alt="Logo Werner Tecidos"></img>
            </Link>
            </DivLogo>

            <div className={isMobile ? "nav-links-mobile" : "nav-links nav-container"}
            onClick={() => setMobile(false)}>
            
    
                    {isMobile ? 
                    <>

                    
                        <MainContainer>
                        <Ul>
                        <Option >
                            <Link className="stringLink" to="/">Código de Conduta Werner</Link>
                        </Option>
                        <Option>
                            <Link className="stringLink" to="/ramal">Ramais</Link>
                        </Option>
                        <Option >
                            <Link className="stringLink" to="/apostilas">Apostilas</Link>
                        </Option>
                        <Option >
                            <Link className="stringLink" to="/manuais">Manuais</Link>
                        </Option>
                        <Option >
                            <Link className="stringLink" to="/">Código de Conduta ABVTex</Link>
                        </Option>
                        </Ul>
                        
                        </MainContainer>

                    
                    </>

                    :  
                    
                        <>
                    {authenticated === true ?
                        <DivContainerMenuAccount authenticated={authenticated} >
                            <DivMenuTrigger onClick={showMenu}>
                                <img src={iconUser} className="iconUser" alt=""/>
                            </DivMenuTrigger>

                            <DivDropDown show={show}  >
                            <h3>{userLoged.nameUser}<br/><span>{userLoged.email}</span></h3>
                            <ul>
                            
                            
                                <DropdownItem >
                                    <IoHome  
                                    style={{height: "2.2rem",color: "black",width: "2.2rem"}}/>
                                    <Link to="/" onClick={() =>  setShow(false)}>Home</Link>
                                </DropdownItem>
                                <DropdownItem >
                                    <BiNews  style={{height: "2.2rem",color: "black",width: "2.2rem"}}/>
                                    <Link to="/arearh/postagem" onClick={() =>  setShow(false)}>Nova Postagem</Link>
                                </DropdownItem>
                                <DropdownItem >
                                    <RxUpdate  style={{height: "2.2rem",color: "black",width: "2.2rem"}} />
                                    <Link to="/arearh/cardapio" onClick={() =>  setShow(false)}>Atualizar Cardápio</Link>
                                </DropdownItem>
                                <DropdownItem >
                                        <MdCelebration style={{height: "2.2rem",color: "black",width: "2.2rem"}}  />
                                    <Link to="/arearh/aniversariantesPost" onClick={() =>  setShow(false)} >Editar Aniversariante</Link>
                                </DropdownItem>
                                <DropdownItem >
                                    <AiFillDelete  style={{height: "2.2rem",color: "black",width: "2.2rem"}}/>
                                    <Link to="/arearh/exclusao" onClick={() =>  setShow(false)}>Excluir Postagem</Link>
                                </DropdownItem>
                                <DropdownItem >
                                    <BsFillPersonPlusFill style={{height: "2.2rem",color: "black",width: "2.2rem"}} />
                                    <Link to="/arearh/novo/funcionario" onClick={() =>  setShow(false)}>Adicionar Funcionário</Link>
                                </DropdownItem>
                                <DropdownItem >
                                    <IoIosListBox  style={{height: "2.2rem",color: "black",width: "2.2rem"}} />
                                    <Link to="/arearh/funcionarios" onClick={() =>  setShow(false)}>Listar Funcionários</Link>
                                </DropdownItem>
                                <DropdownItem >
                                    <HiOutlineBuildingOffice2 style={{height: "2.2rem",color: "black",width: "2.2rem"}}  />
                                    <Link to="/arearh/novo/departamento" onClick={() =>  setShow(false)}>Adicionar Departamento</Link>
                                </DropdownItem>
                                <DropdownItem  onClick={() => {
                                        logout()
                                        setShow(false)
                                        setAuthenticated(false)
                                    }}>
                                    <img src={iconLogout} alt="" />
                                    <Link to="/">Logout</Link>
                                </DropdownItem>
                            </ul>
                            </DivDropDown>
                        </DivContainerMenuAccount>
                    
                    : 
                                    
                        <DivContainerMenuAccount authenticated={authenticated} >
                            <DivMenuTrigger onClick={showMenu}>
                                <img src={iconUser}  alt=""/>
                            </DivMenuTrigger>

                            <DivDropDown show={show}  >
                                <DropdownItem >
                                    <SlLogin style={{height: "2.2rem",color: "black",width: "2.2rem"}}/>
                                    <Link to="/login" onClick={() => {
                                        logout()
                                        setShow(false)
                                    }}>Login</Link>
                                </DropdownItem>
                            </DivDropDown>
                        </DivContainerMenuAccount>  
                
                        }  
                    </>
                }
            </div>
            <button className="mobile-menu-icon" onClick={() => setMobile(!isMobile)}>
                {isMobile ? (<i className="fas fa-times"><FaTimes/></i>) : (<i className="fas fa-bars"><FaBars/></i>)}
            </button>
        </nav>
    )
};
