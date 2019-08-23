import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {MaterialIcons} from '@expo/vector-icons';

import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Title, List } from './styles';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(()=>{
    async function loadAppointments() {
      const response = await api.get('appointments');

      setAppointments(response.data);
    }

    loadAppointments();

  }, []);



  const dispatch = useDispatch();

  function handleLogout(){
    dispatch(signOut())
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
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
