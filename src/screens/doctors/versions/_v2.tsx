import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {View, Text, FlatList, TouchableOpacity, Platform} from 'react-native';
import {RootStackParamList} from '../../../types/RootStackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {items} from '../../../items';
import {utils} from '../../../utils';
import {custom} from '../../../custom';
import {svg} from '../../../assets/svg';
import {UserType} from '../../../types';
import {RootState} from '../../../store';
import {theme} from '../../../constants';
import {components} from '../../../components';
import {queryHooks} from '../../../store/slices/apiSlice';

const sortingBy = [
  {id: 1, title: 'Best match'},
  {id: 2, title: 'Price: low to high'},
  {id: 3, title: 'Price: high to low'},
  {id: 4, title: 'Newest'},
  {id: 5, title: 'Customer rating'},
  {id: 6, title: 'Most popular'},
];

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const _v2: React.FC = () => {
  const navigation: Navigation = useNavigation<Navigation>();

  const user: UserType | null = useSelector(
    (state: RootState) => state.userSlice.user,
  );

  const [sort, setSort] = useState<string>('Best match');
  const [showModal, setShowModal] = useState<boolean>(false);

  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = queryHooks.useGetUserQuery(user?.id || 0);

  const {
    data: doctorsData,
    error: doctorsError,
    isLoading: doctorsLoading,
  } = queryHooks.useGetDoctorsQuery(undefined);

  const error = doctorsError || userError;
  const isLoading = doctorsLoading || userLoading;
  const noData = !doctorsData?.doctors?.length;

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        goBackIcon={true}
        title='Doctor List'
      />
    );
  };

  const renderFilterAndSort = (): JSX.Element => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: utils.responsiveHeight(20),
          marginBottom: utils.responsiveHeight(20),
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Filters');
          }}
        >
          <svg.FiltersSvg />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShowModal(true);
          }}
        >
          <svg.SortingBySvg />
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    if (isLoading) {
      return <components.Loader />;
    }

    if (error) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              ...theme.fonts.H4,
              color: theme.colors.darkBlue,
              textAlign: 'center',
            }}
          >
            {'Something went wrong'}
          </Text>
        </View>
      );
    }

    if (noData) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              ...theme.fonts.H4,
              color: theme.colors.darkBlue,
              textAlign: 'center',
            }}
          >
            {'No data'}
          </Text>
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <FlatList
          data={doctorsData?.doctors}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          numColumns={2}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingBottom: utils.responsiveHeight(20),
          }}
          renderItem={({item}) => (
            <items.DoctorCard
              doctor={item}
              version={5}
            />
          )}
        />
      </View>
    );
  };

  const renderModal = () => {
    return (
      <Modal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0}}
        animationIn='zoomIn'
        animationOut='zoomOut'
        statusBarTranslucent={true}
        deviceHeight={
          Platform.OS === 'android'
            ? theme.sizes.deviceHeight + utils.statusBarHeight()
            : theme.sizes.deviceHeight
        }
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            marginHorizontal: 40,
            paddingLeft: 20,
            paddingTop: 24,
          }}
        >
          <Text
            style={{
              ...theme.fonts.H4,
              textTransform: 'capitalize',
              color: theme.colors.darkBlue,
              marginBottom: 14,
            }}
          >
            Sorting by
          </Text>
          {sortingBy.map((item, index, array) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  height: 49,
                  borderBottomWidth: array.length - 1 === index ? 0 : 1,
                  marginBottom: 4,
                  borderBottomColor: '#D3E3F1',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: 20,
                }}
                onPress={() => {
                  setSort(item.title);
                  setShowModal(false);
                }}
              >
                <Text
                  style={{
                    ...theme.fonts.textStyle_14,
                    color: theme.colors.darkBlue,
                  }}
                >
                  {item.title}
                </Text>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderWidth: 1,
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: theme.colors.textColor,
                  }}
                >
                  <View
                    style={{
                      backgroundColor:
                        sort === item.title
                          ? theme.colors.green
                          : theme.colors.white,
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    );
  };

  return (
    <custom.SafeAreaView insets={['bottom', 'top']}>
      {renderHeader()}
      {renderFilterAndSort()}
      {renderContent()}
      {renderModal()}
    </custom.SafeAreaView>
  );
};

export default _v2;
