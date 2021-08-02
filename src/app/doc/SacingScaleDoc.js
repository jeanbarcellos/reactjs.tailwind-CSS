import React from 'react'

const spacing = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64,
  72, 76, 80, 84, 88, 92, 96, 112, 128, 136, 160, 176, 192, 200, 208, 216, 224, 240, 256, 288, 320, 360, 384, 400, 448,
  512, 576, 640, 704, 768, 832, 896, 960, 1024
]

const SacingScaleDoc = () => {
  return (
    <div className='mb-36'>
      <div class='pb-10 border-b border-gray-200 mb-10'>
        <div>
          <h1 class='inline-block text-3xl font-extrabold text-gray-900 tracking-tight'>Customizing Spacing</h1>
        </div>
        <p class='mt-1 text-lg text-gray-500'>Customizing the default spacing and sizing scale for your project.</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th class='hidden sm:table-cell'>
              <span class='sr-only'>Preview</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {spacing.map(number => {
            return (
              <tr className='border-b'>
                <td>{number}</td>
                <td className='hidden sm:table-cell'>
                  <div className={`h-10 bg-cyan-400 w-${number}`}></div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default SacingScaleDoc
