import * as teachersLib from "~/lib/teachers";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const teacherId = parseInt(body.teacherId);
  if (!teacherId) {
    throw createError({
      statusCode: 400,
      message: "Teacher ID is required"
    });
  }

  const deletedTeacher = await teachersLib.deleteTeacher(teacherId);
  return deletedTeacher;
})
