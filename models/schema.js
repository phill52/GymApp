import { appSchema, tableSchema } from "@nozbe/watermelondb";
import { text, number, relation } from "@nozbe/watermelondb/decorators";

export default appSchema({
    version: 2, // Incremented the version since we're making schema changes
    tables: [
        tableSchema({
            name: "routine",
            columns: [
                { name: "routineid", type: "string", isIndexed: true },
                { name: "routinename", type: "string" },
            ],
        }),
        tableSchema({
            name: "routineday",
            columns: [
                { name: "routinedayid", type: "string", isIndexed: true },
                { name: "routineday", type: "string" },
                { name: "routine_id", type: "string", isIndexed: true }, // Foreign key to Routine
            ],
        }),
        tableSchema({
            name: "routinedexercise",
            columns: [
                { name: "exerciseid", type: "string", isIndexed: true },
                { name: "exercisename", type: "string" },
                { name: "sets", type: "number" },
                { name: "reps", type: "number" },
                { name: "muscletrained", type: "string" },
                { name: "routineday_id", type: "string", isIndexed: true }, // Foreign key to RoutinedDay
            ],
        }),
        tableSchema({
            name: "preformedset",
            columns: [
                { name: "preformedsetid", type: "string", isIndexed: true },
                { name: "routinedayid", type: "string" },
                { name: "exerciseid", type: "string" },
                { name: "weight", type: "number" },
                { name: "reps", type: "number" },
                { name: "date", type: "number" },
            ],
        }),
    ],
});
