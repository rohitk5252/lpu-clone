import React from 'react'

const Records = () => {
  return (
    <section id="records">
        <div className="container">
            <div className="heading_part">
                <h3>Placement <span>Statistics</span></h3>
                <div className="drop_down">
                <label for="cars">Select Stream :</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Computer Science</option>
                        <option value="saab">Business Tech</option>
                        <option value="mercedes">Physical Education</option>
                        <option value="audi">Fine Arts</option>
                    </select>
                </div>
            </div>
            <div className="row stats">
              <div className="col-2">
                <h3>
               <span>1600+</span>
                </h3>
                <p>Recruiters hired
LPU students</p>
              </div>
              <div className="col-2">
                <h3>
                <span>₹ 62L</span>
                </h3>
                <p>Highest Salary packagee</p>
              </div>
              <div className="col-2">
                <h3>
                <span>500+</span>
                </h3>
                <p>Companies Offering 
CTC 5 Lacs p.a</p>
              </div>
              <div className="col-2">
                <h3>
                <span>110+</span>
                </h3>
                <p>Recruiters of IITs/IIMs/
NITs also hire from LPU</p>
              </div>
              <div className="col-2">
                <h3>
                <span>₹ 1.6L</span>
                </h3>
                <p>Highest Internship 
Stipend per month</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Records