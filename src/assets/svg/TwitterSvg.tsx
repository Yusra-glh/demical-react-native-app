import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const TwitterSvg: React.FC = () => {
  return (
    <Svg
      width={16}
      height={14}
      fill='none'
    >
      <G clipPath='url(#a)'>
        <Path
          fill='#123258'
          d='M15.637 1.962c-.25.111-.51.206-.773.282a3.42 3.42 0 0 0 .696-1.225.258.258 0 0 0-.377-.3 6.09 6.09 0 0 1-1.8.711 3.452 3.452 0 0 0-2.405-.98A3.439 3.439 0 0 0 7.572 4.33a8.794 8.794 0 0 1-6.036-3.202.258.258 0 0 0-.423.033 3.433 3.433 0 0 0-.465 1.727c0 .827.295 1.613.817 2.226a2.91 2.91 0 0 1-.46-.205.258.258 0 0 0-.383.22v.046c0 1.235.665 2.347 1.681 2.953a2.963 2.963 0 0 1-.261-.038.258.258 0 0 0-.294.333 3.433 3.433 0 0 0 2.516 2.302 6.076 6.076 0 0 1-3.248.927 6.2 6.2 0 0 1-.728-.043.258.258 0 0 0-.17.474 9.263 9.263 0 0 0 5.01 1.468c3.497 0 5.684-1.65 6.904-3.033 1.52-1.725 2.392-4.008 2.392-6.264 0-.094-.001-.19-.004-.284a6.678 6.678 0 0 0 1.537-1.628.258.258 0 0 0-.32-.379Z'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path
            fill='#fff'
            d='M0 0h16v14H0z'
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default TwitterSvg;