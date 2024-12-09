import React, {useRef, useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

import {svg} from '../assets/svg';
import {theme} from '../constants';

type Props = {
  containerStyle?: object;
  onChangeText?: (text: string) => void;
  value?: string;
  check?: boolean;
  label?: string;
  loading?: boolean;
  setSecureTextEntry?: (value: boolean) => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  blurOnSubmit?: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  eyeOffIcon?: boolean;
  checkIcon?: boolean | (() => void);
  icon?: JSX.Element;
  innerRef?: any;
  editable?: boolean;
  maxLength?: number;
  onBlur?: () => void;
};

const InputField: React.FC<Props> = ({
  placeholder,
  containerStyle,
  secureTextEntry,
  keyboardType,
  checkIcon,
  setSecureTextEntry,
  autoCapitalize = 'none',
  eyeOffIcon = false,
  onChangeText,
  blurOnSubmit,
  label,
  value,
  icon,
  editable = true,
  loading,
  onBlur,
  innerRef,
  maxLength,
}): JSX.Element | null => {
  const [focused, setFocused] = useState<boolean>(false);
  const ref = useRef<TextInput>({focus: () => {}} as TextInput);

  if (loading) {
    ref.current.blur();
  }

  return (
    <View
      style={{
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: '#D3E3F1',
        ...containerStyle,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontSize: 16,
          marginLeft: 20,
          marginRight: eyeOffIcon ? 0 : checkIcon ? 0 : 30,
          color: theme.colors.darkBlue,
          ...theme.fonts.NunitoSans_400Regular,
        }}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={'#A7AFB7'}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        ref={ref}
        blurOnSubmit={blurOnSubmit}
        onBlur={onBlur}
        maxLength={maxLength}
        editable={editable}
      />

      {checkIcon && (
        <View style={{paddingHorizontal: 20}}>
          <svg.InputCheckSvg />
        </View>
      )}
      {eyeOffIcon && (
        <TouchableOpacity
          style={{paddingHorizontal: 20}}
          onPress={() => {
            setSecureTextEntry && setSecureTextEntry(!secureTextEntry);
          }}
        >
          <svg.EyeOffSvg />
        </TouchableOpacity>
      )}
      {icon && (
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
