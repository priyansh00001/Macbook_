import React from 'react'

const productviewer = () => {
  return (
    <section id='Productviewer'>
        <h2>Take a closer look.</h2>

        <div className='controls'>
            <p className='info'>Macbook 16" in Space Black</p>

            <div className="flex-center gap-5 mt-5">
                <div className="color-control">
                    <div className="bg-neutral-300"/>
                    <div className="bg-neutral-900"/>
                </div>

                <div className="size-control">

                </div>
            </div>
        </div>

    </section>
  )
}

export default productviewer
