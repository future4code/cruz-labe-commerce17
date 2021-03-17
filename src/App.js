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
  width: 80%;
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

export default class App extends React.Component {
  render() {
    return (
      <div>
         <Header>
                <h1>Labe-Commerce</h1>
         </Header>
         <ContainerPrincipal>
          <CardsProdutos>
              <CardsTitulos>QuikSCAT</CardsTitulos>
              <ImgSatelites src={quikscat} alt="Galáxia" />
            </CardsProdutos>

            <CardsProdutos>
              <CardsTitulos>AQUA</CardsTitulos>
              <ImgSatelites src={aqua} alt="Galáxia" />
            </CardsProdutos>

            <CardsProdutos>
                <CardsTitulos>Elektro-L1</CardsTitulos>
                <ImgSatelites src={elektrol} alt="Galáxia" />
            </CardsProdutos>

            <CardsProdutos>
                <CardsTitulos>ENVISAT</CardsTitulos>
                <ImgSatelites src={envisat} alt="Galáxia" />
            </CardsProdutos>

            <CardsProdutos>
                <CardsTitulos>HY-2A</CardsTitulos>
                <ImgSatelites src={hy2a} alt="Galáxia" />
            </CardsProdutos>

            <CardsProdutos>
                <CardsTitulos>IKONOS</CardsTitulos>
                <ImgSatelites src={ikonos} alt="Galáxia" />
            </CardsProdutos>

            <CardsProdutos>
                <CardsTitulos>IRAS</CardsTitulos>
                <ImgSatelites src={iras} alt="Galáxia" />
            </CardsProdutos>

            <CardsProdutos>
                <CardsTitulos>Landsat 8</CardsTitulos>
                <ImgSatelites src={landsat} alt="Galáxia" />
            </CardsProdutos>

            <CardsProdutos>
                <CardsTitulos>Nimbus</CardsTitulos>
                <ImgSatelites src={nimbus} alt="Galáxia" />
            </CardsProdutos>

            <CardsProdutos>
                <CardsTitulos>ADEOS 2</CardsTitulos>
                <ImgSatelites src={adeos2} alt="Galáxia" />
            </CardsProdutos>

            <CardsProdutos>
                <CardsTitulos>Sentinel6</CardsTitulos>
                <ImgSatelites src={sentinel6} alt="Galáxia" />
            </CardsProdutos>

            <CardsProdutos>
                <CardsTitulos>SMOS</CardsTitulos>
                <ImgSatelites src={smos} alt="Galáxia" />
            </CardsProdutos>
          </ContainerPrincipal>
          <Footer>
            <p> &#10049; Labe-Commerce feito com &#10084; para você</p>
          </Footer>
      </div>
    );
  }
}
