import React from 'react';
import {Text, ScrollView} from 'react-native';

import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';

const PrivacyPolicy: React.FC = () => {
  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} />;
  };

  const renderContent = (): JSX.Element => {
    const titleStyle = {
      ...theme.fonts.H4,
      color: theme.colors.darkBlue,
      marginBottom: utils.responsiveHeight(14),
    };

    const descriptionStyle = {
      ...theme.fonts.textStyle_16,
      color: theme.colors.textColor,
      marginBottom: utils.responsiveHeight(30),
    };

    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.darkBlue,
            marginBottom: utils.responsiveHeight(30),
            textTransform: 'capitalize',
          }}
        >
          Privacy policy
        </Text>
        <Text style={{...titleStyle}}>1. Terms</Text>
        <Text style={{...descriptionStyle}}>
          By accessing this website, you are agreeing to be bound by these
          website Terms and Conditions of Use, applicable laws and regulations
          and their compliance. If you disagree with any of the stated terms and
          conditions, you are prohibited from using or accessing this site. The
          materials contained in this site are secured by relevant copyright and
          trademark law.
        </Text>

        <Text style={{...titleStyle}}>2. Use Licence</Text>
        <Text style={{...descriptionStyle}}>
          By accessing this website, you are agreeing to be bound by these
          website Terms and Conditions of Use, applicable laws and regulations
          and their compliance. If you disagree with any of the stated terms and
          conditions, you are prohibited from using or accessing this site. The
          materials contained in this site are secured by relevant copyright and
          trademark law.
        </Text>
      </ScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default PrivacyPolicy;
