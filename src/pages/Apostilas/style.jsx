import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh);
  display: flex;
  justify-content: space-between;
  padding-top: 10rem;
  text-align: center;

  h1 {
    margin: 2em 2em;
    color: #7B9B46;
    font-size: 4em;
  }

  aside {
       width: 20%;
  }

`
export const DivContainer = styled.div`
width: 100%;
  

`

export const Form = styled.form`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  label{
    
    height: 3.2rem;
    background: #D9D9D9;
    border-radius: 100px;
    outline: 0; 
    border: none;
    cursor: pointer;
    margin-right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 1.5rem;
    font-weight: bold;
     
    :hover{
      background-color: #9dd04c;
        }
        :focus{
          background-color: #9dd04c;
        }
    
  }
  input[type="submit"]{
    height: 3.2rem;
    background: #D9D9D9;
    border-radius: 100px;
    outline: 0; 
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 1.5rem;
    font-weight: bold;

    :hover{
      background-color: #9dd04c;
        }
        :focus{
          background-color: #9dd04c;
        }
  }
  input[type="file"]{
    display: none;
  }
  button {
    height: 3.2rem;
    background: #D9D9D9;
    border-radius: 100px;
    outline: 0; 
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 1.5rem;
    margin-left: 2rem;
    font-weight: bold;

    :hover{
      background-color: #9dd04c;
        }
        :focus{
          background-color: #9dd04c;
        }
  }

`
export const PdfView = styled.div`
 
    background-color: #e4e4e4;
    width: 67rem;
    bottom: 0;
    left: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80rem;
    overflow-y: auto;
    margin-bottom: 10px;

  

`




export const DivApostilas = styled.div`

/*   padding: 5rem;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 2rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;

  
 
`

export const ApostilasStyle = styled.div`
  
    width: 60%;
    height: 10rem;
    border: 3px solid gray;
    overflow: hidden;
    display: flex;
    margin-bottom: 0.1rem;
    border-radius: 5px;
    background-color: #8eb948;
     :hover{
            border: none;
            outline: 0.4rem solid #509e26;
        }
        :focus{
            border: none;
            outline: 0.4rem solid #509e26;
            
        }
    @media(max-width: 600px) {
      width: 90%;
      height: 13rem;
      overflow: auto;
    }
    
`
export const DivButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  

  button {
    width: 7rem;
    height: 3rem;
    border-radius: 85.926px;
    margin-bottom: 1rem;
    border: none;
    margin-left: 2rem;
    font-weight: bold;
    background: #D9D9D9;

     
    :hover{
            background-color: #f6eeee;
        }
        :focus{
            background-color: #f6eeee;
            outline: solid 0.4rem black;
         }
  }
`
export const TextNameFile = styled.div`

  font-weight: 700;
  font-size: 1.6rem;
  font-family: 'Archivo Black', sans-serif;

  .sizeIcon {
    width: 3rem;
    height: 6rem;
    margin-right: 1rem;
  }
  
`
export const DivIcons = styled.div`
  width: 10%;
  display: flex;
  margin-top: 0.3rem;
  justify-content: flex-end;
  margin-right: 0.3rem;



  img {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
     
    :hover{
            outline: 0.4rem solid black;
        }
        :focus{
          outline: solid 0.4rem black;
        }
  }

`

export const DivContainerContent = styled.div`

  width: 90%;

  

`









