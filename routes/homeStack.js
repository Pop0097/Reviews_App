import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//import JS files to use in the stack navigation
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';


const screens = {
    Home: { //default stack
        screen: Home,
    },
    ReviewDetails: {
        screen: ReviewDetails,
    }
}

const HomeStack = createStackNavigator(screens); //creates stack navigation. screen parameter contains all of the pages 

export default createAppContainer(HomeStack); //exports the home stack 