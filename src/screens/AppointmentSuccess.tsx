import React from 'react';
import {useDispatch} from 'react-redux';
import {Dispatch} from '@reduxjs/toolkit';
import {Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {AppDispatch} from '../store';
import {components} from '../components';
import {actions} from '../store/actions';
import {RootStackParamList} from '../types/RootStackParamList';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const AppointmentSuccess: React.FC = () => {
  const dispatch: Dispatch = useDispatch<AppDispatch>();
  const navigation: Navigation = useNavigation<Navigation>();

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: utils.responsiveHeight(20),
        }}
        showsVerticalScrollIndicator={false}
      >
        <custom.Image
          source={require('../assets/images/06.png')}
          style={{
            width: utils.responsiveWidth(187.08),
            aspectRatio: 187.08 / 167.02,
            marginBottom: utils.responsiveHeight(37),
          }}
        />
        <Text
          style={{
            ...theme.fonts.H2,
            textTransform: 'capitalize',
            color: theme.colors.darkBlue,
            textAlign: 'center',
            marginBottom: utils.responsiveHeight(14),
          }}
        >
          your appointment{'\n'}has been created!
        </Text>
        <Text
          style={{
            textAlign: 'center',
            ...theme.fonts.textStyle_16,
            color: theme.colors.textColor,
          }}
        >
          Your appointment has been created{'\n'}successfully.
        </Text>
      </ScrollView>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title='Done'
        onPress={() => {
          dispatch(actions.setScreen('Notifications'));
          navigation.reset({
            index: 0,
            routes: [{name: 'TabNavigator'}],
          });
        }}
        containerStyle={{
          padding: 20,
        }}
      />
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderContent()}
      {renderButton()}
    </custom.SafeAreaView>
  );
};

export default AppointmentSuccess;
