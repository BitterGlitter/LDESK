import * as adjustmentLib from "~/lib/adjustment";

export default defineEventHandler(async (event) => {
  const adjustments = await adjustmentLib.getAdjustments();
  return adjustments;
})
