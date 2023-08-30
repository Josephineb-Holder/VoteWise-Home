import { useState } from "react";
import {
    View,
    Text,
  } from "react-native";


function PresidentsDetails({route}){
    const [candidateInfo, setCandidateInfo] = useState(route.params.item || null)
    return(
        <>
        <View>
        <Text>President Name:  {candidateInfo?.name}</Text>
        <Text>Party:  {candidateInfo?.party}</Text>
        <Text>Bio:  {candidateInfo?.bio}</Text>
        <Text>President {}</Text>
        </View>

        </>
    )
}

export default PresidentsDetails