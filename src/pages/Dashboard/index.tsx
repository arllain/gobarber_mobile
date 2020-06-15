import React, { useCallback } from 'react';
import { Button } from 'react-native';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>
      {/* <Button title="Sair" onPress={signOut} color="#312e38" /> */}
    </Container>
  );
};

export default Dashboard;
