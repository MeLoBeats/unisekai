import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet } from 'react-native'; 
import CameraScreen from './screens/Camera';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#000"
            />
          ),
        }}
        />
        <Stack.Screen name="Camera" component={CameraScreen} options={{ title: 'Camera Page' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 10
  }
});
