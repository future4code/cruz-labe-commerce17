import React from 'react';
import styled from 'styled-components';
import adeos2 from './img/adeos2.jpg';
import aqua from './img/aqua.jpg';
import elektrol from './img/elektrol.jpg';
import envisat from './img/envisat.jpg';
import hy2a from './img/hy2a.jpg';
import ikonos from './img/ikonos.jpg';
import iras from './img/iras.jpg';
import landsat from './img/landsat-8.jpg';
import nimbus from './img/nimbus.jpg';
import quikscat from './img/quikscat.jpg';
import sentinel6 from './img/sentinel6.png';
import smos from './img/smos.jpg';

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
const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around; 
    height: 100px;
    background-color: rgb(143, 183, 206);
    border-radius: 0 0 0 30px;
    color: rgb(14, 39, 68);
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
    box-shadow: 2px 2px 5px darkgrey;
    border-radius: 10px;
    background-color: lightgray;
`
const CardsTitulos = styled.h2`
  font-size: medium;
`
const Button = styled.button`
  border-radius: 15px;
  width: 50%;
  padding: 5px;
`

export default class App extends React.Component {
  
  render() {
    return (
      <div>
         <Header>
                <h1>Labe-Commerce</h1>
         </Header>
         <ContainerPrincipal>
            <CardsProdutos>
                <ImgSatelites src={quikscat} alt="Satélite QuikSCAT" />
                <CardsTitulos>QuikSCAT</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={aqua} alt="Satélite AQUA" />
                <CardsTitulos>AQUA</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
           </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={elektrol} alt="Satélite Elektro-L" />
                <CardsTitulos>Elektro-L1</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={envisat} alt="Satélite ENVISAT" />
                <CardsTitulos>ENVISAT</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={hy2a} alt="Satélite HY-2A" />
                <CardsTitulos>HY-2A</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={ikonos} alt="Satélite IKONOS" />
                <CardsTitulos>IKONOS</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={iras} alt="Satélite IRAS" />
                <CardsTitulos>IRAS</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={landsat} alt="Satélite Landsat" />
                <CardsTitulos>Landsat 8</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={nimbus} alt="Satélite Nimbus" />
                <CardsTitulos>Nimbus</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={adeos2} alt="Satélite ADEOS2" />
                <CardsTitulos>ADEOS 2</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={sentinel6} alt="Satélite Sentinela6" />
                <CardsTitulos>Sentinel6</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={smos} alt="Satélite SMOS" />
                <CardsTitulos>SMOS</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>
          </ContainerPrincipal>
          <Footer>
            <p> &#10049; Labe-Commerce feito com &#10084; para você</p>
          </Footer>
      </div>
    );
  }
}
