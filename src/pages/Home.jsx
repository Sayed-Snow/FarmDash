import React from 'react'
import Sidebar, { SidebarItem } from '../components/Sidebar'
import { Calendar, Cloud, Layers2Icon, PlusCircleIcon } from 'lucide-react'
import { ChartBarIcon } from '@heroicons/react/24/solid'
import LineChart from '../components/Linechart'
import Stats from '../containers/Stats'
import PieChart from '../components/Piechart'

const Home = () => {
  return (
    <div className='flex'>
        <div>
        <Sidebar>
            <SidebarItem icon={<Layers2Icon className='h-5'/>} text='Dash' />
            <SidebarItem icon={<Cloud className='h-5'/>} text='Weather' />
            <SidebarItem icon={<Calendar className='h-5'/>} text='Calendar' />
            <SidebarItem icon={<PlusCircleIcon className='h-5'/>} text='Update' />
            
        </Sidebar>
        </div>
        <div className='px-11 w-screen'> 
        <Stats/>

        <div className=' flex px-11 '>
            <LineChart/>
            <PieChart/>
        </div>
        </div>
    </div>
  )
}

export default Home
