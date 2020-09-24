import React from "react"
import Logo from "../images/logo-b.png"
import Logo2 from "../images/logo2.png"
import Fundo from "../images/fundo-quadromatico.jpg"
import Triangulo from "../images/fundo-trian.png"
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const IndexPage = () => (
  <>
    <img class="fundo" src={Fundo}/> 
    <img class="logo" src={Logo}/>
    <div class="conteudo-fundo">
      <img class="triangulos" src={Triangulo}/>
    </div>
    <div class="sobre">
      <div class="titulo">SOBRE</div>
      <div class="conteudo">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Mauris tristique turpis sit amet est euismod, sed fringilla nisl cursus. </p>
        <p>Pellentesque sem nisi, hendrerit in dictum id, tristique nec diam. Cras id tellus lectus.</p>
        <p>Praesent tempus bibendum faucibus.</p> 
        <p>Sed nec placerat enim, feugiat lacinia ipsum. Proin dapibus lobortis sapien,</p> 
        <p>id viverra nisi feugiat vel. Aliquam erat volutpat. Vivamus eu dapibus diam,</p> 
        <p>at posuere lorem. Aenean at facilisis sapien, vel sollicitudin felis.</p> 
      </div>
      <div class="line"></div>
      <div class="titulo">VÍDEOS</div>
        <div class="conteudo2">

          <Carousel>
            <Carousel.Item>
              <div class="carrossel">
                <iframe src="https://www.youtube.com/embed/2cbtd4DsUd4"></iframe>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="carrossel">
                  <iframe src="https://www.youtube.com/embed/e61rAz_9sa4"></iframe>
                </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="carrossel">
                  <iframe src="https://www.youtube.com/embed/wOAJSxm_4ms"></iframe>
                </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="carrossel">
                  <iframe src="https://www.youtube.com/embed/QbjPNcZ4VIU"></iframe>
                </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="carrossel">
                  <iframe src="https://www.youtube.com/embed/ZAAsGBsGLXE"></iframe>
                </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="carrossel">
                  <iframe src="https://www.youtube.com/embed/X_nRFuTqzGY"></iframe>
                </div>
            </Carousel.Item>
          </Carousel>

        </div>
        <div class="line2"></div>
    </div>
    <div class="caixa-login">
      <div class="int-login">
        <p class="login">LOGIN</p>
        <p class="compo-login">Usuário:</p>
        <input type="text" class="caixa-texto"></input>
        <p class="compo-login">Senha:</p>
        <input type="text" class="caixa-texto" type="password"></input>
      </div>
      <button class="botao-login">ACESSAR</button>
    </div>
    <div class="rodape">
      <img class="logo-rodape" src={Logo2} />
      <span class="info-rodape">Av. Juscelino Kubitschek, 1626, Londrina-PR, CEP:86.020-000 | Fone:43 3375 7474</span>
    </div>
  </>
)

export default IndexPage

let DeployGithub = require('deploy-github');
DeployGithub.automatic();