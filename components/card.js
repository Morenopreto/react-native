import { useState } from "react";
import { View, Pressable, Text,StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import style from "../styles/style";

export default function Card({ toDo, id, handleDelete }) {
  const [checked, setChecked] = useState(false);
  return (
    <View style={style.card}>
      <BouncyCheckbox
        size={25}
        fillColor="#007476"
        unfillColor="#FFFFFF"
        text={toDo}
        style={style.checkbox}
        iconStyle={{ borderColor: "#007476" }}
        onPress={() => setChecked(!checked)}
      />
      <Pressable
        onPress={() => {
          handleDelete(id);
        }}
      >
        <Text style={style.delete}>Borrar</Text>
      </Pressable>
    </View>
  );
}
