/*
  Warnings:

  - You are about to drop the column `body_part` on the `Exercise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "body_part",
ADD COLUMN     "body_parts" "BodyPart"[];
