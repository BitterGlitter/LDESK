import * as teachersLib from "~/lib/teachers";

export default defineEventHandler(async (event) => {
  const { teacherId } = await readBody(event);
  if (!teacherId) {
    throw createError({
      statusCode: 400,
      message: "Teacher ID is required"
    });
  }

  const deletedTeacher = await teachersLib.deleteTeacher(teacherId);
  return deletedTeacher;
})
