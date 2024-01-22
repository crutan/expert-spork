import { Prisma, BodyPart, PrismaClient } from "@prisma/client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const prisma = new PrismaClient()

export default async function Page() {
  const parts = [ BodyPart.Arms, BodyPart.Back, BodyPart.Chest, BodyPart.Core, BodyPart.Legs, BodyPart.Shoulders ]

  return (
    <main>
      <h2>Exercises</h2>
      <Tabs defaultValue={parts[0]} className="w-full">
        <TabsList>
          {parts.map((part) => (
            <TabsTrigger key={part} value={part}>{part}</TabsTrigger>
          ))}
        </TabsList>
        {parts.map((part) => (
          <TabsContent key={part} value={part}>
            Tab content for {part}
          </TabsContent>
        ))}
      </Tabs>
      
    </main>
  )
}