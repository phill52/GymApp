import { Model } from "@nozbe/watermelondb";
export default class RoutinedDay extends Model {
    static table = "routineday";
    static associations = {
        routine: { type: "belongs_to", key: "routine_id" },
    };

    @field("routineday") routineday;
    @relation("routine", "routine_id") routine;
}
