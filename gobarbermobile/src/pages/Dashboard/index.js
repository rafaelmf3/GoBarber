import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Title, List } from './styles';

import {MaterialIcons} from '@expo/vector-icons';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

export default function Dashboard() {
  const dispatch = useDispatch();

  function handleLogout(){
    dispatch(signOut())
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={() => {}}
          keyExtractor={(item) => String(item)}
          renderItem={(item) => (
            <Appointment data={item}/>
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (<MaterialIcons name="event" size={20} color={tintColor} />),
}
