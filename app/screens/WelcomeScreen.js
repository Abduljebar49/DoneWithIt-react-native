import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Platform,
  SafeAreaView,
  Button,
  Alert,
  ImageBackground,
  StatusBar,
} from "react-native";

const WelcomeScreen = () => {
  return (
    // <View style={{style.container}}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.background}
      >
        <View style={styles.main_view}>
          <View style={styles.second_view}>
            <Image
              style={styles.image_style}
              source={require("../assets/logo-red.png")}
            />
            <Text style={{ color: "black", marginTop: 5 }}>
              Sell what you don't need
            </Text>
          </View>
          <View style={styles.third_view}>
            {/* <Button style={styles.login_button} title="Login"  />
            <Button style={styles.register_button} title="Register" /> */}
            <View style={styles.login_button} />
            <View style={styles.register_button} />
          </View>
        </View>
      </ImageBackground>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  main_view: {
    flex: 1,
    // backgroundColor:"blue",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: 'center',
  },
  second_view: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 55,
    // justifyContent: 'center',
  },
  third_view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "stretch",
    marginTop: 50,
  },
  image_style: {
    height: 115,
    width: 120,
    // resizeMode:''
  },

  login_button: {
      backgroundColor:'#fc5c65',
    height: 50,
  },

  register_button: {
    backgroundColor:'#4ecdc4',
    height: 50,
  },
});
export default WelcomeScreen;
