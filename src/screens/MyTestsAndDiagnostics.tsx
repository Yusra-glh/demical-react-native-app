import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {utils} from '../utils';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';

const upcomingTests = [
  {
    id: 1,
    name: 'Lumbar puncture',
    time: 'at 4:30 pm',
    month: 'January',
    day: '21',
    price: 24,
  },
];

const pastTests = [
  {
    id: 1,
    name: 'Blood analysis',
    date: 'Jan 15, Sunday at 4:30 pm',
    progress: true,
  },
  {
    id: 2,
    name: 'Cerebral angiography',
    date: 'Dec 04, Sunday at 2:00 pm',
    progress: false,
  },
  {
    id: 3,
    name: 'Echocardiography',
    date: 'Nov 22, Tuesday at 1:30 pm',
    progress: false,
  },
];

const MyTestsAndDiagnostics: React.FC = () => {
  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='My tests & diagnostics'
        goBackIcon={true}
      />
    );
  };

  const renderUpcoming = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.lightBlue,
          paddingBottom: utils.responsiveHeight(20),
          marginBottom: utils.responsiveHeight(40),
        }}
      >
        <Text
          style={{
            ...theme.fonts.H4,
            color: theme.colors.darkBlue,
            marginBottom: utils.responsiveHeight(20),
          }}
        >
          Upcoming
        </Text>

        {upcomingTests.map((item, index) => {
          return (
            <View
              key={item.id.toString()}
              style={{flexDirection: 'row'}}
            >
              <custom.ImageBackground
                source={require('../assets/other/06.png')}
                style={{
                  width: utils.responsiveWidth(70, true),
                  height: utils.responsiveWidth(70, true),
                  justifyContent: 'center',
                  marginRight: 14,
                }}
              >
                <Text
                  style={{
                    ...theme.fonts.H3,
                    color: theme.colors.white,
                    textAlign: 'center',
                  }}
                >
                  {item.day}
                </Text>
                <Text
                  style={{
                    ...theme.fonts.NunitoSans_600SemiBold,
                    fontSize: 10,
                    color: theme.colors.white,
                    textAlign: 'center',
                    textTransform: 'capitalize',
                  }}
                >
                  {item.month}
                </Text>
              </custom.ImageBackground>
              <View>
                <Text
                  style={{
                    ...theme.fonts.H6,
                    color: theme.colors.darkBlue,
                    marginBottom: 4,
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: utils.responsiveHeight(7),
                  }}
                >
                  <svg.ClockModalSvg />
                  <Text
                    style={{
                      marginLeft: 6,
                      ...theme.fonts.NunitoSans_400Regular,
                      fontSize: 12,
                      color: theme.colors.textColor,
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
                <components.DoctorPrice price={'24'} />
              </View>
              <TouchableOpacity
                style={{
                  width: utils.responsiveWidth(20, true),
                  alignItems: 'flex-end',
                  marginLeft: 'auto',
                }}
              >
                <svg.MenuSvg />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };

  const renderPast = (): JSX.Element => {
    return (
      <View style={{paddingHorizontal: 20}}>
        <Text
          style={{
            ...theme.fonts.H4,
            color: theme.colors.darkBlue,
            marginBottom: utils.responsiveHeight(20),
          }}
        >
          Past
        </Text>
        {pastTests.map((item, index, array) => {
          const last = array.length - 1 === index;

          return (
            <View
              key={item.id.toString()}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.lightBlue,
                paddingBottom: utils.responsiveHeight(20),
                marginBottom: last ? 0 : utils.responsiveHeight(20),
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <Text
                  style={{
                    marginBottom: 4,
                    ...theme.fonts.H6,
                    color: theme.colors.darkBlue,
                  }}
                >
                  {item.name}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <svg.ClockMiddleSvg />
                  <Text
                    style={{
                      marginLeft: 6,
                      ...theme.fonts.NunitoSans_400Regular,
                      fontSize: 12,
                      color: theme.colors.textColor,
                    }}
                  >
                    {item.date}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: item.progress
                    ? theme.colors.green
                    : theme.colors.darkBlue,
                  paddingHorizontal: utils.responsiveWidth(17.5),
                  paddingVertical: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                {item.progress ? <svg.LoaderSvg /> : <svg.DownloadSvg />}
                <Text
                  style={{
                    color: theme.colors.white,
                    ...theme.fonts.NunitoSans_700Bold,
                    fontSize: 10,
                    textTransform: 'capitalize',
                    lineHeight: 10 * 1.7,
                    marginLeft: 4,
                  }}
                >
                  {item.progress ? 'in progress' : 'Download'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: utils.responsiveHeight(40),
          paddingBottom: utils.responsiveHeight(20),
        }}
      >
        {renderUpcoming()}
        {renderPast()}
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

export default MyTestsAndDiagnostics;
