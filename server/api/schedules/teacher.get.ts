import * as scheduleLib from "~/lib/schedule";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const teacherId: number = parseInt(query.teacherId as string);
    const schedules = await scheduleLib.getScheduleByTeacher(teacherId);
    return schedules;
})
