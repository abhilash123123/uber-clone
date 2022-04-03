import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";
import { AuthStackNavigatorParams } from "../navigators/NavigatorParams";

type navigationType = NativeStackScreenProps<
  AuthStackNavigatorParams,
  "SignUp"
>;

interface Props {
  navigation: navigationType["navigation"];
}

const SignUpScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function signInButtonPress() {
    return navigation.navigate("SignIn");
  }

  function signUpButtonPress() {
    if (!email || !password) {
      return ToastAndroid.show("Please fill all fields", ToastAndroid.SHORT);
    }
    if (!email.includes("@") || !email.includes(".")) {
      return ToastAndroid.show(
        "Please enter a valid email",
        ToastAndroid.SHORT
      );
    }

    return navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome, Let's ride.</Text>
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
        onPress={signUpButtonPress}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: "#000000" }]}>
          Old user ? {"\t"}
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={signInButtonPress}>
          <Text style={[styles.footerText, { color: "#0615b2d9" }]}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

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
