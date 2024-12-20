import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export class WelcomeComponent extends Component {
  render() {
    return (
      <View 
    //   style={styles.fitstLinearImageContainer}
      >
        <Image
          source={require('../assets/Images/logo-white.png')}
          style={styles.whiteLogo}
        />
        <Text style={styles.welcomeText}>Welcome Back</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  whiteLogo: {
    width: 60,
    height: 60,
    // color: '',
  },
//   fitstLinearImageContainer: {
//     // borderWidth: 2,
//     width: 150,
//     height: 100,
//     bottom: responsiveHeight(80),
//     left: responsiveHeight(5),
//     // marginLeft: 100,
//     // marginTop: 200,
//   },
  welcomeText: {
    color: '#ffffff',
    fontSize: 28,
    fontFamily: 'Montserrat-Medium',
    marginTop: 12,
  },
});

export default WelcomeComponent;
