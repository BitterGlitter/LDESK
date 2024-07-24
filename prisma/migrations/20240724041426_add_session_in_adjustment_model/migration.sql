/*
  Warnings:

  - Added the required column `session` to the `Adjustment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Adjustment" ADD COLUMN     "session" TEXT NOT NULL;
