import * as adjustmentLib from "~/lib/adjustment";

export default defineEventHandler(async (event) => {
    const { adjustmentId, adjustmentDay, adjustmentLecture, adjustmentSession, absentTeacherId, substituteTeacherId } = await readBody(event);
    const updatedAdjustment = await adjustmentLib.updateAdjustment(adjustmentId, adjustmentDay, adjustmentLecture, adjustmentSession, absentTeacherId, substituteTeacherId)
    return updatedAdjustment;
})
