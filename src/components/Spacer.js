import React from 'react';
import {View} from 'react-native';

const Spacer = ({size}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default Spacer;
