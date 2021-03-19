import React from 'react';
import styled from 'styled-components';
import cart from './img/cart.png';
import {Filtro} from './components/Filtro';
import {products} from './products';
import OrganizaSelect from './components/Select';

const ContainerPrincipal = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 100vh;
  row-gap: 20px;
  column-gap: 20px;
  text-align: center;
  margin: 10px;
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
`
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
    minimoValue: '5000',
    maximoValue: '1000000',
    produtoValue: '',
    cartItems: [],
    ordenacao: ""
  };

 adicionarItemCarrinho = (product) => {
    const novoCarrinho = [...this.state.cartItems];

    const produtoNoCarrinho = this.state.cartItems.findIndex(
      (cartItem) => cartItem.product.id === product.id
    );

    produtoNoCarrinho <= -1 ? novoCarrinho.push({ product: product, quantidade: 1 }) : novoCarrinho[produtoNoCarrinho].quantidade += 1;

    this.setState({
      cartItems: novoCarrinho
    });
  };

  removerItemCarrinho = (product) => {
    const novoCarrinho = [...this.state.cartItems];

    const removerProduto = this.state.cartItems.findIndex(
      (cartItem) => cartItem.product.id === product.id
    )

    novoCarrinho.splice(removerProduto, 1)

    this.setState({
      cartItems: novoCarrinho
    });
  }

  onChangeMinimoValue = (event) => {
      this.setState({minimoValue: event.target.value})
  };
  onChangeMaximoValue = (event) => {
      this.setState({maximoValue: event.target.value})
  };
  onChangeProdutoValue = (event) => {
      this.setState({produtoValue: event.target.value})
  };

  listaFiltro = () => {
    return this.filtraProdutos().map((product) => {
      return (
        <CardsProdutos key={product.id}>
          <ImgSatelites src={product.icone} />
          <CardsTitulos>{product.nome}</CardsTitulos>
          <p>R${product.preco}</p>
          <Button onClick={() => this.adicionarItemCarrinho(product)}>Adicionar ao carrinho</Button>
        </CardsProdutos>
      );
    });
  };

  filtraProdutos = () => {
    let produtosFiltrados= [...products]
    produtosFiltrados= produtosFiltrados.filter((produto) => {
      if (produto.preco <= this.state.minimoValue)  {
        return false 
      }
      return true
    })
    produtosFiltrados= produtosFiltrados.filter((produto) => {
      if (produto.preco >= this.state.maximoValue)  {
        return false 
      }
      return true
    })
    produtosFiltrados= produtosFiltrados.filter((produto) => {
      if (produto.nome === this.state.produtoValue)  {
        return false 
      }
      return true
    })
    switch (this.state.ordenacao) {
      case 'crescente':
        produtosFiltrados.sort((a, b) => a.preco - b.preco)
        return produtosFiltrados;
      case 'decrescente':
        produtosFiltrados.sort((a, b) => b.preco - a.preco)
        return produtosFiltrados;
      default:
        
    };

    return produtosFiltrados
  }
  
  onChangeSelect = (event) => {
    this.setState({ordenacao: event.target.value})
  };
  

  render() {
    return(
      <div>
        <Header>
          <h1>Labe-Commerce</h1>
          <Cart src={cart}></Cart>
        </Header>
        <Filtro
          minimoValue={this.state.minimoValue}
          maximoValue={this.state.maximoValue}
          produtoValue={this.state.produtoValue}
          onChangeMinimoValue={this.onChangeMinimoValue}            
          onChangeMaximoValue={this.onChangeMaximoValue}            
          onChangeProdutoValue={this.onChangeProdutoValue} 
          onChangeSelect = {this.onChangeSelect}
        />
        <div>
          <ContainerPrincipal>
          {this.listaFiltro()} 
          </ContainerPrincipal>
          <div>
            <h2>carrinho</h2>
            <ul>
              {this.state.cartItems.map((product) => {
                return (
                  <li>
                    x{product.quantidade} - {product.product.nome} -{' '}
                    <button onClick={() => this.removerItemCarrinho(product)}>
                      x
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Footer>
          <p> &#10049; Labe-Commerce feito com &#10084; para você</p>
        </Footer>

      </div> 
    )
  } 
}