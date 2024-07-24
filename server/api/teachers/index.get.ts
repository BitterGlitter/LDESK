import * as teachersLib from "~/lib/teachers";

export default defineEventHandler(async (event) => {

  const teachers = await teachersLib.getTeachers();
  return teachers
})
