import React from 'react';
import {useSelector} from 'react-redux';
import Gravatar from '@krosben/react-native-gravatar';
import {useNavigation} from '@react-navigation/native';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {items} from '../items';
import {utils} from '../utils';
import {custom} from '../custom';
import {UserType} from '../types';
import {theme} from '../constants';
import {RootState} from '../store';
import {components} from '../components';
import {RootStackParamList} from '../types/RootStackParamList';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const MyProfile: React.FC = () => {
  const navigation: Navigation = useNavigation<Navigation>();

  const user: UserType | null = useSelector(
    (state: RootState) => state.userSlice.user,
  );

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title={'My profile'}
        goBackIcon={true}
      />
    );
  };

  const renderUserInfo = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: utils.responsiveHeight(30),
        }}
      >
        <TouchableOpacity
          style={{alignSelf: 'center', marginBottom: 14}}
          onPress={() => {
            navigation.navigate('Web', {
              url: 'https://gravatar.com',
              title: 'Gravatar',
            });
          }}
        >
          <Gravatar
            email={user?.email || ''}
            size={utils.responsiveWidth(100) * 2}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              ...theme.fonts.H4,
              color: theme.colors.darkBlue,
              textAlign: 'center',
              textTransform: 'capitalize',
              marginBottom: 4,
            }}
          >
            {user?.userName || 'Sylvia Huber'}
          </Text>
          <Text
            style={{
              ...theme.fonts.textStyle_14,
              color: theme.colors.textColor,
              textAlign: 'center',
            }}
          >
            {user?.email || ''}
          </Text>
        </View>
      </View>
    );
  };

  const renderMenu = (): JSX.Element => {
    return (
      <View>
        <items.ProfileItem
          title={'Personal info'}
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
        />
        <items.ProfileItem
          title={'My appointments'}
          onPress={() => {
            navigation.navigate('MyAppointments');
          }}
        />
        <items.ProfileItem
          title={'My doctors'}
          onPress={() => {
            navigation.navigate('MyDoctors');
          }}
        />
        <items.ProfileItem
          title={'My tests & diagnostics'}
          onPress={() => {
            navigation.navigate('MyTestsAndDiagnostics');
          }}
        />
        <items.ProfileItem
          title={'Log out'}
          onPress={() => {
            navigation.navigate('LogOut');
          }}
        />
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: utils.responsiveHeight(40),
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {renderUserInfo()}
        {renderMenu()}
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

export default MyProfile;
