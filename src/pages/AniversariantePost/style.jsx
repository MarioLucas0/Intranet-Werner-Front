import styled from "styled-components";


export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh);
  display: flex;
  padding-top: 11rem;
  background-color: white;

  @media(max-width: 1000px){
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 0;
  }

`;

export const DivContainer = styled.div`
  width: 100%;
  padding-inline: 18rem;


  .react-datepicker__input-container {
    input {
    width: 10rem;
    height: 2.5rem;
    font-size: 1.4rem;
    font-weight: 700;
    }
  }


  @media(max-width: 1000px){
    padding-inline: 8rem;

    .carousel {
        display: none;
    }
  }
  @media(max-width: 500px){
    padding-inline: 3rem;
  }
  @media(max-width: 600px){
    padding-inline: 0;


    .labelData {
    margin-top: 1rem;
    margin-left: 2rem;
    font-size: 1.3rem;
    font-weight: 700;
    }
    .react-datepicker__input-container {
    input {
    width: 10rem;
    height: 2.5rem;
    font-size: 1.4rem;
    font-weight: 700;
    margin-left: 2rem;

    }
  }
  }


`;

export const TextPrincipal = styled.div`
    
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 2.7rem;
  color: #337103;
  text-align: center;

  :focus{
            outline: 0.4rem solid #70CC40;
        }

`;

export const TextSecundario = styled.div`
    font-size: 2rem;
    padding-top: 3rem;
    line-height: 2.7rem;
    text-align: center;
    color: #000000;
    font-weight: 700;

    :focus{
            outline: 0.4rem solid #70CC40;
        }
    
`;

export const FormDate = styled.form`
    padding-top: 4rem;
    display: flexbox;
    flex-direction: row;
    

    label{
    font-size: 1.3rem;
    font-weight: 700;

    :focus{
            outline: 0.4rem solid #70CC40;
        }
    }

    .dataBirthday{
        width: 12rem;
        text-align: center;
        margin-left: 1rem;
       }
    .calendario{
        margin-left: 1rem;
        width: 10rem;
        height: 3rem;
        text-align: center;
        background-color: #F1F1F1;
        color: #000000;
        font-weight: 700;

        :hover{
            cursor: pointer;
        }

        :focus{
            outline: 0.2rem solid #000000;
;
        }

    }
   

`;

export const FormName = styled.form`

    padding-top: 4rem;


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
    display: ${props => props.aux === false ?  "block" : "none"}
}
select {
    background-color: #F1F1F1;
    height: 3rem;
    width: 18%;
    font-size: 1.3rem;
    font-weight: 700;
    color: black;

    }

    .btnSalvar {
        display: ${props => props.aux === false ?  "block" : "none"};
        margin-left: 2rem;
    }


    @media(max-width: 600px){
    padding-inline: 0;


        label {
        margin-top: 1rem;
        margin-left: 2rem;
        font-size: 1.3rem;
        font-weight: 700;
        }
    
        input {
        width: 80%;
        height: 2.5rem;
        font-size: 1.4rem;
        font-weight: 700;
        margin-left: 2rem;

        }

        select {
        width: 10rem;
        margin-left: 2rem;
        margin-bottom: 1rem;
       }

  
    }

`;

export const DivButton = styled.div`
 display: flex;

    width: 40%;
    align-items: flex-end;
    display: flex;
   
   button{

    width: 10.3rem;
    height: 2.6rem;
    margin-top: 1.5rem;
    color: #000000;
    font-weight: bold;
    font-size: 1.6rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: #70CC40;
    border-radius: 10rem;
    
    :hover{
        cursor: pointer;
        background-color: #9bf46c;
       
       }
       :focus{
               outline: 0.4rem solid #000000;
           }
   }

   @media(max-width: 600px) {
     width: 100%;
     margin-left: 1rem;
   }

`;


export const Table = styled.table`

margin-top: 3rem;
font-size: 1.6rem;
width: 100%;
text-align: center;
font-weight: 700;

thead{
    background-color: #70CC40;
    text-align: center;
    height: 2.6rem;

    :focus{
        outline: 0.4rem solid black;
    }
}

.append{
    justify-content: center;
    text-align: center;

    :focus{
        outline: 0.4rem solid #000000;
    }

    .borderStyleMes{
        border-inline: 0.2rem solid #000000;
    }

    .borderStyleDepartamento{
        border-inline: 0.2rem solid #000000;
    }

    .tdCheckbox{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 0.4rem;
        
    }

    .checkboxImg{
        width: 2rem;
        height: 1.5rem;
        cursor: pointer;
       
       :focus{
               outline: 0.4rem solid #000000;
           }
    }

    @media(max-width: 450px){
  
        font-size: 1.2rem;
      
    }
    @media(max-width: 400px){
  
     font-size: 1.1rem;


    }

}



button{
    width: 1.9rem;
    height: 1.6rem;
    border: 1.6px solid black;

    :hover{
        cursor: pointer;
        background-color: white;
    }

    :focus{
        outline: 0.3rem solid black;
    }
  
    .bx-check{
        text-align: center;
}

}
`;


export const DivDeleteButton = styled.div`

display: flex;
justify-content: flex-end;
padding-top: 1rem;

    button{
        width: 7.7rem;
        height: 2.4rem;
        text-align: center;
        background-color: #FF2A2A;
        border-radius: 10rem;
        font-weight: 700;

        :hover{
            cursor: pointer;
            background-color: #fd7070;
        }

        
        :focus{
            outline: 0.4rem solid #000000;
        }
;

@media (max-width: 683px){
    flex-direction: row;
}
    }
`;