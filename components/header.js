import { View, Text } from "react-native";
import style from "../styles/style";

export default function Header() {
  return (
    <View>
      <Text style={style.headerTitle}>To Do list</Text>
    </View>
  );
}
