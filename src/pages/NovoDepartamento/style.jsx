import styled from 'styled-components'

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
  height: 66vh;
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
  height: 90%;
 }
 @media(max-width: 600px) {
  width: 95%;
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
  margin-bottom: 4rem;
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
  gap: 3.2rem;
  input[type="text"] {
    
    width: 45rem;
    height: 5rem;
    border-radius: 15px;
    border: 1px  solid #E1E1E1;
    padding-left: 1rem;
    
  }

  
label{
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    font-weight: 700;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
}

.labelDepartamento{
        margin-top: 1rem;

    }

input{
    width: 38.3rem;
    height: 2.4rem;
    background-color: #F1F1F1;
    border: none;
    padding-left: 0.8rem;

    :hover{
            outline: 0.4rem solid #70CC40;
        }
        :focus{
            outline: 0.4rem solid #70CC40;
        }

}
.options {
    display: block;
}
select {
    background-color: #F1F1F1;
    height: 3rem;
    width: 25%;
    font-size: 1.3rem;
    font-weight: 700;
    color: black;

    }

    .btnSalvar {
        display: ${props => props.aux === false ? "block" : "none"};
        margin-left: 2rem;
    }
  
  @media(max-width: 900px) {
    width: 80%;
    margin: 0;
  input[type="text"] {
    width: 100%;
  }
  }
  @media(max-width: 750px) {
    width: 93%;
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
`

export const HeaderDepartaments = styled.div`
  display: flex;
  width: 87%;
  border: 1px solid gray;
  background: #337103;
  color: whitesmoke;
  height: 3rem;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 700;
    display: flex;
    align-items: center;

  }
  @media(max-width: 800px) {
    width: 95%;
 }
`
export const TextNameDepartament = styled.h2`
    width: 50%;
    border-right: 1px solid black;
    height: 100%;

`
export const TextIdDepartament = styled.h2`
    width: 35%;
    justify-content: end;
 
`


export const MessageError = styled.span`
 color: red;
  display: block;
  margin-top: 0.8rem;
  font-size: 1.2rem;
`
export const DivListDepartaments = styled.div`
 width: 55rem;
 height: 30rem;
 overflow: auto;
 border: 1px solid gray;
 padding: 1rem;
 display: flex;
 flex-direction: column;
 align-items: center;

 :focus{    
            border: none;
            outline: 0.4rem solid #70CC40;
        }

 @media(max-width: 1000px) {
  width: 100%;
  margin-bottom: 3rem;
 }
 @media(max-width: 800px) {
  width: 115%;
 }

 @media(max-width: 600px) {
  width: 110%;
  h2 {
    width: 44%;
  font-size: 1.1rem;
  }

 }


`
export const DivDepartamento = styled.div`
 width: 87%;
 display: flex;
 background-color: #F1F1F1;
 border-bottom: 1px solid gray;

  :focus{
    border: solid 0.4rem #70CC40;
  }

 h2 {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  font-size: 1.7rem;
  font-weight: 700;
 }
 span {
  width: 44.6%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
 }
 @media(max-width: 800px) {
  
  width: 95%;


}

 @media(max-width: 600px) {
  
    width: 95%;
  
    h2 {
      width: 50%;
    font-size: 1.2rem;
    }

    span {
    font-size: 1.2rem;
    }
 }


`


export const DivLeft = styled.div`
  @media(max-width: 950px ) {
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


