import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

export default function App() {
  return (
    <LinearGradient
      colors={[colors.darkGray, colors.mediumGray, colors.lightGray]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.subCtn}>
          <View style={styles.textCtn}>
            <Text style={[styles.bigText, styles.textCenter]}>
              Unlimited Entertainment, one low price
            </Text>
            <Text style={[styles.whiteText, styles.textCenter, styles.mb6]}>
              Everything on our App, starting at just $4.99
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/home")}
            style={styles.btn}
          >
            <Text style={styles.whiteText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  subCtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    height: "100%",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: "100%",
    backgroundColor: colors.red,
    borderRadius: 4, // Added to improve button appearance
  },
  whiteText: {
    color: "white",
    fontFamily: fonts.regular,
  },
  textCtn: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  bigText: {
    fontSize: 50,
    color: "white",
    fontFamily: fonts.semiBold,
  },
  textCenter: {
    textAlign: "center",
  },
  mb10: {
    marginBottom: 100,
  },
  mb8: {
    marginBottom: 80,
  },
  mb6: {
    marginBottom: 60,
  },
});
