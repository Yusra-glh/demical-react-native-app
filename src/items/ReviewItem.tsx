import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {utils} from '../utils';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {ReviewType} from '../types';

type Props = {
  last?: boolean;
  review: ReviewType;
};

const ReviewItem: React.FC<Props> = ({review, last}) => {
  return (
    <View
      style={{
        marginBottom: last ? 0 : 20,
        borderBottomWidth: 1,
        paddingBottom: 20,
        borderBottomColor: '#D3E3F1',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: utils.responsiveHeight(10),
        }}
      >
        <custom.Image
          source={{uri: review.photo}}
          style={{
            width: utils.responsiveWidth(30),
            height: utils.responsiveWidth(30),
            marginRight: 14,
          }}
        />
        <Text
          style={{
            marginRight: 'auto',
            ...theme.fonts.H5,
            color: theme.colors.darkBlue,
            textTransform: 'capitalize',
          }}
          numberOfLines={1}
        >
          {review.name}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <svg.RatingStarSvg />
          <Text
            style={{
              ...theme.fonts.NunitoSans_400Regular,
              fontSize: 10,
              color: theme.colors.textColor,
              marginLeft: 4,
            }}
          >
            {review.rating.toFixed(1).replace('.', ',')}
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginBottom: utils.responsiveWidth(13),
          color: theme.colors.textColor,
          ...theme.fonts.textStyle_14,
        }}
      >
        {review.comment}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            ...theme.fonts.NunitoSans_400Regular,
            fontSize: 10,
            color: theme.colors.textColor,
            lineHeight: 10 * 1.5,
          }}
        >
          {review.date}
        </Text>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              marginRight: 6,
              color: theme.colors.darkBlue,
              ...theme.fonts.NunitoSans_600SemiBold,
              fontSize: 12,
              lineHeight: 12 * 1.5,
            }}
            numberOfLines={1}
          >
            Reply
          </Text>
          <svg.RightArrowSvg />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewItem;
