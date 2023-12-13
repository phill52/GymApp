import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const ViewPastWorkouts = () => {
    // Updated mock data for past workouts
    const pastWorkouts = [
        {
            date: "2023-12-10",
            routine: "Push Pull Legs",
            day: "Push",
            exercises: [
                {
                    name: "Bench Press",
                    sets: [
                        { setNumber: 1, reps: 10, weight: 135 },
                        { setNumber: 2, reps: 7, weight: 145 },
                        { setNumber: 3, reps: 4, weight: 165 },
                    ],
                },
                {
                    name: "Shoulder Press",
                    sets: [
                        { setNumber: 1, reps: 8, weight: 85 },
                        { setNumber: 2, reps: 5, weight: 95 },
                        { setNumber: 3, reps: 5, weight: 95 },
                    ],
                },
                {
                    name: "Tricep Extension",
                    sets: [
                        { setNumber: 1, reps: 10, weight: 40 },
                        { setNumber: 2, reps: 10, weight: 40 },
                        { setNumber: 3, reps: 10, weight: 40 },
                    ],
                },
                // ... other exercises
            ],
        },
        // ... other past workout sessions
    ];

    return (
        <ScrollView style={styles.container}>
            {pastWorkouts.map((workout, index) => (
                <View key={index} style={styles.workoutContainer}>
                    <Text style={styles.dateText}>Date: {workout.date}</Text>
                    <Text style={styles.routineText}>
                        Routine: {workout.routine} - {workout.day}
                    </Text>
                    <Text style={styles.sectionTitle}>Exercises:</Text>
                    {workout.exercises.map((exercise, exIndex) => (
                        <View key={exIndex}>
                            <Text style={styles.exerciseTitle}>
                                {exercise.name}
                            </Text>
                            {exercise.sets.map((set) => (
                                <Text
                                    key={set.setNumber}
                                    style={styles.exerciseText}>
                                    Set {set.setNumber}: {set.reps} reps,{" "}
                                    {set.weight} lbs
                                </Text>
                            ))}
                        </View>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    workoutContainer: {
        marginBottom: 20,
    },
    dateText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    routineText: {
        fontSize: 16,
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 5,
    },
    exerciseTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    exerciseText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default ViewPastWorkouts;
