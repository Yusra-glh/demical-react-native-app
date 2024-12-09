import {View, Text, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';

import {components} from '../components';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store';
import {custom} from '../custom';
import {utils} from '../utils';
import {theme} from '../constants';
import {setStart} from '../store/slices/startSlice';
import {onboardingData} from '../constants/constants';
import type {OnboardingTypes, ViewableItemsChanged} from '../types';
import {deviceWidth} from '../constants/sizes';

const Onboarding: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeIndex, setActiveIndex] = useState(0);

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const onViewableItemsChanged = useRef((info: ViewableItemsChanged) => {
    const index = info.viewableItems[0]?.index ?? 0;
    setActiveIndex(index);
  }).current;

  const flatListRef = useRef<FlatList>(null);

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title='Get Started'
        onPress={() => {
          dispatch(setStart(false));
        }}
        containerStyle={{padding: 20}}
      />
    );
  };

  const renderItem = ({item}: {item: OnboardingTypes}): JSX.Element => {
    return (
      <View
        style={{
          width: deviceWidth,
          paddingTop: utils.responsiveHeight(70),
        }}
      >
        <Text
          style={{
            color: theme.colors.darkBlue,
            textAlign: 'center',
            ...theme.fonts.H2,
            marginBottom: utils.responsiveHeight(40),
            textTransform: 'capitalize',
          }}
          numberOfLines={2}
        >
          {item.title}
        </Text>
        <custom.Image
          source={item.image}
          style={{
            alignSelf: 'center',
            aspectRatio: 375 / 321,
            height: utils.responsiveHeight(321),
            marginBottom: utils.responsiveHeight(30),
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: utils.responsiveHeight(20),
          }}
        >
          {onboardingData.map((_, current, array) => {
            const last = current === array.length - 1;
            return (
              <View
                key={current}
                style={{
                  width: 14,
                  height: 3,
                  backgroundColor: theme.colors.darkBlue,
                  opacity: current === activeIndex ? 1 : 0.2,
                  marginRight: last ? 0 : 10,
                }}
              />
            );
          })}
        </View>
        <Text
          style={{
            color: theme.colors.darkBlue,
            textAlign: 'center',
            ...theme.fonts.textStyle_16,
          }}
        >
          {item.description}
        </Text>
      </View>
    );
  };

  const renderFlatList = (): JSX.Element => {
    return (
      <FlatList
        bounces={false}
        ref={flatListRef}
        horizontal={true}
        pagingEnabled={true}
        data={onboardingData}
        viewabilityConfig={viewabilityConfig}
        contentContainerStyle={{flexGrow: 1}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => renderItem({item})}
        keyExtractor={(item) => item.id.toString()}
        onViewableItemsChanged={onViewableItemsChanged}
      />
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderFlatList()}
      {renderButton()}
    </custom.SafeAreaView>
  );
};

export default Onboarding;
