import React from 'react'
import gandhi from '../Assets/gandhi.png'
import bgImg from '../Assets/orangeBg.png'
import Arrow from '../Assets/Arrow.png'
import Carousel from './Carousel'
const Banner = () => {


  const items = [
<div className="card">
                  <img src={gandhi} alt="" />
                  <div className="about">
                  <p>Utkarsh Kumar</p> <span>LPU Alumni, Class of 2007</span>
                  </div>
              </div>,
              <div className="card">
              <img src={gandhi} alt="" />
              <div className="about">
              <p>Utkarsh Kumar</p> <span>LPU Alumni, Class of 2007</span>
              </div>
          </div>, 
          <div className="card">
          <img src={gandhi} alt="" />
          <div className="about">
          <p>Utkarsh Kumar</p> <span>LPU Alumni, Class of 2007</span>
          </div>
      </div>, 
      <div className="card">
      <img src={gandhi} alt="" />
      <div className="about">
      <p>Utkarsh Kumar</p> <span>LPU Alumni, Class of 2007</span>
      </div>
  </div>
  ]



  return (
    <section id="banner">
        <div className="container">
          <div className="row flexrow">
            <div className="col-6 text_side">
              <h3>Top Placements with <span> FAANG and Fortune 500 </span>Companies</h3>
              <p>Go from diagrams, wireframes and prototypes without switching apps or updating across platforms.</p>
            </div>
            <div className="col-6 card_side">
                <Carousel items={items} mob={1} tab={1} lap={1}/>
                <img className='arrow' src={Arrow} alt="" />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Banner