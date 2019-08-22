import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
`;
