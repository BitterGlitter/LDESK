import * as adjustmentLib from "~/lib/adjustment";

export default defineEventHandler(async (event) => {
    const { adjustmentDay, adjustmentLecture, adjustmentSession, absentTeacherId, substituteTeacherId } = await readBody(event);
    const adjustment = await adjustmentLib.createAdjustment(adjustmentDay, adjustmentLecture, adjustmentSession, absentTeacherId, substituteTeacherId)
    return adjustment;
})
