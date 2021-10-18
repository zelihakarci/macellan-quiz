import React from 'react';
import {View} from 'react-native';
import colors from '../constants/colors';

const EllipseView = ({orientation, width, height}) => {
  return (
    <View
      style={{
        flex: 1,
        width: orientation === 'PORTRAIT' ? width : width * 0.9,
        height: orientation === 'PORTRAIT' ? height / 3 : height / 6,
        alignItems: 'center',
        backgroundColor: colors.darkblue,
        borderBottomLeftRadius:
          orientation === 'PORTRAIT' ? width / 2 : (width * 0.9) / 2,
        borderBottomRightRadius:
          orientation === 'PORTRAIT' ? width / 2 : (width * 0.9) / 2,
        transform: orientation === 'PORTRAIT' ? [{scaleX: 2}] : [{scaleY: 2}],
      }}
    />
  );
};

export default EllipseView;
