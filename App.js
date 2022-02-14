import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  FlatList,
} from "react-native";
import AnimatedStyleUpdateExample from "./prueba";
import Header from "./components/header";
import Card from "./components/card";
import style from "./styles/style";

const Item = ({ title }) => (
  <View style={style.item}>
    <Text style={style.title}>{title}</Text>
  </View>
);
export default function App() {
  const [text, setText] = useState("");
  const [toDo, setToDo] = useState([]);
  const [id, setId] = useState(1);

  const handleToDoList = () => {
    setToDo([
      ...toDo,
      {
        id: id,
        toDo: text,
      },
    ]);
    setText("");
    setId(id + 1);
  };

  const handleDelete = (id) => {
    setToDo(toDo.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <Card 
    toDo={item.toDo}
    id={item.id} 
    handleDelete={handleDelete} />
  );

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Header />
        <View>
          <TextInput
            style={style.input}
            onChangeText={setText}
            value={text}
            placeholder="add something To Do..."
          />

          <Button title="Add ToDo" onPress={handleToDoList} />
        </View>
        <FlatList
          data={toDo}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View style={style.container}>
          <StatusBar style="auto" />
        </View>
      </View>
    </SafeAreaView>
  );
}


