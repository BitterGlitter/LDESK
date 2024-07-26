import * as scheduleLib from "~/lib/schedule";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { teacherId, teacherLecture, teacherSession } = body;
    const teacherDay = parseInt(body.teacherDay as string);
    const schedule = await scheduleLib.createSchedule(teacherId, teacherDay, teacherLecture, teacherSession);
    return schedule;
})
