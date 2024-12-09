import React from 'react';
import {useSelector} from 'react-redux';

import _v1 from './versions/_v1';
import _v2 from './versions/_v2';

import {RootState} from '../../store';

const DoctorsList: React.FC = (): JSX.Element => {
  const doctorList: number = useSelector(
    (state: RootState) => state.versionSlice.doctorList,
  );

  return (
    <React.Fragment>
      {doctorList === 1 && <_v1 />}
      {doctorList === 2 && <_v2 />}
    </React.Fragment>
  );
};

export default DoctorsList;
