import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, ScrollView, TouchableOpacity, Platform} from 'react-native';

import {items} from '../../../items';
import {utils} from '../../../utils';
import {custom} from '../../../custom';
import {UserType} from '../../../types';
import {theme} from '../../../constants';
import {RootState} from '../../../store';
import {components} from '../../../components';
import {deviceWidth} from '../../../constants/sizes';
import {queryHooks} from '../../../store/slices/apiSlice';
import {RootStackParamList} from '../../../types/RootStackParamList';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const _v2: React.FC = () => {
  const navigation = useNavigation<Navigation>();
  const user: UserType | null = useSelector(
    (state: RootState) => state.userSlice.user,
  );

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
    data: bannersData,
    error: bannersError,
    isLoading: bannersLoading,
  } = queryHooks.useGetBannersQuery();

  const {
    data: diagnosticsData,
    error: diagnosticsError,
    isLoading: diagnosticsLoading,
  } = queryHooks.useGetDiagnosticsQuery();

  const {
    data: doctorsData,
    error: doctorsError,
    isLoading: doctorsLoading,
  } = queryHooks.useGetDoctorsQuery(undefined);

  const isLoading =
    categoriesLoading || diagnosticsLoading || bannersLoading || doctorsLoading;

  const error =
    categoriesError || diagnosticsError || bannersError || doctorsError;

  const noData =
    !categoriesData?.categories?.length &&
    !diagnosticsData?.diagnostics?.length &&
    !bannersData?.banners?.length &&
    !doctorsData?.doctors?.length;

  const renderCategories = (): JSX.Element | null => {
    if (categoriesData?.categories?.length) {
      return (
        <View style={{marginBottom: utils.responsiveHeight(20)}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20,
            }}
          >
            {categoriesData?.categories.map((item, index) => {
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

  const renderBanner = (): JSX.Element | null => {
    if (bannersData?.banners?.length) {
      const banner = bannersData?.banners[0];
      return (
        <TouchableOpacity
          style={{
            width: deviceWidth,
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
              width: deviceWidth,
              aspectRatio: 375 / 260,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
      );
    }

    return null;
  };

  const renderDiagnostics = (): JSX.Element | null => {
    if (diagnosticsData?.diagnostics?.length) {
      return (
        <View style={{marginBottom: utils.responsiveHeight(40)}}>
          <components.BlockHeading
            title={'Diagnostics & tests'}
            containerStyle={{marginBottom: 20, paddingHorizontal: 20}}
          />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20,
            }}
          >
            {diagnosticsData?.diagnostics.map((item, index, array) => {
              const last = array.length - 1 === index;
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor: item.background_color,
                    width: utils.responsiveWidth(98),
                    height: utils.responsiveWidth(98),
                    alignItems: 'center',
                    marginRight: 14,
                    paddingHorizontal: 10,
                    justifyContent: 'space-between',
                    paddingTop: utils.responsiveWidth(20),
                    paddingBottom: utils.responsiveWidth(14),
                  }}
                  onPress={() => {
                    navigation.navigate('DiagnosticDetails', {item});
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
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: Platform.OS === 'ios' ? 10 : 8.5,
                      textAlign: 'center',
                      color: theme.colors.white,
                      ...theme.fonts.NunitoSans_600SemiBold,
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

  const renderTopRatedDoctors = (): JSX.Element | null => {
    if (doctorsData?.doctors?.length) {
      return (
        <View
          style={{
            marginBottom: utils.responsiveHeight(30),
            marginHorizontal: 20,
          }}
        >
          <components.BlockHeading
            title='Top rated Doctors'
            containerStyle={{marginBottom: 20}}
          />
          {doctorsData?.doctors?.slice(0, 10).map((doctor, index, array) => {
            const last = array.length - 1 === index;
            return (
              <items.DoctorCard
                key={doctor.id.toString()}
                doctor={doctor}
                version={2}
                last={last}
              />
            );
          })}
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
          paddingTop: utils.responsiveHeight(20),
        }}
        showsVerticalScrollIndicator={false}
      >
        {renderCategories()}
        {renderBanner()}
        {renderDiagnostics()}
        {renderTopRatedDoctors()}
      </ScrollView>
    );
  };

  return renderContent();
};

export default _v2;
