import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, Dimensions, View} from 'react-native';
import Spacer from './Spacer';
import colors from '../constants/colors';

const CustomButton = ({
  navigation,
  textValue,
  backgroundColor,
  icon,
  textColor,
  onPress,
  orientation,
}) => {
  const rigthIcon = icon ? icon : null;
  return (
    <TouchableOpacity
      style={{
        borderRadius: 50,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: '10%',
        paddingVertical: orientation === 'PORTRAIT' ? '5%' : '3%',
        borderWidth: 2,
        borderColor: colors.darkblue,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: textColor,
          fontSize: 21,
          fontWeight: 'bold',
          fontFamily: 'Roboto-Bold'
        }}>
        {textValue}
      </Text>
      <View style={{position: 'absolute', right: 22}}>{rigthIcon}</View>
    </TouchableOpacity>
  );
};

export default CustomButton;
