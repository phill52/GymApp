import React from "react";
import { Navigation } from "react-native-navigation";
import { Text } from "react-native";
export default function Workout({ navigation }) {
    return <Text>Workout</Text>;
}

Navigation.registerComponent("Workout", () => Workout);
