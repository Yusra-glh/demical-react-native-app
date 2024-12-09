import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';

import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {actions} from '../store/actions';
import {components} from '../components';
import {RootState, AppDispatch} from '../store';

const currencies = [
  {
    id: 1,
    currency: 'USD',
  },
  {
    id: 2,
    currency: 'EUR',
  },
  {
    id: 3,
    currency: 'GBP',
  },
];

const ChangeCurrency: React.FC = () => {
  const dispatch: Dispatch = useDispatch<AppDispatch>();

  const currency: string = useSelector(
    (state: RootState) => state.currencySlice.currency,
  );

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='Dashboard version'
        goBackIcon={true}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <View style={{flex: 1}}>
        {currencies.map((item) => {
          return (
            <TouchableOpacity
              key={item.id.toString()}
              onPress={() => {
                dispatch(actions.setCurrency(item.currency));
              }}
              style={{
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#D3E3F1',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  color: theme.colors.textColor,
                  ...theme.fonts.NunitoSans_400Regular,
                  fontSize: 14,
                }}
              >
                {item.currency}
              </Text>
              {currency === item.currency && <svg.InputCheckSvg />}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default ChangeCurrency;
