import React from 'react';
import {useDispatch} from 'react-redux';
import {Dispatch} from '@reduxjs/toolkit';
import {View, Text, ScrollView} from 'react-native';
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

const LogOut: React.FC = () => {
  const dispatch: Dispatch = useDispatch<AppDispatch>();
  const navigation: Navigation = useNavigation<Navigation>();

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingVertical: 20,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <custom.Image
          source={require('../assets/images/05.png')}
          style={{
            width: utils.responsiveWidth(187.08),
            aspectRatio: 187.08 / 167.02,
            marginBottom: utils.responsiveHeight(20),
          }}
        />
        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.darkBlue,
            textAlign: 'center',
            textTransform: 'capitalize',
          }}
        >
          Are you sure you want {'\n'} to sign out ?
        </Text>
      </ScrollView>
    );
  };

  const renderButtons = (): JSX.Element => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
          justifyContent: 'space-between',
        }}
      >
        <components.Button
          title='Cancel'
          containerStyle={{
            width: utils.responsiveWidth(160),
          }}
          TouchableOpacityStyle={{backgroundColor: theme.colors.green}}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <components.Button
          title='Sure'
          containerStyle={{
            width: utils.responsiveWidth(160),
          }}
          onPress={() => {
            dispatch(actions.logOut());
          }}
        />
      </View>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderContent()}
      {renderButtons()}
    </custom.SafeAreaView>
  );
};

export default LogOut;
