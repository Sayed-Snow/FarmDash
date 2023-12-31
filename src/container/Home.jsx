import React from 'react'
import Sidebar, { SidebarItem } from '../components/Sidebar'
import { Cloud, Layers2Icon, PlusCircleIcon } from 'lucide-react'
import { ChartBarIcon } from '@heroicons/react/24/solid'
import LineChart from '../components/Linechart'
import Stats from './Stats'

const Home = () => {
  return (
    <div className='flex'>

        <Sidebar>
            <SidebarItem icon={<Layers2Icon className='h-5'/>} text='Dash' />
            <SidebarItem icon={<Cloud className='h-5'/>} text='Weather' />
            <SidebarItem icon={<ChartBarIcon className='h-5'/>} text='Charts' />
            <SidebarItem icon={<PlusCircleIcon className='h-5'/>} text='Update' />
            
        </Sidebar>
        <div className=' grid'>
            <LineChart/>

        </div>
    </div>
  )
}

export default Home
