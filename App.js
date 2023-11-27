import { NavigationContainer, Link } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CameraScreen from './screens/Camera';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [title, setTitle] = useState('Home')

  useEffect(() => {
    navigation.setOptions({ title })
  }, [title])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Camera"
        onPress={() => navigation.navigate('Camera')}
      />
      <TextInput style={styles.textInput} onChangeText={setTitle}></TextInput>
    </View>
  );
}

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
