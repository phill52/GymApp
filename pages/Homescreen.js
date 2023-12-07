import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Navigation } from "react-native-navigation";

export default function HomeScreen({ navigation }) {
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>FITNESS APP</Text>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: "grey" }]}
                onPress={() => navigateToScreen("CreateRoutine")}>
                <Text style={[styles.buttonText, { color: "#000000" }]}>Create Routine</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: "grey" }]}
                onPress={() => navigateToScreen("ViewRoutines")}>
                <Text style={[styles.buttonText, { color: "#000000" }]}>View Routines</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: "grey" }]}
                onPress={() => navigateToScreen("ViewPreviousWorkouts")}>
                <Text style={[styles.buttonText, { color: "#000000" }]}> Previous Workouts</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: "grey" }]}
                onPress={() => navigateToScreen("Workout")}>
                <Text style={[styles.buttonText, { color: "#000000" }]}>Workout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#28282B",
        padding: 20,
    },
    heading: {
        fontSize: 40,
        marginBottom: 40,
        color: "#fff",
        fontWeight: "bold",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        width: "60%",
        maxWidth: 300,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
});

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
