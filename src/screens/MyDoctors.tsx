import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList, View, Text} from 'react-native';

import {items} from '../items';
import {custom} from '../custom';
import {RootState} from '../store';
import {DoctorType} from '../types';
import {components} from '../components';
import {utils} from '../utils';
import {theme} from '../constants';

const MyDoctors: React.FC = () => {
  const favorites: DoctorType[] = useSelector(
    (state: RootState) => state.favoriteSlice.list,
  );

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='My doctors'
        goBackIcon={true}
      />
    );
  };

  const renderDoctors = (): JSX.Element | null => {
    if (favorites.length) {
      return (
        <FlatList
          data={favorites}
          renderItem={({item}) => (
            <items.DoctorCard
              doctor={item}
              version={3}
            />
          )}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: utils.responsiveHeight(20),
            paddingBottom: utils.responsiveHeight(20),
          }}
          keyExtractor={(doctor) => doctor.id.toString()}
        />
      );
    }

    return null;
  };

  const renderEmpty = (): JSX.Element | null => {
    if (!favorites.length) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: theme.colors.darkBlue}}>
            You have no favorite doctors.
          </Text>
        </View>
      );
    }

    return null;
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderDoctors()}
      {renderEmpty()}
    </custom.SafeAreaView>
  );
};

export default MyDoctors;
