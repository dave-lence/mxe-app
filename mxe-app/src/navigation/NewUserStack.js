import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpScreenOne from '../screens/SignUpScreenOne';
import SignUpScreenTwo from '../screens/SignUpScreenTwo';
import SignUpScreenThree from '../screens/SignUpScreenThree';
import SignUpScreenFour from '../screens/SignUpScreenFour';
import SignUpScreenFive from '../screens/SignUpScreenFive';
import LoginNewUserScreen from '../screens/LoginNewUserScreen';
import CodeVerificationScreen from '../screens/CodeVerificationScreen';
import LoginOldUser from '../screens/LoginOldUser';

 
const Stack = createNativeStackNavigator();
const NewUserStack = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
    <Stack.Screen name="SignUpScreenOne" component={SignUpScreenOne} options={{animationTypeForReplace:"push", animation:"slide_from_right"}}/>
    <Stack.Screen name="SignUpScreenTwo" component={SignUpScreenTwo} options={{animationTypeForReplace:"push", animation:"slide_from_right"}}/>
    <Stack.Screen name="SignUpScreenThree" component={SignUpScreenThree} options={{animationTypeForReplace:"push", animation:"slide_from_right"}}/>
    <Stack.Screen name="SignUpScreenFour" component={SignUpScreenFour} options={{animationTypeForReplace:"push", animation:"slide_from_right"}}/>
    <Stack.Screen name="SignUpScreenFive" component={SignUpScreenFive} options={{animationTypeForReplace:"push", animation:"slide_from_right"}}/>
    <Stack.Screen name="LoginNewUser" component={LoginNewUserScreen} options={{animationTypeForReplace:"push", animation:"slide_from_right"}}/>
    <Stack.Screen name="CodeVerificationScreen" component={CodeVerificationScreen} options={{animationTypeForReplace:"push", animation:"slide_from_right"}}/>
    <Stack.Screen name="LoginOldUser" component={LoginOldUser} options={{animationTypeForReplace:"push", animation:"slide_from_bottom"}}/>
   </Stack.Navigator>
  )
}

export default NewUserStack

const styles = StyleSheet.create({})