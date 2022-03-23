import { Astronomy } from "./Astronomy";
import { HourlyStatus } from "./HourlyStatus";

export interface DailyStatus {
    date: String;
    astronomy: Astronomy;
    maxTemp: String;
    minTemp: String;
    avgTemp: String;
    sunHour: String;
    snow: String;
    hourly: HourlyStatus[]
}
