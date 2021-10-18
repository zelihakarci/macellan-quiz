import * as React from 'react';
import {View, Dimensions, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import {CoffeeIcon} from '../assets/svgs/SvgSource';
import Spacer from './Spacer';
import colors from '../constants/colors';
import strings from '../constants/strings';

const CustomScrollMenu = ({orientation}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          height: orientation === 'PORTRAIT' ? height * 0.26 : height * 0.25,
          justifyContent: 'center',
        }}>
        <Carousel
          width={orientation === 'PORTRAIT' ? width : width * 0.9}
          mode="parallax"
          parallaxScrollingScale={0.8}
          data={[
            {color: colors.fuchsia},
            {color: colors.mustard},
            {color: colors.green},
          ]}
          timingConfig={{duration: 500}}
          autoPlayInterval={2000}
          renderItem={({color}) => {
            return (
              <View
                style={{
                  backgroundColor: colors.white,
                  justifyContent: 'flex-start',
                  flex: 1,
                  borderRadius: 15,
                }}>
                <View
                  style={{
                    backgroundColor: color,
                    height: 25,
                    borderTopStartRadius: 15,
                    borderTopEndRadius: 15,
                    position: 'relative',
                  }}
                />
                <View
                  style={{
                    width: orientation === 'PORTRAIT' ? 90 : 60,
                    height: orientation === 'PORTRAIT' ? 90 : 60,
                    borderRadius: orientation === 'PORTRAIT' ? width * 90 : 60,
                    backgroundColor: colors.white,
                    borderWidth: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: color,
                    position: 'absolute',
                    top: 10,
                    left: 20,
                  }}>
                  <CoffeeIcon
                    width={orientation === 'PORTRAIT' ? 85 : 40}
                    height={orientation === 'PORTRAIT' ? 85 : 40}
                  />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    right: '10%',
                    top: '25%',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'Roboto-Bold',
                      color: '#49495C',
                    }}>
                    {strings.lagina_coffee_shop}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: height / 45,
                    left: 30,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 21,
                      fontFamily: 'Roboto-Bold',
                      color: '#49495C',
                    }}>
                    4
                  </Text>
                  <Spacer size={20} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Roboto-Regular',
                      color: colors.gray,
                    }}>
                    {strings.active_campaign}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default CustomScrollMenu;
