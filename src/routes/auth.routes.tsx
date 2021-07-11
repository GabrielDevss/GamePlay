import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';
import { SingIn } from '../screens/SingIn';
import { Home } from '../screens/Home';


import { themes } from '../global/styles/themes';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: themes.colors.secondary100
        }
      }}
    >
      <Screen
        name="SingIn"
        component={SingIn}
      />

      <Screen
        name="Home"
        component={Home}
      />

      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />

      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
    </Navigator>
  );
}
