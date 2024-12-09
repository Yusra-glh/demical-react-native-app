import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, TextStyle} from 'react-native';

import {theme} from '../constants';
import {RootState} from '../store';

type Props = {
  price: string;
  style?: TextStyle;
};

const DoctorPrice: React.FC<Props> = ({price, style}) => {
  const symbol = useSelector((state: RootState) => state.currencySlice.symbol);

  return (
    <Text
      style={{
        ...theme.fonts.NunitoSans_600SemiBold,
        fontSize: 12,
        color: theme.colors.darkBlue,
        lineHeight: 12 * 1.5,
        ...style,
      }}
      numberOfLines={1}
    >
      {symbol}
      {price}
    </Text>
  );
};

export default DoctorPrice;
