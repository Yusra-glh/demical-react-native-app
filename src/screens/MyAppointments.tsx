import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/RootStackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, ScrollView, Text, TouchableOpacity, Platform} from 'react-native';

import {utils} from '../utils';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {actions} from '../store/actions';
import {components} from '../components';
import {RootState, AppDispatch} from '../store';

let upcomingAppointments = [
  {
    id: 1,
    name: 'Dr. Georgia Griffin',
    specialty: 'Сardiologist',
    month: 'January',
    time: 'at 4:30pm',
    date: '21',
    image: 'https://george-fx.github.io/demical/doctors/01.jpg',
    fullTime: '21 January, Saturday',
    price: 24,
  },
];

let pastAppointments = [
  {
    id: 1,
    name: 'Dr. Maribel Fletcher',
    specialty: 'Dermatologists',
    date: 'Jan 15, Sunday',
    price: 24,
    image: 'https://george-fx.github.io/demical/doctors/04.jpg',
  },
  {
    id: 2,
    name: 'Dr. Bernard Butler',
    specialty: 'Dentist',
    date: 'Dec 08, Thursday',
    price: 24,
    image: 'https://george-fx.github.io/demical/doctors/02.jpg',
  },
  {
    id: 3,
    name: 'Dr. Zack Castillo',
    specialty: 'Neurologists',
    date: 'Sep 19, Monday',
    price: 24,
    image: 'https://george-fx.github.io/demical/doctors/03.jpg',
  },
];

// upcomingAppointments = [];
// pastAppointments = [];

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const MyAppointments: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation: Navigation = useNavigation<Navigation>();

  const symbol: string = useSelector(
    (state: RootState) => state.currencySlice.symbol,
  );

  const [showModal, setShowModal] = useState(false);
  const [appointment, setAppointment] = useState<any>(null);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='My appointments'
        goBackIcon={true}
      />
    );
  };

  const renderUpcomingAppointments = (): JSX.Element => {
    return (
      <View style={{marginBottom: utils.responsiveHeight(40)}}>
        <Text
          style={{
            ...theme.fonts.H4,
            color: theme.colors.darkBlue,
            textTransform: 'capitalize',
            marginBottom: utils.responsiveHeight(20),
          }}
        >
          Upcoming appointments
        </Text>
        {upcomingAppointments?.map((item, index, array) => {
          const last = index === array.length - 1;
          return (
            <TouchableOpacity
              key={item.id.toString()}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: last ? 0 : utils.responsiveHeight(20),
                borderBottomWidth: 1,
                paddingBottom: utils.responsiveHeight(20),
                borderBottomColor: theme.colors.lightBlue,
              }}
              onPress={() => {
                setAppointment(item);
                setShowModal(true);
              }}
            >
              {/* BLOCK 01 */}
              <custom.ImageBackground
                style={{
                  width: utils.responsiveWidth(100, true),
                  height: utils.responsiveWidth(100, true),
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                }}
                source={require('../assets/other/05.png')}
              >
                <Text
                  style={{
                    ...theme.fonts.NunitoSans_600SemiBold,
                    color: theme.colors.white,
                    fontSize: 10,
                    lineHeight: 10 * 1.5,
                    textAlign: 'center',
                  }}
                >
                  January
                </Text>
                <Text
                  style={{
                    ...theme.fonts.Domine_700Bold,
                    fontSize: 32,
                    color: theme.colors.white,
                    textAlign: 'center',
                  }}
                  numberOfLines={1}
                >
                  21
                </Text>
                <Text
                  style={{
                    ...theme.fonts.NunitoSans_600SemiBold,
                    color: theme.colors.white,
                    fontSize: 10,
                    lineHeight: 10 * 1.5,
                    textAlign: 'center',
                  }}
                >
                  at 4:30pm
                </Text>
              </custom.ImageBackground>
              {/* BLOCK 02 */}
              <View style={{width: utils.responsiveWidth(221, true)}}>
                <View style={{flexDirection: 'row', marginBottom: 'auto'}}>
                  <custom.Image
                    source={{
                      uri: 'https://george-fx.github.io/demical/doctors/01.jpg',
                    }}
                    style={{
                      width: utils.responsiveWidth(47),
                      height: utils.responsiveWidth(47),
                      marginRight: 10,
                    }}
                    resizeMode='cover'
                  />
                  <View>
                    <Text
                      style={{
                        ...theme.fonts.H6,
                        color: theme.colors.darkBlue,
                        textTransform: 'capitalize',
                        marginBottom: 2,
                      }}
                      numberOfLines={1}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        ...theme.fonts.NunitoSans_400Regular,
                        fontSize: 10,
                        color: theme.colors.textColor,
                        lineHeight: 10 * 1.5,
                      }}
                    >
                      {item.specialty}
                    </Text>
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
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <svg.ConfirmedSvg />
                  <TouchableOpacity
                    style={{
                      backgroundColor: theme.colors.green,
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: utils.responsiveWidth(13, true),
                      paddingVertical: utils.responsiveHeight(6),
                    }}
                    onPress={() => {
                      dispatch(actions.setScreen('Inbox'));
                      navigation.navigate('TabNavigator');
                    }}
                  >
                    <svg.DoctorChatSvg />
                    <Text
                      style={{
                        ...theme.fonts.NunitoSans_400Regular,
                        fontSize: 12,
                        color: theme.colors.white,
                        marginLeft: 6,
                        lineHeight: 12 * 1.5,
                      }}
                    >
                      Chat
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderPastAppointments = (): JSX.Element => {
    return (
      <View>
        <Text
          style={{
            ...theme.fonts.H4,
            color: theme.colors.darkBlue,
            textTransform: 'capitalize',
            marginBottom: utils.responsiveHeight(20),
          }}
        >
          Past appointments
        </Text>
        {pastAppointments?.map((item, index, array) => {
          const last = index === array.length - 1;
          return (
            <View
              key={index}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.lightBlue,
                paddingBottom: utils.responsiveHeight(20),
                marginBottom: last ? 0 : utils.responsiveHeight(20),
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: utils.responsiveHeight(7),
                }}
              >
                <custom.Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: utils.responsiveWidth(47),
                    height: utils.responsiveWidth(47),
                    marginRight: 10,
                  }}
                />
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text
                      style={{
                        ...theme.fonts.H6,
                        color: theme.colors.darkBlue,
                        marginBottom: 2,
                      }}
                      numberOfLines={1}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        marginLeft: 'auto',
                        ...theme.fonts.H6,
                        color: theme.colors.darkBlue,
                      }}
                    >
                      {symbol}
                      {item.price}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: theme.colors.textColor,
                      ...theme.fonts.NunitoSans_400Regular,
                      fontSize: 12,
                      lineHeight: 12 * 1.5,
                    }}
                    numberOfLines={1}
                  >
                    {item.specialty}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    marginRight: 'auto',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <svg.ClockSvg />
                  <Text
                    style={{
                      marginLeft: 6,
                      ...theme.fonts.NunitoSans_400Regular,
                      fontSize: 12,
                      color: theme.colors.textColor,
                      lineHeight: 12 * 1.7,
                    }}
                  >
                    {item.date}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: theme.colors.green,
                    paddingHorizontal: utils.responsiveWidth(14),
                    paddingVertical: utils.responsiveHeight(8),
                    marginRight: utils.responsiveWidth(10),
                  }}
                  onPress={() => {
                    navigation.navigate('LeaveAReview');
                  }}
                >
                  <Text
                    style={{
                      ...theme.fonts.NunitoSans_700Bold,
                      fontSize: 10,
                      color: theme.colors.white,
                      lineHeight: 10 * 1.7,
                    }}
                  >
                    Leave a review
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: theme.colors.darkBlue,
                    paddingHorizontal: utils.responsiveWidth(14),
                    paddingVertical: utils.responsiveHeight(8),
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <svg.DownloadSvg />
                  <Text
                    style={{
                      ...theme.fonts.NunitoSans_700Bold,
                      fontSize: 10,
                      color: theme.colors.white,
                      lineHeight: 10 * 1.7,
                      textTransform: 'capitalize',
                      marginLeft: 4,
                    }}
                  >
                    Prescription
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  const renderEmpty = (): JSX.Element | null => {
    if (upcomingAppointments?.length === 0 && pastAppointments?.length === 0) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>You have no appointments.</Text>
        </View>
      );
    }

    return null;
  };

  const renderModalDoctorInfo = (): JSX.Element => {
    return (
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.lightBlue,
          paddingBottom: utils.responsiveHeight(20),
          marginBottom: utils.responsiveHeight(20),
        }}
      >
        <custom.Image
          source={{
            uri: 'https://george-fx.github.io/demical/doctors/01.jpg',
          }}
          style={{
            width: utils.responsiveWidth(47),
            height: utils.responsiveWidth(47),
            marginRight: 10,
          }}
          resizeMode='cover'
        />
        <View>
          <Text
            style={{
              ...theme.fonts.H6,
              color: theme.colors.darkBlue,
              textTransform: 'capitalize',
              marginBottom: 2,
            }}
            numberOfLines={1}
          >
            {appointment?.name}
          </Text>
          <Text
            style={{
              ...theme.fonts.NunitoSans_400Regular,
              fontSize: 10,
              color: theme.colors.textColor,
              lineHeight: 10 * 1.5,
            }}
            numberOfLines={1}
          >
            {appointment?.specialty}
          </Text>
        </View>
      </View>
    );
  };

  const renderModalDate = (): JSX.Element => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: utils.responsiveHeight(14),
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.lightBlue,
          paddingBottom: utils.responsiveHeight(14),
        }}
      >
        <View style={{marginTop: 3}}>
          <svg.CalendarModalSvg />
        </View>

        <View style={{marginLeft: 10}}>
          <Text
            style={{
              ...theme.fonts.H6,
              color: theme.colors.darkBlue,
              marginBottom: 4,
            }}
          >
            Date
          </Text>
          <Text
            style={{
              ...theme.fonts.NunitoSans_400Regular,
              fontSize: 12,
              color: theme.colors.textColor,
            }}
          >
            {appointment?.fullTime}
          </Text>
        </View>
      </View>
    );
  };

  const renderModalTime = (): JSX.Element => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: utils.responsiveHeight(14),
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.lightBlue,
          paddingBottom: utils.responsiveHeight(14),
        }}
      >
        <View style={{marginTop: 3}}>
          <svg.ClockModalSvg />
        </View>

        <View style={{marginLeft: 10}}>
          <Text
            style={{
              ...theme.fonts.H6,
              color: theme.colors.darkBlue,
              marginBottom: 4,
            }}
          >
            Time
          </Text>
          <Text
            style={{
              ...theme.fonts.NunitoSans_400Regular,
              fontSize: 12,
              color: theme.colors.textColor,
            }}
          >
            {appointment?.time}
          </Text>
        </View>
      </View>
    );
  };

  const renderModalPrice = (): JSX.Element => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: utils.responsiveHeight(20),
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.lightBlue,
          paddingBottom: utils.responsiveHeight(14),
        }}
      >
        <View style={{marginTop: 3}}>
          <svg.CreditCardModalSvg />
        </View>

        <View style={{marginLeft: 10}}>
          <Text
            style={{
              ...theme.fonts.H6,
              color: theme.colors.darkBlue,
              marginBottom: 4,
            }}
          >
            Price
          </Text>
          <Text
            style={{
              ...theme.fonts.NunitoSans_400Regular,
              fontSize: 12,
              color: theme.colors.textColor,
            }}
          >
            {symbol}
            {appointment?.price}
          </Text>
        </View>
      </View>
    );
  };

  const renderModalButtons = (): JSX.Element => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: utils.responsiveHeight(16),
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.darkBlue,
            paddingVertical: 13,
            width: utils.responsiveWidth(120, true),
          }}
          onPress={() => {
            setShowModal(false);
          }}
        >
          <Text
            style={{
              ...theme.fonts.NunitoSans_700Bold,
              fontSize: 12,
              color: theme.colors.white,
              lineHeight: 12 * 1.7,
              textAlign: 'center',
              textTransform: 'capitalize',
            }}
            numberOfLines={1}
          >
            Reschedule
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.green,
            paddingVertical: 13,
            width: utils.responsiveWidth(120, true),
          }}
          onPress={() => {
            setShowModal(false);
            dispatch(actions.setScreen('Inbox'));
            navigation.navigate('TabNavigator');
          }}
        >
          <Text
            style={{
              ...theme.fonts.NunitoSans_700Bold,
              fontSize: 12,
              color: theme.colors.white,
              lineHeight: 12 * 1.7,
              textAlign: 'center',
              textTransform: 'capitalize',
            }}
            numberOfLines={1}
          >
            Message
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderModalCancelAppointment = (): JSX.Element => {
    return (
      <TouchableOpacity
        onPress={() => {
          setShowModal(false);
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            ...theme.fonts.textStyle_14,
            color: theme.colors.accent,
          }}
        >
          Cancel Appointment
        </Text>
      </TouchableOpacity>
    );
  };

  const renderAppointmentDetails = (): JSX.Element => {
    return (
      <Modal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0, padding: 0}}
        animationIn='zoomIn'
        animationOut='zoomOut'
        animationInTiming={500}
        animationOutTiming={500}
        deviceWidth={theme.sizes.deviceWidth}
        deviceHeight={
          Platform.OS === 'android'
            ? theme.sizes.deviceHeight + utils.statusBarHeight()
            : theme.sizes.deviceHeight
        }
        statusBarTranslucent={true}
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            marginHorizontal: 40,
            padding: 20,
          }}
        >
          {renderModalDoctorInfo()}
          {renderModalDate()}
          {renderModalTime()}
          {renderModalPrice()}
          {renderModalButtons()}
          {renderModalCancelAppointment()}
        </View>
      </Modal>
    );
  };

  const renderContent = (): JSX.Element | null => {
    if (upcomingAppointments?.length > 0 && pastAppointments?.length > 0) {
      return (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingTop: utils.responsiveHeight(40),
            paddingBottom: utils.responsiveHeight(20),
          }}
        >
          {renderUpcomingAppointments()}
          {renderPastAppointments()}
        </ScrollView>
      );
    }

    return null;
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
      {renderEmpty()}
      {renderAppointmentDetails()}
    </custom.SafeAreaView>
  );
};

export default MyAppointments;
