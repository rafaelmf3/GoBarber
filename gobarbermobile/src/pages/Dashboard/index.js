import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Text, LogoutButton } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();

  function handleLogout(){
    dispatch(signOut())
  }

  return (
    <Container>
      <Text></Text>
      <LogoutButton onPress={handleLogout}>
        Logout
      </LogoutButton>
    </Container>
  );
}
