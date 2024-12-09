import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, TouchableOpacity, ScrollView} from 'react-native';

import {svg} from '../assets/svg';
import {custom} from '../custom';
import {theme} from '../constants';
import {actions} from '../store/actions';
import {components} from '../components';
import {AppDispatch, RootState} from '../store';

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

const DoctorListVersion: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const version: number = useSelector(
    (state: RootState) => state.versionSlice.doctorList,
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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        {versions.map((item) => {
          return (
            <TouchableOpacity
              key={item.id.toString()}
              onPress={() => {
                if (item.version === 1 || item.version === 2) {
                  dispatch(actions.setDoctorList(item.version));
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

export default DoctorListVersion;
