import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackNavigatorParams } from "./NavigatorParams";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";

const AuthStack = createNativeStackNavigator<AuthStackNavigatorParams>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName='SignIn'
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <AuthStack.Screen name='SignIn' component={SignInScreen} />
      <AuthStack.Screen name='SignUp' component={SignUpScreen} />
      <AuthStack.Screen name='Home' component={HomeScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
