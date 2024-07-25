import * as teachersLib from "~/lib/teachers";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { teacherName, teacherSubject } = body;
    const teacherId = parseInt(body.teacherId);
    if (!teacherId || !teacherName || !teacherSubject) {
        throw createError({
            statusCode: 400,
            message: "Teacher ID, name and subject are required"
        });
    }
    
    const updatedTeacher = await teachersLib.updateTeacher(teacherId, teacherName, teacherSubject);
    return updatedTeacher;
})
