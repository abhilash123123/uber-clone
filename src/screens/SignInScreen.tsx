import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { AuthStackNavigatorParams } from "../navigators/NavigatorParams";

type navigationType = NativeStackScreenProps<
  AuthStackNavigatorParams,
  "SignIn"
>;

interface Props {
  navigation: navigationType["navigation"];
}

const SignInScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("abhilash@uberapp.com");
  const [password, setPassword] = useState<string>("123456");

  function signUpButtonPress() {
    return navigation.navigate("SignUp");
  }

  function signInButtonPress() {
    if (!email || !password) {
      return ToastAndroid.show("Please fill all fields", ToastAndroid.SHORT);
    }
    if (!email.includes("@") || !email.includes(".")) {
      return ToastAndroid.show(
        "Please enter a valid email",
        ToastAndroid.SHORT
      );
    }

    if (email !== "abhilash@uberapp.com" || password !== "123456") {
      return ToastAndroid.show("Bad credentials", ToastAndroid.SHORT);
    }

    return navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hey, Sign In to continue.</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder='Tap to enter your email...'
        selectionColor='#CDCDCD'
        blurOnSubmit={true}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholder='Tap to enter your password...'
        secureTextEntry={true}
        selectionColor='#CDCDCD'
        blurOnSubmit={true}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.85}
        onPress={signInButtonPress}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: "#000000" }]}>
          New here ? {"\t"}
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={signUpButtonPress}>
          <Text style={[styles.footerText, { color: "#0615b2d9" }]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    color: "black",
  },
  button: {
    marginTop: 20,
    width: "80%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
  },
  footerText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
});
