import { Model } from "@nozbe/watermelondb";
export default class Routine extends Model {
    static table = "routines";
    static associations = {
        exercises: { type: "has_many", foreignKey: "routine_id" },
    };
}
