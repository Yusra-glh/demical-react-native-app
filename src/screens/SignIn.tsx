import axios from 'axios';
import {Dispatch} from '@reduxjs/toolkit';
import React, {useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, TouchableOpacity, ViewStyle, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {svg} from '../assets/svg';
import {components} from '../components';
import {actions} from '../store/actions';
import {validation} from '../utils/validation';
import {RootState, AppDispatch} from '../store';
import {setUser} from '../store/slices/userSlice';
import {AUTHORIZATION_TOKEN, ENDPOINTS} from '../config';
import {RootStackParamList} from '../types/RootStackParamList';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const SignIn: React.FC = () => {
  const dispatch: Dispatch = useDispatch<AppDispatch>();
  const navigation: Navigation = useNavigation<Navigation>();

  const rememberMe = useSelector(
    (state: RootState) => state.userSlice.rememberMe,
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('user@gmail.com');
  const [password, setPassword] = useState<string>('azerty1234');

  const user = {email, password};

  const handleEmailChange = useCallback((text: string): void => {
    setEmail(text);
  }, []);

  const handlePasswordChange = useCallback((text: string): void => {
    setPassword(text);
  }, []);

  const handleSignIn = async () => {
    dispatch(
      setUser({
        id: 1,
        email: email,
        userName: 'John Doe',
        phoneVerified: true,
        password: password,
        confirmPassword: password,
      }),
    );
  };

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        goBackIcon={true}
        title={'Sign in'}
      />
    );
  };

  const renderTitle = (): JSX.Element => {
    return (
      <Text
        style={{
          marginBottom: 14,
          textAlign: 'center',
          color: theme.colors.darkBlue,
          ...theme.fonts.H1,
          textTransform: 'capitalize',
        }}
      >
        Welcome back
      </Text>
    );
  };

  const renderDescription = (): JSX.Element => {
    return (
      <View>
        <Text
          style={{
            textAlign: 'center',
            color: theme.colors.textColor,
            marginBottom: 30,
            ...theme.fonts.textStyle_16,
          }}
        >
          Sign in to your account
        </Text>
      </View>
    );
  };

  const renderInputFields = (): JSX.Element => {
    return (
      <React.Fragment>
        <custom.InputField
          value={email}
          checkIcon={true}
          placeholder='sylviahuber@mail.com'
          containerStyle={{marginBottom: 10}}
          onChangeText={handleEmailChange}
        />
        <custom.InputField
          label='password'
          value={password}
          eyeOffIcon={true}
          placeholder='••••••••'
          secureTextEntry={true}
          containerStyle={{marginBottom: 24}}
          onChangeText={handlePasswordChange}
        />
      </React.Fragment>
    );
  };

  const renderForgotPassword = (): JSX.Element => {
    return (
      <View
        style={{
          marginBottom: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            dispatch(actions.setRememberMe(!rememberMe));
          }}
        >
          <View
            style={{
              width: 18,
              height: 18,
              borderWidth: 1,
              borderColor: '#D3E3F1',
              backgroundColor: theme.colors.white,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {rememberMe && <svg.RememberCheckSvg />}
          </View>
          <Text
            style={{
              color: theme.colors.textColor,
              ...theme.fonts.textStyle_14,
              marginLeft: 10,
            }}
          >
            Remember me
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
        >
          <Text
            style={{color: theme.colors.darkBlue, ...theme.fonts.textStyle_16}}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title={'Sign in'}
        onPress={() => {
          validation(user) ? handleSignIn() : null;
        }}
        loading={loading}
        containerStyle={{marginBottom: 20}}
      />
    );
  };

  const renderIfYouDontHaveAnAccount = (): JSX.Element => {
    return (
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text
          style={{color: theme.colors.textColor, ...theme.fonts.textStyle_16}}
        >
          {'Don’t have an account? '}{' '}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <Text
            style={{color: theme.colors.darkBlue, ...theme.fonts.textStyle_16}}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSocialMedia = (): JSX.Element => {
    const socialStyles: ViewStyle = {
      backgroundColor: '#EAF0F5',
      width: utils.responsiveWidth(105),
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 13,
    };

    return (
      <View style={{padding: 20}}>
        <Text
          style={{
            textAlign: 'center',
            ...theme.fonts.textStyle_16,
            color: theme.colors.textColor,
          }}
        >
          Sign in with social networks:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 20,
          }}
        >
          <TouchableOpacity style={{...socialStyles}}>
            <svg.FacebookSvg />
          </TouchableOpacity>
          <TouchableOpacity style={{...socialStyles}}>
            <svg.TwitterSvg />
          </TouchableOpacity>
          <TouchableOpacity style={{...socialStyles}}>
            <svg.GoogleSvg />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingVertical: 20,
          justifyContent: 'center',
        }}
      >
        {renderTitle()}
        {renderDescription()}
        {renderInputFields()}
        {renderForgotPassword()}
        {renderButton()}
        {renderIfYouDontHaveAnAccount()}
      </KeyboardAwareScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
      {renderSocialMedia()}
    </custom.SafeAreaView>
  );
};

export default SignIn;
