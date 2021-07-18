import * as React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UsersList: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="登録画面へ" onPress={() => navigate('ユーザ登録')} />
    </View>
  );
};

export default UsersList;
