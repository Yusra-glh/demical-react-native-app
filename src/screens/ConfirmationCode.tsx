import {
  Text,
  View,
  Alert,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';

import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';

const ConfirmationCode: React.FC = () => {
  const inp1Ref = useRef(null);
  const inp2Ref = useRef(null);
  const inp3Ref = useRef(null);
  const inp4Ref = useRef(null);
  const inp5Ref = useRef(null);

  const [inp1, setInp1] = useState('');
  const [inp2, setInp2] = useState('');
  const [inp3, setInp3] = useState('');
  const [inp4, setInp4] = useState('');
  const [inp5, setInp5] = useState('');

  const code = inp1 + inp2 + inp3 + inp4 + inp5;

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        goBackIcon={true}
        title='Verify your phone number'
      />
    );
  };

  const renderDescription = (): JSX.Element => {
    return (
      <Text
        style={{
          ...theme.fonts.textStyle_16,
          color: theme.colors.textColor,
          marginBottom: 30,
          textAlign: 'center',
        }}
      >
        Enter your OTP code here.
      </Text>
    );
  };

  const renderInputFields = (): JSX.Element => {
    const inputStyle: object = {
      textAlign: 'center',
      flex: 1,
      width: '100%',
      fontSize: 20,
      color: theme.colors.darkBlue,
    };

    const inputContainerStyle: object = {
      width: utils.responsiveWidth(59),
      height: utils.responsiveWidth(59),
      backgroundColor: '#F6F8FB',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
    };

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}
      >
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp1Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={(text) => {
              setInp1(text);
              if (text !== '') {
                if (inp2Ref.current) {
                  (inp2Ref.current as TextInput).focus();
                }
              } else if (text === '') {
                if (inp1Ref.current) {
                  (inp1Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp2Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={(text) => {
              setInp2(text);
              if (text !== '') {
                if (inp3Ref.current) {
                  (inp3Ref.current as TextInput).focus();
                }
              } else if (text === '') {
                if (inp1Ref.current) {
                  (inp1Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp3Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={(text) => {
              setInp3(text);
              if (text !== '') {
                if (inp4Ref.current) {
                  (inp4Ref.current as TextInput).focus();
                }
              } else if (text === '') {
                if (inp2Ref.current) {
                  (inp2Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp4Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={(text) => {
              setInp4(text);
              if (text !== '') {
                if (inp5Ref.current) {
                  (inp5Ref.current as TextInput).focus();
                }
              } else if (text === '') {
                if (inp3Ref.current) {
                  (inp3Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp5Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={(text) => {
              setInp5(text);
              if (text === '') {
                if (inp4Ref.current) {
                  (inp4Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
      </View>
    );
  };

  const renderIfDidNotReceiveCode = (): JSX.Element => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 30,
          alignSelf: 'center',
        }}
      >
        <Text
          style={{...theme.fonts.textStyle_16, color: theme.colors.textColor}}
        >
          Didn’t receive the OTP?{' '}
        </Text>
        <TouchableOpacity>
          <Text
            style={{...theme.fonts.textStyle_16, color: theme.colors.darkBlue}}
          >
            Resend.
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title='verify'
        onPress={() => {
          Alert.alert(
            'Sorry',
            'Unfortunatelly, this feature is not available yet.',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancel');
                },
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  console.log('OK');
                },
              },
            ],
            {cancelable: false},
          );
        }}
        containerStyle={{marginBottom: 20}}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        {renderDescription()}
        {renderInputFields()}
        {renderIfDidNotReceiveCode()}
        {renderButton()}
      </ScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default ConfirmationCode;
