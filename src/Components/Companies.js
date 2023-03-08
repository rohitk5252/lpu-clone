import React from "react";
// import googleimg from "../Assets/googel.png";
import c1 from "../Assets/22.png";
import c2 from "../Assets/23.png";
import c3 from "../Assets/24.png";
import c4 from "../Assets/26.png";
import c5 from "../Assets/27.png";
import c6 from "../Assets/28.png";
import c7 from "../Assets/29.png";
import c8 from "../Assets/30.png";
import c9 from "../Assets/31.png";

const Companies = () => {
  return (
    <section id="companies">
      <div className="container">
            <div className="row flexrow">
              <div className="col-6 text_side">
                <h3>
                  See how LPU students prepare and bag <span>Rs. 1 Cr.</span> placements at 
                 <span>Top companies!</span> 
                </h3>
                <p>LPU students are guided on niche technologies ind emand. Possessing such skill sets separates them from the ordinary and leads them to grab top placements around the world!</p>
              </div>
              <div className="col-6 image_side">
              <iframe width="400" height="215" src="https://www.youtube.com/embed/uxv6fu8angU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
            <div className="row comps">
              <div className="col-1"><img src={c1} alt="" /></div>
              <div className="col-1"><img src={c2} alt="" /></div>
              <div className="col-1"><img src={c3} alt="" /></div>
              <div className="col-1"><img src={c4} alt="" /></div>
              <div className="col-1"><img src={c5} alt="" /></div>
              <div className="col-1"><img src={c6} alt="" /></div>
              <div className="col-1"><img src={c7} alt="" /></div>
              <div className="col-1"><img src={c8} alt="" /></div>
              <div className="col-1"><img src={c9} alt="" /></div>
            </div>
      </div>
    </section>
  );
};

export default Companies;
