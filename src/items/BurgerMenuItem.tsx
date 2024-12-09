import {Text, TouchableOpacity, TextStyle} from 'react-native';
import React from 'react';

type Props = {title: string; onPress: () => void; textStyle?: TextStyle};

import {svg} from '../assets/svg';
import {theme} from '../constants';

const BurgerMenuItem: React.FC<Props> = ({title, onPress, textStyle}) => {
  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: 1,
        paddingBottom: 18,
        paddingTop: 10,
        borderBottomColor: '#D3E3F1',
        marginLeft: 20,
        marginBottom: 8,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...theme.fonts.textStyle_14,
          color: theme.colors.darkBlue,
          ...textStyle,
        }}
      >
        {title}
      </Text>
      <svg.RightArrowSvg />
    </TouchableOpacity>
  );
};

export default BurgerMenuItem;
