import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

interface IProps {
  errorMsg: string;
  value: string;
  label: string;
  name: string;
  isSecure?: boolean;
  onChangeText: (name: string, value: string) => void;
  Icon?: React.ReactNode;
}

export class TextField extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    // console.log('12==>', this.props);
  }

  handleTextChange = (text: string) => {
    const {name, onChangeText} = this.props;
    if (onChangeText) {
      onChangeText(name, text);
    }
  };

  render() {
    const {value, errorMsg, label, isSecure, Icon} = this.props;
    // console.log('20==>',value)
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>{label} </Text>
        <View  style={styles.inputText}>
          <TextInput
            style={{width: responsiveWidth(75)}}
            value={value}
            secureTextEntry={isSecure}
            onChangeText={this.handleTextChange}
          />
          {Icon}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: 5,
    // width: responsiveWidth(90),
    // marginLeft: 20,
    // alignItems: 'center'
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  inputText: {
    width: responsiveWidth(90),
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
   paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2743FD',
  },
  labelText: {
    textAlign: 'left',
    color: '#b9b9b9',
    fontSize: 15,
  },
});

export default TextField;
