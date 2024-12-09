import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, ScrollView, TouchableOpacity, Platform} from 'react-native';

import {utils} from '../../utils';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {components} from '../../components';
import {RootStackParamList} from '../../types';
import {queryHooks} from '../../store/slices/apiSlice';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const Categories: React.FC = () => {
  const navigation: Navigation = useNavigation<Navigation>();

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

  const renderCategories = (): JSX.Element | null => {
    if (categoriesData?.categories?.length) {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginHorizontal: 20,
            marginBottom: utils.responsiveHeight(40 - 14),
          }}
        >
          {categoriesData?.categories.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: utils.responsiveWidth(102, true),
                  height: 112,
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                  marginBottom: 14,
                  backgroundColor: '#F6F8FB',
                  justifyContent: 'space-between',
                }}
                onPress={() => navigation.navigate('DoctorsList')}
              >
                <custom.Image
                  source={{uri: item.image ?? 'default_image_uri'}}
                  style={{
                    width: utils.responsiveWidth(40),
                    aspectRatio: 1 / 1,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  numberOfLines={1}
                  style={{
                    textAlign: 'center',
                    ...theme.fonts.NunitoSans_400Regular,
                    fontSize: 12,
                    color: theme.colors.darkBlue,
                    textTransform: 'capitalize',
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }

    return null;
  };

  const renderDiagnostics = (): JSX.Element | null => {
    if (diagnosticsData?.diagnostics?.length) {
      return (
        <View>
          <components.BlockHeading
            title={'Diagnostics & tests'}
            containerStyle={{paddingHorizontal: 20, marginBottom: 20}}
          />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: 20}}
          >
            {diagnosticsData?.diagnostics.map((item, index, array) => {
              const last = array.length - 1 === index;
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: utils.responsiveWidth(98),
                    height: utils.responsiveWidth(98),
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    paddingBottom: 14,
                    backgroundColor: item.background_color,
                    justifyContent: 'space-between',
                    marginRight: last ? 20 : 14,
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
                    style={{
                      fontSize: Platform.OS === 'ios' ? 10 : 8.5,
                      textAlign: 'center',
                      color: theme.colors.white,
                      ...theme.fonts.NunitoSans_600SemiBold,
                    }}
                    numberOfLines={2}
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

  const renderContent = (): JSX.Element => {
    if (categoriesLoading || diagnosticsLoading) {
      return <components.Loader />;
    }

    if (categoriesError || diagnosticsError) {
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

    if (
      !categoriesData?.categories?.length &&
      !diagnosticsData?.diagnostics?.length
    ) {
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
        contentContainerStyle={{flexGrow: 1, paddingTop: 20}}
        showsVerticalScrollIndicator={false}
      >
        {renderCategories()}
        {renderDiagnostics()}
      </ScrollView>
    );
  };

  return renderContent();
};

export default Categories;
