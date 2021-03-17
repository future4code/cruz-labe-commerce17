import React from 'react';
import {Filtro} from './components/Filtro';

export default class App extends React.Component {
  state = {
    mininoValue: '0',
    maximoValue: '0',
    produtoValue: 'Produto',
    produtosDisponiveis: [
      {
        id: 1,
        name: "",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      }
    ]
 };

onChangeMinimoValue = (event) => {
    this.setState({mininoValue: event.target.value})
}
onChangeMaximoValue = (event) => {
    this.setState({maximoValue: event.target.value})
}
onChangeProdutoValue = (event) => {
    this.setState({produtoValue: event.target.value})
}

buscarProdutos = () => {
    const filtrarProdutos = {
        valorMinimo: this.state.mininoValue,
        valorMaximo: this.state.maximoValue,
        produtoEscolhido: this.setState.produtoValue
    }
    const filtroBuscaArray = [filtrarProdutos, ...this.state.produtosDisponiveis]
    this.setState({produtosDisponiveis: filtroBuscaArray})
  } 

  render() {
    return(
      <Filtro
        mininoValue={this.state.mininoValue}
        maximoValue={this.state.maximoValue}
        produtoValue={this.state.produtoValue}
        onChangeMinimoValue={this.onChangeMinimoValue}            
        onChangeMaximoValue={this.onChangeMaximoValue}            
        onChangeProdutoValue={this.onChangeProdutoValue} 
      />
    )
  }
}