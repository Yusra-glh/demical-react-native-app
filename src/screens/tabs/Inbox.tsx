import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';

import {utils} from '../../utils';
import {ChatType} from '../../types';
import {svg} from '../../assets/svg';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {chat} from '../../constants/constants';

const Inbox: React.FC = () => {
  const renderFlatItem = (item: any): JSX.Element => {
    const last = chat.length - 1 === item.id - 1;
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 15,
          marginBottom: last ? 0 : 15,
          borderBottomWidth: 1,
          borderBottomColor: '#D3E3F1',
        }}
        onPress={() =>
          Alert.alert(
            'Warning',
            'This feature is not available in this version',
            [
              {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
              },
              {
                text: 'Ok',
                onPress: () => console.log('Ok'),
              },
            ],
            {cancelable: false},
          )
        }
      >
        <custom.ImageBackground
          source={{uri: item.photo || 'default_image_uri'}}
          style={{
            width: utils.responsiveWidth(50),
            height: utils.responsiveWidth(50),
            marginRight: 10,
          }}
        >
          {item.status === 'Online' ? (
            <View style={{position: 'absolute', right: -2, bottom: -2}}>
              <svg.OnlineSvg />
            </View>
          ) : null}
        </custom.ImageBackground>
        <View style={{marginRight: 'auto', flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}
          >
            <Text
              style={{...theme.fonts.H5, color: theme.colors.darkBlue}}
              numberOfLines={1}
            >
              {item.name}
            </Text>
            <Text
              style={{
                ...theme.fonts.NunitoSans_400Regular,
                fontSize: 12,
                color: theme.colors.textColor,
              }}
              numberOfLines={1}
            >
              {item.time}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {item.typing ? (
              <Text
                style={{
                  ...theme.fonts.NunitoSans_400Regular,
                  fontSize: 14,
                  color: theme.colors.textColor,
                  textTransform: 'capitalize',
                  lineHeight: 14 * 1.5,
                }}
              >
                typing...
              </Text>
            ) : (
              <Text
                style={{
                  color: theme.colors.textColor,
                  ...theme.fonts.NunitoSans_400Regular,
                  fontSize: 14,
                  lineHeight: 14 * 1.5,
                }}
                numberOfLines={1}
              >
                {item.lastMessage}
              </Text>
            )}
            {item.newMessages ? (
              <View
                style={{
                  height: 20,
                  backgroundColor: theme.colors.green,
                  borderRadius: 20,
                  paddingHorizontal: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    ...theme.fonts.NunitoSans_400Regular,
                    fontSize: 10,
                    color: theme.colors.white,
                  }}
                >
                  {item.newMessages}
                </Text>
              </View>
            ) : (
              ''
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderMessages = (): JSX.Element => {
    return (
      <FlatList
        data={chat}
        renderItem={({item}: {item: ChatType}) => renderFlatItem(item)}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: utils.responsiveHeight(20),
        }}
      />
    );
  };

  return renderMessages();
};

export default Inbox;
