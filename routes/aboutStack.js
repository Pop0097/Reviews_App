import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

//import JS files to use in the stack navigation
import About from '../screens/about';

//import custom header
import Header from '../shared/header';


const screens = {
    About: { //default stack
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="About Pop's Reviews" />
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 100, }
    }
}); //creates stack navigation. screen parameter contains all of the pages 

export default AboutStack; //exports the home stack 