import React from 'react';
import {View, TextInput} from 'react-native';
import Spacer from './Spacer';
import colors from '../constants/colors';

const CustomTextInput = ({icon, ...remainProps}) => {
  return (
    <View>
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        {icon}
        <Spacer size={10} />
        <TextInput placeholderTextColor={colors.darkgray} {...remainProps} />
      </View>
      <Spacer size={13} />
      <View
        style={{width: 350, height: 1, backgroundColor: colors.lightgray}}
      />
    </View>
  );
};

export default CustomTextInput;
