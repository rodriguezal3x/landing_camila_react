import React from 'react';
import { Container, LeftContainer, RightContainer,BannerText, BannerContainer, BannerLandin, } from './Landing.elements';
import Shop from "../../assets/img/shop.svg";
import { FaMapMarkerAlt } from "react-icons/fa";

const Landing = () => {
  return (
      <Container>
          <LeftContainer>
              <h1>Camila's Store CR</h1>
              <h2>
                  
                  Tienda de conveniencia y E-commerce.<br />Somos especialistas en crear momentos mágicos, ofreciéndote detalles que te enamoran. Contamos con una gran varieda de produtos y servicios:
              </h2>
          </LeftContainer>
          <RightContainer>
              <BannerContainer>
                <BannerLandin src={Shop} alt="Disfruta de La experiencia" srcset=""/>
                <BannerText>
                    Gran inauguración de nuestra tienda en Orotina
                    <br />
                    <span> <FaMapMarkerAlt/> Barrio km1 100 metros oeste de colegio Santa Fe </span>
                </BannerText>
              </BannerContainer>
          </RightContainer>
      </Container>    
  )
}

export default Landing