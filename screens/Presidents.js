import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    name: "EDWARD W. APPLETON, JR",
    id: 1,
    party: "Grassroots Development Movement",
    image: require("../assets/images/presidentsimg/edward-appleton.png"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "JOSEPH N. BOAKAI",
    id: 2,
    party: "Unity Party",
    image: require("../assets/images/presidentsimg/joseph-boakai.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "ALLEN R. BROWN, JR",
    id: 3,
    party: "Liberia Restoration Party",
    image: require("../assets/images/presidentsimg/allen-brown.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "ALEXANDER B. CUMMINGS",
    id: 4,
    party: "Collaborating Political Parties",
    image: require("../assets/images/presidentsimg/alex-cummings.webp"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "SIMEON C. M. FREEMAN",
    id: 5,
    party: "Movement For Progressive Change",
    image: require("../assets/images/presidentsimg/simeon-freeman.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "TIAWAN SAYE GONGLOE",
    id: 6,
    party: "Liberian's People's Party",
    image: require("../assets/images/presidentsimg/tiawan-gongloe.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },

  {
    name: "LUSINEE F. KAMARA, SR",
    id: 7,
    party: "All Liberia Coalition Party",
    image: require("../assets/images/presidentsimg/lusinee-kamara.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "DAVID G. B. KIAMU",
    id: 8,
    party: "Democratic People's Party Of Liberia",
    image: require("../assets/images/presidentsimg/david-kiamu.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "ALEXANDER N. KOLLIE",
    id: 9,
    party: "Reformers National Congress",
    image: require("../assets/images/presidentsimg/alexander-kollie.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },

  {
    name: "SHEIKH A. KOUYATEH",
    id: 10,
    party: "Liberia First Movement",
    image: require("../assets/images/presidentsimg/sheikh-kouyateh.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "BENDU ALEHMA KROMAH",
    id: 11,
    party: "Independent Candidate",
    image: require("../assets/images/presidentsimg/alehma-kromah.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "RICHARD SAYE MILLER",
    id: 12,
    party: "Liberians For Prosperity",
    image: require("../assets/images/presidentsimg/richard-miller.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "CLARENCE K. MONIBA",
    id: 13,
    party: "Liberian National Union",
    image: require("../assets/images/presidentsimg/clarence-moniba.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "ROBERT FRANZ MORRIS",
    id: 14,
    party: "Independent Candidate",
    image: require("../assets/images/presidentsimg/robert-franz-morris.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "SARA BEYSOLOW NYANTI",
    id: 15,
    party: "African Liberation League",
    image: require("../assets/images/presidentsimg/sara-nyanti.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "WILLIAM WIAH TUIDER",
    id: 16,
    party: "Democratic National Allegiance",
    image: require("../assets/images/presidentsimg/william-tuder.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "JOSHUA TOM TURNER",
    id: 17,
    party: "New Liberia Party (NLP)",
    image: require("../assets/images/presidentsimg/joshua-turner.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "GEORGE MANNEH WEAH",
    id: 18,
    party: "Coalition for Democratic Change",
    image: require("../assets/images/presidentsimg/george-weah.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "JEREMIAH Z. WHAPOE",
    id: 19,
    party: "Vision for Liberia Transformation",
    image: require("../assets/images/presidentsimg/jeremiah-whapoe.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
  {
    name: "LUTHER N. YORFEE",
    id: 20,
    party: "Liberia Rebuilding Party",
    image: require("../assets/images/presidentsimg/luther-yorfee.jpg"),
    bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville."
  },
];

const Item = ({ name, party, image, bio }) => (
  <View style={styles.item}>
    <View>
      <Image style={styles.image} source={image} />
    </View>
    <View style={styles.itemTwo}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.party}>{party}</Text>
    </View>
    <View>
      <Text>{bio}</Text>
    </View>
  </View>
);


function Presidents() {
  const navigation = useNavigation();
  const onPressCandidate = (item) => {
      navigation.navigate("PresidentsDetails", {
        item
      })
  }
  return (

   
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onPressCandidate(item)}>
          <Item image={item.image} name={item.name} party={item.party} />
       </TouchableOpacity>

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
    display: "flex",
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.26,
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
  },

  itemTwo: {
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    color: "#002368",
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
    resizeMode: "cover",
  },

  party: {
    color: "#002368",
    fontSize: 11,
  },
});

export default Presidents;
