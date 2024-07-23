-- CreateTable
CREATE TABLE "Adjustment" (
    "id" SERIAL NOT NULL,
    "day" INTEGER NOT NULL,
    "lecture" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "absentTeacherId" INTEGER NOT NULL,
    "substituteTeacherId" INTEGER NOT NULL,

    CONSTRAINT "Adjustment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Adjustment" ADD CONSTRAINT "Adjustment_absentTeacherId_fkey" FOREIGN KEY ("absentTeacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adjustment" ADD CONSTRAINT "Adjustment_substituteTeacherId_fkey" FOREIGN KEY ("substituteTeacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
