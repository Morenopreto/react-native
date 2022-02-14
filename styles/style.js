import { StyleSheet } from "react-native";
const style = StyleSheet.create({
  card: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 30,
    margin: "5%",
    borderRadius: 10,
  },
  checkbox: {
    maxWidth: "75%",
  },
  delete: {
    padding: 15,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    marginTop: 50,
  },

});

export default style;
