/*
  Warnings:

  - You are about to drop the column `body_parts` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `body_part` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "body_parts",
ADD COLUMN     "body_part" "BodyPart" NOT NULL;

-- AlterTable
ALTER TABLE "Workout" ADD COLUMN     "body_parts" "BodyPart"[];
