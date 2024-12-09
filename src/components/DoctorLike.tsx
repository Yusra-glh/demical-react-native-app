import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity, Alert, ViewStyle} from 'react-native';

import {svg} from '../assets/svg';
import {theme} from '../constants';
import {actions} from '../store/actions';
import {DoctorType} from '../types/DoctorType';
import {AppDispatch, RootState} from '../store';

type Props = {
  version: 1 | 2;
  doctor: DoctorType;
  containerStyle?: ViewStyle;
};

const DoctorLike: React.FC<Props> = ({doctor, version = 1, containerStyle}) => {
  const dispatch: Dispatch = useDispatch<AppDispatch>();

  const favorite: DoctorType[] = useSelector(
    (state: RootState) => state.favoriteSlice.list,
  );

  const doctorExist = (item: DoctorType) =>
    favorite.find((i) => i.id === item.id);

  const fillColor = doctorExist(doctor)
    ? theme.colors.green
    : theme.colors.transparent;
  const strokeColor = doctorExist(doctor)
    ? theme.colors.green
    : theme.colors.textColor;

  const itemExistMessage = () => {
    return Alert.alert(
      'Doctor already in favorites',
      'Are you sure you want to delete from favorites ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => dispatch(actions.removeFromFavorite(doctor)),
        },
      ],
    );
  };

  if (version === 1) {
    return (
      <TouchableOpacity
        onPress={() => {
          if (doctorExist(doctor)) {
            itemExistMessage();
          }
          if (!doctorExist(doctor)) {
            dispatch(actions.addToFavorite(doctor));
          }
        }}
        style={containerStyle}
      >
        <svg.DoctorStarSvg
          fillColor={fillColor}
          strokeColor={strokeColor}
        />
      </TouchableOpacity>
    );
  }

  if (version === 2) {
    return (
      <TouchableOpacity
        onPress={() => {
          if (doctorExist(doctor)) {
            itemExistMessage();
          }
          if (!doctorExist(doctor)) {
            dispatch(actions.addToFavorite(doctor));
          }
        }}
      >
        <svg.DoctorStarBigSvg
          fillColor={fillColor}
          strokeColor={strokeColor}
        />
      </TouchableOpacity>
    );
  }

  return null;
};

export default DoctorLike;
