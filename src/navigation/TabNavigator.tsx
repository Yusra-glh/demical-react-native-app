import React from 'react';
import {useSelector} from 'react-redux';
import {View} from 'react-native';

import {custom} from '../custom';
import {theme} from '../constants';
import {RootState} from '../store';
import getTabs from '../utils/getTabs';
import {components} from '../components';
import BottomTabBar from './BottomTabBar';
import Inbox from '../screens/tabs/Inbox';
import Dashboard from '../screens/tabs/Dashboard';
import Categories from '../screens/tabs/Categories';
import Notifications from '../screens/tabs/Notifications';

const TabNavigator: React.FC = () => {
  const currentTabScreen: string = useSelector(
    (state: RootState) => state.tabSlice.screen,
  );

  const tabs = getTabs();

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        burgerIcon={true}
        userAvatar={true}
        title={
          currentTabScreen === tabs[1].name
            ? tabs[1].name
            : currentTabScreen === tabs[2].name
            ? tabs[2].name
            : currentTabScreen === tabs[3].name
            ? tabs[3].name
            : ''
        }
        bottomLine={true}
        titleStyle={{...theme.fonts.H3}}
      />
    );
  };

  const renderScreens = (): JSX.Element => {
    return (
      <View style={{flex: 1}}>
        {currentTabScreen === tabs[0].name && <Dashboard />}
        {currentTabScreen === tabs[1].name && <Categories />}
        {currentTabScreen === tabs[2].name && <Notifications />}
        {currentTabScreen === tabs[3].name && <Inbox />}
      </View>
    );
  };

  const renderBottomTabBar = (): JSX.Element => {
    return <BottomTabBar />;
  };

  return (
    <custom.SafeAreaView insets={['top']}>
      {renderHeader()}
      {renderScreens()}
      {renderBottomTabBar()}
    </custom.SafeAreaView>
  );
};

export default TabNavigator;
