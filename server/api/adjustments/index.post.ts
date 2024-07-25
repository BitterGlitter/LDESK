import * as adjustmentLib from "~/lib/adjustment";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { adjustmentLecture, adjustmentSession, absentTeacherId, substituteTeacherId } = body;
    const adjustmentDay = parseInt(body.adjustmentDay as string)
    const adjustment = await adjustmentLib.createAdjustment(adjustmentDay, adjustmentLecture, adjustmentSession, absentTeacherId, substituteTeacherId)
    return adjustment;
})
