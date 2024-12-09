import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {utils} from '../utils';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';
import {RootStackParamList} from '../types';
import {MakeAnAppointmentScreenProps} from '../types/ScreenProps';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const availableTime = [
  {
    id: 1,
    time: '8:15 am',
  },
  {
    id: 2,
    time: '8:30 am',
  },
  {
    id: 3,
    time: '9:00 am',
  },
  {
    id: 4,
    time: '9:45 am',
  },
  {
    id: 5,
    time: '11:15 am',
  },
  {
    id: 6,
    time: '12:15 pm',
  },
  {
    id: 7,
    time: '1:30 pm',
  },
  {
    id: 8,
    time: '3:00 pm',
  },
  {
    id: 9,
    time: '4:30 pm',
  },
  {
    id: 10,
    time: '5:45 pm',
  },
  {
    id: 11,
    time: '6:15 pm',
  },
  {
    id: 12,
    time: '8:00 pm',
  },
];

const MakeAnAppointment: React.FC<MakeAnAppointmentScreenProps> = ({route}) => {
  const {doctor} = route.params || {};
  const navigation: Navigation = useNavigation<Navigation>();

  const [time, setTime] = useState<string>('');

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='Make an appointment'
        goBackIcon={true}
      />
    );
  };

  const renderDoctorInfo = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          paddingBottom: 20,
          flexDirection: 'row',
          borderBottomColor: '#D3E3F1',
          marginBottom: utils.responsiveHeight(40),
        }}
      >
        <custom.Image
          source={{
            uri:
              doctor?.photo ||
              'https://george-fx.github.io/demical/doctors/01.jpg',
          }}
          style={{
            width: utils.responsiveWidth(47),
            height: utils.responsiveWidth(47),
            marginRight: 10,
          }}
          resizeMode='contain'
          imageStyle={{backgroundColor: theme.colors.imageBackground}}
        />
        <View>
          <Text
            style={{
              ...theme.fonts.H6,
              color: theme.colors.darkBlue,
              marginBottom: 2,
            }}
            numberOfLines={1}
          >
            {doctor?.name || 'Dr. Georgia Griffin'}
          </Text>
          <Text
            style={{
              ...theme.fonts.NunitoSans_400Regular,
              color: theme.colors.textColor,
            }}
            numberOfLines={1}
          >
            {doctor?.specialities[0] || 'Сardiologist'}
          </Text>
        </View>
      </View>
    );
  };

  const renderChooseDate = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: utils.responsiveHeight(40),
        }}
      >
        <Text
          style={{
            ...theme.fonts.H5,
            textTransform: 'capitalize',
            color: theme.colors.darkBlue,
            marginBottom: 14,
          }}
        >
          Choose date
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderColor: '#D3E3F1',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{...theme.fonts.textStyle_16, color: theme.colors.darkBlue}}
          >
            Jan 21, 2023
          </Text>
          <svg.CalendarSvg />
        </TouchableOpacity>
      </View>
    );
  };

  const renderAvailableTime = (): JSX.Element => {
    return (
      <View style={{marginHorizontal: 20}}>
        <Text
          style={{
            ...theme.fonts.H5,
            textTransform: 'capitalize',
            color: theme.colors.darkBlue,
            marginBottom: utils.responsiveHeight(14),
          }}
        >
          Available time
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}
        >
          {availableTime.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  borderWidth: 1,
                  alignSelf: 'flex-start',
                  paddingHorizontal: 10,
                  marginRight: 10,
                  marginBottom: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 7,
                  borderColor:
                    time === item.time
                      ? theme.colors.darkBlue
                      : theme.colors.lightBlue,
                  backgroundColor:
                    time === item.time
                      ? theme.colors.darkBlue
                      : theme.colors.white,
                }}
                onPress={() => {
                  setTime(item.time);
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    lineHeight: 10 * 1.7,
                    color:
                      time === item.time
                        ? theme.colors.white
                        : theme.colors.darkBlue,
                  }}
                >
                  {item.time.toLowerCase()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title='Make an Appointment'
        containerStyle={{margin: 20}}
        onPress={() => {
          navigation.navigate('AppointmentSuccess');
        }}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: utils.responsiveHeight(20),
          paddingBottom: utils.responsiveHeight(20),
        }}
        showsVerticalScrollIndicator={false}
      >
        {renderDoctorInfo()}
        {renderChooseDate()}
        {renderAvailableTime()}
      </ScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
      {renderButton()}
    </custom.SafeAreaView>
  );
};

export default MakeAnAppointment;
