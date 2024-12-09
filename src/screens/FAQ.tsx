import React, {useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';
import {questions} from '../constants/constants';

const FAQ: React.FC = () => {
  const [activeSections, setActiveSections] = useState([]);

  const setSections = (sections: any) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        goBackIcon={true}
        title={'FAQ'}
      />
    );
  };

  const renderFaqHeader = (
    section: any,
    _: any,
    isActive: any,
  ): JSX.Element => {
    return (
      <View
        style={{
          paddingVertical: 18,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            ...theme.fonts.H5,
            textTransform: 'capitalize',
            color: theme.colors.darkBlue,
          }}
        >
          {section.question}
        </Text>
        {isActive ? <svg.ArrowOpenSvg /> : <svg.ArrowCloseSvg />}
      </View>
    );
  };

  const renderFaqContent = (
    section: any,
    _: any,
    isActive: any,
  ): JSX.Element => {
    return (
      <View
        style={{
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 15 * 1.7,
            color: theme.colors.textColor,
          }}
        >
          {section.answer}
        </Text>
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: theme.colors.white,
        }}
      >
        <Accordion
          activeSections={activeSections}
          sections={questions}
          touchableComponent={TouchableOpacity}
          renderHeader={renderFaqHeader}
          renderContent={renderFaqContent}
          duration={400}
          onChange={setSections}
          underlayColor={'black'}
          sectionContainerStyle={{
            backgroundColor: theme.colors.white,
            marginBottom: 8,
            borderBottomWidth: 1,
            borderBottomColor: '#D3E3F1',
            marginHorizontal: 20,
          }}
        />
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

export default FAQ;
