import { Model } from "@nozbe/watermelondb";
export default class RoutinedExercise extends Model {
    static table = "routinedexercise";
    static associations = {
        routineday: { type: "belongs_to", key: "routineday_id" },
    };

    @field("exercisename") exercisename;
    @field("sets") sets;
    @field("reps") reps;
    @field("muscletrained") muscleTrained;
    @relation("routineday", "routineday_id") routineday;
}
