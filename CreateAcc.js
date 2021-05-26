import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./Signup";

const CreateAcc = ({ navigation }) => {
  const [uname, setuname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [pwd, setpwd] = React.useState("");

  const Handler = () => {
    if (uname == "") Alert.alert("", "Enter Full Name !");
    else if (email == "") Alert.alert("", "Enter Email !");
    else if (pwd == "") Alert.alert("", "Enter Password !");
    else {
      navigation.navigate("Home", {
        name: uname,
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styless.container}>
        <TouchableOpacity
          style={styless.vec}
          onPress={() => navigation.navigate("Signup")}
        ></TouchableOpacity>
        <Text style={[styles.head, styless.head]}>Create an account</Text>
        <Text style={[styles.text, styless.text]}>
          Invest and double your income now
        </Text>
        <TextInput
          placeholder="Full name"
          style={styless.input}
          onChangeText={(val) => setuname(val)}
        />
        <TextInput
          placeholder="Email address"
          style={styless.input}
          placeholderStyle={styless.plhlder}
          onChangeText={(val) => setemail(val)}
        />
        <TextInput
          placeholder="Password"
          style={styless.input}
          onChangeText={(val) => setpwd(val)}
        />
        <View style={[styles.butt1, styless.butt]}>
          <TouchableOpacity style={styles.b1} onPress={() => Handler()}>
            <Text style={styles.b1text}>Create account</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={[styles.text, styless.textbot]}>
            Already have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 0,
    padding: 0,
  },
  vec: {
    width: 12,
    height: 12,
    borderWidth: 2,
    marginLeft: 29,
    marginTop: 71,
    borderTopWidth: 0,
    borderRightWidth: 0,
    transform: [{ rotate: "45deg" }],
  },
  butt: {
    marginLeft: 30,
    marginTop: 1,
  },
  head: {
    height: 41,
    marginTop: 20,
    marginLeft: 30,
    color: "black",
    fontWeight: "700",
  },
  text: {
    height: 22,
    color: "#4F4F4F",
    marginLeft: 32,
    marginTop: 8,
    marginBottom: 87,
    fontWeight: "700",
  },
  input: {
    width: 343,
    height: 60,
    marginLeft: 35,
    marginBottom: 18,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "#828282",
    borderRadius: 20,
    paddingLeft: 25,
    fontFamily: "SFpro",
    fontSize: 17,
    color: "#828282",
  },

  textbot: {
    height: 20,
    marginLeft: 32,
    marginTop: 44,
    lineHeight: 20,
    color: "#31A062",
  },
  plhlder: {
    color: "#828282",
    paddingLeft: 25,
  },
});

export default CreateAcc;
