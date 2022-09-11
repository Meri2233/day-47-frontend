import { Link } from 'react-router-dom'
import React from 'react'

export default function Sucess() {
  return (
    <div className='createaccount'>
        <p>Account Created Successfully. <Link to="/login">Click Here</Link> to login.</p>
    </div>
  )
}
