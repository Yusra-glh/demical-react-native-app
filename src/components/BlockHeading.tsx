import React from 'react';
import {View, TouchableOpacity, ViewStyle, Text} from 'react-native';

import {svg} from '../assets/svg';
import {theme} from '../constants';

type Props = {
  title: string;
  viewAllOnPress?: () => void;
  containerStyle?: ViewStyle;
};

const BlockHeading: React.FC<Props> = ({
  title,
  viewAllOnPress,
  containerStyle,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      <Text
        style={{
          ...theme.fonts.H4,
          color: theme.colors.darkBlue,
          textTransform: 'capitalize',
        }}
        numberOfLines={1}
      >
        {title}
      </Text>
      {viewAllOnPress && (
        <TouchableOpacity
          onPress={viewAllOnPress}
          style={{flexDirection: 'row', alignItems: 'center'}}
        >
          <Text
            style={{
              marginRight: 6,
              ...theme.fonts.NunitoSans_600SemiBold,
              color: theme.colors.darkBlue,
              lineHeight: 14 * 1.5,
            }}
          >
            View all
          </Text>
          <svg.RightArrowSvg />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(BlockHeading);
