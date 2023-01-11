
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { GrDocumentPdf } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from 'react-toastify';
import gifLoader from "../../assets/img/gifloader.gif";
import lixeira from "../../assets/img/lixeira.png";
import { MenuRight } from '../../components/MenuRight';
import api from "../../services/api";
import {
    ApostilasStyle, DivApostilas, DivButtons,
    DivContainer, DivContainerContent, DivIcons, Form, PdfView, Section, TextNameFile
} from './style';

import { AuthContext } from "../../context/auth";
export const Apostilas = () => {
    const [apostilas,setApostilas] = useState([])
    const [showModalAviso, setShowModalAviso] = useState(false);
    const [showModalPdf, setShowModalPdf] = useState(false);
    const [close, setClose] = useState(true);
    const [pdfFile, setPdfFile]=useState(null);
    const [viewPdf, setViewPdf]=useState(null);
    const [aux,setAux] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const {authenticated} = useContext(AuthContext)
    const [idApostila,setIdApostila] = useState(0)

    function Apostila() {
        api.get("/apostilas", ).then(res => {
        setApostilas(res.data)
        setIsLoading(false)
        })
    }


    const onButtonClick = (apostila) => {
        api.get(`/apostilas/downloadFile/${apostila?.id_apostilas}`,        {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/pdf'
            }
        }).then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', apostila?.docName); 
            document.body.appendChild(link);
            link.click();
        })
    }

    const [files, setSelectedFile] = useState(null);

    const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("files", files);
    try {
        api.post("/apostilas/uploadFiles", formData,{
            headers: { "Content-Type": "multipart/form-data" }
        }).then(() => {
            setAux(true)
        }).catch(res =>{ 
            toast.error("Ops ocorreu algum problema!  Por favor informe ao Administrador")
        })
    } catch(error) {
     toast.error("Ops ocorreu algum problema!  Por favor informe ao Administrador")
    }
    }

    const defaultLayoutPluginInstance = defaultLayoutPlugin();


        const fileType=['application/pdf'];
        
        const handlePdfFileChange=(e)=>{
            setSelectedFile(e.target.files[0])
            let selectedFile=e.target.files[0];
            if(selectedFile){
            if(selectedFile&&fileType.includes(selectedFile.type)){
                let reader = new FileReader();
                    reader.readAsDataURL(selectedFile);
                    reader.onloadend = (e) =>{
                    setPdfFile(e.target.result);
                    }
            }
            else{
                setPdfFile(null); 
            }
            }
            else{
            console.log('select your file');
            }
        }

        const handlePdfFileView =(e)=>{
            e.preventDefault();

            if(pdfFile!==null){ 
            setViewPdf(pdfFile);
            handleShowModalPdf()
            }
            else{
            setViewPdf(null);
            }
        }
        const handlePdfFileViewExist =(pdf)=>{
        if(pdf!==null){ 
            setViewPdf("data:application/pdf;base64," + pdf.data);
            handleShowModalPdf()
            }
            else{
            setViewPdf(null);
            } 
        }
      
        const loaderApostila = () => (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center",position: "absolute",top: "28rem"}}>
                <img src={gifLoader} alt="Gif Loader" ></img>
                <p style={{fontSize: "1.8rem", fontWeight: 700,position: "absolute",top: "27rem",color: "#7B9B46"}}>Carregando..., Aguarde Por Favor!</p>
            </div>
        )

        const handleClose = () => {  
            setShowModalAviso(false)
            if(close === false) {
                api.delete(`/apostilas/${idApostila}`).then((res) => {
                    toast.success(`Apostila Excluida com sucesso!`,{autoClose:3000})
                    setAux(true)
            
                }).catch(res => {
                    toast.error("Ops ocorreu algum problema!  Por favor informe ao Administrador")
                })
            }
        };

        const handleCloseOk = () => {
            setShowModalAviso(false)
            setAux(true)
            setClose(true)
            
        }
        const handleCloseYes = () => {
            setShowModalAviso(false)
            setClose(false)
            handleClose()
        }
        const handleShowModalPdf = () => {
            setShowModalPdf(true)
        }
        
        const closeViewPdf = () => setShowModalPdf(false)
        
        const handleShowModalAviso = (id) => {
            setIdApostila(id)
            setShowModalAviso(true)
        };
        
    useEffect(() => {
        Apostila()
        setAux(false)
    },[aux,close])
    

    
    
    return(
        <Section>            
            <DivContainer>
                {authenticated ? 
                
                <Form  onSubmit={handleSubmit} >
                <label tabIndex={0}  for="arquivo" >Escolher arquivo</label>
                <input type="file" name="arquivo" accept=".pdf" id="arquivo" onChange={handlePdfFileChange} />
                <input type="submit" value="Upload File"/> 
                <button  onClick={(e) => handlePdfFileView(e)}>Visualizar</button>
                </Form>

                : ""}
            
                <Modal show={showModalPdf} style={{alignitems: "center",top: "9rem", display: "flex",border: "none"}} > 
                    <IoCloseSharp  style={{
                        color: "red", height: "5rem",
                        width:"5rem",position: "absolute",
                        top:"-1rem",right:"-23.7rem",cursor: "pointer"
                        }} onClick={closeViewPdf}  ></IoCloseSharp> 
                        <PdfView>
                                {viewPdf&&(
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
                                    <Viewer fileUrl={viewPdf}
                                    plugins={[defaultLayoutPluginInstance]}></Viewer>
                                </Worker>
                                )}
                        </PdfView>
                </Modal>


                <DivApostilas>
                {isLoading  ? loaderApostila() : apostilas?.map((apostila,index) => (
                    <ApostilasStyle key={index} tabIndex={0}>
                        <DivContainerContent>
                            <TextNameFile>
                            <GrDocumentPdf className='sizeIcon'/>
                                {apostila?.docName}</TextNameFile>
                            <DivButtons>
                                <button onClick={() => onButtonClick(apostila)}>Baixar</button>
                                <button onClick={() => handlePdfFileViewExist(apostila)}>Visualizar</button>
                            </DivButtons>
                        </DivContainerContent>
                        <DivIcons>
                        {authenticated ? 
                            <img tabIndex={0} src={lixeira} alt="Botao deletar pdf" onClick={() => handleShowModalAviso(apostila?.id_apostilas)}/>
                        : ""}
                            <Modal show={showModalAviso} style={{top: "42rem"}} >   
                                <Modal.Body style={{fontSize: "1.8rem",fontWeight: "700"}}>Tem Certeza que Gostaria de apagar essa Apostila?</Modal.Body>
                                <Modal.Footer>
                                <Button style={{ width: "6rem"
    ,height: "3rem"}} variant="success" onClick={() => handleCloseYes(apostila?.id_apostilas)}>
                                    Sim
                                </Button>
                                <Button style={{ width: "6rem"
    ,height: "3rem"}} variant="secondary" onClick={handleCloseOk}>
                                        Nao
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        
                        </DivIcons>
                    </ApostilasStyle>
                ))}
                </DivApostilas>
            </DivContainer>
            <MenuRight />
        </Section>
    )
} 









