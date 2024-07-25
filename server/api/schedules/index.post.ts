import * as scheduleLib from "~/lib/schedule";

export default defineEventHandler(async (event) => {
    const { teacherId, teacherDay, teacherLecture, teacherSession } = await readBody(event);
    const schedule = await scheduleLib.createSchedule(teacherId, teacherDay, teacherLecture, teacherSession);
    return schedule;
})
