import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {DrawerIcon, NotificationIcon} from '../assets/svgs/SvgSource';
import Spacer from './Spacer';
import colors from '../constants/colors';

const Header = ({text, isIcon}) => {
  const {width, height} = Dimensions.get('screen');
  return (
    <View
      style={{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.lightgray,
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 10,
      }}>
      {isIcon && <DrawerIcon width={16} height={16} />}
      <View width={width / 3.5} />
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: colors.darkblue,
          fontFamily: 'Roboto-Bold',
        }}>
        {text}
      </Text>
      <View width={width / 3.5} />
      {isIcon && <NotificationIcon width={16} height={16} />}
    </View>
  );
};

export default Header;
