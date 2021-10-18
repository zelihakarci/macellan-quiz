import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {
  PursesIcon,
  CardsIcon,
  BalanceIcon,
  HistoryIcon,
} from '../assets/svgs/SvgSource';
import colors from '../constants/colors';
import strings from '../constants/strings';

const Footer = ({orientation}) => {
  const {width, height} = Dimensions.get('screen').width;
  const menuList = [
    {
      id: 1,
      title: strings.purses,
      icon: <PursesIcon width={28} height={28} color={colors.white} />,
      backgroundColor: colors.darkblue,
      textColor: colors.darkblue,
    },
    {
      id: 2,
      title: strings.my_cards,
      icon: <CardsIcon width={28} height={28} color={colors.darkblue} />,
      backgroundColor: colors.white,
      textColor: colors.mediumgray,
    },
    {
      id: 3,
      title: strings.balance,
      icon: <BalanceIcon width={28} height={28} color={colors.darkblue} />,
      backgroundColor: colors.white,
      textColor: colors.mediumgray,
    },
    {
      id: 4,
      title: strings.history,
      icon: <HistoryIcon width={28} height={28} color={colors.darkblue} />,
      backgroundColor: colors.white,
      textColor: colors.mediumgray,
    },
  ];
  return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
      {menuList.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              alignItems: 'center',
              margin: orientation === 'PORTRAIT' ? '4%' : '10%',
            }}>
            <TouchableOpacity
              key={index}
              style={{
                width: 63,
                height: 63,
                borderRadius: 63,
                padding: 10,
                backgroundColor: item.backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              {item.id === 1 && (
                <View
                  style={{
                    width: 0,
                    height: 0,
                    backgroundColor: colors.transparent,
                    borderStyle: 'solid',
                    borderLeftWidth: 8,
                    borderRightWidth: 8,
                    borderBottomWidth: 15,
                    borderLeftColor: colors.transparent,
                    borderRightColor: colors.transparent,
                    borderBottomColor: colors.darkblue,
                    position: 'absolute',
                    bottom: 60,
                  }}
                />
              )}
              {item.icon}
            </TouchableOpacity>
            <Text style={{fontSize: 9, margin: 5, color: item.textColor, fontFamily: 'Roboto-Regular'}}>
              {item.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Footer;
