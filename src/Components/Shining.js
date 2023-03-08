import React from "react";
import shiningimg from "../Assets/shining.jpg";
const Shining = () => {
  return (
    <section id="shining">
      <div className="container">
        <div className="heading_part">
          <h3>
            
            LPU Students Shining On <span>International Platforms</span>
          </h3>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="card">
                <img src={shiningimg} alt="" />
                <h3>Crore Club (Alumni)</h3>
                <p>
                  The Crore club of LPU graduates is getting bigger day by day.
                  Several vertos from LPU are earning in crores annually from
                  industry giants around the world like Apple, Google,
                  Microsoft, Facebook, Amazon, Adobe, Cox, Walmart, EY etc.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img src={shiningimg} alt="" />
                <h3>INTERNATIONAL PLACEMENTS & INTERNSHIPS</h3>
                <p>
                  In an endeavour to place  students around their
                  home location or placing Indian students abroad, LPU
                    students with international
                  placements and   from reputed
                  companies with a CTC up to Rs 20 lacs p.a.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img src={shiningimg} alt="" />
                <h3>Hotel Management Internships</h3>
                <p>
                  Work within a single creative context to maintain your team's
                  focus and momentum. Keep all stakeholders building consensus
                  and communicating clearly.
                </p>
              </div>
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default Shining;
