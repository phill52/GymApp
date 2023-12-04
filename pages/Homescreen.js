import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Navigation } from "react-native-navigation";

export default function HomeScreen({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f2f3ae",
            }}>
            <Text>Home Screen</Text>
            <TouchableOpacity
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#edd382",
                }}
                onPress={() => {
                    navigation.navigate("CreateRoutine");
                }}>
                <Text>Create Routine</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f2f3ae",
                }}
                onPress={() => {
                    navigation.navigate("ViewRoutines");
                }}>
                <Text>View Routines</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#edd382",
                }}
                onPress={() => {
                    navigation.navigate("ViewPreviousWorkouts");
                }}>
                <Text>View Previous Workouts</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "blue",
                    width: "10rem",
                    height: "10rem",
                }}
                onPress={() => {
                    navigation.navigate("Workout");
                }}>
                <Text>Workout</Text>
            </TouchableOpacity>
        </View>
    );
}
Navigation.registerComponent("HomeScreen", () => HomeScreen);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: "HomeScreen",
                        },
                    },
                ],
            },
        },
    });
});
