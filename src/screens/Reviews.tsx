import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {items} from '../items';
import {utils} from '../utils';
import {custom} from '../custom';
import {components} from '../components';
import {ReviewsScreenProps} from '../types/ScreenProps';

const Reviews: React.FC<ReviewsScreenProps> = ({route}) => {
  const {reviews} = route.params;

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='Reviews'
        goBackIcon={true}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <FlatList
        data={reviews}
        renderItem={({item}) => <items.ReviewItem review={item} />}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: utils.responsiveHeight(20),
          paddingBottom: utils.responsiveHeight(20),
        }}
        keyExtractor={(review) => review.id.toString()}
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

export default Reviews;
