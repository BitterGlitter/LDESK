import * as scheduleLib from "~/lib/schedule";

export default defineEventHandler(async (event) => {
    const { scheduleId } = await readBody(event);
    const deletedSchedule = await scheduleLib.deleteSchedule(scheduleId);
    return deletedSchedule;
})
