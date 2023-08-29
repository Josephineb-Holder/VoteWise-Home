import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
} from "react-native";
import { senators } from "./data/SenatorJson";

const SelectCounty = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [selectedCounty, setSelectedCounty] = useState("");

  // console.log("Counties", Object.keys(senators))

  const countyDrop = senators;
  // console.log(countyDrop.grandKru);

  const counties = Object.keys(senators);

  const toggleDropDown = () => {
    setShowArrow(!showArrow);
  };

  const selectCounty = (county) => {
    setSelectedCounty(county);
    toggleDropDown();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDropDown} style={styles.dropDown}>
        <Text style={styles.headerText}>
          {selectedCounty || "Select a county"}
        </Text>
        <Text style={styles.hamburgerIcon}>{showArrow ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {showArrow && (
        <View>
          {counties.map((ele) => (
            <TouchableOpacity key={ele} onPress={() => selectCounty(ele)}>
              <Text style={styles.dropCounties}>{ele}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {
        <View>
          <FlatList
            data={countyDrop[selectedCounty]}
            renderItem={({ item }) => {
              return (
                <View style={styles.senatorsOutput}>
                  <View>
                    <Image
                      style={styles.image}
                      source={{
                        uri: item.photo,
                      }}
                    />
                  </View>
                  <View>
                    <Text style={styles.aspirantName}>{item.aspirant}</Text>
                    <Text style={styles.title}>
                      {item.party}
                      {"\n"}
                      {item.partyAcronym}
                      {"\n"}
                      {item.number}
                      {"\n"}
                    </Text>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item) => item.number}
          />
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: "white",
  },
  hamburgerIcon: {
    marginHorizontal: 20,
    marginTop: 20,
    color: "#002368",
  },
  headerText: {
    fontSize: 18,
    color: "#002368",
    fontWeight: "bold",
    marginTop: 15,
  },
  dropDown: {
    height: 60,
    backgroundColor: "white",
    paddingLeft: 70,
    display: "flex",
    flexDirection: "row",
  },

  dropCounties: {
    backgroundColor: "white",
    paddingLeft: 70,
  },

  senatorsOutput: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#002368",
    color: "white",
    marginVertical: 10,
  },

  image: {
    margin: 10,
    width: 60,
    height: 60,
    borderRadius: 60,
    resizeMode: "cover",
  },

  aspirantName: {
    color: "white",
    padding: 5,
    marginHorizontal: 10,
    fontSize: 15,
  },

  title: {
    padding: 5,
    fontSize: 11,
    marginHorizontal: 10,
    color: "white",
  },
});

export default SelectCounty;
