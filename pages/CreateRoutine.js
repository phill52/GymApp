import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from "react-native";

export default function CreateRoutineScreen({ navigation }) {
    const [routineName, setRoutineName] = useState("");
    const [days, setDays] = useState([]);
    const [exercises, setExercises] = useState({});
    const [newDayName, setNewDayName] = useState("");

    const addDay = () => {
        if (newDayName && !days.includes(newDayName)) {
            setDays([...days, newDayName]);
            setExercises({ ...exercises, [newDayName]: [] });
            setNewDayName("");
        }
    };

    const addExercise = (day) => {
        const { newExerciseName, newSets, newReps } = exercises[day]?.newExercise || {};

        if (newExerciseName && newSets > 0 && newReps > 0) {
            const newExercise = {
                name: newExerciseName,
                sets: newSets,
                reps: newReps,
            };

            setExercises((prevExercises) => {
                const currentExercises = prevExercises[day]?.exercises || [];
                return {
                    ...prevExercises,
                    [day]: {
                        ...prevExercises[day],
                        exercises: [...currentExercises, newExercise],
                        newExercise: {},
                    },
                };
            });
        }
    };

    const updateNewExerciseField = (day, field, value) => {
        setExercises((prevExercises) => ({
            ...prevExercises,
            [day]: {
                ...prevExercises[day],
                newExercise: {
                    ...prevExercises[day].newExercise,
                    [field]: value,
                },
            },
        }));
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>Create a New Routine</Text>

                <TextInput
                    placeholder="Routine Name"
                    value={routineName}
                    onChangeText={setRoutineName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Day Name"
                    value={newDayName}
                    onChangeText={setNewDayName}
                    style={styles.input}
                />
                <Button title="Add Day" onPress={addDay} />

                {days.map((day, index) => (
                    <View key={index} style={styles.dayContainer}>
                        <Text style={styles.dayHeading}>{day}</Text>

                        <View style={styles.exerciseContainer}>
                            <TextInput
                                placeholder="Exercise Name"
                                value={exercises[day]?.newExercise?.newExerciseName || ""}
                                onChangeText={(text) => updateNewExerciseField(day, "newExerciseName", text)}
                                style={styles.input}
                            />
                            <View style={styles.setsRepsInput}>
                                <TextInput
                                    placeholder="Sets"
                                    value={String(exercises[day]?.newExercise?.newSets || "")}
                                    onChangeText={(text) => updateNewExerciseField(day, "newSets", parseInt(text))}
                                    keyboardType="numeric"
                                    style={[styles.input, styles.numericInput]}
                                />
                                <TextInput
                                    placeholder="Reps"
                                    value={String(exercises[day]?.newExercise?.newReps || "")}
                                    onChangeText={(text) => updateNewExerciseField(day, "newReps", parseInt(text))}
                                    keyboardType="numeric"
                                    style={[styles.input, styles.numericInput]}
                                />
                            </View>
                            <Button title="Add Exercise" onPress={() => addExercise(day)} />
                            {exercises[day]?.exercises?.map((exercise, exIndex) => (
                                <Text key={exIndex} style={styles.exerciseText}>
                                    {`${exercise.name} - Sets: ${exercise.sets}, Reps: ${exercise.reps}`}
                                </Text>
                            ))}
                        </View>
                    </View>
                ))}
                {/* Button to submit the routine */}
                <Button title="Submit Routine" onPress={() => {}} />
                {/* Handle submission here */}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "grey",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 6,
        backgroundColor: "white"
    },
    dayContainer: {
        marginBottom: 20
    },
    dayHeading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    exerciseContainer: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        borderRadius: 6,
    },
    setsRepsInput: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    numericInput: {
        width: "48%",
    },
    exerciseText: {
        marginBottom: 5,
    },
});

// Exporting the CreateRoutineScreen component
export { CreateRoutineScreen };
