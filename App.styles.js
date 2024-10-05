import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  buttonhome: {
    marginTop: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  userList: {
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    width: '90%',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  boldText: {
    fontWeight: "bold",
  },

  profileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  profileEmail: {
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
  },
});

export default styles;
