import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {items} from '../../../items';
import {utils} from '../../../utils';
import {custom} from '../../../custom';
import {svg} from '../../../assets/svg';
import {theme} from '../../../constants';
import {RootState} from '../../../store';
import {actions} from '../../../store/actions';
import {components} from '../../../components';
import {queryHooks} from '../../../store/slices/apiSlice';
import {RootStackParamList} from '../../../types/RootStackParamList';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const _v1: React.FC = (): JSX.Element => {
  const dispatch = useDispatch<Dispatch>();
  const navigation: Navigation = useNavigation<Navigation>();

  const user = useSelector((state: RootState) => state.userSlice.user);
  const symbol = useSelector((state: RootState) => state.currencySlice.symbol);

  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = queryHooks.useGetUserQuery(user?.id || 0);

  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = queryHooks.useGetCategoriesQuery();

  const {
    data: diagnosticsData,
    error: diagnosticsError,
    isLoading: diagnosticsLoading,
  } = queryHooks.useGetDiagnosticsQuery();

  const {
    data: bannersData,
    error: bannersError,
    isLoading: bannersLoading,
  } = queryHooks.useGetBannersQuery();

  const {
    data: doctorsData,
    error: doctorsError,
    isLoading: doctorsLoading,
  } = queryHooks.useGetDoctorsQuery(undefined);

  const {
    data: appointmentsData,
    error: appointmentsError,
    isLoading: appointmentsLoading,
  } = queryHooks.useGetAppointmentsQuery(user?.id || 0);

  const isLoading =
    categoriesLoading ||
    diagnosticsLoading ||
    bannersLoading ||
    doctorsLoading ||
    appointmentsLoading ||
    userLoading;

  const error =
    categoriesError ||
    diagnosticsError ||
    bannersError ||
    doctorsError ||
    appointmentsError ||
    userError;

  const noData =
    !categoriesData?.categories?.length &&
    !diagnosticsData?.diagnostics?.length &&
    !bannersData?.banners?.length &&
    !doctorsData?.doctors?.length &&
    !appointmentsData?.appointments?.length;

  const renderAppointments = (): JSX.Element | null => {
    return (
      <View
        style={{
          marginBottom: utils.responsiveHeight(40),
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          paddingBottom: utils.responsiveHeight(20),
          borderBottomColor: '#D3E3F1',
        }}
      >
        <components.BlockHeading
          title={'My appointments'}
          containerStyle={{marginBottom: 20}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {/* BLOCK 01 */}
          <View
            style={{
              backgroundColor: theme.colors.darkBlue,
              width: utils.responsiveWidth(160, true),
              height: utils.responsiveWidth(160, true),
              justifyContent: 'space-between',
              paddingVertical: 20,
            }}
          >
            <custom.Image
              source={require('../../../assets/other/01.png')}
              style={{
                width: utils.responsiveWidth(106),
                aspectRatio: 106 / 88,
                position: 'absolute',
                top: 0,
                right: 0,
              }}
            />
            <custom.Image
              source={require('../../../assets/other/02.png')}
              style={{
                width: utils.responsiveWidth(146),
                aspectRatio: 146 / 98,
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}
            />
            <Text
              style={{
                ...theme.fonts.NunitoSans_600SemiBold,
                color: theme.colors.white,
                fontSize: 12,
                lineHeight: 12 * 1.5,
                textAlign: 'center',
              }}
            >
              January
            </Text>
            <Text
              style={{
                ...theme.fonts.Domine_700Bold,
                fontSize: 40,
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
                fontSize: 12,
                lineHeight: 12 * 1.5,
                textAlign: 'center',
              }}
            >
              at 4:30pm
            </Text>
          </View>
          {/* BLOCK 02 */}
          <View style={{width: utils.responsiveWidth(160, true)}}>
            <View style={{flexDirection: 'row', marginBottom: 12}}>
              <custom.Image
                source={{
                  uri: 'https://george-fx.github.io/demical/doctors/01.jpg',
                }}
                style={{
                  width: utils.responsiveWidth(50),
                  height: utils.responsiveWidth(50),
                  borderRadius: 50,
                  marginRight: 10,
                }}
              />
              <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <svg.RatingStarSvg />
                  <Text
                    style={{
                      ...theme.fonts.NunitoSans_400Regular,
                      fontSize: 10,
                      color: theme.colors.textColor,
                      marginLeft: 4,
                      lineHeight: 10 * 1.7,
                    }}
                  >
                    5,0
                  </Text>
                </View>
                <Text
                  style={{
                    ...theme.fonts.NunitoSans_600SemiBold,
                    fontSize: 12,
                    lineHeight: 12 * 1.5,
                    color: theme.colors.darkBlue,
                  }}
                >
                  {symbol}24
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: utils.responsiveWidth(20, true),
                  alignItems: 'flex-end',
                }}
              >
                <svg.MenuSvg />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                marginBottom: utils.responsiveHeight(2),
                ...theme.fonts.H6,
                color: theme.colors.darkBlue,
              }}
            >
              Dr. Georgia Griffin
            </Text>
            <Text
              style={{
                ...theme.fonts.NunitoSans_400Regular,
                fontSize: 12,
                color: theme.colors.textColor,
                lineHeight: 12 * 1.5,
              }}
              numberOfLines={1}
            >
              Сardiologist
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.green,
                height: 33,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 'auto',
              }}
              onPress={() => {
                dispatch(actions.setScreen('Inbox'));
              }}
            >
              <Text
                style={{
                  color: theme.colors.white,
                  ...theme.fonts.NunitoSans_700Bold,
                  fontSize: 10,
                  lineHeight: 10 * 1.7,
                  textTransform: 'capitalize',
                }}
              >
                Send message
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderCategories = (): JSX.Element | null => {
    if (categoriesData?.categories?.length) {
      return (
        <View style={{marginBottom: utils.responsiveHeight(40)}}>
          <components.BlockHeading
            title={'Categories'}
            containerStyle={{paddingHorizontal: 20, marginBottom: 20}}
            viewAllOnPress={() => {
              dispatch(actions.setScreen('Search'));
            }}
          />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20,
            }}
          >
            {categoriesData?.categories.slice(0, 6).map((item, index) => {
              const last = index === categoriesData?.categories.length - 1;

              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: utils.responsiveWidth(82),
                    height: utils.responsiveWidth(82),
                    paddingVertical: 18,
                    paddingHorizontal: 10,
                    backgroundColor: '#F6F8FB',
                    justifyContent: 'space-between',
                    marginRight: last ? 20 : 14,
                  }}
                  onPress={() => {
                    navigation.navigate('DoctorsList');
                  }}
                >
                  <custom.Image
                    source={{uri: item.image ?? 'default_image_uri'}}
                    style={{
                      width: utils.responsiveWidth(24),
                      aspectRatio: 1 / 1,
                      alignSelf: 'center',
                    }}
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      textAlign: 'center',
                      ...theme.fonts.NunitoSans_400Regular,
                      fontSize: 10,
                      color: theme.colors.darkBlue,
                      textTransform: 'capitalize',
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      );
    }

    return null;
  };

  const renderDiagnostics = (): JSX.Element | null => {
    if (diagnosticsData?.diagnostics?.length) {
      return (
        <View
          style={{
            paddingHorizontal: 20,
            marginBottom: utils.responsiveHeight(40),
          }}
        >
          <components.BlockHeading
            title={'Diagnostics & tests'}
            containerStyle={{marginBottom: 20}}
          />
          {diagnosticsData?.diagnostics.map((item, index, array) => {
            const last = array.length - 1 === index;
            return (
              <TouchableOpacity
                key={index}
                style={{
                  paddingBottom: 14,
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: last ? 0 : 20,
                  borderBottomColor: '#D3E3F1',
                }}
                onPress={() => {
                  navigation.navigate('DiagnosticDetails', {item});
                }}
              >
                <View
                  style={{
                    backgroundColor: item.background_color,
                    width: utils.responsiveWidth(53),
                    height: utils.responsiveWidth(53),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 14,
                  }}
                >
                  <custom.Image
                    source={{uri: item.image ?? 'default_image_uri'}}
                    style={{
                      width: utils.responsiveWidth(30),
                      height: utils.responsiveWidth(30),
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <View style={{flex: 1, marginRight: 18}}>
                  <Text
                    style={{
                      ...theme.fonts.H6,
                      marginBottom: 2,
                      color: theme.colors.darkBlue,
                    }}
                    numberOfLines={1}
                  >
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 10,
                      color: theme.colors.textColor,
                      lineHeight: 10 * 1.5,
                    }}
                  >
                    {item.description}
                  </Text>
                </View>
                <svg.RightArrowSvg />
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }

    return null;
  };

  const renderBanner = (): JSX.Element | null => {
    if (bannersData?.banners?.length) {
      const banner = bannersData?.banners[0];
      return (
        <TouchableOpacity
          style={{
            width: theme.sizes.deviceWidth,
            backgroundColor: '#F6F8FB',
            justifyContent: 'space-between',
            marginBottom: utils.responsiveHeight(40),
          }}
          onPress={() => {
            navigation.navigate('MakeAnAppointment');
          }}
        >
          <custom.Image
            source={{uri: banner.image ?? 'default_image_uri'}}
            style={{
              width: theme.sizes.deviceWidth,
              aspectRatio: 375 / 260,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
      );
    }

    return null;
  };

  const renderTopRatedDoctors = (): JSX.Element | null => {
    if (doctorsData?.doctors?.length) {
      return (
        <View style={{marginBottom: utils.responsiveHeight(30)}}>
          <components.BlockHeading
            title={'Top rated Doctors'}
            containerStyle={{marginBottom: 20, marginHorizontal: 20}}
          />
          <ScrollView
            horizontal={true}
            contentContainerStyle={{paddingLeft: 20}}
            showsHorizontalScrollIndicator={false}
          >
            {doctorsData?.doctors?.slice(0, 10).map((doctor, index, array) => {
              const last = array.length - 1 === index;
              return (
                <items.DoctorCard
                  key={doctor.id.toString()}
                  doctor={doctor}
                  version={1}
                />
              );
            })}
          </ScrollView>
        </View>
      );
    }

    return null;
  };

  const renderContent = (): JSX.Element => {
    if (isLoading) {
      return <components.Loader />;
    }

    if (error) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              ...theme.fonts.H4,
              color: theme.colors.darkBlue,
              textAlign: 'center',
            }}
          >
            {'Something went wrong'}
          </Text>
        </View>
      );
    }

    if (noData) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              ...theme.fonts.H4,
              color: theme.colors.darkBlue,
              textAlign: 'center',
            }}
          >
            {'No data'}
          </Text>
        </View>
      );
    }

    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: utils.responsiveHeight(40),
        }}
      >
        {renderAppointments()}
        {renderCategories()}
        {renderDiagnostics()}
        {renderBanner()}
        {renderTopRatedDoctors()}
      </ScrollView>
    );
  };

  return renderContent();
};

export default _v1;
