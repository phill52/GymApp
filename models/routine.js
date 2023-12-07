import { Model } from "@nozbe/watermelondb";
import { number, text, field } from "@nozbe/watermelondb/decorators";

export default class Routine extends Model {
    static table = "routine";
    static associations = {
        exercises: { type: "has_many", foreignKey: "routine_id" },
    };
    @field("routineid") routineid;
    @field("routinename") name;
}
