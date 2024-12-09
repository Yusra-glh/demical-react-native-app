import {useSelector} from 'react-redux';
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {utils} from '../utils';
import {custom} from '../custom';
import {UserType} from '../types';
import {RootState} from '../store';
import {components} from '../components';
import Gravatar from '@krosben/react-native-gravatar';
import {RootStackParamList} from '../types/RootStackParamList';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const EditProfile: React.FC = () => {
  const navigation: Navigation = useNavigation<Navigation>();

  const user: UserType | null = useSelector(
    (state: RootState) => state.userSlice.user,
  );

  const [userName, setUserName] = useState<string>(user?.userName || '');
  const [email, setEmail] = useState<string>(user?.email || '');
  const [phoneNumber, setPhoneNumber] = useState<string>(
    user?.phoneNumber || '',
  );
  const [location, setLocation] = useState<string>(user?.location || '');

  const handleNameChange = useCallback((text: string): void => {
    setUserName(text);
  }, []);

  const handleEmailChange = useCallback((text: string): void => {
    setEmail(text);
  }, []);

  const handlePhoneNumberChange = (text: string): void => {
    setPhoneNumber(text);
  };

  const handleLocationChange = (text: string): void => {
    setLocation(text);
  };

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='Edit profile'
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
          onPress={() =>
            navigation.navigate('Web', {
              title: 'Gravatar',
              url: 'https://en.gravatar.com/',
            })
          }
        >
          <Gravatar
            email={user?.email || ''}
            size={utils.responsiveWidth(100) * 2}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderInputFields = (): JSX.Element => {
    return (
      <View>
        <custom.InputField
          value={userName}
          onChangeText={handleNameChange}
          placeholder={'Sylvia Huber'}
          containerStyle={{marginBottom: 10}}
        />
        <custom.InputField
          value={email}
          placeholder={'sylviahuber@mail.com'}
          containerStyle={{marginBottom: 10}}
          onChangeText={handleEmailChange}
        />
        <custom.InputField
          value={phoneNumber}
          placeholder={'+170123456789'}
          containerStyle={{marginBottom: 10}}
          onChangeText={handlePhoneNumberChange}
        />
        <custom.InputField
          value={location}
          placeholder={'Chicago, USA'}
          containerStyle={{marginBottom: 20}}
          onChangeText={handleLocationChange}
        />
      </View>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title='Save changes'
        onPress={() => {
          Alert.alert(
            'Sorry',
            'Unfortunately, this feature is not available yet',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancel');
                },
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  console.log('OK');
                },
              },
            ],
            {cancelable: false},
          );
        }}
      />
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

export default EditProfile;
