import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';
import { MaterialIcons } from '@expo/vector-icons';


export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const [modalView, setModalView] = useState(false);

  return (
    <View style={globalStyles.container}>
      
      <Modal visible={modalView} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons style={{...styles.modalToggle, ...styles.modalClose}} name="close" size={30} onPress={() => setModalView(false)} />
          <ReviewForm />
        </View>
      </Modal>

      <MaterialIcons style={styles.modalToggle} name='add' size={30} onPress={() => setModalView(true)}/>

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card> 
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    padding: 20,
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 30,
    marginBottom: 0,
  }
})