import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';

import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {validation} from '../utils/validation';
import {RootStackParamList} from '../types/RootStackParamList';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const VerifyYourPhoneNumber: React.FC = () => {
  const navigation: Navigation = useNavigation<Navigation>();

  const [phoneNumber, setPhoneNumber] = useState<string>('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setPhoneNumber('');
    });

    return unsubscribe;
  }, [navigation]);

  const handlePhoneNumberChange = (text: string): void => {
    setPhoneNumber(text);
  };

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        goBackIcon={true}
        title='Verify your phone number'
      />
    );
  };

  const renderDescription = (): JSX.Element => {
    return (
      <Text
        style={{
          ...theme.fonts.textStyle_16,
          color: theme.colors.textColor,
          marginBottom: 30,
          textAlign: 'center',
        }}
      >
        We have sent you an SMS with a code to {'\n'} number {phoneNumber}
      </Text>
    );
  };

  const renderInputFields = (): JSX.Element => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <custom.InputField
          value={phoneNumber}
          placeholder={'+170123456789'}
          containerStyle={{marginBottom: 20}}
          onChangeText={handlePhoneNumberChange}
        />
      </KeyboardAvoidingView>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title={'Confirm'}
        onPress={() => {
          validation({phoneNumber})
            ? navigation.navigate('ConfirmationCode')
            : null;
        }}
        containerStyle={{marginBottom: 20}}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        {renderDescription()}
        {renderInputFields()}
        {renderButton()}
      </ScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default VerifyYourPhoneNumber;