import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Home = (props) => {
  return (
    <ScrollView>
      <View style={styles2.container}>
        <View style={styles2.top}>
          <View>
            <TouchableOpacity>
              <View style={styles2.menu}></View>
              <View style={[styles2.menu, styles2.menumid]}></View>
              <View style={styles2.menu}></View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => Alert.alert("", "No new Notifications.")}
            >
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles2.text}>Welcome, {props.route.params.name}.</Text>

        <View style={styles2.group24}>
          <View style={styles2.totasst}>
            <Text style={styles2.text1}>Your total asset portfolio</Text>
            <Text style={styles2.text2}>N203,935</Text>
            <View style={styles2.rect}>
              <TouchableOpacity
                onPress={() => Alert.alert("", "Invest Done !")}
              >
                <Text style={styles2.recttxt}>Invest now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles2.plans}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles2.pltxt}>Best Plans</Text>
            <TouchableOpacity>
              <Text style={styles2.seeall}>See All &rarr;</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} style={styles2.carousel}>
            <ImageBackground
              style={{ width: 134, height: 170, margin: 0, marginRight: 20 }}
              source={require("./assets/Images/gold.png")}
            >
              <View style={styles2.card}>
                <Text style={styles2.cardtit}>Gold</Text>
                <Text style={styles2.carddisc}>30% return</Text>
              </View>
            </ImageBackground>
            <ImageBackground
              style={{ width: 134, height: 170, margin: 0, marginRight: 20 }}
              source={require("./assets/Images/silver.png")}
            >
              <View style={[styles2.card, styles2.card2]}>
                <Text style={styles2.cardtit}>Silver</Text>
                <Text style={styles2.carddisc}>60% return</Text>
              </View>
            </ImageBackground>
            <ImageBackground
              style={{ width: 134, height: 170, margin: 0, marginRight: 20 }}
              source={require("./assets/Images/silver.png")}
            >
              <View style={[styles2.card, styles2.card3]}>
                <Text style={styles2.cardtit}>Platinum</Text>
                <Text style={styles2.carddisc}>90% return</Text>
              </View>
            </ImageBackground>
          </ScrollView>
        </View>

        <View style={styles2.news}>
          <Text style={styles2.newshead}>Investment Guide</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: 261, marginTop: 20 }}>
              <Text style={styles2.ntit}>Basic type of investments</Text>
              <Text style={styles2.ndisc}>
                This is how you set your foot for 2020 Stock market recession.
                What’s next...
              </Text>
            </View>
            <Image
              style={styles2.i1}
              source={require("./assets/Images/Ellipse.png")}
            />
          </View>
          <View style={styles2.div}></View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: 261, marginTop: 20 }}>
              <Text style={styles2.ntit}>How much can you start wit..</Text>
              <Text style={styles2.ndisc}>
                What do you like to see? It’s a very different market from 2018.
                The way...
              </Text>
            </View>
            <Image
              style={styles2.i1}
              source={require("./assets/Images/Ellipse2.png")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: "#F6F6F9",
  },

  top: {
    padding: 0,
    margin: 0,
    marginTop: 67,
    height: 12,
    marginLeft: 34,
    marginRight: 34,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  menu: {
    padding: 0,
    margin: 0,
    width: 18,
    borderWidth: 1,
    borderStyle: "solid",
  },

  menumid: {
    marginTop: 4,
    marginBottom: 4,
  },

  text: {
    marginTop: 24,
    marginLeft: 30,
    width: 354,
    height: 41,
    fontFamily: "DMSans",
    fontWeight: "bold",
    fontSize: 34,
    lineHeight: 44,
  },
  group24: {
    marginTop: 34,
    marginLeft: 30,
    width: 354,
    height: 146,
  },
  totasst: {
    position: "absolute",
    width: 354,
    height: 146,
    backgroundColor: "#31A078",
    borderRadius: 20,
  },
  text1: {
    position: "absolute",
    height: 19,
    top: 30,
    left: 30,
    fontFamily: "SFpro",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "white",
  },
  text2: {
    position: "absolute",
    height: 38,
    left: 30,
    top: 60,
    fontFamily: "SFpro",
    fontSize: 32,
    lineHeight: 38,
    fontWeight: "600",
    color: "white",
  },
  rect: {
    position: "absolute",
    width: 125,
    height: 40,
    left: 219,
    top: 63,
    borderRadius: 15,
    backgroundColor: "#FEFFFE",
  },
  recttxt: {
    fontFamily: "SFpro",
    margin: 11,
    fontSize: 14,
    textAlign: "center",
    color: "#31A078",
  },

  plans: {
    marginTop: 20,
    width: 414,
    height: 294,
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },

  pltxt: {
    fontFamily: "DMSans",
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "bold",
    letterSpacing: 0.8,
  },

  seeall: {
    fontFamily: "SFpro",
    fontSize: 18,
    letterSpacing: 0.8,
    color: "#FE555D",
  },

  carousel: {
    margin: 0,
    marginTop: 20,
    flexDirection: "row",
    overflow: "scroll",
  },

  card: {
    position: "relative",
    width: 134,
    height: 170,
    borderRadius: 20,
    backgroundColor: "rgba(240,199,53,0.7)",
    marginRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
  },

  card2: {
    backgroundColor: "rgba(202,201,201,0.7)",
  },

  card3: {
    backgroundColor: "rgba(153, 79, 248,0.7)",
  },

  cardtit: {
    fontFamily: "SFpro",
    fontSize: 17,
    color: "white",
    fontWeight: "600",
  },

  carddisc: {
    fontFamily: "SFpro",
    fontSize: 13,
    color: "white",
  },

  coin: {
    position: "absolute",
    top: 12,
  },

  news: {
    position: "relative",
    top: -40,
    height: 375,
    width: 414,
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 34,
  },

  newshead: {
    fontFamily: "DMSans",
    height: 28,
    fontSize: 22,
    letterSpacing: 0.8,
    fontWeight: "700",
  },

  ntit: {
    fontFamily: "DMSans",
    color: "#4F4F4F",
    fontSize: 18,
    height: 28,
    fontWeight: "bold",
  },

  ndisc: {
    height: 44,
    fontFamily: "SFpro",
    letterSpacing: 0.8,
    color: "#474747",
  },

  i1: {
    width: 61,
    height: 61,
    marginTop: 18,
  },

  div: {
    marginTop: 13,
    marginLeft: 4,
    width: 346,
    opacity: 0.2,
    borderWidth: 1,
    borderColor: "#4A4A4A",
    borderStyle: "solid",
  },
});
