import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";
import { senators } from "./data/SenatorJson";
// import { Ionicons } from "@expo/vector-icons";

// const DATA = [
//   { county: "Montserrado" },
//   { county: "Grand Kru" },
//   // { county: "Sinoe" },
//   // { county: "Grand Gedeh" },
//   // { county: "Maryland" },
//   // { county: "Grand Bassa" },
//   // { county: "Bomi" },
//   // { county: "Bong" },
//   // { county: "Margibi" },
//   // { county: "Lofa" },
//   // { county: "Gborpolu" },
//   // { county: "Grand Cape Mount" },
//   // { county: "River Cess" },
//   // { county: "River Gee" },
// ];

// const Item = ({ county }) => {
//   return (
//     <View>
//       <Text>{county}</Text>
//     </View>
//   );
// };

// function Senators({ navigation }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [selectedCounty,setSelectedCounty] =useState(' ')

//   function toggleMenu() {
//     setMenuOpen(!menuOpen);
//   }

//   const selectCounty =(county)=>{
//     setSelectedCounty(county)
//     // toggleMenu
//   }

//   return (
//     <>
//       <View style={styles.container}>
//         <TouchableOpacity style={styles.hamburgerIcon}>
//           <Ionicons
//             onPress={toggleMenu}
//             name={menuOpen ? "close" : "menu"}
//             size={30}
//             color="#002368"
//           />
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <Text style={styles.headerText}>{'select a county'}</Text>

//         </TouchableOpacity>
//       </View>
//       {menuOpen && (
//         <View style={styles.dropDown}>
//           {DATA.map((item, index) => (
//             <TouchableOpacity key={index} onPress={()=>selectCounty(index)}>
//               <Item county={item.county} />
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}

//       {selectedCounty !== ' ' && (
//         <Text>You Have Selected :{selectedCounty}</Text>
//       )}
//     </>
//   );
// }

const SelectCounty = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [selectedCounty, setSelectedCounty] = useState("");

  const countyDrop = senators;
  console.log(countyDrop.grandKru);

  const counties = [
    "Bomi",
    "Bong",
    "Margibi",
    "GrandKru",
    "Cape Mount",
    "Gborpolu",
    "Sinoe",
    "Montserrado",
    "Grand Gedeh",
    "Grand Bassa",
    "MaryLand",
    "River Cess",
    "River Gee",
  ];

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

      {selectedCounty !== "" && (
        <View>
          <Text> You Have selected : {selectedCounty}</Text>
        </View>
      )}

      {selectedCounty === "GrandKru" && (
        <View>
          <Text>{JSON.stringify(countyDrop.grandKru)}</Text>
          {/* <Text>Nyepan Bropleh</Text>

          <Text>Nyepan Bropleh</Text>

          <Text>Nyepan Bropleh</Text>

          <Text>Nyepan Bropleh</Text> */}
        </View>
      )}
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
});

export default SelectCounty;
