import {
  View,
  Text,
  Alert,
  Platform,
  ViewStyle,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState, useEffect, useRef} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {utils} from '../utils';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';
import {validation} from '../utils/validation';
import {ENDPOINTS, AUTHORIZATION_TOKEN} from '../config';
import {RootStackParamList} from '../types/RootStackParamList';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const SignUp: React.FC = () => {
  const navigation: Navigation = useNavigation<Navigation>();

  const [loading, setLoading] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassowrd] = useState<string>('');

  const user = {userName, email, password, confirmPassword};

  const handleLogin = async () => {
    try {
      setLoading(true);

      const response = await axios({
        method: 'post',
        url: ENDPOINTS.CREATE_USER,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${AUTHORIZATION_TOKEN}`,
        },
        data: {
          user_name: userName,
          user_email: email,
          user_password: password,
        },
      });

      if ((response.status = 201)) {
        navigation.replace('SignUpAccountCreated');
        return;
      }

      Alert.alert('Something went wrong, please try again later');
    } catch (error: any) {
      if (error.response.status === 409) {
        Alert.alert(
          'Error',
          'User with this name or email already exists',
          [
            {
              text: 'OK',
              onPress: () => {
                console.log('OK Pressed');
              },
            },
          ],
          {cancelable: false},
        );
        return;
      }

      Alert.alert('Something went wrong, please try again later');
    } finally {
      setLoading(false);
    }
  };

  const handleNameChange = useCallback((text: string): void => {
    setUserName(text);
  }, []);

  const handleEmailChange = useCallback((text: string): void => {
    setEmail(text);
  }, []);

  const handlePasswordChange = useCallback((text: string): void => {
    setPassword(text);
  }, []);

  const handleConfirmPasswordChange = useCallback((text: string): void => {
    setConfirmPassowrd(text);
  }, []);

  const nameInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (loading) {
      nameInputRef.current?.blur();
      emailInputRef.current?.blur();
      passwordInputRef.current?.blur();
      confirmPasswordInputRef.current?.blur();
    }
  }, [loading]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setUserName('');
      setEmail('');
      setPassword('');
      setConfirmPassowrd('');

      nameInputRef.current?.blur();
      emailInputRef.current?.blur();
      passwordInputRef.current?.blur();
      confirmPasswordInputRef.current?.blur();
    });

    return unsubscribe;
  }, [navigation]);

  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} />;
  };

  const renderTitle = (): JSX.Element => {
    return (
      <Text
        style={{
          marginBottom: 30,
          textAlign: 'center',
          color: theme.colors.darkBlue,
          textTransform: 'capitalize',
          ...theme.fonts.H1,
        }}
      >
        {'Sign up'}
      </Text>
    );
  };

  const renderInputFields = (): JSX.Element => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <custom.InputField
          value={userName}
          checkIcon={true}
          onChangeText={handleNameChange}
          placeholder={'Sylvia Huber'}
          containerStyle={{marginBottom: 10}}
        />
        <custom.InputField
          value={email}
          checkIcon={true}
          onChangeText={handleEmailChange}
          placeholder='sylviahuber@mail.com'
          containerStyle={{marginBottom: 10}}
        />
        <custom.InputField
          value={password}
          eyeOffIcon={true}
          placeholder='password'
          secureTextEntry={true}
          containerStyle={{marginBottom: 10}}
          onChangeText={handlePasswordChange}
        />
        <custom.InputField
          value={confirmPassword}
          eyeOffIcon={true}
          placeholder='Confirm password'
          secureTextEntry={true}
          containerStyle={{marginBottom: 20}}
          onChangeText={handleConfirmPasswordChange}
        />
      </KeyboardAvoidingView>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title={'sign up'}
        onPress={() => {
          validation(user) ? handleLogin() : null;
        }}
        loading={loading}
        containerStyle={{marginBottom: 20}}
      />
    );
  };

  const renderIfYouHaveAccount = (): JSX.Element => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        <Text
          style={{...theme.fonts.textStyle_16, color: theme.colors.textColor}}
        >
          Already have an account?{' '}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          <Text
            style={{...theme.fonts.textStyle_16, color: theme.colors.darkBlue}}
          >
            Sign in.
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingVertical: 20,
          justifyContent: 'center',
        }}
      >
        {renderTitle()}
        {renderInputFields()}
        {renderButton()}
        {renderIfYouHaveAccount()}
      </ScrollView>
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
          {'Sign in with social networks'}
          {':'}
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

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
      {renderSocialMedia()}
    </custom.SafeAreaView>
  );
};

export default SignUp;
