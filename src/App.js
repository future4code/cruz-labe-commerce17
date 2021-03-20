import React from 'react';
import styled from 'styled-components';
import cart from './img/cart.png';
import { Filtro } from './components/Filtro';
import { products } from './products';
import Popup from './components/Popup';

const ContainerPrincipal = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 100vh;
  row-gap: 10px;
  text-align: center;
  margin: 10px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin: 0;
}

  @media only screen and (max-width: 350px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
    margin: 0;
}
`;

const ImgSatelites = styled.img`
  width: 100%;
  height: 45%;
  border-radius: 10px 10px 0 0;

  @media only screen and (max-width: 375px) {
    width: 100%;

}
`;

const Cart = styled.img`
  height: 50px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 8%;
    height: 40%;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background-color: rgb(143, 183, 206);
  border-radius: 0 30px 0 30px;
  color: black;
`;

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
  width: 20vw;
  height: 50vh;

  @media only screen and (max-width: 375px) {
    margin: 0;
    height: 47vh;
  }

  @media only screen and (max-width: 768px) {
    width: 97%;
    margin: auto;
  }
`;

const CardsTitulos = styled.h2`
  font-size: medium;
`;

const Button = styled.button`
  border-radius: 15px;
  width: 60%;
  cursor: pointer;
`;

export default class App extends React.Component {
  state = {
    minimoValue: '',
    maximoValue: '',
    produtoValue: '',
    cartItems: [],
    ordenacao: '',
  };

  // componentDidMount() {
  //   const carrinhoEmString = localStorage.getItem('novoCarrinho')
  //   const carrinhoEmObjeto = JSON.parse(carrinhoEmString)
  //   this.setState({novoCarrinho: carrinhoEmObjeto.cartItems})
  //   console.log("Montei")
  // }

  // componentDidUpdate() {
  //   console.log("Atualizei")
  // };

  adicionarItemCarrinho = (product) => {
    const novoCarrinho = [...this.state.cartItems];
    const produtoNoCarrinho = this.state.cartItems.findIndex(
      (cartItem) => cartItem.product.id === product.id
    );

    if (produtoNoCarrinho <= -1) {
      novoCarrinho.push({ product: product, quantidade: 1 });
    } else {
      novoCarrinho[produtoNoCarrinho].quantidade += 1;
    }

    this.setState({
      cartItems: novoCarrinho
    });

    localStorage.setItem('novoCarrinho', JSON.stringify(novoCarrinho))

    this.renderTotal();
    console.log(novoCarrinho.lenght)

  };

  removerItemCarrinho = (product) => {
    const novoCarrinho = [...this.state.cartItems];
    const itemPos = this.state.cartItems.findIndex(
      (cartItem) => cartItem.product.id === product.product.id
    );

    if (novoCarrinho[itemPos].quantidade > 1) {
      novoCarrinho[itemPos].quantidade -= 1;
    } else {
      novoCarrinho.splice(itemPos, 1);
    }

    this.setState({
      cartItems: novoCarrinho
    });
  };

  onChangeMinimoValue = (event) => {
    this.setState({minimoValue: event.target.value });
  };
  onChangeMaximoValue = (event) => {
    this.setState({ maximoValue: event.target.value });
  };
  onChangeProdutoValue = (event) => {
    this.setState({ produtoValue: event.target.value });
  };

  mostrarProdutos = () => {
    return this.filtrarEOrdenarProdutos().map((product) => {
      return (
        <CardsProdutos key={product.id}>
          <ImgSatelites src={product.icone} />
          <CardsTitulos>{product.nome}</CardsTitulos>
          <p>R${product.preco}</p>
          <Button onClick={() => this.adicionarItemCarrinho(product)}>
            Adicionar ao carrinho
          </Button>
        </CardsProdutos>
      );
    });
  };
  filtrarEOrdenarProdutos = () => {
    let produtosFiltrados = products;
      produtosFiltrados = produtosFiltrados.filter((produto) => {
        // SE O PREÇO DO PRODUTO FOR MENOR DO QUE O DIGITADO PELO USUÁRIO
        // NÃO MOSTRA! (FALSE)
        if (produto.preco < this.state.minimoValue) {
          return false;
        }
          return true;

      });
      produtosFiltrados = produtosFiltrados.filter((produto) => {
        // SE O PREÇO DO PRODUTO FOR MAIOR QUE O DIGITADO PELO USUÁRIO 
        // E SE O CAMPO DO INPUT FOR "TRUE", OU SEJA, SE HOUVER ALGO DIGITADO
        // NÃO MOSTRA! (FALSE)
        // MAS! SE O CAMPO DO INPUT FOR "FALSE", ENTÃO MOSTRA!
        if ((produto.preco > this.state.maximoValue) && (this.state.maximoValue)) {
          return false;
        }
          return true
      })

    

    produtosFiltrados = produtosFiltrados.filter((produto) => {
      let produtoMinusculo = produto.nome.toLowerCase()
      let inputBusca = this.state.produtoValue.toLowerCase()
      return produtoMinusculo.includes(inputBusca)
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

  renderTotal = () => {
    let total = this.state.cartItems.reduce(getTotal, 0);
    function getTotal(total, item) {
      return total + item.product.preco * item.quantidade;
    }
    return total;
  };

  onChangeSelect = (event) => {
    this.setState({ ordenacao: event.target.value });
  };

  toggleModal = () => {
    const buttonPopup= true
    this.setState({ buttonPopup, setButtonPopup: true });
  }

  render() {
    return (
      <div>
        <Header>
          <h1>Oldies from the Sky</h1>
          <Cart src={cart} onClick={this.toggleModal}></Cart>
          <Popup trigger={this.state.buttonPopup}>
            <h2>carrinho</h2>
            <ul>
              {this.state.cartItems.map((product) => {
                return (
                  <li>
                    x{product.quantidade} - {product.product.nome}
                    R${product.product.preco * product.quantidade} -{' '}
                    <button onClick={() => this.removerItemCarrinho(product)}>
                      x
                    </button>
                  </li>
                );
              })}
              <h2>Total: {this.renderTotal()}</h2>
            </ul>
          </Popup>
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
                
          {this.mostrarProdutos()}

          </ContainerPrincipal>
          <div>
            <h2>carrinho</h2>
            <ul>
              {this.state.cartItems.map((product) => {
                return (
                  <li>
                    x{product.quantidade} - {product.product.nome}
                    R${product.product.preco * product.quantidade} -{' '}
                    <button onClick={() => this.removerItemCarrinho(product)}>
                    x
                    </button>
                  </li>
                );
              })}
              <h2>Total: {this.renderTotal()}</h2>
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
