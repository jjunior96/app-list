import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import logo from '../../assets/logo.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignContent: 'center'
  },
  image: {
    paddingLeft: 50,
    marginTop: 30,
    
  },  
});