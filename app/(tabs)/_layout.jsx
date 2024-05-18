import { Tabs } from "expo-router";
import colors from "../../constants/colors";
import icons from "../../constants/icons";
import { Image, StyleSheet, Text, View } from "react-native";

const TabIcon = ({ icon, color, name }) => {
  return (
    <View style={styles.tabCtn}>
      <Image
        source={icon}
        tintColor={color}
        resizeMode="contain"
        style={styles.icons}
      />
      <Text style={{ color: color }}>{name}</Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.tabInactiveTint,
        tabBarStyle: {
          backgroundColor: colors.darkGray,
          borderTopWidth: 1,
          borderTopColor: colors.white,
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
              name="Home"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.search}
              color={color}
              focused={focused}
              name="Search"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="details"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.detail}
              color={color}
              focused={focused}
              name="Details"
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabCtn: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    alignItems: "center",
  },
  icons: {
    width: 23,
    height: 23,
  },
});

export default TabLayout;
