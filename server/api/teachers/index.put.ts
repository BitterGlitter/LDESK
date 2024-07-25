import * as teachersLib from "~/lib/teachers";

export default defineEventHandler(async (event) => {
  const { teacherId, teacherName, teacherSubject } = await readBody(event);
  if (!teacherId || !teacherName || !teacherSubject) {
    throw createError({
      statusCode: 400,
      message: "Teacher ID, name and subject are required"
    });
  }

  const updatedTeacher = await teachersLib.updateTeacher(teacherId, teacherName, teacherSubject);
  return updatedTeacher;
})
