import { Image, StyleSheet, Platform ,View,Text,Pressable,SafeAreaView,Button} from 'react-native';
import React, { useEffect, useState,useContext  } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import {Amplify } from 'aws-amplify'
import config from '../../src/aws-exports'
Amplify.configure(config)
import {
  withAuthenticator,
  useAuthenticator
} from '@aws-amplify/ui-react-native';

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}


// // retrieves only the current value of 'user' from 'useAuthenticator'
// const userSelector = (context) => [context.user];

// const SignOutButton = () => {
//   const { user, signOut } = useAuthenticator(userSelector);
//   return (
//     <Pressable onPress={signOut} style={styles.buttonContainer}>
//       <Text style={styles.buttonText}>
//         Hello, {user.username}! Click here to sign out!
//       </Text>
//     </Pressable>
//   );
// };

function HomeScreen()   {
  
  return (
    
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <SignOutButton />
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { width: 400, flex: 1, padding: 20, alignSelf: 'center' },
  todo: { marginBottom: 15 },
  input: {
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18
  },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8
  },
  buttonText: { color: 'white', padding: 16, fontSize: 18 },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

export default withAuthenticator(HomeScreen);
