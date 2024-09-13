import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    display: "flex",
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  card: {
    margin: 10,
    padding: 10,
    height: 200,
    justifyContent: "center",
  },
  avatar: {
    width: 75,
    height: 75,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default styles;
