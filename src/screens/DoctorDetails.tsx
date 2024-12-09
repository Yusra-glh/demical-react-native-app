import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {utils} from '../utils';
import {items} from '../items';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {RootState} from '../store';
import {theme} from '../constants';
import {components} from '../components';
import {reviews} from '../constants/constants';
import {DoctorDetailsScreenProps} from '../types/ScreenProps';
import {RootStackParamList} from '../types/RootStackParamList';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const DoctorDetails: React.FC<DoctorDetailsScreenProps> = ({route}) => {
  const {doctor} = route.params;
  const navigation: Navigation = useNavigation<Navigation>();

  const symbol: string = useSelector(
    (state: RootState) => state.currencySlice.symbol,
  );

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        goBackIcon={true}
        title='Doctor details'
      />
    );
  };

  const renderDoctorPhoto = (): JSX.Element => {
    return (
      <custom.ImageBackground
        source={{
          uri: doctor.photo ?? 'default_image_uri',
        }}
        style={{
          width: theme.sizes.deviceWidth,
          aspectRatio: 375 / (500 - 44),
          borderRadius: 10,
          justifyContent: 'space-between',
          marginBottom: utils.responsiveHeight(30),
        }}
        imageStyle={{
          backgroundColor: theme.colors.imageBackground,
        }}
        resizeMode='cover'
      >
        <TouchableOpacity
          style={{padding: 20, position: 'absolute', bottom: 0, right: 0}}
        >
          <components.DoctorLike
            doctor={doctor}
            version={2}
          />
        </TouchableOpacity>
      </custom.ImageBackground>
    );
  };

  const renderDoctorInfo = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#D3E3F1',
          paddingBottom: 26,
          marginBottom: utils.responsiveHeight(30),
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: utils.responsiveHeight(4),
          }}
        >
          <Text
            style={{
              ...theme.fonts.H2,
              color: theme.colors.darkBlue,
              textTransform: 'capitalize',
            }}
            numberOfLines={1}
          >
            {doctor.name}
          </Text>
          <Text style={{...theme.fonts.H2, color: theme.colors.darkBlue}}>
            {symbol}
            {parseInt(doctor.price, 10).toString()}
          </Text>
        </View>
        <Text
          style={{
            ...theme.fonts.textStyle_16,
            color: theme.colors.textColor,
            marginBottom: utils.responsiveHeight(12),
          }}
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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <svg.ClockMiddleSvg />
            <Text
              style={{
                color: theme.colors.textColor,
                marginLeft: 4,
                ...theme.fonts.textStyle_14,
              }}
              numberOfLines={1}
            >
              {doctor.start_time.toLocaleLowerCase()} -{' '}
              {doctor.end_time.toLocaleLowerCase()}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <components.DoctorRating rating={doctor.rating} />
            <Text
              style={{
                marginLeft: 4,
                ...theme.fonts.textStyle_14,
                color: theme.colors.textColor,
              }}
            >
              {doctor.rating.toFixed(1).replace('.', ',')}{' '}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderBiography = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: utils.responsiveHeight(40),
        }}
      >
        <Text
          style={{
            ...theme.fonts.H4,
            color: theme.colors.darkBlue,
            marginBottom: utils.responsiveHeight(14),
          }}
          numberOfLines={1}
        >
          Biography
        </Text>
        <Text
          numberOfLines={6}
          style={{
            ...theme.fonts.textStyle_16,
            color: theme.colors.textColor,
            marginBottom: utils.responsiveHeight(14),
          }}
        >
          {doctor.biography}
        </Text>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => {
            navigation.navigate('Biography', {doctor});
          }}
        >
          <Text
            style={{
              marginRight: 6,
              color: theme.colors.darkBlue,
              ...theme.fonts.NunitoSans_600SemiBold,
              fontSize: 14,
              lineHeight: 14 * 1.5,
            }}
          >
            Read more
          </Text>
          <svg.RightArrowSvg />
        </TouchableOpacity>
      </View>
    );
  };

  const renderReviews = (): JSX.Element => {
    return (
      <View style={{paddingHorizontal: 20}}>
        <components.BlockHeading
          title={`Reviews (${reviews.length})`}
          containerStyle={{marginBottom: utils.responsiveHeight(24)}}
          viewAllOnPress={() => {
            navigation.navigate('Reviews', {reviews});
          }}
        />
        {reviews.slice(0, 2).map((item, index, array) => {
          const last = array.length - 1 === index;
          return (
            <items.ReviewItem
              key={index}
              review={item}
              last={last}
            />
          );
        })}
      </View>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title='Make an Appointment'
        onPress={() => {
          navigation.navigate('MakeAnAppointment', {doctor});
        }}
        containerStyle={{margin: 20}}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
      >
        {renderDoctorPhoto()}
        {renderDoctorInfo()}
        {renderBiography()}
        {renderReviews()}
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

export default DoctorDetails;
