import * as scheduleLib from "~/lib/schedule";

export default defineEventHandler(async (event) => {
  const schedules = await scheduleLib.getSchedules();
  return schedules;
})
