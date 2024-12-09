import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  onPress?: () => void;
}

import {theme} from '../constants';

import {svg} from '../assets/svg';

const ProfileItem: React.FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: 1,
        paddingVertical: 20,
        borderBottomColor: '#D3E3F1',
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      {title === 'Personal info' && <svg.UserSvg />}
      {title === 'My appointments' && <svg.MedicalCaseSvg />}
      {title === 'My doctors' && <svg.DoctorSvg />}
      {title === 'My tests & diagnostics' && <svg.BloodDropSvg />}
      {title === 'Log out' && <svg.LogOutSvg />}
      <Text
        style={{
          ...theme.fonts.H6,
          color: theme.colors.darkBlue,
          marginLeft: 14,
        }}
      >
        {title}
      </Text>
      <View style={{marginLeft: 'auto'}}>
        <svg.RightArrowSvg />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileItem;
