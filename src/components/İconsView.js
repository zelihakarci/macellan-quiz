import React from 'react';
import {View} from 'react-native';
import colors from '../constants/colors';
import strings from '../constants/strings';
import {
  CampaignIcon,
  AddIcon,
  PlusIcon,
  StarIcon,
  GiftIcon,
} from '../assets/svgs/SvgSource';

const İconsView = ({orientation, width, height}) => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View>
        <PlusIcon width={15} height={15} color={colors.purple} />
      </View>
      <View
        style={{
          position: 'absolute',
          left: width / 10,
          bottom: orientation === 'PORTRAIT' ? width / 15 : width / 60,
        }}>
        <StarIcon width={20} height={20} color={colors.yellow} />
      </View>
      <View style={{position: 'absolute', left: width / 5}}>
        <GiftIcon width={30} height={30} color={colors.yellow} />
      </View>
      <View
        style={{
          position: 'absolute',
          left: orientation === 'PORTRAIT' ? width / 2.3 : width / 2.5,
          bottom: orientation === 'PORTRAIT' ? width / 60 : width / 90,
        }}>
        <StarIcon width={20} height={20} color={colors.lightyellow} />
      </View>
      <View
        style={{
          position: 'absolute',
          left: width / 1.5,
          bottom: orientation === 'PORTRAIT' ? width / 60 : width / 90,
        }}>
        <StarIcon width={20} height={20} color={colors.red} />
      </View>
      <View
        style={{
          position: 'absolute',
          left: orientation === 'PORTRAIT' ? width * 0.8 : width * 0.78,
          top: orientation === 'PORTRAIT' ? width * 0.03 : width * 0.015,
        }}>
        <PlusIcon width={10} height={10} color={colors.orange} />
      </View>
      <View
        style={{
          position: 'absolute',
          left: orientation === 'PORTRAIT' ? width * 0.85 : width * 0.83,
          bottom: orientation === 'PORTRAIT' ? width / 12 : width / 30,
        }}>
        <StarIcon width={14} height={14} color={colors.red} />
      </View>
      <View
        style={{
          position: 'absolute',
          left: orientation === 'PORTRAIT' ? width * 0.89 : width * 0.84,
        }}>
        <StarIcon width={14} height={14} color={colors.velcrogreen} />
      </View>
    </View>
  );
};

export default İconsView;
