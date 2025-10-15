import React from 'react'
import { Navlinks } from '../constants'

const navbar = () => {
  return (
    <header>
        <nav>
            <img src = "/logo.svg" alt = " apple logo" />
            <ul>
                {Navlinks.map(({label}) => (
                    <li key = {label}>  
                        <a href ={label}> {label} </a>
                    </li>
                ))}
            </ul>
            <div className='flex-center gap-3'>
                <img src="/search.svg" alt="search" />
                <img src="/cart.svg" alt="cart" />
            </div>
        </nav>
    </header>
  )
}

export default navbar
