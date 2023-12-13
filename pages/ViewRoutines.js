import React, { useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";

const ViewRoutines = () => {
    const [selectedRoutine, setSelectedRoutine] = useState(null);

    const routines = {
        "push pull legs": {
            Push: [
                {
                    exerciseName: "Bench Press",
                    sets: 3,
                    reps: 10,
                },
                {
                    exerciseName: "Shoulder Press",
                    sets: 3,
                    reps: 10,
                },
                {
                    exerciseName: "Tricep Extension",
                    sets: 3,
                    reps: 10,
                },
            ],
            // Add other days like Pull and Legs with their exercises here
        },
        // You can add more routines here
    };

    const handleRoutineSelect = (routine) => {
        setSelectedRoutine(routine);
    };

    return (
        <ScrollView style={styles.container}>
            {!selectedRoutine &&
                Object.keys(routines).map((routine) => (
                    <Button
                        key={routine}
                        title={routine}
                        onPress={() => handleRoutineSelect(routine)}
                    />
                ))}

            {selectedRoutine && (
                <View>
                    <Text style={styles.title}>{selectedRoutine} Routine</Text>
                    {Object.keys(routines[selectedRoutine]).map((day) => (
                        <View key={day} style={styles.dayContainer}>
                            <Text style={styles.dayTitle}>{day} Day</Text>
                            {routines[selectedRoutine][day].map((exercise) => (
                                <Text
                                    key={exercise.exerciseName}
                                    style={styles.exerciseText}>
                                    {exercise.exerciseName}: {exercise.sets}{" "}
                                    sets of {exercise.reps} reps
                                </Text>
                            ))}
                        </View>
                    ))}
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },
    dayContainer: {
        marginBottom: 20,
    },
    dayTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    exerciseText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default ViewRoutines;
