import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {DoctorType} from '../types';
import {components} from '../components';
import {queryHooks} from '../store/slices/apiSlice';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/RootStackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const Search: React.FC = () => {
  const navigation: Navigation = useNavigation<Navigation>();

  const [searchQuery, setSearchQuery] = useState('');

  const {data, error, isLoading} = queryHooks.useGetDoctorsQuery(undefined);

  const ref = useRef<TextInput>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  if (isLoading) {
    return <components.Loader />;
  }

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const renderSearchBar = () => {
    const containerStyle: ViewStyle = {
      paddingTop: 10,
      paddingHorizontal: 20,
      paddingBottom: 20,
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomColor: `${'#D3E3F1'}80`,
    };

    const inputContainerStyle = {
      flex: 1,
      height: 40,
      marginRight: 20,
    };

    const inputStyle: object = {
      height: 40,
      borderRadius: 4,
      paddingHorizontal: 20,
      backgroundColor: `${'#D3E3F1'}50`,
      color: theme.colors.darkBlue,
    };

    return (
      <View style={containerStyle}>
        <View style={inputContainerStyle}>
          <TextInput
            ref={ref}
            placeholder='Enter doctor speciality'
            clearButtonMode='always'
            placeholderTextColor={`${theme.colors.textColor}80`}
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={true}
            style={inputStyle}
            value={searchQuery}
            onChangeText={(text) => handleSearch(text)}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 40,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{
              ...theme.fonts.NunitoSans_400Regular,
              fontSize: 14,
              color: theme.colors.textColor,
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({item, index}: {item: DoctorType; index: number}) => {
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: `${'#D3E3F1'}80`,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('DoctorDetails', {doctor: item});
        }}
      >
        <svg.SearchSmallSvg />
        <Text
          style={{
            ...theme.fonts.NunitoSans_400Regular,
            fontSize: 14,
            marginLeft: 10,
            color: theme.colors.textColor,
            marginRight: 'auto',
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            ...theme.fonts.NunitoSans_400Regular,
            fontSize: 14,
            color: theme.colors.textColor,
          }}
        >
          {item.specialities[0]}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            ...theme.fonts.NunitoSans_400Regular,
            fontSize: 16,
            color: theme.colors.textColor,
          }}
        >
          No results found
        </Text>
      </View>
    );
  };

  const renderSearchResults = () => {
    const filteredDoctors = data?.doctors.filter((item) => {
      return item.specialities[0]
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });

    return (
      <FlatList
        data={filteredDoctors}
        keyExtractor={(item: DoctorType) => item.id.toString()}
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled' // when user taps on the screen, the keyboard will be hidden
        keyboardDismissMode='on-drag' // when user drags the screen, the keyboard will be hidden
        ListEmptyComponent={() => renderEmptyComponent()}
        renderItem={({item, index}) => renderItem({item, index})}
      />
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderSearchBar()}
      {renderSearchResults()}
    </custom.SafeAreaView>
  );
};

export default Search;
