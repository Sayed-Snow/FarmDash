import React from 'react'
import Statistic from '../components/Statistic'

const Stats = () => {
  return (
    <section className='grid gap-4 lg:gap-8 md:grid-cols-3 px-8 pt-4 m-5 h-max'>
      <Statistic title={'Livestock'} amount={56} difference={24}/>
      <Statistic title={'Sales per month'} amount={13} difference={2}/>
      <Statistic title={'Liquidated value'} amount={"R30000"}/>
    </section>
  )
}

export default Stats
