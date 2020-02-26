import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import arroz from '../../assets/arroz.png';
import feijao from '../../assets/feijao.png';
import carne from '../../assets/carne.png';

import total from '../../assets/total.png';

import api from '../services/api';

export default function Home() {
  return (
    <Container>
      <Titlebar>Extra Forte</Titlebar>
      <Item>
        <ImageItem source={arroz}></ImageItem>
        <Info>
          <NameItem>Arroz</NameItem>
          <InfoItem>2 Kg - R$ 10,50</InfoItem>
        </Info>
      </Item>

      <Item>
        <ImageItem source={feijao}></ImageItem>
        <Info>
          <NameItem>Feijão</NameItem>
          <InfoItem>1 Kg - R$ 8,59</InfoItem>
        </Info>
      </Item>

      <Item>
        <ImageItem source={carne}></ImageItem>
        <Info>
          <NameItem>Carne</NameItem>
          <InfoItem>1 Kg - R$ 17,59</InfoItem>
        </Info>
      </Item>

      <Menu>
        <Total>
          <TotalImage source={total}></TotalImage>
          <TotalInfo>
            <TotalItens>Total (3)</TotalItens>
            <TotalPrice>R$ 60,03</TotalPrice>
          </TotalInfo>
        </Total>

        <Cart>
          <CartInfo>
            
          </CartInfo>

        </Cart>
      </Menu>

    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #162736;
`;

const Titlebar = styled.Text`
  color: #20C970;
  font-size: 24px;
  font-weight: bold;
  align-self: center;
  margin-top: 40px;
  margin-bottom: 24px;
`;

const Item = styled.View`
  height: 60px;
  background-color: #203449;
  margin: 8px 28px;
  border-radius: 12px;
  flex-direction: row;
`;

const NameItem = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;

`;

const ImageItem = styled.Image`
  width: 44px;
  margin: 8px;
`;

const Info = styled.View`
  flex-direction: column;
  margin: 8px;
`;

const InfoItem = styled.Text`
  font-size: 14px;
  color: #fff;
  flex-direction: column;
`;

const Menu = styled.SafeAreaView`
  height: 80px;
  background-color: #203449;
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

const Total = styled.View`
  color: #20C970;
  /* margin: 24px; */
  flex-direction: row;
`;

const TotalInfo = styled.View`
  margin-bottom: 14px;
  padding-left: 8px;
`;

const TotalImage = styled.Image`
  
`;

const TotalItens = styled.Text`
  color: #20C970;
  font-size: 16px;
  margin: 0;

`;

const TotalPrice = styled.Text`
  color: #20C970;
  font-size: 18px;
  margin-bottom: 14px;
  font-weight: bold;
`;

const Cart = styled.View`
 
`;

const CartInfo = styled.View`
  margin-bottom: 14px;
  padding: 4px;
`;
