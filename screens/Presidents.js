import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";

const DATA = [
  {
    name: "EDWARD W. APPLETON, JR",
    id: 1,
    party: "Grassroots Development Movement",
    image: require("../assets/images/presidentsimg/edward-appleton.png"),
  },
  {
    name: "JOSEPH N. BOAKAI",
    id: 2,
    party: "Unity Party",
    image: require("../assets/images/presidentsimg/joseph-boakai.jpg"),
  },
  {
    name: "ALLEN R. BROWN, JR",
    id: 3,
    party: "Liberia Restoration Party",
    image: require("../assets/images/presidentsimg/allen-brown.jpg"),
  },
  {
    name: "ALEXANDER B. CUMMINGS",
    id: 4,
    party: "Collaborating Political Parties",
    image: require("../assets/images/presidentsimg/alex-cummings.webp"),
  },
  {
    name: "SIMEON C. M. FREEMAN",
    id: 5,
    party: "Movement For Progressive Change",
    image: require("../assets/images/presidentsimg/simeon-freeman.jpg"),
  },
  {
    name: "TIAWAN SAYE GONGLOE",
    id: 6,
    party: "Liberian's People's Party",
    image: require("../assets/images/presidentsimg/tiawan-gongloe.jpg"),
  },

  {
    name: "LUSINEE F. KAMARA, SR",
    id: 7,
    party: "All Liberia Coalition Party",
    image: require("../assets/images/presidentsimg/lusinee-kamara.jpg"),
  },
  {
    name: "DAVID G. B. KIAMU",
    id: 8,
    party: "Democratic People's Party Of Liberia",
    image: require("../assets/images/presidentsimg/david-kiamu.jpg"),
  },
  {
    name: "ALEXANDER N. KOLLIE",
    id: 9,
    party: "Reformers National Congress",
    image: require("../assets/images/presidentsimg/alexander-kollie.jpg"),
  },

  {
    name: "SHEIKH A. KOUYATEH",
    id: 10,
    party: "Liberia First Movement",
    image: require("../assets/images/presidentsimg/sheikh-kouyateh.jpg"),
  },
  {
    name: "BENDU ALEHMA KROMAH",
    id: 11,
    party: "Independent Candidate",
    image: require("../assets/images/presidentsimg/alehma-kromah.jpg"),
  },
  {
    name: "RICHARD SAYE MILLER",
    id: 12,
    party: "Liberians For Prosperity",
    image: require("../assets/images/presidentsimg/richard-miller.jpg"),
  },
  {
    name: "CLARENCE K. MONIBA",
    id: 13,
    party: "Liberian National Union",
    image: require("../assets/images/presidentsimg/clarence-moniba.jpg"),
  },
  {
    name: "ROBERT FRANZ MORRIS",
    id: 14,
    party: "Independent Candidate",
    image: require("../assets/images/presidentsimg/robert-franz-morris.jpg"),
  },
  {
    name: "SARA BEYSOLOW NYANTI",
    id: 15,
    party: "African Liberation League",
    image: require("../assets/images/presidentsimg/sara-nyanti.jpg"),
  },
  {
    name: "WILLIAM WIAH TUIDER",
    id: 16,
    party: "Democratic National Allegiance",
    image: require("../assets/images/presidentsimg/william-tuder.jpg"),
  },
  {
    name: "JOSHUA TOM TURNER",
    id: 17,
    party: "New Liberia Party (NLP)",
    image: require("../assets/images/presidentsimg/joshua-turner.jpg"),
  },
  {
    name: "GEORGE MANNEH WEAH",
    id: 18,
    party: "Coalition for Democratic Change",
    image: require("../assets/images/presidentsimg/george-weah.jpg"),
  },
  {
    name: "JEREMIAH Z. WHAPOE",
    id: 19,
    party: "Vision for Liberia Transformation",
    image: require("../assets/images/presidentsimg/jeremiah-whapoe.jpg"),
  },
  {
    name: "LUTHER N. YORFEE",
    id: 20,
    party: "Liberia Rebuilding Party",
    image: require("../assets/images/presidentsimg/luther-yorfee.jpg"),
  },
];

const Item = ({ name, party, image }) => (
  <View style={styles.item} >
    <View>
    <Image style={styles.image} source={image} />

    </View >
     <View style={styles.itemTwo}> 
      <Text style={styles.title}>{name}</Text>
  <Text style={styles.party}>{party}</Text>
  </View>

  </View>
);

function Presidents() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item image={item.image} name={item.name} party={item.party} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "#002368",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
   
  },

  itemTwo:{
  marginLeft: 10,

  },
  title: {
    fontSize: 15,
  color: "white",

  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
    resizeMode: "cover",
  },

  party: {
    color: "white",
    fontSize: 11,
  },
});

export default Presidents;
