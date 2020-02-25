import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
// import { injectGlobal } from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Titlebar>Extra Forte</Titlebar>
      <Item>
        <NameItem>Item 1</NameItem>
      </Item>
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
  margin: 12% 10% 10% 34%;
  
`;

const Item = styled.View`
  height: 60px;
  background-color: #203449;
  margin: 0 28px;
  border-radius: 12px;
`;

const NameItem = styled.Text`
  color: #fff;
`;
