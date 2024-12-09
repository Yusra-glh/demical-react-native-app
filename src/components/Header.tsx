import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import Gravatar from '@krosben/react-native-gravatar';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  View,
  Text,
  ViewStyle,
  ScrollView,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

import {utils} from '../utils';
import {items} from '../items';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {RootState} from '../store';
import {RootStackParamList} from '../types/RootStackParamList';

type Props = {
  title?: string;
  search?: boolean;
  style?: ViewStyle;
  logoIcon?: boolean;
  userName?: boolean;
  userImage?: boolean;
  goBackIcon?: boolean;
  basketIcon?: boolean;
  bottomLine?: boolean;
  burgerIcon?: boolean;
  userAvatar?: boolean;
  titleStyle?: TextStyle;
  backgroundColor?: string;
};

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const Header: React.FC<Props> = ({
  title,
  style,
  titleStyle,
  burgerIcon,
  goBackIcon,
  bottomLine,
  userAvatar,
}) => {
  const navigation: Navigation = useNavigation<Navigation>();

  const user = useSelector((state: RootState) => state.userSlice.user);

  const [showModal, setShowModal] = useState(false);

  const projectUrl = 'https://codecanyon.net/user/george_fx/portfolio';

  const renderGoBack = (): JSX.Element | null => {
    if (goBackIcon && navigation.canGoBack()) {
      return (
        <View style={{position: 'absolute', left: 0}}>
          <TouchableOpacity
            style={{
              paddingVertical: 12,
              paddingHorizontal: 20,
            }}
            onPress={() => navigation.goBack()}
          >
            <svg.GoBackSvg />
          </TouchableOpacity>
        </View>
      );
    }

    return null;
  };

  const renderBurgerMenu = (): JSX.Element => {
    return (
      <Modal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0, padding: 0}}
        animationIn='slideInLeft'
        animationOut='slideOutLeft'
        animationInTiming={500}
        animationOutTiming={500}
        deviceWidth={theme.sizes.deviceWidth}
        deviceHeight={theme.sizes.deviceHeight}
        // statusBarTranslucent={true}
      >
        <View
          style={{
            height: theme.sizes.deviceHeight,
            width: utils.responsiveWidth(270, true),
            backgroundColor: theme.colors.white,
            paddingTop: utils.statusBarHeight(),
            paddingBottom: utils.homeIndicatorHeight(),
          }}
        >
          {/* CLOSE BUTTON */}
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              paddingHorizontal: 10,
              paddingTop: 10,
            }}
            onPress={() => {
              setShowModal(false);
            }}
          >
            <svg.CloseSvg />
          </TouchableOpacity>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              paddingTop: utils.responsiveHeight(40),
              paddingBottom: utils.responsiveHeight(20),
            }}
            showsVerticalScrollIndicator={false}
          >
            {/* USER */}
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#D3E3F1',
                paddingBottom: utils.responsiveHeight(32),
                marginBottom: utils.responsiveHeight(20),
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => {
                setShowModal(false);
                navigation.navigate('EditProfile');
              }}
            >
              <Gravatar
                email={user?.email || ''}
                size={40 * 2}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{color: theme.colors.darkBlue, ...theme.fonts.H6}}>
                  {user?.userName || ''}
                </Text>
                <Text
                  style={{
                    ...theme.fonts.textStyle_14,
                    color: theme.colors.textColor,
                  }}
                >
                  {user?.email || ''}
                </Text>
              </View>
            </TouchableOpacity>
            {/* USER INFO */}
            <TouchableOpacity
              style={{
                borderWidth: 1,
                marginHorizontal: 20,
                borderColor: '#D3E3F1',
                paddingHorizontal: 20,
                paddingVertical: 12,
                marginBottom: utils.responsiveHeight(20),
              }}
              onPress={() => {
                setShowModal(false);
                navigation.navigate('Search');
              }}
            >
              <Text
                style={{
                  color: '#7F9AB2',
                  ...theme.fonts.textStyle_16,
                  textTransform: 'capitalize',
                }}
              >
                Search
              </Text>
            </TouchableOpacity>
            {/* MENU */}
            <items.BurgerMenuItem
              title='FAQ'
              onPress={() => {
                setShowModal(false);
                navigation.navigate('FAQ');
              }}
            />
            <items.BurgerMenuItem
              title='Privacy Poliicy'
              onPress={() => {
                setShowModal(false);
                navigation.navigate('PrivacyPolicy');
              }}
            />
            <items.BurgerMenuItem
              title='Purchase Demical'
              onPress={() => {
                setShowModal(false);
                navigation.navigate('Web', {
                  url: projectUrl,
                  title: 'Purchase Demical',
                });
              }}
            />
            <items.BurgerMenuItem
              title='Dashboard Version'
              onPress={() => {
                setShowModal(false);
                navigation.navigate('DashboardVersion');
              }}
            />
            <items.BurgerMenuItem
              title='Doctor List Version'
              onPress={() => {
                setShowModal(false);
                navigation.navigate('DoctorListVersion');
              }}
            />
            <items.BurgerMenuItem
              title='Change Currency'
              onPress={() => {
                setShowModal(false);
                navigation.navigate('ChangeCurrency');
              }}
            />
            <items.BurgerMenuItem
              title='Verify Email'
              onPress={() => {
                setShowModal(false);
                navigation.navigate('VerifyYourEmail');
              }}
              textStyle={{color: theme.colors.accent}}
            />
            <items.BurgerMenuItem
              title={
                user?.phoneVerified === true ? 'Phone Verified' : 'Verify Phone'
              }
              onPress={() => {
                setShowModal(false);
                navigation.navigate('VerifyYourPhoneNumber');
              }}
              textStyle={{
                color:
                  user?.phoneVerified === true
                    ? theme.colors.darkBlue
                    : theme.colors.accent,
              }}
            />
          </ScrollView>
        </View>
      </Modal>
    );
  };

  const renderBurgerIcon = (): JSX.Element | null => {
    if (burgerIcon) {
      return (
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 0,
            paddingHorizontal: 20,
            paddingVertical: 12,
          }}
          onPress={() => {
            setShowModal(true);
          }}
        >
          <svg.BurgerSvg />
        </TouchableOpacity>
      );
    }

    return null;
  };

  const renderTitle = (): JSX.Element | null => {
    if (title) {
      return (
        <Text
          style={{
            color: theme.colors.darkBlue,
            textTransform: title === 'FAQ' ? 'uppercase' : 'none',
            ...theme.fonts.textStyle_16,
            ...titleStyle,
          }}
          numberOfLines={1}
        >
          {title}
        </Text>
      );
    }

    return null;
  };

  const renderUserAvatar = (): JSX.Element | null => {
    if (userAvatar) {
      return (
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('MyProfile');
          }}
        >
          <Gravatar
            email={'elenastout@mail.com'}
            size={24 * 2}
          />
        </TouchableOpacity>
      );
    }

    return null;
  };

  const containerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    borderBottomWidth: bottomLine ? 1 : 0,
    borderBottomColor: '#D3E3F1',
    ...style,
  };

  return (
    <View style={{...containerStyle}}>
      {renderGoBack()}
      {renderBurgerIcon()}
      {renderTitle()}
      {renderUserAvatar()}
      {renderBurgerMenu()}
    </View>
  );
};

export default Header;
