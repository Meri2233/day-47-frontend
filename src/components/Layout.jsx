import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  let token = localStorage.getItem('access_token');
  return (
    <div className='layout'>
      <div className="header">
        <h2>BuySell</h2>
        {/*token === null ?*/ <Link style={{ textDecoration: 'none' }} to="/signup">SignUp/SignIn</Link>
          /*<div className="navbar">
            <div className="options">
              <Link to={"/new"}>Post Ad </Link>
            </div>
            <button>Logout</button>
          </div>*/
        }
        <Link style={{ textDecoration: 'none' }} to={"/new"}>Post Ad </Link>

      </div>
      <Outlet />
    </div>
  )
}
