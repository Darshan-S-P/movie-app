import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";

const MovieCard = ({ uri }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.ctn}>
      <View style={styles.cards}>
        {loading && (
          <ActivityIndicator size="large" color="#0000ff" style={styles.act} />
        )}
        <Image
          source={{ uri }}
          style={styles.image}
          resizeMode="cover"
          onLoad={() => setLoading(false)}
          onError={(error) =>
            console.log("Image loading error:", error.nativeEvent.error)
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  act: {
    position: "absolute",
  },
  cards: {
    width: 180,
    height: 180,
    borderRadius: 10,
    backgroundColor: "gray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ctn: {
    padding: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default MovieCard;
