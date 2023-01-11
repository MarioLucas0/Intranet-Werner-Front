import React, { useEffect, useState } from "react";
import { SlideCarousel } from "../../components/Carousel";
import { MenuLeft } from "../../components/MenuLeft";
import { MenuRight } from "../../components/MenuRight";
import api from "../../services/api";
import { DivAniversariantes, DivContainer, Section, Table, TextPrincipal } from "./style";
export const ListaFuncionarios = () => {

    const [carregando, setCarregando] = useState(false);
    const [listaFuncionarios, setListaFuncionarios] = useState([]);
  


    // Get All Aniversariante do Mês
    function requisicaoListaAniversariantes() {
        api.get("/funcionarios").then((res) => {
            setListaFuncionarios(res.data)
            console.log(res.data);
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setCarregando(false);
        });
    }



    useEffect(() => {
        requisicaoListaAniversariantes();
    }, []);

    return (
        <>
        <Section>
            <MenuLeft />
            <DivContainer>
            <SlideCarousel />
                <TextPrincipal tabIndex={0}>Lista de Funcionarios</TextPrincipal>
                <DivAniversariantes>
                    <Table>
                        <thead tabIndex={0}>
                            <tr>
                            <th scope="col">Colaborador</th>
                            <th scope="col">Departamento</th>
                            <th scope="col">Data de Nascimento</th>
                            
                        
                            </tr>
                        </thead>

                        {listaFuncionarios?.sort((a, b) => a.nome.localeCompare(b.nome)).map((res, index) => {
                            var backgroundColor = index % 2 === 0 ? "#D9D9D9" : "#70CC40";
                            
                            return (
                                <tbody
                                    style={{ backgroundColor }}
                                    className="append" tabIndex={0} key={res?.idFuncionario}
                                >
                                    <tr>
                                        <td scope="row">{res?.nome}</td>
                                        <td className="bordaStyle" scope="row">{res?.departamento.nome}</td>
                                        <td className="" scope="row">{res.dataNascimento}</td>
                                     
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
