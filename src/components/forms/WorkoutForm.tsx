"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import * as z from "zod"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

export const workoutFormSchema = z.object({
  name: z.string().min(2, {
    message: "Workout Name must be at least 2 characters.",
  }),
  date: z.date()
})

interface FormProps {
  chainSubmit: (data: z.infer<typeof workoutFormSchema>) => void
}

export function WorkoutForm({ chainSubmit }: FormProps) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof workoutFormSchema>>({
    resolver: zodResolver(workoutFormSchema),
    defaultValues: {
      name: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof workoutFormSchema>) {
  
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    chainSubmit(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workout Name</FormLabel>
              <FormControl>
                <Input placeholder="A name for your new workout" {...field} />
              </FormControl>
              <FormDescription>
                A name for this workout
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Workout Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date("2020-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                The date of your workout
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> 
        <Button type="submit">Submit</Button>
      </form>
    </Form>
)
}
