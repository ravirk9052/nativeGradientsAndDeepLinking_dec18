import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from 'react-native-vector-icons/AntDesign';

interface IProps {
  onPress?: () => void;
  btnText: string;
}

export class ButtonComponent extends Component<IProps> {
  render() {
    const {btnText,onPress} = this.props;
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <LinearGradient
          colors={['#4960F9', '#1433FF']}
          style={styles.buttonGradient}>
          <View style={styles.btnTextContainer}>
            <Text style={styles.buttonText}>{btnText}</Text>
            <Text style={styles.buttonText}>
            <Icons name='arrowright' size={25} />
            </Text>
          </View>
          {/* <Text style={styles.buttonText}>Sign In</Text> */}
        </LinearGradient>
        <LinearGradient
          colors={['#5264F9', '#3AF9EF']}
          style={styles.firstButtonCircle}></LinearGradient>
        <LinearGradient
          colors={['#C72FF8', '#C72FF8']}
          style={[styles.secondButtonCircle]}></LinearGradient>
      </TouchableOpacity>
    );
  }
}

{
  /* <LinearGradient
              colors={['#5264F9', '#3AF9EF']}
              style={styles.firstButtonCircle}></LinearGradient> */
}
{
  /* <LinearGradient
            colors={['#C72FF8', '#C72FF8']}
            style={styles.secondButtonCircle}></LinearGradient> */
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: responsiveWidth(90),
    height: 75,
    borderRadius: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    overflow: 'hidden',
    // borderWidth: 2,
    alignSelf: 'center',
  },
  buttonGradient: {
    // flex: 1,
    // width: responsiveWidth(90),
    height: 75,
    // borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // overflow: 'hidden',
    // zIndex: -1,
    // borderWidth: 2,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium'
  },

  firstButtonCircle: {
    width: 120,
    height: 120,
    borderRadius: 100,
    // borderWidth: 2,
    position: 'absolute',
    // right: 0,
    left: 260,
    top: -95,
    opacity: 0.7,
    // top: -75,
    // overflow: 'hidden',
    // opacity: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    // alignSelf: 'flex-end',
    // alignContent: 'flex-end',
    // marginLeft: responsiveHeight(90),
    // overflow: 'hidden',
    // opacity: 1,
    // top: 100,
    // bottom: 0,
    // zIndex: -1,
    // opacity: -1
  },
  secondButtonCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // borderWidth: 2,
    position: 'absolute',
    // overflow: 'hidden',
    top: -60,
    // bottom: 0,
    // right: 100,
    left: 320,
    // zIndex: -1,
    // left: 300,
    // top: -80,
    // rotate: transform: [{rotate: ‘45deg’}],
  },
  btnTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    width: responsiveWidth(80),
    // marginTop: 5,
  },
});

export default ButtonComponent;
