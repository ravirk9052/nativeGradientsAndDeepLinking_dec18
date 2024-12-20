import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



export class SplashScreen extends Component {


  render() {
    // const {loading} = this.state;
    // console.log('24==>', loading);
    return (
      <View style={styles.appContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Images/AppLogo.png')}
            style={styles.logoStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    // flex: 1,
    // borderWidth: 2,
    height: responsiveHeight(100),
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: responsiveHeight(33),
    // alignSelf: 'center',
  },
  logoStyle: {
    width: 96,
    height: 83,
    // flex: 1,
    // marginTop: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 1,
  },
});

export default SplashScreen;
