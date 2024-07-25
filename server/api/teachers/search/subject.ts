import * as teachersLib from "~/lib/teachers";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const teacherSubject = query.teacherSubject as string

  if (!teacherSubject) {
    throw createError({
        statusCode: 400,
        message: "Teacher subject is required"
    })
  }

  const teachers = await teachersLib.getTeachersBySubject(teacherSubject);
  return teachers
})
