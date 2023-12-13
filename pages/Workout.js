import React, { useState } from "react";
import {
    ScrollView,
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
} from "react-native";
import { Navigation } from "react-native-navigation";

const Workout = ({ navigation }) => {
    const [selectedRoutine, setSelectedRoutine] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const [exerciseData, setExerciseData] = useState({});

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
            // ... other days and exercises
        },
        // ... other routines
    };

    const handleRoutineSelect = (routine) => {
        setSelectedRoutine(routine);
        setSelectedDay(null);
        setExerciseData({});
    };

    const handleDaySelect = (day) => {
        setSelectedDay(day);
        const initialExerciseData = routines[selectedRoutine][day].reduce(
            (acc, exercise) => {
                acc[exercise.exerciseName] = Array.from(
                    { length: exercise.sets },
                    () => ({ weight: "", reps: exercise.reps.toString() })
                );
                return acc;
            },
            {}
        );
        console.log("Initialized exercise data:", initialExerciseData);
        setExerciseData(initialExerciseData);
    };

    const handleInputChange = (exercise, setIndex, field, value) => {
        const updatedSets = [...exerciseData[exercise]];
        updatedSets[setIndex] = {
            ...updatedSets[setIndex],
            [field]: value,
        };

        setExerciseData({
            ...exerciseData,
            [exercise]: updatedSets,
        });
    };

    const handleSubmit = () => {
        console.log("Submitting data:", exerciseData);
        // Submit data to database
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {!selectedRoutine &&
                Object.keys(routines).map((routine) => (
                    <Button
                        key={routine}
                        title={routine}
                        onPress={() => handleRoutineSelect(routine)}
                    />
                ))}

            {selectedRoutine &&
                !selectedDay &&
                Object.keys(routines[selectedRoutine]).map((day) => (
                    <Button
                        key={day}
                        title={day}
                        onPress={() => handleDaySelect(day)}
                    />
                ))}

            {selectedDay && (
                <ScrollView>
                    {Object.keys(exerciseData).map((exercise) => (
                        <View key={exercise} style={styles.exerciseContainer}>
                            <Text style={styles.exerciseTitle}>{exercise}</Text>
                            {exerciseData[exercise] &&
                                exerciseData[exercise].map((set, index) => (
                                    <View
                                        key={index}
                                        style={styles.setContainer}>
                                        <Text>Set {index + 1}</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Weight"
                                            inputmode="numeric"
                                            onChangeText={(value) =>
                                                handleInputChange(
                                                    exercise,
                                                    index,
                                                    "weight",
                                                    value
                                                )
                                            }
                                            value={set.weight}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Reps"
                                            inputmode="numeric"
                                            onChangeText={(value) =>
                                                handleInputChange(
                                                    exercise,
                                                    index,
                                                    "reps",
                                                    value
                                                )
                                            }
                                            defaultValue={set.reps.toString()}
                                            // value={set.reps.toString()}
                                        />
                                    </View>
                                ))}
                        </View>
                    ))}
                    <Button title="Submit" onPress={handleSubmit} />
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    exerciseContainer: {
        marginBottom: 20,
    },
    setContainer: {
        marginBottom: 10,
    },
    exerciseTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
    },
});

export default Workout;
