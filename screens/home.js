import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';
import { MaterialIcons } from '@expo/vector-icons';


export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Default 1', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Default 2', rating: 4, body: 'lorem ipsum', key: '2' },
  ]);

  const [modalView, setModalView] = useState(false);

  const addReview = (review) => { //called when review form is complted
    review.key = Math.random().toString(); //makes key randomly
    setReviews((currentReviews) => {
        return [review, ...currentReviews]; //adds new review to top of list
    });
    setModalView(false); 
  }

  return (
    <View style={globalStyles.container}>
      
      {/* Modal for the "create review" form */}
      <Modal visible={modalView} animationType='slide'> 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons style={{...styles.modalToggle, ...styles.modalClose}} name="close" size={30} onPress={() => setModalView(false)} />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons style={styles.modalToggle} name='add' size={30} onPress={() => setModalView(true)}/>

      <FlatList data={reviews} renderItem={({ item }) => (
        //when navigating, the item in question is also passsed so we can access the data values 
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