// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.workout.create({
    data: {
      name: 'First Workout',
      date: new Date,
    },
  })


}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })