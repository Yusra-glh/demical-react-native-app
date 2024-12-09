import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {RootState} from '../store';
import {components} from '../components';
import {tests} from '../constants/constants';
import {DiagnosticDetailsScreenProps} from '../types/ScreenProps';

const DiagnosticDetails: React.FC<DiagnosticDetailsScreenProps> = ({route}) => {
  const {item} = route.params;

  const symbol: string = useSelector(
    (state: RootState) => state.currencySlice.symbol,
  );

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title={item.name}
        goBackIcon={true}
      />
    );
  };

  const renderFlatItem = ({item}: any): JSX.Element => {
    const last = tests[tests.length - 1];
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: last.id === item.id ? 0 : utils.responsiveHeight(20),
          borderBottomWidth: 1,
          paddingBottom: utils.responsiveHeight(20),
          borderBottomColor: '#D3E3F1',
        }}
      >
        <custom.Image
          source={{uri: item.image}}
          style={{
            width: utils.responsiveWidth(53),
            height: utils.responsiveWidth(53),
            marginRight: 14,
          }}
        />
        <View style={{flex: 1}}>
          <Text
            style={{
              ...theme.fonts.H6,
              color: theme.colors.darkBlue,
              marginBottom: 2,
            }}
            numberOfLines={1}
          >
            {item.title}
          </Text>
          <Text
            style={{
              ...theme.fonts.NunitoSans_400Regular,
              color: theme.colors.textColor,
              fontSize: 10,
              lineHeight: 10 * 1.5,
              marginBottom: utils.responsiveHeight(14),
            }}
          >
            {item.description}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {item.oldPrice && (
              <Text
                style={{
                  ...theme.fonts.NunitoSans_400Regular,
                  fontSize: 12,
                  color: theme.colors.textColor,
                  textDecorationLine: 'line-through',
                  marginRight: 10,
                }}
              >
                {symbol}
                {item.oldPrice}
              </Text>
            )}
            <Text style={{...theme.fonts.H4, color: theme.colors.darkBlue}}>
              {symbol + item.price}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.darkBlue,
                marginLeft: 'auto',
              }}
            >
              <Text
                style={{
                  color: theme.colors.white,
                  paddingHorizontal: 19,
                  paddingVertical: 8,
                  ...theme.fonts.NunitoSans_700Bold,
                  fontSize: 10,
                  textTransform: 'capitalize',
                  lineHeight: 10 * 1.7,
                }}
              >
                appointment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <FlatList
        data={tests}
        renderItem={renderFlatItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: utils.responsiveHeight(30),
          paddingBottom: utils.responsiveHeight(20),
        }}
      />
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default DiagnosticDetails;
