import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Icons from "../../assets/Icons";

const {width: windowWidth} = Dimensions.get("window");

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image source={Icons.menu.light} style={styles.headerIcons} />
      <Text style={styles.title}>ensom</Text>
      <Image source={Icons.sun} style={styles.headerIcons} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  headerIcons: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
  },
  title: {
    fontFamily: "SydneyBold",
    fontSize: 32,
    alignSelf: "center",
  },
});
