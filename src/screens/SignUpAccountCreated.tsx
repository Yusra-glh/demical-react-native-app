import axios from 'axios';
import React from 'react';
import {Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {custom} from '../custom';
import {components} from '../components';
import {fonts} from '../constants/fonts';
import {colors} from '../constants/colors';
import {deviceWidth} from '../constants/sizes';
import {RootStackParamList} from '../types/RootStackParamList';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const SignUpAccountCreated: React.FC = () => {
  const navigation = useNavigation<Navigation>();

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title={'Done'}
        containerStyle={{margin: 20}}
        onPress={() => navigation.reset({index: 0, routes: [{name: 'SignIn'}]})}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingVertical: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <custom.Image
          source={require('../assets/images/04.jpg')}
          style={{
            width: deviceWidth,
            aspectRatio: 375 / 214,
            marginBottom: 20,
          }}
        />
        <Text
          style={{
            ...fonts.H2,
            color: colors.darkBlue,
            textAlign: 'center',
            marginBottom: 14,
            textTransform: 'capitalize',
          }}
        >
          Account Created!
        </Text>
        <Text
          style={{
            ...fonts.textStyle_16,
            color: colors.textColor,
            textAlign: 'center',
          }}
        >
          Your account had been created {'\n'}
          successfully.
        </Text>
      </ScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderContent()}
      {renderButton()}
    </custom.SafeAreaView>
  );
};

export default SignUpAccountCreated;
