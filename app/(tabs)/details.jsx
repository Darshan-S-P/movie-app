import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Details = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>Details Section</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.darkGray,
  },
});

export default Details;
