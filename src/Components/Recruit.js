import React from 'react'

const Recruit = () => {
  return (
    <section id="recruit">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form action="">
                        <span>Recruit form LPU</span>
                        <div className="form_inputs">
                            <input className='active' type="text" placeholder='Name' />
                            <input type="text" placeholder='Company Name' />
                            <input type="number" placeholder='Phone No.' />
                            <input type="email" placeholder='Email' />
                            <input type="text" placeholder='Hiring for' />
                            <input type="button" className='Btn Btn--rounded button'  value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Recruit