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
  column-gap: 5px;
  row-gap: 5px;
  text-align: center;
`
const ImgSatelites = styled.img`
  width: 100%;
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
  render() {
    return (
      <div>
         <Header>
                <h1>Labe-Commerce</h1>
         </Header>
         <ContainerPrincipal>
            <CardsProdutos>
                <ImgSatelites src={quikscat} alt="Galáxia" />
                <CardsTitulos>QuikSCAT</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={aqua} alt="Galáxia" />
                <CardsTitulos>AQUA</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
           </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={elektrol} alt="Galáxia" />
                <CardsTitulos>Elektro-L1</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={envisat} alt="Galáxia" />
                <CardsTitulos>ENVISAT</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={hy2a} alt="Galáxia" />
                <CardsTitulos>HY-2A</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={ikonos} alt="Galáxia" />
                <CardsTitulos>IKONOS</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={iras} alt="Galáxia" />
                <CardsTitulos>IRAS</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={landsat} alt="Galáxia" />
                <CardsTitulos>Landsat 8</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={nimbus} alt="Galáxia" />
                <CardsTitulos>Nimbus</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={adeos2} alt="Galáxia" />
                <CardsTitulos>ADEOS 2</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={sentinel6} alt="Galáxia" />
                <CardsTitulos>Sentinel6</CardsTitulos>
                <p>R$1,00</p>
                <Button>Adicionar ao carrinho</Button>
            </CardsProdutos>

            <CardsProdutos>
                <ImgSatelites src={smos} alt="Galáxia" />
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
