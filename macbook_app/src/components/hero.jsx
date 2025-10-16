import React from 'react'

const hero = () => {
  return (
    <section id='hero'>
        <div>
            <h1>MacBook Pro</h1>
            <img src= "/title.png" alt = "macbook pro" />
        </div>

        <video src = "/videos/hero.mp4" autoPlay muted playsInline/>
        <button>Buy</button>
        <p className='text-2xl'>Own it for <span>$1999</span> or for <span>$83/month</span></p>
    </section>
  )
}

export default hero
