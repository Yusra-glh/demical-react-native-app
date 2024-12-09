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

const versions = [
  {
    id: 1,
    version: 1,
    name: 'Version 1',
  },
  {
    id: 2,
    version: 2,
    name: 'Version 2',
  },
];

const DashboardVersion: React.FC = () => {
  const dispatch: Dispatch = useDispatch<AppDispatch>();
  const version: number = useSelector(
    (state: RootState) => state.versionSlice.dashboard,
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
      <View>
        {versions.map((item) => {
          return (
            <TouchableOpacity
              key={item.id.toString()}
              onPress={() => {
                if (item.version === 1 || item.version === 2) {
                  dispatch(actions.setDashboard(item.version));
                } else {
                  null;
                }
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
                {item.name}
              </Text>
              {version === item.id && <svg.InputCheckSvg />}
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

export default DashboardVersion;
