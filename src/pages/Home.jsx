import React, { useEffect } from 'react'
import Sidebar, { SidebarItem } from '../components/Sidebar'
import { Calendar, Cloud, Layers2Icon, PlusCircleIcon } from 'lucide-react'
import { ChartBarIcon } from '@heroicons/react/24/solid'
import LineChart from '../components/Linechart'
import Stats from '../containers/Stats'
import PieChart from '../components/Piechart'
import { db } from '../Firebase'
import { getDocs,collection, query, where } from '@firebase/firestore'



const Home = ({userId}) => {

useEffect(() =>{
  async function getData(){
    const userRef = collection(db, "users");
    const farmRef = collection(db, "farms");
    const q2 = query(farmRef,where("ownerUID", "==", userId))
    const q = query(userRef,where("uid", "==", userId))
    const querySnapshot = await getDocs(q2);
    console.log(querySnapshot.docs[0].data())
  }
  getData()
},[])
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
