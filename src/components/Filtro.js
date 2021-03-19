import React from 'react'
import styled from 'styled-components';
const FilterContainer = styled.div `
    height: 10vh;
    margin-top: 10px ;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;  
    background-color: aliceblue ;
    border: 1px solid cadetblue;
`
const InputContainer = styled.label `
    font-weight: bold;
    font-size: 15px;
`
const Select = styled.select`
  height: fit-content;
  margin-left: 5px;
`
const Entrada = styled.input`
    border-radius: 10px;
    margin-left: 5px;
    padding-left: 5px;
    width: 100px;
    border-color: aqua;
`

export class Filtro extends React.Component{
    render () {
        return (
            <FilterContainer>
               {/*  <h3>Filtros</h3> */}
                <InputContainer>
                Valor Mínimo
                <Entrada type='number' value={this.props.minimoValue}  onChange={this.props.onChangeMinimoValue}/>
                </InputContainer>
                <InputContainer>
                Valor Máximo
                <Entrada type='number' value={this.props.maximoValue} onChange={this.props.onChangeMaximoValue}/>
                </InputContainer>
                <InputContainer>
                Busque por nome
                <Entrada type='text' placeholder='Produto' value={this.props.produtoValue}  onChange={this.props.onChangeProdutoValue}/>
                </InputContainer>
                <InputContainer>
                    Ordenar por preço
                    <Select onChange={this.props.onChangeSelect}>
                    <option value=""></option>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                    </Select>
                </InputContainer>
            </FilterContainer>
        );
    };
};