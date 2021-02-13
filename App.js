import React,{Component} from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeBerita from "./src/view/HomeBerita";

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: HomeBerita,
    },
    {
        initialRouteName: 'Home',
    }
);


const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
    render(){
        return <AppContainer/>
    }
}