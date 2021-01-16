import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import Screen from './app/components/Screen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationtheme from './app/navigation/navigationtheme';
import AppNavigator from './app/navigation/AppNavigator';

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate('TweetDetails')}
    />
  )
}

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
)

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
)
const Account = () => (
  <Screen>
    <Text>Account Details</Text>
  </Screen>
)

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator 
//     screenOptions={{
//       headerStyle: { backgroundColor: 'dodgerblue'},
//       headerTintColor: 'white'
//     }}
//   >
//     <Stack.Screen 
//       name='Tweets' 
//       component={Tweets} 
//       options={{
//         headerShown: false
//       }}
//     />
//     <Stack.Screen name='TweetDetails' component={TweetDetails} />
//   </Stack.Navigator>
// )

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: 'tomato',
        activeTintColor: 'white',
        inactiveBackgroundColor: '#eee',
        inactiveTintColor: 'black'
      }}
    >
      <Tab.Screen 
        name="Feed" 
        component={Tweets} 
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
        }}  
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer theme={navigationtheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}