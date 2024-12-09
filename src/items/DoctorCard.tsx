import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {utils} from '../utils';
import {Dispatch} from 'redux';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {RootState} from '../store';
import {theme} from '../constants';
import {DoctorType} from '../types/DoctorType';
import DoctorLike from '../components/DoctorLike';
import {setScreen} from '../store/slices/tabSlice';
import DoctorPrice from '../components/DoctorPrice';
import {RootStackParamList} from '../types/RootStackParamList';

interface Props {
  last?: boolean;
  doctor: DoctorType;
  version: 1 | 2 | 3 | 4 | 5;
}

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const DoctorCard: React.FC<Props> = ({
  doctor,
  version,
  last,
}): JSX.Element | null => {
  const dispatch = useDispatch<Dispatch>();
  const navigation = useNavigation<Navigation>();

  const symbol: string = useSelector(
    (state: RootState) => state.currencySlice.symbol,
  );

  if (version === 1) {
    return (
      <TouchableOpacity
        style={{width: utils.responsiveWidth(130), marginRight: last ? 20 : 14}}
        onPress={() => navigation.navigate('DoctorDetails', {doctor})}
      >
        <custom.ImageBackground
          source={{
            uri: doctor.photo ?? 'default_image_uri',
          }}
          style={{
            width: '100%',
            aspectRatio: 130 / 162,
            borderRadius: 10,
            marginBottom: 12,
            justifyContent: 'space-between',
          }}
          imageStyle={{
            backgroundColor: theme.colors.imageBackground,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.white,
                paddingHorizontal: 6,
                paddingVertical: 2,
                marginHorizontal: 4,
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <svg.RatingStarSvg />
              <Text
                style={{
                  ...theme.fonts.NunitoSans_400Regular,
                  fontSize: 10,
                  color: theme.colors.textColor,
                  lineHeight: 10 * 1.7,
                  marginLeft: 4,
                }}
              >
                {doctor.rating.toFixed(1).replace('.', ',')}
              </Text>
            </View>
            <TouchableOpacity
              style={{paddingHorizontal: 10, paddingVertical: 5}}
            >
              <svg.DoctorStarSvg />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: theme.colors.white,
              marginLeft: 4,
              marginRight: 10,
              marginVertical: 4,
              paddingVertical: 2,
              paddingHorizontal: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <svg.ClockSvg />
            <Text
              style={{
                fontSize: 10,
                color: theme.colors.textColor,
                marginLeft: 4,
                lineHeight: 10 * 1.7,
              }}
              numberOfLines={1}
            >
              {doctor.start_time.toLocaleLowerCase()} -{' '}
              {doctor.end_time.toLocaleLowerCase()}
            </Text>
          </View>
        </custom.ImageBackground>
        <Text
          style={{
            ...theme.fonts.H6,
            color: theme.colors.darkBlue,
            marginBottom: 2,
          }}
          numberOfLines={1}
        >
          {doctor.name}
        </Text>
        <Text
          style={{
            ...theme.fonts.NunitoSans_400Regular,
            fontSize: 12,
            color: theme.colors.textColor,
          }}
          numberOfLines={1}
        >
          {doctor.specialities[0]}
        </Text>
      </TouchableOpacity>
    );
  }

  if (version === 2) {
    return (
      <View
        style={{
          paddingBottom: 14,
          borderBottomWidth: 1,
          borderBottomColor: '#D3E3F1',
          marginBottom: last ? 0 : 14,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('DoctorDetails', {doctor})}
          style={{
            flexDirection: 'row',
            height: utils.responsiveWidth(100),
          }}
        >
          <custom.ImageBackground
            source={{
              uri: doctor.photo ?? 'default_image_uri',
            }}
            style={{
              width: utils.responsiveWidth(100),
              height: '100%',
              aspectRatio: 1 / 1,
              borderRadius: 10,
              marginBottom: 12,
              marginRight: 14,
              justifyContent: 'flex-end',
            }}
            resizeMode='contain'
            imageStyle={{
              backgroundColor: theme.colors.imageBackground,
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.white,
                paddingHorizontal: 6,
                paddingVertical: 2,
                marginHorizontal: 4,
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}
            >
              <svg.RatingStarSvg />
              <Text
                style={{
                  ...theme.fonts.NunitoSans_400Regular,
                  fontSize: 10,
                  color: theme.colors.textColor,
                  lineHeight: 10 * 1.7,
                  marginLeft: 4,
                }}
              >
                {doctor.rating.toFixed(1).replace('.', ',')}
              </Text>
            </View>
          </custom.ImageBackground>
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
                {doctor.name}
              </Text>
              <DoctorLike
                doctor={doctor}
                version={1}
              />
            </View>

            <Text
              style={{
                ...theme.fonts.NunitoSans_400Regular,
                fontSize: 12,
                color: theme.colors.textColor,
                marginBottom: 2,
              }}
              numberOfLines={1}
            >
              {doctor.specialities[0]}
            </Text>
            <Text
              style={{
                ...theme.fonts.NunitoSans_600SemiBold,
                fontSize: 12,
                color: theme.colors.darkBlue,
                lineHeight: 12 * 1.5,
              }}
            >
              {symbol}
              {doctor.price}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'auto',
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.white,
                  marginVertical: 4,
                  paddingVertical: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <svg.ClockSvg />
                <Text
                  style={{
                    fontSize: 10,
                    color: theme.colors.textColor,
                    marginLeft: 4,
                    lineHeight: 10 * 1.7,
                  }}
                  numberOfLines={1}
                >
                  {doctor.start_time.toLocaleLowerCase()} -{' '}
                  {doctor.end_time.toLocaleLowerCase()}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: theme.colors.darkBlue,
                  paddingHorizontal: utils.responsiveWidth(19),
                  paddingVertical: 8,
                }}
              >
                <Text
                  style={{
                    color: theme.colors.white,
                    fontSize: 10,
                    ...theme.fonts.NunitoSans_700Bold,
                    textTransform: 'capitalize',
                    lineHeight: 10 * 1.7,
                  }}
                >
                  appointment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  if (version === 3) {
    return (
      <View
        style={{
          paddingBottom: 14,
          borderBottomWidth: 1,
          borderBottomColor: '#D3E3F1',
          marginBottom: last ? 0 : 14,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('DoctorDetails', {doctor})}
          style={{
            flexDirection: 'row',
            height: utils.responsiveWidth(110),
          }}
        >
          <custom.ImageBackground
            source={{
              uri: doctor.photo ?? 'default_image_uri',
            }}
            style={{
              width: utils.responsiveWidth(110),
              height: '100%',
              aspectRatio: 1 / 1,
              borderRadius: 10,
              marginBottom: 12,
              marginRight: 14,
              justifyContent: 'flex-end',
            }}
            resizeMode='contain'
            imageStyle={{
              backgroundColor: theme.colors.imageBackground,
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.white,
                paddingHorizontal: 6,
                paddingVertical: 2,
                marginHorizontal: 4,
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}
            >
              <svg.RatingStarSvg />
              <Text
                style={{
                  ...theme.fonts.NunitoSans_400Regular,
                  fontSize: 10,
                  color: theme.colors.textColor,
                  lineHeight: 10 * 1.7,
                  marginLeft: 4,
                }}
              >
                {doctor.rating.toFixed(1).replace('.', ',')}
              </Text>
            </View>
          </custom.ImageBackground>
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
                {doctor.name}
              </Text>
              <DoctorLike
                doctor={doctor}
                version={1}
              />
            </View>

            <Text
              style={{
                ...theme.fonts.NunitoSans_400Regular,
                fontSize: 12,
                color: theme.colors.textColor,
              }}
              numberOfLines={1}
            >
              {doctor.specialities[0]}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.white,
                  marginVertical: 4,
                  paddingVertical: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <svg.ClockSvg />
                <Text
                  style={{
                    fontSize: 10,
                    color: theme.colors.textColor,
                    marginLeft: 4,
                    lineHeight: 10 * 1.7,
                  }}
                  numberOfLines={1}
                >
                  {doctor.start_time.toLocaleLowerCase()} -{' '}
                  {doctor.end_time.toLocaleLowerCase()}
                </Text>
              </View>
              <Text
                style={{
                  ...theme.fonts.NunitoSans_600SemiBold,
                  fontSize: 12,
                  color: theme.colors.darkBlue,
                  lineHeight: 12 * 1.5,
                }}
              >
                {symbol}
                {doctor.price}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'auto',
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: theme.colors.green,
                  flex: 0.46,
                  paddingVertical: 8,
                  paddingHorizontal: 19,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  dispatch(setScreen('Inbox'));
                  navigation.navigate('TabNavigator');
                }}
              >
                <Text
                  style={{
                    color: theme.colors.white,
                    fontSize: 10,
                    ...theme.fonts.NunitoSans_700Bold,
                    textTransform: 'capitalize',
                    lineHeight: 10 * 1.7,
                  }}
                  numberOfLines={1}
                >
                  send message
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: theme.colors.darkBlue,
                  flex: 0.46,
                  paddingVertical: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 19,
                }}
                onPress={() =>
                  navigation.navigate('MakeAnAppointment', {doctor})
                }
              >
                <Text
                  style={{
                    color: theme.colors.white,
                    fontSize: 10,
                    ...theme.fonts.NunitoSans_700Bold,
                    textTransform: 'capitalize',
                    lineHeight: 10 * 1.7,
                  }}
                  numberOfLines={1}
                >
                  appointment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  if (version === 4) {
    return (
      <View
        style={{
          paddingBottom: 14,
          borderBottomWidth: 1,
          borderBottomColor: '#D3E3F1',
          marginBottom: last ? 0 : 14,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('DoctorDetails', {doctor})}
          style={{
            flexDirection: 'row',
            height: utils.responsiveWidth(110),
          }}
        >
          <custom.ImageBackground
            source={{
              uri: doctor.photo ?? 'default_image_uri',
            }}
            style={{
              width: utils.responsiveWidth(110),
              height: '100%',
              aspectRatio: 1 / 1,
              borderRadius: 10,
              marginBottom: 12,
              marginRight: 14,
              justifyContent: 'flex-end',
            }}
            resizeMode='contain'
            imageStyle={{
              backgroundColor: theme.colors.imageBackground,
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.white,
                paddingHorizontal: 6,
                paddingVertical: 2,
                marginHorizontal: 4,
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}
            >
              <svg.RatingStarSvg />
              <Text
                style={{
                  ...theme.fonts.NunitoSans_400Regular,
                  fontSize: 10,
                  color: theme.colors.textColor,
                  lineHeight: 10 * 1.7,
                  marginLeft: 4,
                }}
              >
                {doctor.rating.toFixed(1).replace('.', ',')}
              </Text>
            </View>
          </custom.ImageBackground>
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
                {doctor.name}
              </Text>
              <DoctorLike
                doctor={doctor}
                version={1}
              />
            </View>

            <Text
              style={{
                ...theme.fonts.NunitoSans_400Regular,
                fontSize: 12,
                color: theme.colors.textColor,
                marginBottom: 2,
              }}
              numberOfLines={1}
            >
              {doctor.specialities[0]}
            </Text>
            <DoctorPrice price={doctor.price} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'auto',
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.white,
                  marginVertical: 4,
                  paddingVertical: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <svg.ClockSvg />
                <Text
                  style={{
                    fontSize: 10,
                    color: theme.colors.textColor,
                    marginLeft: 4,
                    lineHeight: 10 * 1.7,
                  }}
                  numberOfLines={1}
                >
                  {doctor.start_time.toLocaleLowerCase()} -{' '}
                  {doctor.end_time.toLocaleLowerCase()}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: theme.colors.darkBlue,
                  paddingVertical: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 19,
                }}
                onPress={() =>
                  navigation.navigate('MakeAnAppointment', {doctor})
                }
              >
                <Text
                  style={{
                    color: theme.colors.white,
                    fontSize: 10,
                    ...theme.fonts.NunitoSans_700Bold,
                    textTransform: 'capitalize',
                    lineHeight: 10 * 1.7,
                  }}
                  numberOfLines={1}
                >
                  appointment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  if (version === 5) {
    return (
      <TouchableOpacity
        style={{
          width: utils.responsiveWidth(160, true),
          marginBottom: utils.responsiveHeight(30),
        }}
        onPress={() => navigation.navigate('DoctorDetails', {doctor})}
      >
        <custom.ImageBackground
          source={{
            uri: doctor.photo ?? 'default_image_uri',
          }}
          style={{
            width: '100%',
            aspectRatio: 130 / 162,
            borderRadius: 10,
            marginBottom: 12,
            justifyContent: 'space-between',
          }}
          imageStyle={{
            backgroundColor: theme.colors.imageBackground,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.white,
                paddingHorizontal: 6,
                paddingVertical: 2,
                marginHorizontal: 4,
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <svg.RatingStarSvg />
              <Text
                style={{
                  ...theme.fonts.NunitoSans_400Regular,
                  fontSize: 10,
                  color: theme.colors.textColor,
                  lineHeight: 10 * 1.7,
                  marginLeft: 4,
                }}
              >
                {doctor.rating.toFixed(1).replace('.', ',')}
              </Text>
            </View>
            <DoctorLike
              version={1}
              doctor={doctor}
              containerStyle={{
                paddingHorizontal: 10,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: theme.colors.white,
              marginLeft: 4,
              marginRight: 10,
              marginVertical: 4,
              paddingVertical: 2,
              paddingHorizontal: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <svg.ClockSvg />
            <Text
              style={{
                fontSize: 10,
                color: theme.colors.textColor,
                marginLeft: 4,
                lineHeight: 10 * 1.7,
              }}
              numberOfLines={1}
            >
              {doctor.start_time.toLocaleLowerCase()} -{' '}
              {doctor.end_time.toLocaleLowerCase()}
            </Text>
          </View>
        </custom.ImageBackground>
        <Text
          style={{
            ...theme.fonts.H6,
            color: theme.colors.darkBlue,
            marginBottom: 2,
          }}
          numberOfLines={1}
        >
          {doctor.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              ...theme.fonts.NunitoSans_400Regular,
              fontSize: 12,
              color: theme.colors.textColor,
            }}
            numberOfLines={1}
          >
            {doctor.specialities[0]}
          </Text>
          <DoctorPrice price={doctor.price} />
        </View>
      </TouchableOpacity>
    );
  }

  return null;
};

export default DoctorCard;
