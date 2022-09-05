import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const InputComponent = ({
  label,
  placeHolder,
  icon,
  value,
  onChange,
  keyboard,
  maxLength,
}) => {
  return (
    <View style={{ marginTop: Dimensions.get("screen").height * 0.02 }}>
      <Text style={style.labelStyle}>{label}</Text>
      <View style={style.inputBoxStyle}>
        <LinearGradient
          colors={["#a7007e", "#8900a1"]}
          style={style.gradientStyle}
        >
          <Icon
            name={icon}
            size={30}
            style={{
              alignSelf: "center",
              color: "white",
            }}
          ></Icon>
        </LinearGradient>
        <TextInput
          onChange={() => {}}
          style={{
            width: Dimensions.get("screen").width * 0.6,
          }}
          placeholder={placeHolder}
          selectionColor={"green"}
          value={value}
          onChangeText={(text) => onChange(text)}
          keyboardType={keyboard}
          maxLength={maxLength}
        ></TextInput>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  gradientStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignSelf: "center",
    marginHorizontal: 10,
    justifyContent: "center",
  },
  labelStyle: {
    marginBottom: 7,
    fontWeight: "bold",
    color: "#8900a1",
    fontSize: 17,
  },
  inputBoxStyle: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 30,
    height: 60,
  },
});
export default InputComponent;
