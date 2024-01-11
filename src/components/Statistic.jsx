import React from 'react'

const Statistic = ({title, amount, difference}) => {
  var x = 4; 
  var colour = "green";
  colour = amount>1 ? 'text-green-600':'text-red-600'
    return (
    <div className='relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800'>
      <div className="space-y-2">
        <div
          className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
            <span>{title}</span>
        </div>

          <div className="text-3xl">
            {amount}
            </div>

            <div className={`flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium ${colour}`}>

            <span>{difference} {amount > 0 ? 'increase': 'decrease'}</span>

            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
            aria-hidden="true">
            <path fillRule="evenodd"
            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
            clipRule="evenodd"></path>
          </svg>
        </div>
      </div>

                                
    </div>
  )
}

export default Statistic
