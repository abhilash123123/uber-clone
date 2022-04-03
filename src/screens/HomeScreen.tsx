import axios from "axios";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "../config";

const HomeScreen = () => {
  const [searchKeyword, setSearchKeyword] = React.useState<string>("");
  const [results, setResults] = React.useState<any>({});
  const [success, setSuccess] = React.useState<boolean>(false);
  const searchLocation = async (text: string) => {
    setSearchKeyword(text);
    axios
      .request({
        method: "post",
        url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${"AIzaSyCe39bVisvB6ravzHefwr2CUK-e7xHzcEQ"}&input=${searchKeyword}`,
      })
      .then(response => {
        console.log(response.data);
        setResults(response.data.predictions);
        setSuccess(true);
      })
      .catch(e => {
        console.log(e.response);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://links.papareact.com/gzs",
        }}
        resizeMode='contain'
      />
      <TextInput
        placeholder='Where to ?'
        // placeholderTextColor='#000'
        style={styles.searchBox}
        onChangeText={text => searchLocation(text)}
        value={searchKeyword}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: "5%",
  },
  searchBox: {
    width: 340,
    height: 50,
    fontSize: 18,
    borderRadius: 8,
    borderColor: "#aaa",
    color: "#000",
    backgroundColor: "#fff",
    borderWidth: 1.5,
    paddingLeft: 15,
    alignSelf: "center",
  },
});
