import {Text} from 'react-native';
import React, {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/RootStackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {validation} from '../utils/validation';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const ForgotPassword: React.FC = () => {
  const navigation: Navigation = useNavigation<Navigation>();

  const [email, setEmail] = useState<string>('');

  const handleEmailChange = useCallback((text: string): void => {
    setEmail(text);
  }, []);

  const handleForgotPassword = (): void => {
    navigation.navigate('NewPassword');
  };

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        goBackIcon={true}
        title={'Forgot password'}
      />
    );
  };

  const renderDescription = (): JSX.Element => {
    return (
      <Text
        style={{
          ...theme.fonts.textStyle_16,
          color: theme.colors.textColor,
          textAlign: 'center',
          marginBottom: utils.responsiveHeight(20),
          paddingHorizontal: 20,
        }}
      >
        Please enter your email address. You will receive a link to create a new
        password via email.
      </Text>
    );
  };

  const renderInputField = (): JSX.Element => {
    return (
      <custom.InputField
        placeholder='sylviahuber@mail.com'
        checkIcon={true}
        value={email}
        onChangeText={handleEmailChange}
        containerStyle={{
          marginBottom: utils.responsiveHeight(20),
        }}
      />
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title={'Send'}
        onPress={() => {
          validation({email}) ? handleForgotPassword() : null;
        }}
        containerStyle={{marginBottom: 20}}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: utils.responsiveHeight(20),
          paddingBottom: utils.responsiveHeight(20),
        }}
      >
        {renderDescription()}
        {renderInputField()}
        {renderButton()}
      </KeyboardAwareScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default ForgotPassword;
