import * as teachersLib from "~/lib/teachers";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const teacherId: number = parseInt(query.teacherId as string);

  console.log(teacherId, typeof(teacherId));

  if (!teacherId) {
    throw createError({
        statusCode: 400,
        message: "Teacher ID is required"
    })
  }

  const teacher = await teachersLib.getTeacherById(teacherId);
  return teacher
})
