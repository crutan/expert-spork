
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.workout.create({
    data: {
      name: 'First Workout',
      date: new Date()
    },
  })
  const allWorkouts = await prisma.workout.findMany({  })
  console.dir(allWorkouts, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

