import React, {useEffect, useState} from 'react';

import {Alert, ScrollView, Text, View, Dimensions} from 'react-native';
import CustomButton from '../components/CustomButton';
import {
  CampaignIcon,
  AddIcon,
  PlusIcon,
  StarIcon,
  GiftIcon,
} from '../assets/svgs/SvgSource';
import CustomScrollMenu from '../components/CustomScrollMenu';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import colors from '../constants/colors';
import strings from '../constants/strings';
import EllipseView from '../components/EllipseView';
import İconsView from '../components/İconsView';

const Purses = ({navigation}) => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const firstOrientation =
    screenWidth < screenHeight ? 'PORTRAIT' : 'LANDSPACE';
  const [orientation, setOrientation] = useState(firstOrientation);
  useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setOrientation('PORTRAIT');
      } else {
        setOrientation('LANDSCAPE');
      }
    });
  });
  const {width, height} = Dimensions.get('window');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <ScrollView contentContainerStyle={{}}>
        <Header text={strings.purses} isIcon={true} />
        <SearchBar orientation={orientation} />
        <EllipseView orientation={orientation} width={width} height={height} />
        <View
          style={{
            position: 'absolute',
            top: orientation === 'PORTRAIT' ? height / 6 : height / 3,
          }}>
          <CustomScrollMenu orientation={orientation} />
        </View>
        <View
          style={{
            position: 'absolute',
            top: orientation === 'PORTRAIT' ? height * 0.48 : height / 1.5,
            left: 15,
          }}>
          <İconsView orientation={orientation} width={width} height={height} />
        </View>
        <View
          style={{
            flex: 1,
            margin: 20,
            marginTop: orientation === 'PORTRAIT' ? height * 0.05 : 60,
          }}>
          <Spacer size={4} />
          <CustomButton
            textValue={strings.campaigns}
            backgroundColor={colors.white}
            textColor={colors.darkblue}
            icon={<CampaignIcon width={30} height={30} />}
            orientation={orientation}
          />
          <Spacer size={10} />
          <CustomButton
            textValue={strings.add_purse}
            backgroundColor={colors.darkblue}
            textColor={colors.white}
            icon={<AddIcon width={30} height={30} />}
            orientation={orientation}
          />
          <Spacer size={10} />
          <Footer orientation={orientation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Purses;
