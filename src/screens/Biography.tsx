import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {BiographyScreenProps} from '../types/ScreenProps';

const Biography: React.FC<BiographyScreenProps> = ({route}) => {
  const {doctor} = route.params;

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='Biography'
        goBackIcon={true}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: utils.responsiveHeight(30),
          paddingBottom: utils.responsiveHeight(20),
        }}
      >
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              color: theme.colors.textColor,
              ...theme.fonts.textStyle_16,
              marginBottom: utils.responsiveHeight(30),
            }}
          >
            {doctor.biography}
          </Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              ...theme.fonts.H4,
              color: theme.colors.darkBlue,
              marginBottom: utils.responsiveHeight(20),
            }}
          >
            Certificates
          </Text>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
          }}
        >
          {doctor.certificates.length > 0 &&
            doctor.certificates.map((item, index, array) => {
              const last = array.length - 1 === index;
              return (
                <custom.Image
                  key={item.toString()}
                  source={{uri: item}}
                  style={{
                    width: utils.responsiveHeight(120),
                    aspectRatio: 120 / 160,
                    marginRight: last ? 20 : 14,
                  }}
                />
              );
            })}
        </ScrollView>
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

export default Biography;
