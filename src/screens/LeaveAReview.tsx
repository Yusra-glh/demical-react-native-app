import {Text} from 'react-native';
import React, {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {validation} from '../utils/validation';
import {RootStackParamList} from '../types/RootStackParamList';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const LeaveAReviews: React.FC = () => {
  const navigation: Navigation = useNavigation<Navigation>();

  const {responsiveHeight} = utils;

  const [comment, setComment] = useState<string>('');

  const handleCommentChange = useCallback((text: string): void => {
    setComment(text);
  }, []);

  const renderHeader = () => {
    return (
      <components.Header
        title='Leave a review'
        goBackIcon={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 20,
          flexGrow: 1,
          justifyContent: 'center',
        }}
        enableOnAndroid={true}
      >
        <custom.Image
          source={require('../assets/images/08.png')}
          style={{
            aspectRatio: 139.01 / 124.1,
            height: responsiveHeight(124.1),
            borderRadius: 30,
            alignSelf: 'center',
            marginBottom: utils.responsiveHeight(32.8),
          }}
          imageStyle={{
            backgroundColor: theme.colors.transparent,
          }}
        />
        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.darkBlue,
            textTransform: 'capitalize',
            marginBottom: utils.responsiveHeight(20),
            textAlign: 'center',
          }}
        >
          Please rate the quality{'\n'}of service !
        </Text>

        <components.RatingStars
          containerStyle={{
            marginBottom: 20,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 16,
            lineHeight: 16 * 1.7,
            color: theme.colors.textColor,
            marginBottom: utils.responsiveHeight(30),
            textAlign: 'center',
          }}
        >
          Your comments and suggestions help us improve the service quality
          better!
        </Text>
        <custom.InputFieldBig
          containerStyle={{
            marginBottom: utils.responsiveHeight(20),
          }}
          value={comment}
          onChangeText={handleCommentChange}
        />
        <components.Button
          title='submit'
          onPress={() => {
            validation({comment}) ? navigation.goBack() : null;
          }}
        />
      </KeyboardAwareScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default LeaveAReviews;
