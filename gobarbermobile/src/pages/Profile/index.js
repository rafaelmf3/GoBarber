import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Profile() {
  return (
    <Background />
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => <MaterialIcons name="person" size={20} color={tintColor} />
}
