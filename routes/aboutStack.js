import { createStackNavigator } from 'react-navigation-stack';

//import JS files to use in the stack navigation
import About from '../screens/about';


const screens = {
    About: { //default stack
        screen: About,
        navigationOptions: {
            title: 'About Pop\'s Reviews',
        }
    },
}

const AboutStack = createStackNavigator(screens); //creates stack navigation. screen parameter contains all of the pages 

export default AboutStack; //exports the home stack 