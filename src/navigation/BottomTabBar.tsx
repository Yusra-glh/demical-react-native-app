import React from 'react';
import {useSelector} from 'react-redux';
import {View, TouchableOpacity, Text} from 'react-native';

import {utils} from '../utils';
import {theme} from '../constants';
import getTabs from '../utils/getTabs';
import {useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import {setScreen} from '../store/slices/tabSlice';

const BottomTabBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const tabs = getTabs();

  const currentTabScreen = useSelector(
    (state: RootState) => state.tabSlice.screen,
  );

  return (
    <View
      style={{
        paddingTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 23,
        borderTopColor: '#EEEEEE',
        backgroundColor: theme.colors.darkBlue,
        paddingBottom: utils.homeIndicatorSettings(),
      }}
    >
      {tabs.map((item, index) => {
        const fillColor =
          item.name === currentTabScreen
            ? theme.colors.green
            : theme.colors.white;
        const strokeColor =
          item.name === currentTabScreen
            ? theme.colors.green
            : theme.colors.white;
        const activeColor =
          item.name === currentTabScreen
            ? theme.colors.green
            : theme.colors.white;

        return (
          <TouchableOpacity
            key={index}
            style={{alignItems: 'center'}}
            onPress={() => dispatch(setScreen(item.name))}
          >
            <View style={{marginBottom: 6}}>
              <item.icon
                fillColor={fillColor}
                strokeColor={strokeColor}
              />
            </View>
            <Text style={{color: activeColor, fontSize: 12}}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
