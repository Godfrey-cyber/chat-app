import React from 'react'

const Header = ({ room }) => {
  return (
      <div className="flex items-center justify-between w-100 z-50 bg-white  border-gray-400 py-2 px-8 lg:px-20 top-0 sticky shadow-md shadow-teal-100">
          <p className="text-gray-700 text-sm p-2">{ room  }</p>
          <p className="text-gray-700 text-sm p-2">X</p>
    </div>
  )
}

export default Header