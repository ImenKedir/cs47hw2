import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import Profiles from "../../assets/Profiles/";
import { Themes } from "../../assets/Themes";
import Icons from "../../assets/Icons";

const { width: windowWidth } = Dimensions.get("window");

export default function Body() {
  return (
    <View style={styles.container}>
      <View style={[Themes.light.shadows]}>
        <ImageBackground
          source={Profiles.mtl.image}
          style={styles.image}
          imageStyle={styles.imageStyle}
        >
          <Text style={styles.textName}>{Profiles.mtl.name}</Text>
          <Text style={styles.textCaption}>{Profiles.mtl.caption}</Text>
        </ImageBackground>
      </View>

      <View style={[styles.promptContainer, Themes.light.shadows]}>
        <Text style={styles.promptText}>My hottest take</Text>
        <View style={styles.promptIconsContainer}>
          <Image source={Icons.player.light} style={styles.playIcon} />
          <Image source={Icons.audioWave.light} style={styles.audioIcon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    alignItems: "center",
  },
  image: {
    alignSelf: "center",
    width: "100%",
    height: undefined,
    aspectRatio: 1 / 1.1,
    justifyContent: "space-between",
  },
  imageStyle: {
    borderRadius: 12,
  },
  textName: {
    fontFamily: "Sydney",
    fontSize: 32,
    marginTop: 8,
    marginLeft: 12,
    color: "white",
  },
  textCaption: {
    fontFamily: "Sydney",
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 12,
    color: "white",
  },
  promptContainer: {
    justifyContent: "center",
    borderRadius: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    width: "100%",
    height: windowWidth * 0.35,
    backgroundColor: Themes.light.bgSecondary,
  },
  promptText: {
    marginBottom: 12,
    fontSize: 24,
    fontFamily: "Sydney",
  },
  promptIconsContainer: {
    marginBottom: 8,
    flexDirection: "row",
  },
  playIcon: { 
    margin: 4,
    width: windowWidth * 0.12, 
    height: windowWidth * 0.12 
  },
  audioIcon: {
    margin: 4, 
    flex: 1,
    height: windowWidth * 0.12,
  },
});
