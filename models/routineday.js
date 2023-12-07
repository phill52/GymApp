import { Model } from "@nozbe/watermelondb";
import { field, relation } from "@nozbe/watermelondb/decorators";
export default class RoutinedDay extends Model {
    static table = "routineday";
    static associations = {
        routine: { type: "belongs_to", key: "routine_id" },
    };

    @field("routinedayid") routinedayid;
    @field("routineday") routineday;
    @relation("routine", "routine_id") routine;
}
