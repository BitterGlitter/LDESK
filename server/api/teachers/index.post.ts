import * as teachersLib from "~/lib/teachers";

export default defineEventHandler(async (event) => {
  const { teacherName, teacherSubject } = await readBody(event);
  if (!teacherName || !teacherSubject) {
    throw createError({
      statusCode: 400,
      message: "Teacher name and subject are required"
    });
  }

  const teacher = await teachersLib.createTeacher(teacherName, teacherSubject);
  return teacher;
})
