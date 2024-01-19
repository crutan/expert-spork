import { PrismaClient } from "@prisma/client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WorkoutForm, workoutFormSchema } from "@/components/forms/WorkoutForm";
import { z } from "zod";

const prisma = new PrismaClient;

export default async function Page() {
  const workouts = await prisma.workout.findMany();
  const handleSubmit = async(values: z.infer<typeof workoutFormSchema>) => {
    console.log("Form data: ", values)
  }

  return (
    <main>
      <p>Workouts</p>
    </main>
  )
}