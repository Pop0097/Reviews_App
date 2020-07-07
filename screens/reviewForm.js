import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import CustomButton from '../shared/button';
import { Formik } from 'formik';
import * as yup from 'yup';


const reviewSchema = yup.object({ //set of rules for inputs
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(10),
    rating: yup.string()
        .required()
        .test('num', 'Must be a number between 1 and 5',  (val) => {
            return (parseInt(val) < 6 && parseInt(val) > 0);
        }),
})


export default function ReviewForm({ addReview }) {

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
                multiline 
                style={globalStyles.input}
                placeholder='Review Title'
                onChangeText={props.handleChange('title')}
                value={props.values.title}
                onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>
                {props.touched.title && props.errors.title}
            </Text>

            <TextInput
                style={globalStyles.input}
                multiline minHeight={80}
                placeholder='Review Body'
                onChangeText={props.handleChange('body')}
                value={props.values.body}
                onBlur={props.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>
                {props.touched.body && props.errors.body}
            </Text>

            <TextInput 
                style={globalStyles.input}
                placeholder='Rating (1 - 5)'
                onChangeText={props.handleChange('rating')}
                value={props.values.rating}
                keyboardType='numeric'
                onBlur={props.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>
                {props.touched.rating && props.errors.rating}
            </Text>
            
            <CustomButton text="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'maroon',
        borderWidth: 1,
        borderColor: 'maroon',
        borderRadius:6,
    }
})