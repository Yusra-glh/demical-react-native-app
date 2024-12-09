import React from 'react';
import {View, TextInput, ViewStyle, Text} from 'react-native';
import {theme} from '../constants';

type Props = {
  value: string;
  containerStyle?: ViewStyle;
  onChangeText: (text: string) => void;
};

const InputFieldBig: React.FC<Props> = ({
  containerStyle,
  value,
  onChangeText,
}): JSX.Element => {
  return (
    <View
      style={{
        width: '100%',
        height: 131,
        borderWidth: 1,
        borderColor: theme.colors.lightBlue,
        ...containerStyle,
      }}
    >
      <TextInput
        style={{
          width: '100%',
          height: '100%',
          paddingHorizontal: 24,
          paddingTop: 23,
          paddingBottom: 23,
          color: theme.colors.darkBlue,
          fontSize: 16,
        }}
        value={value}
        onChangeText={onChangeText}
        placeholder='Enter your comment'
        textAlignVertical='top'
        multiline={true}
        placeholderTextColor='#A8BCCC'
      />
      <View
        style={{
          position: 'absolute',
          top: -12,
          left: 13,
          paddingHorizontal: 10,
          backgroundColor: theme.colors.white,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            textTransform: 'uppercase',
            color: theme.colors.textColor,
            lineHeight: 12 * 1.7,
          }}
        >
          comment
        </Text>
      </View>
    </View>
  );
};

export default InputFieldBig;
