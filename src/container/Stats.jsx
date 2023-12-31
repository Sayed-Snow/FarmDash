import React from 'react'
import Statistic from '../components/Statistic'

const Stats = () => {
  return (
    <section className='grid gap-4 lg:gap-8 md:grid-cols-3 p-8 pt-4 '>
      <Statistic/>
      <Statistic/>
      <Statistic/>
    </section>
  )
}

export default Stats
