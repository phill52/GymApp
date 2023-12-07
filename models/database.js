import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import schema from "./schema";
import Routine from "./routine";
import RoutineDay from "./routineday";
import RoutineExercise from "./routinedexercise";

const adapter = new SQLiteAdapter({
    schema,
});

const database = new Database({
    adapter,
    modelClasses: [Routine, RoutineDay, RoutineExercise],
    actionsEnabled: true,
});

export default database;
