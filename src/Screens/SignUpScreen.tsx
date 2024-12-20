import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import ButtonComponent from '../Components/ButtonComponent';
import WelcomeComponent from '../Components/WelcomeComponent';
import TextField from '../Components/TextField';
import Icons from 'react-native-vector-icons/AntDesign';

interface IProps {}
interface IState {
  Email: string;
  Password: string;
}

export default class SignUpScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
    };
  }
  handleInputChange = (name: string, value: string) => {
    // console.log('27==>',name,value)
    this.setState({
      [name]: value,
    } as Pick<IState, keyof IState>);
  };

  render() {
    const {Email, Password} = this.state;
    console.log('36',Email);
    return (
      <View style={styles.mainContainer}>
        {/* <Text>hello</Text> */}
        <LinearGradient
          colors={['#5264F9', '#3AF9EF']}
          style={styles.firstLinearGradient}></LinearGradient>
        <LinearGradient
          colors={['#C630F8', '#2F56F8','#A891FB',]}
          style={styles.secondLinearGradient}></LinearGradient>
        <LinearGradient
          colors={['#C72FF8', '#C72FF8']}
          style={styles.thirdLinearGradient}></LinearGradient>

        <View>
          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Sign in</Text>
          </View>

          <View style={styles.textInputContainer}>
            <TextField
              name="Email"
              // placeholder="Email Address"
              value={Email}
              label="Email Address"
              onChangeText={this.handleInputChange}
              errorMsg=""
              Icon ={<Icons name='check' color='#CB3EF9' size={25} />}
            />
            <TextField
              name="Password"
              // placeholder="Password"
              isSecure
              value={Password}
              label="Password"
              onChangeText={this.handleInputChange}
              errorMsg=""
            />
            <View style={styles.forgetContainer}>
              <Text style={styles.forgetText}>Forget Password ?</Text>
            </View>
            <View style={styles.btnComponent}>
              <ButtonComponent btnText='Sign in'  />
            </View>
          </View>
        </View>

        <View style={styles.welcomeBackContainer}>
          <WelcomeComponent />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // borderWidth: 1,
    height: responsiveHeight(100),
    position: 'relative',
  },
  firstLinearGradient: {
    height: responsiveHeight(50),
    width: responsiveWidth(105),
    borderRadius: responsiveHeight(100),
    bottom: 150,
    right: 150,
    // borderBottomLeftRadius: responsiveHeight(60),
    // borderBottomRightRadius: responsiveHeight(400),
    // bottom: 20,
    // right: 50,
    // top: 100,
  },
  secondLinearGradient: {
    height: responsiveHeight(50),
    width: responsiveWidth(105),
    borderRadius: responsiveHeight(100),
    // borderBottomRightRadius: responsiveHeight(200),
    // borderTopRightRadius: responsiveHeight(180),
    bottom: 0,
    left: -110,
    top: -125,
    position: 'absolute',
    zIndex: -1,

    opacity: 0.9,
    // borderBottomLeftRadius: responsiveHeight(100),
    // borderBottomRightRadius: responsiveHeight(700),
  },
  thirdLinearGradient: {
    height: responsiveHeight(50),
    width: responsiveWidth(105),
    borderRadius: responsiveHeight(100),
    left: -80,
    top: -180,
    // borderBottomRightRadius: responsiveHeight(200),
    // // borderTopLeftRadius: responsiveHeight(200),
    // borderTopRightRadius: responsiveHeight(180),
    position: 'absolute',
    bottom: 500,
    zIndex: -2,
    // left: -80,
    opacity: 0.9,
  },
  welcomeBackContainer: {
    // borderWidth: 2,
    width: 150,
    height: 100,
    bottom: responsiveHeight(75),
    left: responsiveHeight(5),
    // marginLeft: 100,
    // marginTop: 200,
  },
  textInputContainer: {
    // borderWidth: 1,
    justifyContent: 'space-between',
    // justifyContent
    // flex: 1,
    gap: 15,
  },
  btnComponent: {
    marginTop: 10,
  },
  signInContainer: {
    // borderWidth: 1,
    marginTop: -70,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  signInText: {
    fontSize: 28,
    fontWeight: 700,
     fontFamily: 'Montserrat-Medium'
  },
  forgetContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  forgetText: {
    color: '#2B47FC',
    fontSize: 16,
  },
});
