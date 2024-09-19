import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userID} = useParams()
  return (
    <div className=' bg-orange-500 text-black text-center py-5'>User : {userID}</div>
  )
}

export default User