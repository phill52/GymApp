import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";

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
        console.log(exercises);
    };

    const addExercise = (day) => {
        // Destructure the new exercise details from the exercises state
        const { newExerciseName, newSets, newReps } =
            exercises[day]?.newExercise || {};

        if (newExerciseName && newSets > 0 && newReps > 0) {
            const newExercise = {
                name: newExerciseName,
                sets: newSets,
                reps: newReps,
            };

            setExercises((prevExercises) => {
                // Get the current exercises for the day, or initialize as an empty array
                const currentExercises = prevExercises[day]?.exercises || [];

                return {
                    ...prevExercises,
                    [day]: {
                        ...prevExercises[day],
                        exercises: [...currentExercises, newExercise],
                        newExercise: {}, // Reset the newExercise object
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
            <View style={{ padding: 20 }}>
                <Text>Create a New Routine</Text>
                <TextInput
                    placeholder="Routine Name"
                    value={routineName}
                    onChangeText={setRoutineName}
                    style={{ borderWidth: 1, marginVertical: 10 }}
                />
                <TextInput
                    placeholder="Day Name"
                    value={newDayName}
                    onChangeText={setNewDayName}
                    style={{ borderWidth: 1, marginVertical: 10 }}
                />
                <Button title="Add Day" onPress={addDay} />
                {days.map((day, index) => (
                    <View key={index}>
                        <Text>{day}</Text>
                        <TextInput
                            placeholder="Exercise Name"
                            value={
                                exercises[day]?.newExercise?.newExerciseName ||
                                ""
                            }
                            onChangeText={(text) =>
                                updateNewExerciseField(
                                    day,
                                    "newExerciseName",
                                    text
                                )
                            }
                            style={{ borderWidth: 1, marginVertical: 10 }}
                        />
                        <TextInput
                            placeholder="Sets"
                            value={String(
                                exercises[day]?.newExercise?.newSets || ""
                            )}
                            onChangeText={(text) =>
                                updateNewExerciseField(
                                    day,
                                    "newSets",
                                    parseInt(text)
                                )
                            }
                            keyboardType="numeric"
                            style={{ borderWidth: 1, marginVertical: 10 }}
                        />
                        <TextInput
                            placeholder="Reps"
                            value={String(
                                exercises[day]?.newExercise?.newReps || ""
                            )}
                            onChangeText={(text) =>
                                updateNewExerciseField(
                                    day,
                                    "newReps",
                                    parseInt(text)
                                )
                            }
                            keyboardType="numeric"
                            style={{ borderWidth: 1, marginVertical: 10 }}
                        />
                        <Button
                            title="Add Exercise"
                            onPress={() => addExercise(day)}
                        />
                        {exercises[day]?.exercises?.map((exercise, exIndex) => (
                            <Text key={exIndex}>
                                {`${exercise.name} - Sets: ${exercise.sets}, Reps: ${exercise.reps}`}
                            </Text>
                        ))}
                    </View>
                ))}
                {/* Button to submit the routine */}
                <Button title="Submit Routine" onPress={() => {}} />
                {/* Handle submission here */}
            </View>
        </ScrollView>
    );
}
