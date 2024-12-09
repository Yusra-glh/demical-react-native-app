import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

import {theme} from '../../constants/colors';

type Props = {strokeColor: string};

const DashboardSvg: React.FC<Props> = ({strokeColor = theme.colors.white}) => {
  return (
    <Svg
      width={24}
      height={24}
      fill='none'
    >
      <Rect
        width={7.2}
        height={4.8}
        x={3.6}
        y={15.6}
        stroke={strokeColor}
        rx={1}
      />
      <Rect
        width={6}
        height={8.4}
        x={13.2}
        y={12}
        stroke={strokeColor}
        rx={1}
      />
      <Rect
        width={6}
        height={4.8}
        x={13.2}
        y={4.8}
        stroke={strokeColor}
        rx={1}
      />
      <Rect
        width={7.2}
        height={8.4}
        x={3.6}
        y={4.8}
        stroke={strokeColor}
        rx={1}
      />
    </Svg>
  );
};
export default DashboardSvg;
