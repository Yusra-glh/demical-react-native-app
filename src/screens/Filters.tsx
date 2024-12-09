import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {utils} from '../utils';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';
import {RootStackParamList} from '../types/RootStackParamList';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const rating = [
  {
    id: 1,
    title: '1,0',
  },
  {
    id: 2,
    title: '2,0',
  },
  {
    id: 3,
    title: '3,0',
  },
  {
    id: 4,
    title: '4,0',
  },
  {
    id: 5,
    title: '5,0',
  },
];

const availableHours = [
  {
    id: 1,
    title: '9 am - 12 pm',
  },
  {
    id: 2,
    title: '12 pm - 3 pm',
  },
  {
    id: 3,
    title: '3 pm - 6 pm',
  },
  {
    id: 4,
    title: '6 pm - 9 pm',
  },
];

const Filters: React.FC = () => {
  const navigation: Navigation = useNavigation<Navigation>();

  const [gender, setGender] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<string[]>([]);
  const [selectedAvailableHours, setSelectedAvailableHours] = useState<
    string[]
  >([]);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='Filters'
        goBackIcon={true}
      />
    );
  };

  const renderGender = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: utils.responsiveHeight(30),
        }}
      >
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.darkBlue,
            marginBottom: 14,
          }}
        >
          Gender
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              paddingHorizontal: 12,
              paddingVertical: 8,
              backgroundColor:
                gender === 'male' ? theme.colors.darkBlue : theme.colors.white,
              borderColor:
                gender === 'male'
                  ? theme.colors.darkBlue
                  : theme.colors.lightBlue,
              marginRight: 10,
            }}
            onPress={() => {
              setGender('male');
            }}
          >
            <Text
              style={{
                color:
                  gender === 'male'
                    ? theme.colors.white
                    : theme.colors.darkBlue,
                ...theme.fonts.NunitoSans_600SemiBold,
                fontSize: 12,
                lineHeight: 12 * 1.5,
                textTransform: 'uppercase',
              }}
            >
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              paddingHorizontal: 12,
              paddingVertical: 8,
              backgroundColor:
                gender === 'frmale'
                  ? theme.colors.darkBlue
                  : theme.colors.white,
              borderColor:
                gender === 'frmale'
                  ? theme.colors.darkBlue
                  : theme.colors.lightBlue,
              marginRight: 10,
            }}
            onPress={() => {
              setGender('frmale');
            }}
          >
            <Text
              style={{
                color:
                  gender === 'frmale'
                    ? theme.colors.white
                    : theme.colors.darkBlue,
                ...theme.fonts.NunitoSans_600SemiBold,
                fontSize: 12,
                textTransform: 'uppercase',
                lineHeight: 12 * 1.5,
              }}
            >
              Female
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderRating = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: utils.responsiveHeight(30),
        }}
      >
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.darkBlue,
            marginBottom: 14,
          }}
        >
          Rating
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {rating.map((item, index, array) => {
            const last = array.length - 1 === index;

            return (
              <TouchableOpacity
                key={item.id.toString()}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  marginRight: last ? 0 : 10,
                  borderColor: selectedRating.includes(item.title)
                    ? theme.colors.darkBlue
                    : theme.colors.lightBlue,
                  backgroundColor: selectedRating.includes(item.title)
                    ? theme.colors.darkBlue
                    : theme.colors.white,
                  paddingHorizontal: 10,
                  paddingVertical: 6.5,
                }}
                onPress={() => {
                  setSelectedRating((prev: string[]) => {
                    if (prev.includes(item.title)) {
                      return prev.filter((e) => e !== item.title);
                    }
                    if (prev.length === 0) {
                      return [item.title];
                    }

                    return [...prev, item.title];
                  });
                }}
              >
                <svg.RatingStarSvg />
                <Text
                  style={{
                    ...theme.fonts.NunitoSans_400Regular,
                    fontSize: 10,
                    color: selectedRating.includes(item.title)
                      ? theme.colors.white
                      : theme.colors.darkBlue,
                    marginLeft: 4,
                    lineHeight: 10 * 1.7,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderAvailableDate = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: utils.responsiveHeight(30),
        }}
      >
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.darkBlue,
            marginBottom: utils.responsiveHeight(14),
          }}
        >
          Available date
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

  const renderAvailableHours = (): JSX.Element => {
    return (
      <View style={{paddingHorizontal: 20}}>
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.darkBlue,
            marginBottom: utils.responsiveHeight(14),
          }}
        >
          Available hours
        </Text>
        {availableHours.map((item, index, array) => {
          const last = array.length - 1 === index;

          return (
            <TouchableOpacity
              key={item.id.toString()}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-start',
                marginBottom: last ? 0 : 10,
              }}
              onPress={() => {
                setSelectedAvailableHours((prev: string[]) => {
                  if (prev.includes(item.title)) {
                    return prev.filter((e) => e !== item.title);
                  }
                  if (prev.length === 0) {
                    return [item.title];
                  }

                  return [...prev, item.title];
                });
              }}
            >
              <View
                style={{
                  width: 18,
                  height: 18,
                  borderWidth: 1,
                  borderColor: '#D3E3F1',
                  backgroundColor: theme.colors.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {selectedAvailableHours.includes(item.title) && (
                  <svg.RememberCheckSvg />
                )}
              </View>
              <Text
                style={{
                  ...theme.fonts.textStyle_14,
                  color: theme.colors.textColor,
                  marginLeft: 10,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
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
          paddingTop: utils.responsiveWidth(30),
        }}
      >
        {renderGender()}
        {renderRating()}
        {renderAvailableDate()}
        {renderAvailableHours()}
      </ScrollView>
    );
  };

  const renderButtons = (): JSX.Element => {
    return (
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <components.Button
          title='Reset'
          containerStyle={{
            width: utils.responsiveWidth(160, true),
          }}
          TouchableOpacityStyle={{
            backgroundColor: theme.colors.green,
          }}
          onPress={() => {
            setGender('');
            setSelectedRating([]);
            setSelectedAvailableHours([]);
          }}
        />
        <components.Button
          title='Apply'
          containerStyle={{
            width: utils.responsiveWidth(160, true),
          }}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
      {renderButtons()}
    </custom.SafeAreaView>
  );
};

export default Filters;
