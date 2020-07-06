import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation } /*Add navigation as a parameter */) {

  const pressHandler = () => {
      navigation.navigate('ReviewDetails'); //navigate to ReviewDetails.js when button is pressed
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='review details' onPress={pressHandler} /*Pres button to open reviewdetails.js*//>
    </View>
  );
}