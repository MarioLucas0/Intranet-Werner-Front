import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 10rem;
`
export const DivRight = styled.div`
  width: 50%;
  height: calc(100vh - 12rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
 


  img {
    height: 12rem;
    width: 13rem;
    margin-top: 10rem;
    margin-bottom: 2rem;
  }
  @media(max-width: 1200px) { 
    width: 100%;
    align-items: center;
  }
  @media(max-width: 630px) { 
   img  {
    margin: 0;
   }
  }
  @media(max-width: 320px) {
    height: 100vh;
    img  {
    margin-top: 0;
   }
   
  }
  

`
export const DivLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media(max-width: 1200px) { 
    display: none;
  }

`

export const TextAutor = styled.h1`

  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  :focus{
        outline: 0.4rem solid #70CC40;

  }
  span {
    color: #337103;
  }

  

`
export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  input {
    width: 22.9rem;
    height: 4rem;
    padding-left: 1rem;
    background: #D9D9D9;
    border-radius: 100px;
     
    :hover{
        outline: 0.4rem solid #70CC40;
        border: none;
    }
    :focus{
        outline: 0.4rem solid #70CC40;
        border: none;
  }

  } 
  label {
    margin-block: 1rem;
    font-weight: 700;
    font-size: 1.5rem;
    border: none;
    text-decoration: none;
    outline: none;
  }

  .toRecover {
    margin-top: 0.7rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 1rem;

    :focus{
        outline: 0.4rem solid #70CC40;

    }
  }

  .failed {
    border: 2px solid red;
  }

  .errorShow {
    display: block;
    color: 'red';
  }
  
  .errorHide {
    display: none;
    color: 'red';
  }
`
export const DivContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55rem;
  height: 68rem;
  background: #E5E5E5;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 20px;
  border: 1px groove #337103;
  padding-inline: 5.1rem;
  padding-top: 9.7rem;
  border-radius: 0 10px 10px 0;


    
  @media(max-width: 1200px) { 
    border-radius: 10px;
  }
  
  @media(max-width: 630px) { 
    padding: 0;
    align-items: center;
    justify-content: center;
    width: 95%;
  }

  @media(max-width: 320px) { 
    width: 95%;
  }
  img {
    margin-top: 7rem;
  }
`
export const DivContainerLeft = styled.div`

  width: 70%;
  background-color: #7B9B46;
  height: calc(100vh - 12rem);
  color: white;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 20px;
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  font-family: 'Archivo Black', sans-serif;
  height: 68rem;
  border-top: 1px groove #337103;
  border-left: 1px groove #337103;
  border-bottom: 1px groove #337103;

  img {
    margin-top: 12rem;
    margin-bottom: 3rem;
    height: 25rem;
  }

  h1 {
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    text-align: center;

  }
  span {
   font-size: 3rem;
   font-weight: 400;
   color: #ffffffa4;
  }
`
export const DivButtons = styled.div`
  display: flex;
  border-radius: 100px;
  margin-top: 1rem;
  
  button {
    padding-inline: 1rem;
  }

  .entrar {
    width: 70px;
    height: 22px;
    background: #70CC40;
    border-radius: 100px;
    margin-right: 1rem;
    border: none;
    font-weight: 700;
    color: #000000;
    
    :hover{
            background: #38681e;
            color: white;
            font-size: 1.3rem;

    }

    :focus{
            outline: 0.4rem solid #70CC40;
            background: #38681e;
            color: white;
            font-size: 1.3rem;

    }
  }
  .recuperarSenha { 
    background: #D9D9D9;
    border-radius: 100px;
    border: none;

    :hover{
            font-size: 1.3rem;
            background: #9c9999;
            color: #000000;
    }
    
    a {
      font-weight: 700;
      color: #000000;

      :focus{
            border-radius: 100px;
            outline: 0.6rem solid #70CC40;
            font-size: 1.3rem;
            background: transparent;
            color: #000000;

      }
    }
    
  }
`









