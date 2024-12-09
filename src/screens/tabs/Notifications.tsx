import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import {utils} from '../../utils';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {notices} from '../../constants/constants';

const Notifications: React.FC = () => {
  const renderEmptyList = (): JSX.Element => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>You have no notifications</Text>
      </View>
    );
  };

  const renderItem = ({item}: any): JSX.Element => {
    const last = notices[notices.length - 1];
    return (
      <View
        style={{
          marginBottom: last.id === item.id ? 0 : utils.responsiveHeight(20),
          borderBottomWidth: 1,
          borderBottomColor: '#D3E3F1',
          paddingBottom: utils.responsiveHeight(20),
          opacity: item.read ? 0.7 : 1,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: utils.responsiveHeight(12),
          }}
        >
          {item.title === 'Your blood test is ready' && <svg.NtfcCHeckSvg />}
          {item.title === 'Your appointment is confirmed' && (
            <svg.NtfcBellSvg />
          )}
          {item.title === 'Your appointment is rejected' && (
            <svg.NtfcBellYellowSvg />
          )}
          <Text
            style={{
              marginLeft: 14,
              ...theme.fonts.H5,
              color: theme.colors.darkBlue,
            }}
            numberOfLines={1}
          >
            {item.title}
          </Text>
        </View>
        <Text
          style={{
            marginBottom: utils.responsiveHeight(14),
            color: theme.colors.textColor,
            ...theme.fonts.textStyle_14,
          }}
        >
          {item.description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              ...theme.fonts.NunitoSans_400Regular,
              fontSize: 10,
              color: theme.colors.textColor,
            }}
            numberOfLines={1}
          >
            {item.date}
          </Text>
          {!item.read && (
            <TouchableOpacity>
              <svg.MarkAsReadSvg />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  const renderFlatList = (): JSX.Element => {
    return (
      <FlatList
        data={notices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={renderEmptyList}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: utils.responsiveHeight(30),
          paddingBottom: utils.responsiveHeight(20),
        }}
      />
    );
  };

  return renderFlatList();
};

export default Notifications;
