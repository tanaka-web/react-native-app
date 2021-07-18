import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Create from './src/pages/users/form';
import UsersList from './src/pages/users/index';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="トップ" component={UsersList} />
        <Stack.Screen name="ユーザ登録" component={Create} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
