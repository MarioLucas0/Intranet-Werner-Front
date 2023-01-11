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
  justify-content: center;
  align-items: center;
  margin: 1em 1em;
  input {
    width: 22.9rem;
    text-align: center;
    height: 4rem;
    padding-left: 1rem;
    background: #D9D9D9;
    border-radius: 100px;

    :hover{
          border:none;
          outline: 0.4rem solid #70CC40;
          

    }

    :focus{ 
          border: none;
          outline: 0.4rem solid #70CC40;
           

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
  padding-inline: 5.1rem;
  border-radius: 0 10px 10px 0;
  border: 1px groove #337103;


  
  .voltarContainer {
    padding-right: 34rem;
    padding-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;

    :focus{
            outline: 0.4rem solid #70CC40;
           
    }

  }
  .iconVoltar {
    color: gray;
    height: 2.8rem;
    width: 2.8rem;
  }
  .voltar {
    font-weight: 700;
    font-size: 1rem;
    color: gray;
    font-size: 1.5rem;
    padding-left: 0.8rem;
  }

  img {
    margin-top: 11.5rem;
  }

  @media(max-width: 630px) { 
    padding: 0;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
  img {
    margin-top: 7rem;
  }
  @media(max-width: 1200px) { 
    border-radius: 10px;
  }
  
  @media(max-width: 630px) { 
    padding: 0;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
  @media(max-width: 630px) { 
    width: 95%;
    justify-content: flex-start;

    .voltarContainer {
   
      padding-top: 2rem;
      padding-right: 20rem;
      padding-left: 2rem;
    }
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
    width: 100%;
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
            cursor: pointer;

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
    a {
      font-weight: 700;
      color: #000000;
    }
    
  }

  
`









