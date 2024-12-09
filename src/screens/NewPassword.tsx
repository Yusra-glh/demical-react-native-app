import {Text, View, Alert} from 'react-native';
import React, {useState, useCallback} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {validation} from '../utils/validation';

const NewPassword: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handlePasswordChange = useCallback((text: string): void => {
    setPassword(text);
  }, []);

  const handleConfirmPasswordChange = useCallback((text: string): void => {
    setConfirmPassword(text);
  }, []);

  const handleForgotPassword = (): void => {
    Alert.alert('Error', 'Unfortunately, this feature is not available yet.', [
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  };

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        goBackIcon={true}
        title={'Reset password'}
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
          marginBottom: utils.responsiveHeight(30),
          paddingHorizontal: 20,
        }}
      >
        Enter new password and confirm.
      </Text>
    );
  };

  const renderInputFields = (): JSX.Element => {
    return (
      <View style={{marginBottom: utils.responsiveHeight(20)}}>
        <custom.InputField
          value={password}
          placeholder='Password'
          eyeOffIcon={true}
          containerStyle={{marginBottom: utils.responsiveHeight(10)}}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        />
        <custom.InputField
          value={confirmPassword}
          placeholder='Confirm password'
          eyeOffIcon={true}
          onChangeText={handleConfirmPasswordChange}
          secureTextEntry={true}
        />
      </View>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title={'change password'}
        onPress={() => {
          validation({password, confirmPassword})
            ? handleForgotPassword()
            : null;
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
        {renderInputFields()}
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

export default NewPassword;
