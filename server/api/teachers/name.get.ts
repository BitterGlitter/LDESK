import * as teachersLib from "~/lib/teachers";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const teacherName = query.teacherName as string

  if (!teacherName) {
    throw createError({
        statusCode: 400,
        message: "Teacher name is required"
    })
  }

  const teachers = await teachersLib.getTeachersByName(teacherName);
  return teachers
})
