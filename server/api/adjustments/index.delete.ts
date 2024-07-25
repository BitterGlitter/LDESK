import * as adjustmentLib from "~/lib/adjustment";

export default defineEventHandler(async (event) => {
    const { adjustmentId } = await readBody(event);
    const deletedAdjustment = await adjustmentLib.deleteAdjustment(adjustmentId);
    return deletedAdjustment;
})
