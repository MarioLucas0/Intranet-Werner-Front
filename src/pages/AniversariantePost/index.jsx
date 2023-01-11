import pt from 'date-fns/locale/pt';
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import { SlideCarousel } from '../../components/Carousel';
import { MenuAdminLeft } from "../../components/MenuAdminLeft";
import api from "../../services/api";
import { DivButton, DivContainer, DivDeleteButton, FormName, Section, Table, TextSecundario } from "./style";

registerLocale('pt', pt)


export const AniversariantePost = () => {
    var date = new Date()
    const [colaboradorName, setColaboradorName] = useState('');
    const [departamentos, setDepartamentos] = useState([]);
    const [departamento, setDepartamento] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [listaAniversariante, setListaAniversariante] = useState([]);
    const [startDate, setStartDate] = useState(date);
    const [aux,setAux] = useState(true);
    const [show, setShow] = useState(false);
    
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const [aniversarianteInfo, setAniversarianteInfo] = useState({
        languages: [],
        response: [],
    });

    // Get All Aniversariante
    function requisicaoListaAniversariantes() {
        api.get("/funcionarios").then((res) => {
            setListaAniversariante(res.data)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setCarregando(false);
        });
    }

    // Post  Aniversariante
    function requisitarPostAniversariante(funcionario) {

        console.log(funcionario)
      
        api.put(`/funcionarios/${funcionario[0].idFuncionario}`, {
            "idFuncionario": funcionario[0].idFuncionario,
            "nome": funcionario[0].nome.toLowerCase(),
            "dataNascimento": startDate !== "" ? startDate.toLocaleDateString() : funcionario[0].dataNascimento,
            "departamento": {
                "idDepartamento": funcionario[0].departamento.idDepartamento,
                "nome": funcionario[0].departamento.nome
            }
        }).then((res) => {
            setCarregando(true)
        }).catch((err) => {
            console.log(err);
        })
    };

    const  inserirFuncionario = ()  =>{
        setAux(false)
        if(aux === false) {
            api.post("/funcionarios",{
                "nome": colaboradorName.toLowerCase(),
                "dataNascimento": startDate.toLocaleDateString(),
                "departamento": {
                    "idDepartamento": departamento
                }
            }).then(res =>{
                setAux(true)    
                toast.success(`Aniversariante cadastrado com Sucesso!`, { autoClose: 3000 })
            }).catch(res => {
                toast.error(`Ocorreu um erro ao cadastrar o novo aniversariante. Por favor, tente novamente!`,{autoClose:2000})
                toast.error(`DICA: Verifique se o departamento do funcionário foi preenchido.`,{autoClose:10000})
            })
        }
    }

    function excluirAniversariante() {
     try {
        aniversarianteInfo?.response.map((id) => (
            api.delete(`/funcionarios/${id}`).then(res => {
                setCarregando(true)
            })   
        ))
        toast.success(`Aniversariante excluído com Sucesso!`, { autoClose: 3000 })
        }catch (err) {
            toast.error(`Ops, Ocorreu um erro inesperado!`, { autoClose: 3000 })
        }
    }

    const searchForEmployeeByName = () => {
        console.log(departamento)
        api.get(`/funcionarios/name/${colaboradorName}`).then(res => {
            requisitarPostAniversariante(res.data)
            setAux(true)
        }).catch(erro => {
            if(erro.response.status === 404) {
                setShow(true)
                if(show === false) {
                    inserirFuncionario()
                } 
                
            } 
        })

    }

    const handleChange = (e) => {
        const { value, checked } = e.target;
        const { languages } = aniversarianteInfo;
        if (checked) {
            setAniversarianteInfo({
                languages: [...languages, value],
                response: [...languages, value],
            });
        } else {
            setAniversarianteInfo({
                languages: languages.filter((e) => e !== value),
                response: languages.filter((e) => e !== value),
            });
        }
    };

    const pickDepartments = () => {
        api.get("/departamentos").then(res => {
            setDepartamentos(res.data)
            console.log(res.data)
        })
    }

    const handleClose = () => setShow(false);
    
    const handleDateChangeRaw = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        requisicaoListaAniversariantes();
        pickDepartments()
    }, [carregando,aux]);


    return (
        <Section>
            <MenuAdminLeft />
            <DivContainer>

                <SlideCarousel />
                <TextSecundario tabIndex={0}>
                    Aniversariantes
                </TextSecundario>
                <label className='labelData'>Informe a data de nascimento</label>
                <DatePicker
                    style={{width: 400, size: 100, }}
                    selected={startDate}
                    locale="pt"
                    onChange={(Date) => setStartDate(Date)}
                    dateFormat="dd/MM/yyyy"
                    inputFormat="dd/MM/yyyy"
                    value={startDate}
                    onChangeRaw={handleDateChangeRaw}
                />


                <FormName  aux={aux} >
                    <label>Digite o nome do colaborador</label>
                    <input required type="text"  value={colaboradorName} onChange={(event) => {
                        setColaboradorName(event.target.value)}
                }/>

    
                <div className='options'>
                    <label >Escolha o Departamento desse Funcionario</label>
                    <select  onChange={(e) => setDepartamento(e.target.value)}>
                    <option selected disabled >Escolha</option>
                    {departamentos?.map(dep => (
                        <option  value={dep.idDepartamento} >{dep.nome.toUpperCase()}</option>
                    ))}
                    </select>
                </div>
                <DivButton>

                        <button type="submit" value="cadastrar" onClick={(e) => {
                            e.preventDefault();
                            searchForEmployeeByName();

                        }}>Atualizar</button>
                        
                        <button type="submit" className='btnSalvar' aux={aux} onClick={(e) => {
        e.preventDefault() 
        inserirFuncionario()}}>Salvar</button> 
                    </DivButton>
                </FormName>

                <Table>
                    <thead tabIndex={0}>
                        <tr>
                            <th className='th'>Dia</th>
                            <th className='th'>Mês</th>
                            <th className='th'>Colaborador</th>
                            <th className='th'> Departamento</th>
                            <th className='th'>Selecionar</th>

                        </tr>
                    </thead>

                    {listaAniversariante?.sort((a, b) => a.dataNascimento.slice(0, 2) - b.dataNascimento.slice(0, 2)).map((res, index) => {
                        var backgroundColor = index % 2 === 0 ? "#D9D9D9" : "#70CC40";
                        var mes = [res.dataNascimento.slice(3, 5)]
                        mes = parseInt(mes);
                        var dia = [res.dataNascimento.slice(0, 2)]

                        return (
                            <tbody
                                style={{ backgroundColor }}
                                className="append" tabIndex={0} key={res?.idFuncionario}
                            >
                                <tr>
                                    <td>{dia}</td>
                                    <td className="borderStyleMes">{monthNames[mes -1]}</td>
                                    <td>{res?.nome}</td>
                                    <td className="borderStyleDepartamento">{res.departamento !== null|| "" ? res.departamento.nome : "Nao Possui Departamento"}</td>
                                    <td className="tdCheckbox">

                                        <input
                                            type="checkbox"
                                            value={res?.idFuncionario}
                                            className="checkboxImg"
                                            onChange={handleChange}
                                        >
                                        </input>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </Table>

                <DivDeleteButton>
                    <button className="delete" onClick={() =>
                        excluirAniversariante()}>Deletar</button>
                </DivDeleteButton>

            </DivContainer>

            <Modal show={show} onHide={handleClose} style={{alignitems: "center",top: "9rem", display: "flex",border: "none"}} >
            <Modal.Header closeButton>
            <Modal.Title>Inserir Funcionario</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <p  style={{fontSize: "2rem"}}>Esse Funcionario não existe em nosso banco de dados, por favor insira o departamento e clique em salvar!!</p>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>OK</Button>
            </Modal.Footer>
            </Modal>

        </Section>
    )
}
