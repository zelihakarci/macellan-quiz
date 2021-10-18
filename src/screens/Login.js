import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyIcon, PhoneIcon, LoginIcon} from '../assets/svgs/SvgSource';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import colors from '../constants/colors';
import strings from '../constants/strings';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            justfyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white,
          }}>
          <View style={{flex: 0.5, backgroundColor: colors.white}}>
            <Header text={strings.signin} />
          </View>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'center',
              backgroundColor: colors.white,
              margin:'5%'
            }}>
            <LoginIcon width={150} height={150} />
          </View>
          <View
            style={{
              flex: 2,
              backgroundColor: colors.white,
            }}>
            <View style={{flex: 0.9, justifyContent: 'center'}}>
              <CustomTextInput
                style={{fontSize: 16}}
                value={''}
                onChangeText={() => {}}
                placeholder={'5xx xxx xx xx'}
                autoCompleteType={'off'}
                autoCapitalize="none"
                icon={<PhoneIcon width={15} height={30} />}
              />
              <Spacer size={40} />
              <CustomTextInput
                style={{fontSize: 16, color: colors.darkgray}}
                value={'password'}
                onChangeText={() => {}}
                placeholder={''}
                autoCompleteType={'off'}
                autoCapitalize="none"
                secureTextEntry={true}
                icon={<KeyIcon width={15} height={20} />}
              />
            </View>
            <View style={{flex: 1.5}}>
              <View
                style={{
                  flex: 0.3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: colors.darkblue,
                    fontFamily: 'Roboto-Regular',
                  }}>
                  {strings.forgot_password}
                </Text>
              </View>
              <CustomButton
                textValue={strings.login}
                backgroundColor={colors.darkblue}
                textColor={colors.white}
                onPress={() => {
                  navigation.navigate('Purses');
                }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
