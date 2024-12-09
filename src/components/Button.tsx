import {
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

import {theme} from '../constants';

type Props = {
  loading?: boolean;
  title: string;
  onPress?: () => void;
  transparent?: boolean;
  containerStyle?: ViewStyle;
  TouchableOpacityStyle?: ViewStyle;
};

const Button: React.FC<Props> = ({
  title,
  loading = false,
  onPress,
  containerStyle,
  transparent = false,
  TouchableOpacityStyle,
}): JSX.Element => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          borderColor: theme.colors.textColor,
          backgroundColor: transparent
            ? theme.colors.transparent
            : theme.colors.darkBlue,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          ...TouchableOpacityStyle,
        }}
        onPress={onPress}
      >
        {loading && (
          <ActivityIndicator
            color={transparent ? theme.colors.darkBlue : theme.colors.white}
            size='small'
          />
        )}
        {!loading && (
          <Text
            style={{
              color: transparent ? theme.colors.white : theme.colors.white,
              textTransform: 'capitalize',
              ...theme.fonts.NunitoSans_700Bold,
              fontSize: 14,
            }}
          >
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Button);
