import {AppState} from 'react-native';
import {Dispatch} from '@reduxjs/toolkit';
import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootStackParamList} from '../types/RootStackParamList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {UserType} from '../types';
import {screens} from '../screens';
import {actions} from '../store/actions';
import {RootState, AppDispatch} from '../store';

const StackNavigator: React.FC = () => {
  const dispatch: Dispatch = useDispatch<AppDispatch>();

  const user: UserType | null = useSelector(
    (state: RootState) => state.userSlice.user,
  );
  const start: boolean = useSelector(
    (state: RootState) => state.startSlice.start,
  );

  const appState = useRef(AppState.currentState);

  const rememberMe: boolean = useSelector(
    (state: RootState) => state.userSlice.rememberMe,
  );

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      console.log('AppState', appState.current, 'nextAppState', nextAppState);

      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      console.log('AppState', appState.current);

      if (
        appState.current === 'background' ||
        appState.current === 'inactive'
      ) {
        if (!rememberMe) {
          console.log("rememberMe is false, so we're logging out");

          // dispatch(actions.logOut());
        }
      }
    });

    return () => {
      subscription.remove();
    };
  }, [rememberMe]);

  useEffect(() => {
    console.log('user', user);
  }, [user]);
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <RootStack.Navigator>
      {start && !user && (
        <RootStack.Group>
          <RootStack.Screen
            name='Onboarding'
            component={screens.Onboarding}
            options={{headerShown: false}}
          />
        </RootStack.Group>
      )}
      {!start && !user && (
        <RootStack.Group>
          <RootStack.Screen
            name='SignIn'
            component={screens.SignIn}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='SignUp'
            component={screens.SignUp}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='SignUpAccountCreated'
            component={screens.SignUpAccountCreated}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='ForgotPassword'
            component={screens.ForgotPassword}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='NewPassword'
            component={screens.NewPassword}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='ForgotPasswordSentEmail'
            component={screens.ForgotPasswordSentEmail}
            options={{headerShown: false}}
          />
        </RootStack.Group>
      )}
      {!start && user && (
        <RootStack.Group>
          <RootStack.Screen
            name='TabNavigator'
            component={screens.TabNavigator}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='EditProfile'
            component={screens.EditProfile}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='ConfirmationCode'
            component={screens.ConfirmationCode}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='DiagnosticDetails'
            component={screens.DiagnosticDetails}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='LeaveAReview'
            component={screens.LeaveAReview}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='DoctorDetails'
            component={screens.DoctorDetails}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='Reviews'
            component={screens.Reviews}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='Biography'
            component={screens.Biography}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='AppointmentSuccess'
            component={screens.AppointmentSuccess}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='MyAppointments'
            component={screens.MyAppointments}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='Web'
            component={screens.Web}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='MyDoctors'
            component={screens.MyDoctors}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='DashboardVersion'
            component={screens.DashboardVersion}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='Search'
            component={screens.Search}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='VerifyYourPhoneNumber'
            component={screens.VerifyYourPhoneNumber}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='VerifyYourEmail'
            component={screens.VerifyYourEmail}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='MakeAnAppointment'
            component={screens.MakeAnAppointment}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='PrivacyPolicy'
            component={screens.PrivacyPolicy}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='Filters'
            component={screens.Filters}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='ChangeCurrency'
            component={screens.ChangeCurrency}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='DoctorListVersion'
            component={screens.DoctorListVersion}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='DoctorsList'
            component={screens.DoctorsList}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='MyTestsAndDiagnostics'
            component={screens.MyTestsAndDiagnostics}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='LogOut'
            component={screens.LogOut}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='MyProfile'
            component={screens.MyProfile}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name='FAQ'
            component={screens.FAQ}
            options={{headerShown: false}}
          />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};

export default StackNavigator;
