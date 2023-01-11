import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: white;;
  } 

  html {
    font-size: 62.5%;
    height: 100%;
    overflow-x: hidden;
    
  }
  body {
  
  min-height:100%;
  position:relative;
  overflow-x: hidden;

  .access-button {
    top: 72rem;
    width: 100% !important;
    height: 5rem;
    position: absolute;
    left: -1rem;

  }
  
  }

  img {
    max-width: 100%;
    display: block;
  }
/*   ${props => props.index % 2 === 0 ?  "white" : "#70CC40"}; */
 /*  section {
    background-color: ${props => props.darkMode ? "#1B1B1B !important" :  "white" };    
  }
  main {
  div {
    background-color: ${props => props.darkMode ? "#343434 !important" :  "white" };   
    }
  }
  h2,h3,h1 {
    color: ${props => props.darkMode ? "white !important" :  "black" };
  }
  aside {
      border-left: ${props => props.darkMode ? "1px solid #C3C3C3 !important" :  "#337103" };
      border-right: ${props => props.darkMode ? "1px solid #C3C3C3 !important" :  "#337103" };
    }
  p {
    color: ${props => props.darkMode ? "#C3C3C3 !important" :  "black" };
  }

  label {
    color: ${props => props.darkMode ? "#C3C3C3 !important" :  "black" };
  }
  input {
    background-color: ${props => props.darkMode ? "gray !important" :  "white" }; 
    ::placeholder {
      color:  ${props => props.darkMode ? "white !important" :  "black" };
    }
  }
  textarea {
    background-color: ${props => props.darkMode ? "gray !important" :  "white" }; 
    ::placeholder {
      color:  ${props => props.darkMode ? "white !important" :  "black" };
    }
  }
 */
  a {
    text-decoration: none;
    //color: ${props => props.darkMode ? "#C3C3C3 !important" :  "#337103" };
  }
  li {
   // color: ${props => props.darkMode ? "#C3C3C3 !important" :  "#337103" };
    list-style: none;
    margin-bottom: 0;
  }

`

export default GlobalStyle;