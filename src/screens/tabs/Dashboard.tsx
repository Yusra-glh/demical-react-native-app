import React from 'react';
import {useSelector} from 'react-redux';

import _v1 from './versions/_v1';
import _v2 from './versions/_v2';

import {RootState} from '../../store';

const Dashboard: React.FC = (): JSX.Element => {
  const version: number = useSelector(
    (state: RootState) => state.versionSlice.dashboard,
  );

  return (
    <React.Fragment>
      {version === 1 && <_v1 />}
      {version === 2 && <_v2 />}
    </React.Fragment>
  );
};

export default Dashboard;
