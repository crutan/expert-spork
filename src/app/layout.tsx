import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Activity, Dumbbell, User } from 'lucide-react'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Workout Tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen relative flex flex-col">
          <header className="sticky top-0 w-full border-b border-border/40 shadow-sm">
            <div className="container flex flex-row w-mx-auto justify-center h-10 items-center">
                <h1 className="text-xl font-medium mr-10">Workout Tracker</h1>
                <ul className="flex flex-row space-x-2">
                  <li className="text-sm"><Link href="/workouts"><Activity className="inline" size="14"/> Workouts</Link></li>
                  <li className="text-sm"><Link href="/exercises"><Dumbbell className="inline" size="14"/> Exercises</Link></li>
                </ul>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                  <h3><User className="inline"/> Caleb Rutan</h3>
                </div>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
