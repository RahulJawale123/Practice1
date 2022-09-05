import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import InputComponent from "../components/InputComponent";
import { LinearGradient } from "expo-linear-gradient";

const SignUpScreen = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, mobileNo, password, confirmPassword } = userData;

  const emailValidate = (mailID) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(mailID) ? true : false;
  };

  const handleSubmit = () => {
    if (username.length < 4) {
      console.log("username");
      return;
    }
    if (!emailValidate(email)) {
      console.log("email");
      return;
    }
    if (mobileNo.length < 10) {
      console.log("phone");
      return;
    }
    if (password.length < 8) {
      console.log("password");
      return;
    }
    if (password !== confirmPassword) {
      console.log("confirmPassword");
      return;
    }

    console.log("Successful");
  };
  return (
    <ScrollView>
      <View style={style.mainContent}>
        <View style={style.pageHeader}>
          <Text style={style.headertText}>SIGN UP</Text>
          <Text style={style.headerSubText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>
        <View style={style.formContent}>
          <InputComponent
            label={"User Name"}
            placeHolder={"Enter User Name"}
            icon={"account-outline"}
            value={username}
            keyboard={"default"}
            maxLength={15}
            onChange={(value) => {
              setUserData(() => {
                return { ...userData, username: value };
              });
            }}
          />
          <InputComponent
            label={"Email Id"}
            placeHolder={"Enter Email"}
            icon={"email-outline"}
            value={email}
            keyboard={"email-address"}
            maxLength={50}
            onChange={(value) => {
              setUserData(() => {
                return { ...userData, email: value };
              });
            }}
          />
          <InputComponent
            label={"Mobile Number"}
            placeHolder={"Enter your 10 digit mobile number"}
            icon={"cellphone"}
            value={mobileNo}
            keyboard={"phone-pad"}
            maxLength={10}
            onChange={(value) => {
              setUserData(() => {
                return { ...userData, mobileNo: value };
              });
            }}
          />
          <InputComponent
            label={"Password"}
            placeHolder={"Enter password 8-15 characters"}
            icon={"lock-outline"}
            value={password}
            keyboard={"visible-password"}
            maxLength={15}
            onChange={(value) => {
              setUserData(() => {
                return { ...userData, password: value };
              });
            }}
          />
          <InputComponent
            label={"Confirm Password"}
            placeHolder={"Repeat the password"}
            icon={"lock-outline"}
            value={confirmPassword}
            keyboard={"visible-password"}
            maxLength={15}
            onChange={(value) => {
              setUserData(() => {
                return { ...userData, confirmPassword: value };
              });
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            handleSubmit();
          }}
        >
          <LinearGradient
            colors={["#a7007e", "#8900a1"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={style.submitButton}
          >
            <Text style={{ color: "white", fontSize: 20 }}> SIGN UP</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  mainContent: {
    marginVertical: Dimensions.get("screen").height * 0.07,
    marginHorizontal: Dimensions.get("screen").width * 0.02,
  },
  formContent: {
    marginHorizontal: Dimensions.get("screen").width * 0.05,
    marginVertical: Dimensions.get("screen").height * 0.03,
  },
  pageHeader: {
    alignItems: "center",
  },
  headertText: {
    fontWeight: "bold",
    fontSize: 22,
    padding: 5,
  },
  headerSubText: {
    fontSize: 15,
    opacity: 0.5,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  submitButton: {
    height: 50,
    borderRadius: 25,
    marginHorizontal: Dimensions.get("screen").width * 0.05,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignUpScreen;
