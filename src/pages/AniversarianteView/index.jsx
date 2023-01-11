import React, { useEffect, useState } from "react";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import { MenuLeft } from "../../components/MenuLeft";
import { MenuRight } from "../../components/MenuRight";
import api from "../../services/api";
import { DivAniversariantes, DivContainer, Section, Table, TextSecundario } from "./style";

export const AniversarianteView = () => {

    const monthNames = ["","Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const [carregando, setCarregando] = useState(false);
    const [listaAniversarianteMes, setListaAniversarianteMes] = useState([]);
    const [numeroMes, setNumeroMes] = useState(1);
    const [funcionarios,setFuncionarios] =useState([])
    const handleMonthLeft = () => {
        if (numeroMes === 1) {
            setNumeroMes(12);
        } 
        if(numeroMes > 1) {
            setNumeroMes(numeroMes - 1)
        }  
    }

    const handleMonthRight = () => {
        if (numeroMes === 12) {
            setNumeroMes(1);
        } 
        if(numeroMes < 12) {
            setNumeroMes(numeroMes + 1)
        } 
    }

    // Get All Aniversariante do Mês
    function requisicaoListaAniversariantes() {

        api.get(`/funcionarios`).then(res => {
            setFuncionarios(res.data)
        }) 
        api.get(`/funcionarios/aniversariantes/${numeroMes < 10 ? "0" + numeroMes : numeroMes}`).then((res) => {
            setListaAniversarianteMes(res.data)
            
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setCarregando(false);
        });
    }

    useEffect(() => {
        console.log(numeroMes)
        requisicaoListaAniversariantes();
    }, [numeroMes]);

    return (
        <>
        <Section>
            <MenuLeft />
            <DivContainer>
                <TextSecundario>
                    <button className="buttonArrows" onClick={handleMonthLeft}>
                        <BsFillArrowLeftSquareFill className="setasStyle"/>
                    </button>

                    <p>{monthNames[numeroMes]}</p>

                    <button className="buttonArrows" onClick={handleMonthRight}>
                        <BsFillArrowRightSquareFill className="setasStyle" />
                    </button>
                </TextSecundario>

                <DivAniversariantes>
                    <Table>
                        <thead tabIndex={0}>
                            <tr>
                                <th scope="col">Dia</th>
                                <th scope="col">Colaborador</th>
                                <th scope="col">Departamento</th>
                            </tr>
                        </thead>

                        {listaAniversarianteMes?.sort((a, b) => a.dataNascimento.slice(0, 2) - b.dataNascimento.slice(0, 2)).map((res, index) => {
                            
                            var backgroundColor = index % 2 === 0 ? "#D9D9D9" : "#a1e27e";
                            var dia = [res.dataNascimento.slice(0, 2)]


                            return (
                                
                                <tbody
                                    style={{ backgroundColor }}
                                    className="append" tabIndex={0} key={res?.idFuncionario}
                                >
                                    <tr>
                                        <td scope="row">{dia}</td>
                                        <td className="bordaStyle" scope="row">{res?.nome}</td>
                                        <td className="" scope="row">{
                                        funcionarios.map((res2) => res.idFuncionario === res2.idFuncionario ? res2.departamento.nome : "")}</td>
                                    </tr>
                                </tbody>
                                
                            );
                        })}
                    </Table>
                </DivAniversariantes>
            </DivContainer>
            <MenuRight />
        </Section>
        </>
    )
}
