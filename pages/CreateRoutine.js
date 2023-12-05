import React from "react";
import { Navigation } from "react-native-navigation";
import { Text, Input } from "react-native";
export default function CreateRoutine(navigation) {
    return <Text>CreateRoutine</Text>;
}
Navigation.registerComponent("CreateRoutine", () => CreateRoutine);
