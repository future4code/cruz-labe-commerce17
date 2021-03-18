import React from 'react';
import styled from 'styled-components';

const Ordenacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Select = styled.select`
  height: fit-content;
  margin-left: 5px;
`

export default class OrganizaSelect extends React.Component {
    render() {
        return (
            <Ordenacao>
            <p>Ordenar por preço</p>
            <Select onChange={this.props.onChangeSelect}>
              <option value=""></option>
              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
            </Select>
          </Ordenacao>
        );
    };
};
