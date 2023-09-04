import { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

function SenatorsDetails({ route }) {
  const [senatorsDetails, setSenatorsDetails] = useState(
    route.params.item || null
  );
  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.imgView}>
            <Image
              style={styles.image}
              source={{
                uri: senatorsDetails?.photo,
              }}
            />
          </View>
          <View style={styles.senatorsInfo}>
            <Text style={styles.aspirantName}>{senatorsDetails?.aspirant}</Text>
            <Text style={styles.party}>{senatorsDetails?.party}</Text>
            <Text style={styles.bioInfo}>{senatorsDetails?.bio}</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 450,
  },
  imgView: {
    marginHorizontal: 10,
  },
  senatorsInfo: {
    marginHorizontal: 20,
  },
  aspirantName: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#002368",
  },
  party: {
    color: "#c0032c",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  bioInfo: {
    lineHeight: 20,
    textAlign: "justify",
    marginBottom: 20,
  },
});

export default SenatorsDetails;
