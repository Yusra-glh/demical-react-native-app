import React from 'react';
import {Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/RootStackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const ForgotPasswordSentEmail: React.FC = () => {
  const navigation: Navigation = useNavigation<Navigation>();

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title={'Done'}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'SignIn'}],
          });
        }}
        containerStyle={{padding: 20}}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          justifyContent: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <custom.Image
          source={require('../assets/images/07.png')}
          style={{
            height: utils.responsiveHeight(167.02),
            aspectRatio: 749 / 669,
            marginBottom: utils.responsiveHeight(20),
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            ...theme.fonts.H2,
            color: theme.colors.darkBlue,
            textTransform: 'capitalize',
            marginBottom: utils.responsiveHeight(14),
          }}
        >
          Your password has{'\n'}been reset!
        </Text>
        <Text
          style={{
            textAlign: 'center',
            ...theme.fonts.textStyle_16,
            color: theme.colors.textColor,
          }}
        >
          Qui ex aute ipsum duis. Incididunt {'\n'} adipisicing voluptate
          laborum
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

export default ForgotPasswordSentEmail;
