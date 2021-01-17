import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Create from './src/pages/users/form';

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="登録画面へ" onPress={() => navigate('ユーザ登録')} />
    </View>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="トップ" component={Home} />
        <Stack.Screen name="ユーザ登録" component={Create} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
