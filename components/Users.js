import React from 'react'

const Users = ({ users }) => {
 
  const { name } = users
   console.log(users, name)
  return (
      <div className="hidden lg:inline-flex flex-col col-span-3 p-3 bg-white rounded-sm shadow shadow-gray-200">
          {users ? (
        <>
          {users.map(({ name }) => (
              <div key={name} className="flex bg-teal-200 border-t border-gray-400 p-2">
              <p className="text-sm text-gray-800">{name}</p>
              </div>
            )
          )}
        </>
      ) : null
          }
    </div>
  )
}

export default Users