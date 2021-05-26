import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import { useFonts } from "@use-expo/font";

const customFonts = {
  DMSans: require("./assets/fonts/DMSans-Bold.ttf"),
  SFpro: require("./assets/fonts/SFProDisplay-Regular.ttf"),
  ABzee: require("./assets/fonts/ABeeZee-Regular.ttf"),
};

const Signup = ({ navigation }) => {
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return <Text>Loading Fonts...</Text>;
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./assets/Images/Asset.png")}
      />
      <Text style={styles.head}>Stay on top of your funance with us.</Text>
      <Text style={styles.text}>
        We are your new financial Advisors to recommend the best investments for
        you.
      </Text>
      <View style={styles.butt1}>
        <TouchableOpacity
          style={styles.b1}
          onPress={() => navigation.navigate("CreateAcc")}
        >
          <Text style={styles.b1text}>Create account</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  image: {
    width: 300,
    height: 273.23,
    marginTop: 154,
    marginLeft: 63,
    marginRight: 51,
  },
  head: {
    marginTop: 38.8,
    marginLeft: 41,
    width: 354,
    height: 82,
    fontFamily: "DMSans",
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 34,
    lineHeight: 44,
    textAlign: "center",
    color: "#4F4F4F",
  },
  text: {
    width: 354,
    height: 66,
    marginTop: 17,
    marginLeft: 41,
    fontFamily: "SFpro",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    color: "#4F4F4F",
  },
  butt1: {
    width: 354,
    height: 60,
    marginTop: 79,
    marginLeft: 34,
  },
  b1: {
    position: "absolute",
    left: "2.54%",
    right: "0.56%",
    backgroundColor: "#31A062",
    borderRadius: 20,
    width: 343,
    height: 60,
  },
  b1text: {
    color: "#FFFFFF",
    width: 354,
    height: 20,
    position: "absolute",
    top: "33.33%",
    bottom: "33.33%",
    fontFamily: "SFpro",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 20,
    textAlign: "center",
  },
  login: {
    width: 354,
    height: 20,
    marginTop: 17,
    marginLeft: 34,
    fontFamily: "SFpro",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 20,
    textAlign: "center",
    color: "#31A062",
  },
});

export { styles, customFonts };
