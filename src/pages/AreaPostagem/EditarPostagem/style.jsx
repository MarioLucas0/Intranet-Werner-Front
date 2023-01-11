import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh);
  display: flex;
  justify-content: space-between;
  padding-top: 10rem;
  @media(max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`
export const DivContainer = styled.div`
  width: 80%;
  height: 90%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding-left: 4.7rem;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  @media(max-width: 1300px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-left: 0;
  }
  @media(max-width: 1000px) {
    width: 93%;
    
  }
  @media(max-width: 600px) {
    height: 100%;
    margin-bottom: 2rem;
  }
`




export const Main = styled.main`
  width: 100%;
  min-height: 66vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`


export const TextPrincipal = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
  letter-spacing: -0.015em;
  color: #263238;
  margin-top: 1.5rem;
  margin-bottom: 3.5rem;
  text-align: center;
  :focus{
            outline: 0.4rem solid #70CC40;
        }

  @media(max-width: 1300px) {
    text-align: center;
  }
`

export const DivInputs = styled.div`
 display: flex;
  flex-direction: column;
  .inputText {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    margin-bottom: 1rem;
  }

  input[type="text"] { 
    width: 45rem;
    height: 5rem;
    border-radius: 15px;
    border: 1px  solid #E1E1E1;
    padding-left: 1rem;
    
    :hover{
            outline: 0.4rem solid #70CC40;
        }
        :focus{
            outline: 0.4rem solid #70CC40;
        }
}
  textarea {
    min-height: 24.5rem;
    border-radius: 15px;
    border: 1px  solid #E1E1E1;
    padding: 1rem;
    overflow: auto;
    max-height: 24rem;
    margin-top: 3rem;


    :hover{
            outline: 0.4rem solid #70CC40;
        }
        :focus{
            outline: 0.4rem solid #70CC40;
        }
  }
  
  @media(max-width: 900px) {
    width: 80%;
    margin: 0;
  input[type="text"] {
    width: 100%;
  }
  }
  @media(max-width: 750px) {
    width: 80%;
    margin: 0;
  }
`

export const ButtonEnviar = styled.button`
  width: 21rem;
  height: 3.8rem;
  background: #9E9E9E;
  border-radius: 10px;
  border: none;
  margin-top: 3.7rem;
  font-size: 2rem;
  font-weight: bold;
  
  :hover{
            outline: 0.4rem solid #70CC40;
            cursor: pointer;
            background-color: #70CC40;
            color: white;
        }
        :focus{
            outline: 0.4rem solid #70CC40;
        }
  @media(max-width: 1300px) {
    margin-bottom: 2rem;
  }
`



export const MessageError = styled.span`
 color: red;
  display: block;
  margin-top: 0.8rem;
  font-size: 1.2rem;
`


export const DivLeft = styled.div`
  @media(max-width: 1000px ) {
  width: 82%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 }
`

export const DivDescricao = styled.div`
    width: 47rem;
    height: 44rem;
    border: 1px  solid #E1E1E1;
    border-radius: 15px;
    margin-top: 14.1rem;
    margin-left: 3.2rem;
    padding-inline: 3rem;
   
   textarea {
    padding: 1rem;
    width: 39rem;
    height: 100%;
    border-radius: 15px;
    border: none;
    outline: 0;
    resize: none;
  }
  @media(max-width: 900px) {
    width: 80%;
    margin: 3rem;
    textarea {
      width: 80%;
    }
  }
`