import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DoctorChatSvg: React.FC = () => {
  return (
    <Svg
      width={16}
      height={16}
      fill='none'
    >
      <Path
        fill='#fff'
        d='M14.275 11.844a4.875 4.875 0 0 0-3.763-7.194 4.875 4.875 0 1 0-8.787 4.194l-.4 1.406a.75.75 0 0 0 .925.925l1.406-.4a4.829 4.829 0 0 0 1.831.575 4.876 4.876 0 0 0 6.857 2.425l1.406.4a.743.743 0 0 0 .925-.925l-.4-1.406ZM3.706 9.994a.295.295 0 0 0-.106.018l-1.556.444.443-1.556a.35.35 0 0 0-.037-.294 4.119 4.119 0 1 1 1.444 1.444.344.344 0 0 0-.188-.056Zm9.806 1.906.444 1.556-1.556-.444a.35.35 0 0 0-.294.038 4.129 4.129 0 0 1-5.787-1.688A4.881 4.881 0 0 0 10.875 6.5a4.932 4.932 0 0 0-.119-1.056 4.132 4.132 0 0 1 2.794 6.162.35.35 0 0 0-.038.294Z'
      />
    </Svg>
  );
};

export default DoctorChatSvg;