import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DivButton, Section } from './style';
import { modalText, modalTitle } from './texts';

export default function Tutorial(props) {
  const [show, setShow] = useState(false);

  var [text, setText] = useState(0);

  const [buttonLabel, setButtonLabel] = useState("Começar!");

  const handleClose = () => {
    localStorage.setItem("hideModalTutorial",true)
    setShow(false)
    setText(0)
  };
  const handleShow = () => {
    
    setShow(true)
  
  } 

  useEffect(()=>{
    const hideModalTutorial = localStorage.getItem("hideModalTutorial")
    if(!hideModalTutorial){
      handleShow()
    }
    if (text === 0) {
      setButtonLabel ("Começar!")
   }else if (text > 0 && text < modalText.length -1) {
    setButtonLabel ("Avançar")
   }else{
   setButtonLabel ("Terminar")
  }
  },[text])

  return (
    <Section>
      <DivButton>
      <button variant="primary" onClick={handleShow}> 
        Tutorial Intranet
      </button>
      </DivButton>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        {...props}
        centered
        style={{fontSize: "1.6rem"}}
        >
        
        <Modal.Header closeButton style={{backgroundColor: "#7B9B46", color: "white", fontSize:"1.5rem"}}>
          <Modal.Title style={{fontSize: "3rem"}}>
           {modalTitle[text]}
          </Modal.Title>
        </Modal.Header>
       
        <Modal.Body style={{width:"100%", overflowWrap:"break-word", fontSize:"19px"}}>
          {modalText[text]}
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{
            fontSize: "1.5rem", backgroundColor:"#BF211E", marginRight:"auto", borderColor:"black"
        }}>
            Pular tutorial
          </Button>
          
          { text > 0?
          <Button variant="secondary" style={{fontSize: "1.5rem", backgroundColor:"#BF211E", borderColor:"black"}}
           onClick={()=>{
            if(text > 0){
              text = text-1
              setText(text)
            }
            console.log(text)
            }}>Voltar</Button>
            :null
          }

          <Button variant="primary" style={{fontSize: "1.5rem", backgroundColor: "#337103", marginLeft:"5%", borderColor:"black"}} 
          onClick={()=>{
            if(text < modalText.length -1){
              text = text+1
              setText(text)
            }else{
              handleClose()
            }
            
            console.log(text)
            }}>
              {buttonLabel}</Button>

        </Modal.Footer>
      {/*   <div className='aniversariante' style={text  === 5 ?{display: "block",left:"-35rem",position: "absolute",height:"3rem",
        width: "17rem",zIndex: "2000",background: "white",top: "-6rem"}
        :{display: "none"}}> 
        <span className='aniversarianteText' 
        style={{color: "#337103",fontWeight: "700",fontSize: "1.4rem",display: "flex",justifyContent: "center",paddingTop: "0.3rem"}}> Aniversariante do Mes</span> </div> */}
      </Modal> 

   
    </Section>
  );    
 
}