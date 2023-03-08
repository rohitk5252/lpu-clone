import React from 'react'
import divers1 from "../Assets/divers1.png"
import divers2 from "../Assets/divers2.png"
import divers3 from "../Assets/divers3.png"
import divers4 from "../Assets/divers4.png"

const Diversity = () => {
  return (
    <section id="diversity">
        <div className="container">
            <div className="row">
                <div className="col-3 card">
                    <img src={divers1} alt="" />
                    <div className="text_side">
                        <p>Students' diversity and interaction with Industry experts shaped my career at LPU</p>
                        <span>Karan Mittal CSE</span>
                    </div>
                </div>
                <div className="col-3 card">
                    <img src={divers2} alt="" />
                    <div className="text_side">
                        <p>State of the art infrastructure and experienced faculty nurtured my aspirations</p>
                        <span>Tanya Arora CSE</span>
                    </div>
                </div>
                <div className="col-3 card">
                    <img src={divers3} alt="" />
                    <div className="text_side">
                        <p>Hands-on experience, state of the art lab facilities gave me practical exposure</p>
                        <span>Satyam Kumar Mech</span>
                    </div>
                </div>
                <div className="col-3 card">
                    <img src={divers4} alt="" />
                    <div className="text_side">
                        <p>Research, entrepreneurship and campus recruitment opportunities all at one place</p>
                        <span>Ayush Sharma MCA</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Diversity