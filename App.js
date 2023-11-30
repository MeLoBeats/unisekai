// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Button, StyleSheet } from 'react-native'; 
// import CameraScreen from './screens/Camera';
// import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});


// export default function App() {

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen 
//         name="Home" 
//         component={HomeScreen} 
//         options={{
//           title: 'My home',
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//           headerRight: () => (
//             <Button
//               onPress={() => alert('This is a button!')}
//               title="Info"
//               color="#000"
//             />
//           ),
//         }}
//         />
//         <Stack.Screen name="Camera" component={CameraScreen} options={{ title: 'Camera Page' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   textInput: {
//     borderColor: 'black',
//     borderWidth: 1,
//     width: '80%',
//     padding: 10,
//     marginBottom: 10
//   }
// });
