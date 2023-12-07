import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { generateRandomId } from "../utilFunctions";
import { database } from "../models/database";

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

    const submitRoutine = async () => {
        await database.action(async () => {
            // Step 1: Create the routine
            const newRoutine = await database.collections
                .get("routine")
                .create((routine) => {
                    routine.routineid = generateUniqueId(); // Replace with your ID generation logic
                    routine.routinename = routineName;
                });

            // Step 2: Iterate over days to create RoutineDay records
            for (const dayName of days) {
                const newRoutineDay = await database.collections
                    .get("routineday")
                    .create((routineday) => {
                        routineday.routinedayid = generateRandomId(); // Replace with your ID generation logic
                        routineday.routineday = dayName;
                        routineday.routine_id = newRoutine.id;
                    });

                // Step 3: Create exercises for each day
                const dayExercises = exercises[dayName]?.exercises || [];
                for (const exercise of dayExercises) {
                    await database.collections
                        .get("routinedexercise")
                        .create((routinedexercise) => {
                            routinedexercise.exerciseid = generateRandomId(); // Replace with your ID generation logic
                            routinedexercise.exercisename = exercise.name;
                            routinedexercise.sets = exercise.sets;
                            routinedexercise.reps = exercise.reps;
                            routinedexercise.routineday_id = newRoutineDay.id;
                        });
                }
            }
        });

        console.log("Routine and associated records created successfully");
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
                <Button title="Submit Routine" onPress={submitRoutine} />
                {/* Handle submission here */}
            </View>
        </ScrollView>
    );
}
