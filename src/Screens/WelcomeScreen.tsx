import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import ButtonComponent from '../Components/ButtonComponent';
import Icons from 'react-native-vector-icons/AntDesign';
import WelcomeComponent from '../Components/WelcomeComponent';
import SplashScreen from './SplashScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
interface IProps {
  navigation?:  NavigationProp<ParamListBase>
}
interface IState {
  loading: boolean;
}

export class WelcomeScreen extends Component<IProps, IState> {

    constructor(props: IProps) {
      super(props);
      this.state = {
        loading: false,
      };
    }
  
    componentDidMount(): void {
      setTimeout(() => {
        this.setState({loading: true});
      }, 1500);
    }

    onPressSignUpButton = () => {
      // console.log('34dsa')
      this.props.navigation?.navigate('SignUpScreen')

    }
  render() {
    const {loading} = this.state; 
    // console.log('32 ==>',loading);
    return (
      <SafeAreaView>
        {loading ? (
   <View style={styles.mainContainer}>
   {/* <Text>hello</Text> */}
   <LinearGradient
     colors={['#5264F9', '#3AF9EF']}
     style={styles.firstLinearGradient}></LinearGradient>
   <LinearGradient
     colors={['#C630F8', '#2F56F8']}
     style={styles.secondLinearGradient}></LinearGradient>
   <LinearGradient
     colors={['#C72FF8', '#C72FF8']}
     style={styles.thirdLinearGradient}></LinearGradient>

   <View style={styles.buttonsContainer}>
     <ButtonComponent btnText='Sign Up' onPress={this.onPressSignUpButton} />
     <View>
       <TouchableOpacity style={styles.buttonContainer}>
         {/* <LinearGradient
           colors={['#4960F9', '#1433FF']}
           style={styles.buttonGradient}> */}
         <View style={styles.btnTextContainer}>
           <Text style={styles.buttonText}>Sign In</Text>
           <Text style={styles.buttonText}>
             <Icons name="arrowright" size={25} />
           </Text>
         </View>
         {/* <Text style={styles.buttonText}>Sign In</Text> */}
         {/* </LinearGradient> */}
       </TouchableOpacity>
     </View>
   </View>
   <View style={styles.welcomeBackContainer}>
   <WelcomeComponent />
   </View>
  
 </View>
        ) : (
          <SplashScreen />
        )}
      </SafeAreaView>
   
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: responsiveHeight(100),
    position: 'relative',
  },
  firstLinearGradient: {
    height: responsiveHeight(60),
    width: responsiveWidth(110),
    // borderRadius: responsiveHeight(100),
    // borderTopRightRadius: responsiveHeight(0),
    borderBottomLeftRadius: responsiveHeight(100),
    borderBottomRightRadius: responsiveHeight(700),
    bottom: 100,
    right: 150,
    // transform: [{rotate: '28deg'}],
    // top: 100,
  },
  secondLinearGradient: {
    height: responsiveHeight(100),
    width: responsiveWidth(115),
    borderBottomRightRadius: responsiveHeight(150),
    borderTopRightRadius: responsiveHeight(200),
    bottom: 360,
    position: 'absolute',
    zIndex: -1,
    left: -130,
    opacity: 0.8,
    // transform: [{rotate: '28deg'}],
    // borderBottomLeftRadius: responsiveHeight(100),
    // borderBottomRightRadius: responsiveHeight(700),
  },
  thirdLinearGradient: {
    height: responsiveHeight(80),
    width: responsiveWidth(125),
    borderBottomRightRadius: responsiveHeight(200),
    // borderTopLeftRadius: responsiveHeight(200),
    borderTopRightRadius: responsiveHeight(180),
    position: 'absolute',
    bottom: 420,
    zIndex: -2,
    left: -70,
    opacity: 0.9,
  },

  buttonText: {
    // color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
    color: '#2743FD',
     fontFamily: 'Montserrat-Medium'
  },
  btnTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    width: responsiveWidth(80),
    // marginTop: 5,
  },
  buttonContainer: {
    width: responsiveWidth(90),
    height: 75,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#2743FD',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    // borderWidth: 2,
    alignSelf: 'center',
    marginTop: 35,
  },
  buttonsContainer: {
    marginTop: 30,
  },
  welcomeBackContainer: {
    // borderWidth: 2,
    width: 150,
    height: 100,
    bottom: responsiveHeight(80),
    left: responsiveHeight(5),
    // marginLeft: 100,
    // marginTop: 200,
}

});

export default WelcomeScreen;
