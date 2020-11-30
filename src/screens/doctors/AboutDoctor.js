import React from "react";
import { View, Text } from "react-native";

const AboutDoctor = props =>  {
    return (
       <View
        style={{ alignItems: "center", height: 400, margin: 20 }}
      >
        <Text style={{fontSize: 15, color: 'black'}}>An oncologist is a doctor who treats cancer and provides medical care for a person diagnosed with cancer. The field of oncology has three major areas: medical, surgical, and radiation. A medical oncologist treats cancer using chemotherapy or other medications, such as targeted therapy or immunotherapy.</Text>
      </View>
    );
}

export default AboutDoctor;