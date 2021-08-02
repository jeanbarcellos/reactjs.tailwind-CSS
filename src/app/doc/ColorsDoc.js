import React from 'react'

const colors = [
  'grey',
  'gray',
  'red',
  'orange',
  'deep-orange',
  'yellow',
  'green',
  'light-green',
  'teal',
  'blue',
  'light-blue',
  'indigo',
  'purple',
  'pink',
  'lime',
  'amber',
  'brown',
  'blue-gray',
  'cyan'
]
const numbers = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A400', 'A700']

const ColorsDoc = () => {
  return (
    <div className='mb-36'>
      <div className='pb-10 border-b border-gray-200 mb-10'>
        <div>
          <h1 className='inline-block text-3xl font-extrabold text-gray-900 tracking-tight'>Customizing Colors</h1>
        </div>
        <p className='mt-1 text-lg text-gray-500'>Customizing the default color palette for your project.</p>
      </div>

      <div className='grid grid-cols-1 gap-8'>
        {colors.map(color => {
          return (
            <div>
              <div className='flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4'>
                <div className='w-80 flex-shrink-0'>
                  <div className='h-10 flex flex-col justify-center'>
                    <div className='text-sm font-semibold text-gray-900'>{color}</div>
                    <div>
                      <code className='text-xs text-gray-500'>numbers.{color}</code>
                    </div>
                  </div>
                </div>
                <div className='min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2'>
                  {numbers.map(number => {
                    return (
                      <div className='space-y-1.5'>
                        <div
                          className={`bg-${color}-${number} h-24 w-full rounded ring-1 ring-inset ring-black ring-opacity-0`}
                        ></div>
                        <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
                          <div className='w-6 font-medium text-gray-900'>{number}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ColorsDoc
