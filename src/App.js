import React from 'react';
import styled from 'styled-components';
import cart from './img/cart.png';
import { Filtro } from './components/Filtro';
import { products } from './products';
import Popup from './components/Popup';
import "./styles/pagina.css"

const ContainerPrincipal = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 10px;
  margin-left: 20px;

  @media only screen and (max-width: 395px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    padding: 0;
    row-gap: 3px;
}

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin: 0;
}


`;

const ImgSatelites = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 10px 10px 0 0;

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 48%;
}
`;

const Cart = styled.img`
  height: 50px;
  cursor: pointer;
  background-color: rgba(150, 163, 184, 0.4);
  color: white;
  border-radius: 50%;
  opacity: 1;
  padding: 10px;

  @media only screen and (max-width: 395px) {
    position: relative;
    margin-right: 20px;
    bottom: 20px;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 8em;
  font-size: x-large;
  color: #FFFFFF;
  width: 97%;
  margin: auto;

  @media only screen and (max-width: 395px) {
    position: relative;
    margin-right: 8px;
    height: 6.7em;
  }
`;

const TituloHeader = styled.h1`
    text-shadow: 2px 2px 5px darkgrey;

    @media only screen and (max-width: 395px) {
    font-size: 1.8em;
    margin-left: 30px;
  }
`;

const CardsProdutos = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  box-shadow: 2px 2px 5px darkgrey;
  border-radius: 10px;
  background-color: rgba(150, 163, 184, 0.4);
  margin: 10px 15px;
  color: rgb(95, 19, 39);
  width: 16vw;
  height: 38vh;

  @media only screen and (max-width: 1400px) {
    height: 58vh;
  }

  @media only screen and (max-width: 395px) {
    width: 97%;
    margin: 0 auto;
    margin-top: 8px;
    height: 48vh;
  }
`;

const InformacoesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  color: white;
  margin-top: 15px;
`;

const CardsTitulos = styled.h2`
  color: #FFFFFF;
  margin: 0;
  text-shadow: 2px 2px 5px darkgrey;

`;

const Preco = styled.p`
  font-size: large;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const BotaoF = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border-radius: 30px;
  border: none;
  background-image: linear-gradient(80deg, #822406, #f4511e 50%);
  background-color: #f55f20;
  color: #ffffff;
  font-size: small;
  cursor: pointer;
`;

const BotaoFCarrinho = styled.button`
  border-radius: 30px;
  border: none;
  background-image: linear-gradient(80deg, #822406, #f4511e 50%);
  background-color: #f55f20;
  color: #ffffff;
  font-size: small;
  cursor: pointer;
`;

const Button = styled.button`
  border-radius: 30px;
  width: 40%;
  padding: 10px;
  border: none;
  background-color: #F55F20;
  color: #FFFFFF;
  font-size: small;
  background-image: linear-gradient(80deg, #822406, #F4511E 50%);
  cursor: pointer;

  @media only screen and (max-width: 1400px) {
    width: 65%;
    font-size: small;
  }

  @media only screen and (max-width: 395px) {
    width: 70%;
    font-size: small;
  }
`;

const Footer = styled.footer`
    background-image: linear-gradient(80deg, #822406, #F4511E 50%);
`

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
  // };

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

    localStorage.setItem('novoCarrinho', JSON.stringify(novoCarrinho));

    this.renderTotal();
    alert('Produto adicionado ao carrinho!');
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
          <InformacoesCard>
            <CardsTitulos>{product.nome}</CardsTitulos>
            <Preco>R${product.preco}</Preco>
            <Button onClick={() => this.adicionarItemCarrinho(product)}>Adicionar ao carrinho</Button>
          </InformacoesCard>
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
        produtosFiltrados.sort((a, b) => a.preco - b.preco);
        return produtosFiltrados;
      case 'decrescente':
        produtosFiltrados.sort((a, b) => b.preco - a.preco);
        return produtosFiltrados;
      default:
    };

    return produtosFiltrados
   };

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
    this.setState({ ...this.state, buttonPopup: !this.state.buttonPopup });
  };

  render() {
    return (
      <div>
        <Header>
          <TituloHeader>Cruz Sky Treasures</TituloHeader>
          <Cart src={cart} onClick={this.toggleModal}></Cart>
          <Popup trigger={this.state.buttonPopup}>
            <BotaoF onClick={this.toggleModal}>X</BotaoF>
            <h2>Carrinho</h2>
            <ul>
              {this.state.cartItems.map((product) => {
                return (
                  <li>
                    x{product.quantidade} - {product.product.nome} R$
                    {product.product.preco * product.quantidade} -{' '}
                    <BotaoFCarrinho
                      onClick={() => this.removerItemCarrinho(product)}
                    >
                      x
                    </BotaoFCarrinho>
                  </li>
                );
              })}
              {/* <h2>Total: {this.renderTotal()}</h2> */}
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
         </div>
        <Footer>
            <div>
                <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/login?lang=pt" target="_blank"><i class="fab fa-twitter"></i></a>
            </div>
        </Footer>
      </div>
    );
  };
};

