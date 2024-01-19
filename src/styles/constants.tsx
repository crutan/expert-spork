import { SideNavItem } from './types'
import { Activity, Dumbbell, Plus } from 'lucide-react'

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Workouts',
    path: '/workouts',
    icon: <Activity/>
  },
  {
    title: 'Exercises',
    path: '/exercises',
    icon: <Dumbbell/>,
    submenu: true,
    subMenuItems: [
      { title: 'Add Exercise', path: '/exercises/add', icon: <Plus/> }
    ]
  }
]