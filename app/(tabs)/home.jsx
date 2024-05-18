import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import MovieCard from "../../components/movieCard";
import { useGetAllMovies } from "../../services/queries";

const Home = () => {
  const { data, isPending, isError, error, refetch } = useGetAllMovies();
  const [categorizedData, setCategorizedData] = useState({});

  // useEffect(() => {
  // if (!isPending) {
  // console.log(data.data.map((movie) => movie.show.type));
  // }
  // }, [isPending]);

  useEffect(() => {
    const segregateByType = () => {
      const categories = {
        Scripted: [],
        Documentary: [],
        Variety: [],
      };

      data.data.map((item) => {
        if (item.show.image) {
          if (categories[item.show.type]) {
            categories[item.show.type].push({
              id: item.show.id,
              imageUri: item.show.image.medium,
            });
          }
        }
      });

      return categories;
    };

    if (!isPending && data) {
      setCategorizedData(segregateByType());
    }
  }, [isPending, data]);

  if (isPending) {
    return (
      <View style={[styles.safeArea, styles.center]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={[styles.safeArea, styles.center]}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl onRefresh={refetch} refreshing={isPending} />
        }
      >
        {/* // ! header section */}
        <View style={styles.header}>
          <Text style={styles.whiteText2}>Top shows in India Today</Text>
        </View>
        {/* // ! content section */}
        <View style={[styles.mv20, styles.section]}>
          {["Scripted", "Variety", "Documentary"].map((cat, index) => (
            <View style={styles.subSection} key={index}>
              <Text style={[styles.whiteText, styles.fontSize20, styles.ml10]}>
                {cat}
              </Text>
              <FlatList
                data={categorizedData[cat]}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({ item }) => <MovieCard uri={item.imageUri} />}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  subSection: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  error: {
    color: "red",
    fontFamily: fonts.semiBold,
    fontSize: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.darkGray,
  },
  scrollView: {
    padding: 10,
  },
  customText: {
    fontSize: 20,
  },
  whiteText: {
    color: "white",
    fontFamily: fonts.regular,
  },
  header: {
    marginBottom: 20,
    paddingVertical: 5,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
  },
  whiteText2: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontFamily: fonts.regular,
  },
  fontSize10: {
    fontSize: 10,
  },
  fontSize20: {
    fontSize: 20,
  },
  fontSize30: {
    fontSize: 30,
  },
  ml5: {
    marginLeft: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  ml15: {
    marginLeft: 15,
  },
  ml25: {
    marginLeft: 25,
  },
  mv5: {
    marginVertical: 5,
  },
  mv20: {
    marginVertical: 20,
  },
});

export default Home;
