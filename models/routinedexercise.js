import { Model } from "@nozbe/watermelondb";
import { field, relation } from "@nozbe/watermelondb/decorators";

export default class RoutinedExercise extends Model {
    static table = "routinedexercise";
    static associations = {
        routineday: { type: "belongs_to", key: "routineday_id" },
    };

    @field("exercisename") exercisename;
    @field("sets") sets;
    @field("reps") reps;
    @relation("routineday", "routineday_id") routineday;
}
