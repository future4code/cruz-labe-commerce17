import React from 'react'
import styled from 'styled-components';

const FilterContainer = styled.div `
    height: 13vh;
    margin-top: 10px ;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgba(150, 163, 184, 0.4);
    color: #FFFFFF;
    border-radius: 70% 70% 30px 30px;
    width: 95%;
    margin: 0 auto;
    padding: 5px;

    @media only screen and (max-width: 395px) {
        height: 28vh;
        flex-direction: column;
        margin-bottom: 10px;
        padding: 0;
        border-radius: 40px 85px;
    }

    @media only screen and (max-width: 768px) {
    }
`;

const DivBuscaNome = styled.div`
    width: 8em;
    text-align: center;

    @media only screen and (max-width: 395px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-right: 32px; 
        width: 300px;
    }
`;

const DivOrdene = styled.div`
    width: 8em;
    text-align: center;

    @media only screen and (max-width: 395px) {
        margin-left: 45px;
        width: 15em;
    }
`;

const DivInputs = styled.div`
    width: 8em;
    text-align: center;

    @media only screen and (max-width: 395px) {
        width: 15em;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const InputContainer = styled.label `
    font-weight: bold;
    font-size: 1.2vw;

    @media only screen and (max-width: 395px) {
        font-size: large;
        width: 300px;
    }
`;

const Select = styled.select`
    width: 8em;
    margin-left: 10px;
    padding: 4px;
    border-radius: 10px;
    border: none;
    background-color: white;
`;

const Entrada = styled.input`
    border-radius: 10px;
    margin-left: 5px;
    padding: 5px;
    width: 8em;
    
    border: none;

    @media only screen and (max-width: 375px) {
        margin: 4px 0  0 10px;
        width: 8em;
  }
`;


export class Filtro extends React.Component{
    render () {
        return (
            <FilterContainer>
               {/*  <h3>Filtros</h3> */}
               <DivInputs>
                    <InputContainer>
                    Valor Mínimo
                    <Entrada type='number' min="0" value={this.props.minimoValue}  onChange={this.props.onChangeMinimoValue}/>
                    </InputContainer>
                </DivInputs>
                <DivInputs>
                    <InputContainer>
                    Valor Máximo
                    <Entrada type='number' min="1" value={this.props.maximoValue} onChange={this.props.onChangeMaximoValue}/>
                    </InputContainer>
                </DivInputs>
                <DivBuscaNome>
                    <InputContainer>
                    Busque por nome
                    <Entrada type='text' placeholder='Produto' value={this.props.produtoValue}  onChange={this.props.onChangeProdutoValue}/>
                    </InputContainer>
                </DivBuscaNome>
                <DivOrdene>
                    <InputContainer>
                        Ordene
                        <Select onChange={this.props.onChangeSelect}>
                        <option value="">Lançamentos</option>
                        <option value="crescente">Menor preço</option>
                        <option value="decrescente">Maior preço</option>
                        </Select>
                    </InputContainer>
                </DivOrdene>
            </FilterContainer>
        );
    };
};