import React from 'react'
import styled from 'styled-components';

const FilterContainer = styled.div `
    height: 10vh;
    margin-top: 10px ;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    
`
const InputContainer = styled.label `
    font-weight: bold;
    font-size: 15px;
`
const Botao = styled.button`
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    padding: 4px 15px;
    text-decoration: none;
    
`

export class Filtro extends React.Component{
    
    render () {
        return (
            <FilterContainer>
                <h3>Filtros</h3>
                <InputContainer>
                Valor Mínimo
                <input type='number' value={this.props.mininoValue}  onchange={this.props.onChangeMinimoValue}/>
                </InputContainer>
                <InputContainer>
                Valor Máximo
                <input type='number' value={this.props.maximoValue} onchange={this.props.onChangeMaximoValue}/>
                </InputContainer>
                <InputContainer>
                Busque por nome
                <input type='text' value={this.props.produtoValue}  onchange={this.props.onChangeProdutoValue}/>
                </InputContainer>
                <Botao onclick={this.buscarProdutos} >Buscar</Botao>
            </FilterContainer>
        )
    }
}