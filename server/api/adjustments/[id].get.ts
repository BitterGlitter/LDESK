import * as adjustmentLib from "~/lib/adjustment";

export default defineEventHandler(async (event) => {
  const adjustmentId: number = parseInt(getRouterParam(event, 'id') as string);

  if (!adjustmentId) {
    throw createError({
        statusCode: 400,
        message: "Adjustment ID is required"
    })
  }

  const deletedAdjustment = await adjustmentLib.getAdjustmentById(adjustmentId);
  return deletedAdjustment;
})
