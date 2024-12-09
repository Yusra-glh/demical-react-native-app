import React from 'react';
import {View} from 'react-native';

import {svg} from '../assets/svg';
import {theme} from '../constants';

type Props = {rating: number};

const DoctorRating: React.FC<Props> = ({rating}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <svg.SingleStarSvg
        fillColor={rating >= 1 ? theme.colors.yellow : theme.colors.transparent}
      />
      <svg.SingleStarSvg
        fillColor={rating >= 2 ? theme.colors.yellow : theme.colors.transparent}
      />
      <svg.SingleStarSvg
        fillColor={rating >= 3 ? theme.colors.yellow : theme.colors.transparent}
      />
      <svg.SingleStarSvg
        fillColor={rating >= 4 ? theme.colors.yellow : theme.colors.transparent}
      />
      <svg.SingleStarSvg
        fillColor={rating >= 5 ? theme.colors.yellow : theme.colors.transparent}
      />
    </View>
  );
};

export default DoctorRating;
