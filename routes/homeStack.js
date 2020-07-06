import { createStackNavigator } from 'react-navigation-stack';

//import JS files to use in the stack navigation
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';


const screens = {
    Home: { //default stack
        screen: Home,
        navigationOptions: {
            title: 'Pop\'s Reviews',
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review',
        }
    }
}

const HomeStack = createStackNavigator(screens); //creates stack navigation. screen parameter contains all of the pages 

export default HomeStack; //exports the home stack 