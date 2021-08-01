import React from 'react'

const UtilityFirstDemo = () => {
  return (
    <>
      <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mb-12'>
        <div className='flex-shrink-0'>
          <img className='h-12 w-12' src='/assets/images/logo.svg' alt='ChitChat Logo' />
        </div>
        <div>
          <div className='text-xl font-medium text-black'>ChitChat</div>
          <p className='text-gray-500'>You have a new message!</p>
        </div>
      </div>

      <div class='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mb-12'>
        <img
          class='block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0'
          src='/assets/images/erin-lindford.jpg'
          alt="Woman's Face"
        />
        <div class='text-center space-y-2 sm:text-left'>
          <div class='space-y-0.5'>
            <p class='text-lg text-black font-semibold'>Erin Lindford</p>
            <p class='text-gray-500 font-medium'>Product Engineer</p>
          </div>
          <button class='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
            Message
          </button>
        </div>
      </div>

      <button class='py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700'>
        Click me
      </button>

      <button class='btn btn-green'>Button</button>
    </>
  )
}

export default UtilityFirstDemo
