import React, {useState} from 'react';
import {View, TextInput, Text, Dimensions} from 'react-native';
import {SearchIcon, FilterIcon} from '../assets/svgs/SvgSource';
import colors from '../constants/colors';
import strings from '../constants/strings';

const SearchBar = ({orientation}) => {
  const {width, height} = Dimensions.get('screen');
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: colors.white,
        padding: '4%',
      }}>
      <View style={{alignSelf: 'center'}}>
        <SearchIcon width={16} height={16} />
      </View>
      <View style={{width: 10}} />
      <TextInput
        style={{padding: '1%', color: colors.darkblue}}
        onChangeText={() => {}}
        value={''}
        placeholder={strings.searchbar_placeholder}
      />
      <View
        style={{
          width: orientation === 'PORTRAIT' ? '30%' : '55%',
        }}
      />
      <Text
        style={{
          fontSize: 12,
          fontFamily: 'Roboto-Bold',
          alignSelf: 'center',
          color: colors.darkblue,
        }}>
        {strings.all_purses}
      </Text>
      <View style={{width: 10}} />
      <View style={{alignSelf: 'center'}}>
        <FilterIcon width={16} height={16} />
      </View>
    </View>
  );
};

export default SearchBar;
