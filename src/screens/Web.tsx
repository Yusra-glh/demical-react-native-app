import React from 'react';
import {WebView} from 'react-native-webview';

import {custom} from '../custom';
import {components} from '../components';
import {WebScreenProps} from '../types/ScreenProps';

const Web: React.FC<WebScreenProps> = ({route}) => {
  const {url, title} = route.params;

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        goBackIcon={true}
        title={title}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <WebView
        source={{uri: url}}
        style={{flex: 1}}
      />
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default Web;
