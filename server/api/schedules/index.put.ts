import * as scheduleLib from "~/lib/schedule";

export default defineEventHandler(async (event) => {
    const { scheduleId, scheduleDay, scheduleLecture, scheduleSession } = await readBody(event);
    const updatedSchedule = await scheduleLib.updateSchedule(scheduleId, scheduleDay, scheduleLecture, scheduleSession)
    return updatedSchedule;
})
