import {SafeAreaView, Text, View, Linking} from 'react-native';
import React, {Component} from 'react';
import SplashScreen from './src/Screens/SplashScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

interface IProps {}
interface IState {
  loading: boolean;
}
export class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: false,
    };


    // this.prefix = Linking.createURL('/');
  }

  

  // componentDidMount(): void {
  //   setTimeout(() => {
  //     this.setState({loading: true});
  //   }, 1500);
  // }

  render() {
    const linking = {
      prefixes: ['myLink://'],
    }

    const {loading} = this.state;
    // console.log('17==?', loading);
    return (
      <NavigationContainer linking={linking}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
