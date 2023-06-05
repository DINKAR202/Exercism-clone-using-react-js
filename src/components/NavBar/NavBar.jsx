import React from 'react'
import './Navbar.scss'

const NavBar = () => {
  return (
    <>
      <nav className='nav-top container p-3 d-flex justify-content-between'>
        <div>
            <h3><b>Exercism</b></h3>
         </div>

        <div className='d-flex justify-content-between col-lg-10'>

            <div className='border'>
                <ul className='d-flex border gap-5'>

                    <li>
                        <a><b>Learn</b></a>
                    </li>
                    <li>
                        <a><b>Discover</b></a>
                    </li>
                    <li>
                        <a><b>Contribute</b></a>
                    </li>
                    <li>
                        <a><b>More</b></a>
                    </li>
                    
                </ul>
            </div>

            <div className='gap-4 d-flex flex-row'>
                <button className='btn btn-primary'>Sign up</button>
                <button className='btn btn-warning'>Log in</button>
            </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
