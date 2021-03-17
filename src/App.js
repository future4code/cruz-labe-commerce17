import React from 'react';
import { products } from './products';
import styled from 'styled-components';
import cart from './img/cart.png';
import {Filtro} from './components/Filtro';

const ContainerPrincipal = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 100vh;
  row-gap: 20px;
  column-gap: 20px;
  text-align: center;
  margin:10px;
`
const ImgSatelites = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 10px 10px 0 0;
`

const Cart = styled.img`
  height: 50px;
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background-color: rgb(143, 183, 206);
  border-radius: 0 0 0 30px;
  color: black;
`
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  grid-column: 1 /-1;
  background-color: rgb(143, 183, 206);
  color: rgb(14, 39, 68);
  font-size: 20px;
`;

const CardsProdutos = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  box-shadow: 2px 2px 5px darkgrey;
  border-radius: 10px;
  background-color: lightgray;
  margin: 10px 20px;
  color: rgb(95, 19, 39);
`
const CardsTitulos = styled.h2`
  font-size: medium;
`
const Button = styled.button`
  border-radius: 15px;
  width: 60%;
`

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
    /* const filtroBuscaArray = [filtrarProdutos, ...this.state.produtosDisponiveis]
    this.setState({produtosDisponiveis: filtroBuscaArray}) */
  } 

  render() {
    return(
      <div>
        <Header>
          <h1>Labe-Commerce</h1>
          <Cart src={cart}></Cart>
        </Header>
        <Filtro
          mininoValue={this.state.mininoValue}
          maximoValue={this.state.maximoValue}
          produtoValue={this.state.produtoValue}
          onChangeMinimoValue={this.onChangeMinimoValue}            
          onChangeMaximoValue={this.onChangeMaximoValue}            
          onChangeProdutoValue={this.onChangeProdutoValue} 
        />
        <ContainerPrincipal>
          {products.map((product) => {
            return (
              <CardsProdutos key={product.id}>
                <ImgSatelites src={product.icone} />
                <CardsTitulos>{product.nome}</CardsTitulos>
                <p>R${product.preco}</p>
                <Button>Adicionar ao carrinho</Button>
              </CardsProdutos>
            );
          })}
        </ContainerPrincipal>
        <Footer>
          <p> &#10049; Labe-Commerce feito com &#10084; para você</p>
        </Footer>
      </div>
    );
}};