import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Alert, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  { county: "Montserrado" },
  { county: "Grand Kru" },
  { county: "Sinoe" },
  { county: "Grand Gedeh" },
  { county: "Maryland" },
  { county: "Grand Bassa" },
  { county: "Bomi" },
  { county: "Bong" },
  { county: "Margibi" },
  { county: "Lofa" },
  { county: "Gborpolu" },
  { county: "Grand Cape Mount" },
  { county: "River Cess" },
  { county: "River Gee" },
];

const Item = ({ county }) => {
  return (
    <View>
      <Text>{county}</Text>
    </View>
  );
};

function Senators({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.hamburgerIcon}>
          <Ionicons
            onPress={toggleMenu}
            name={menuOpen ? "close" : "menu"}
            size={30}
            color="#002368"
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Senators Screen</Text>
      </View>
      {menuOpen && (
        <View style={styles.dropDown}>
          {DATA.map((item, index) => (
            <TouchableOpacity key={index}>
              <Item county={item.county} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: "white",
  },
  hamburgerIcon: {
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    color: "#002368",
    fontWeight: "bold",
  },
  dropDown: {
    backgroundColor: "white",
    paddingLeft: 70,
  },
});

export default Senators;
