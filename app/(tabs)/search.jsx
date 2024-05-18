import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";
import icons from "../../constants/icons";
import { useGetSearchMovies } from "../../services/queries";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading, isError, refetch, isPending } =
    useGetSearchMovies(searchValue);

  const handleSearchClick = () => {
    refetch();
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.whiteText2}>Search</Text>
        </View>

        {/* // ? search input */}
        <View style={styles.searchCtn}>
          <TextInput
            value={searchValue}
            onChangeText={(text) => setSearchValue(text)}
            style={styles.textField}
            placeholder="Type your search here"
            placeholderTextColor={colors.darkGray}
          />

          <TouchableOpacity style={styles.btn} onPress={handleSearchClick}>
            <Image
              source={icons.search}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* // ? data upon search is rendered here */}
        {isLoading ||
          (isPending && <ActivityIndicator size="large" color="#0000ff" />)}

        {data && (
          <View>
            <Text>Data Arrived</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.darkGray,
  },
  btn: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: colors.red,
  },
  searchCtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 4,
    paddingVertical: 5,
  },
  whiteText2: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontFamily: fonts.regular,
  },
  header: {
    flexDirection: "column",
    gap: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  scrollView: {
    padding: 10,
  },
  textField: {
    padding: 10,
    backgroundColor: colors.lightGray,
    width: "80%",
    borderRadius: 10,
  },
  resultsCtn: {
    marginTop: 20,
  },
});

export default Search;
