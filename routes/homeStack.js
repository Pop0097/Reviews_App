import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

//import JS files to use in the stack navigation
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

//import custom header
import Header from '../shared/header';

const screens = {
    Home: { //default stack
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Pop's Reviews" />
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
  }); //creates stack navigation. screen parameter contains all of the pages 

export default HomeStack; //exports the home stack 