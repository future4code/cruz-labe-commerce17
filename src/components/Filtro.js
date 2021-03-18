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

export class Filtro extends React.Component{
    render () {
        return (
            <FilterContainer>
                <h3>Filtros</h3>
                <InputContainer>
                Valor Mínimo
                <input type='number' value={this.props.minimoValue}  onChange={this.props.onChangeMinimoValue}/>
                </InputContainer>
                <InputContainer>
                Valor Máximo
                <input type='number' value={this.props.maximoValue} onChange={this.props.onChangeMaximoValue}/>
                </InputContainer>
                <InputContainer>
                Busque por nome
                <input type='text' placeholder='Produto' value={this.props.produtoValue}  onChange={this.props.onChangeProdutoValue}/>
                </InputContainer>
            </FilterContainer>
        )
    }
}