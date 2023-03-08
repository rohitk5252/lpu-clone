import React from 'react'
import ftabimg from "../Assets/ftabimg.png"

const Focused = () => {

    const handleTab = (e) => {
        e.preventDefault();
        const hre = e.target.getAttribute("hre")
        const ftabs = document.getElementsByClassName("ftab");
        const fli = document.getElementsByClassName("fli");
        
        for (var i = 0; i < 4; i++) {
          fli[i].classList.remove("active");
          ftabs[i].classList.remove("active");
        }
    
        e.target.parentNode.classList.add("active")
        document.getElementById(hre).classList.add("active");
      };

      
  return (
    <section id="focused" style={{backgroundColor:"#fff"}}>
        <div className="container">
        <div className="heading_part">
          <h3> 
            <span>Placement</span> Focussed Activities
          </h3>
          </div>
          <div className="row tab">
            <div className="col-12">
            <nav>
              <ul className="tab">
                <li
                  onClick={(e) => handleTab(e)}
                  id="fli1"
                  class="fli active"
                >
                  <a hre="ftab1">PROFESSIONAL ENHANCEMENT</a>
                </li>
                <li
                  onClick={(e) => handleTab(e)}
                  id="fli2"
                  class="fli"
                >
                  <a hre="ftab2">INTERNSHIPS & TRAININGS</a>
                </li>
                <li
                  onClick={(e) => handleTab(e)}
                  id="fli3"
                  class="fli"
                >
                  <a hre="ftab3">CAREER MENTORING</a>
                </li>
                <li
                  onClick={(e) => handleTab(e)}
                  id="fli4"
                  class="fli"
                >
                  <a hre="ftab4">INDUSTRY WORKSHOPS & PROJECTS</a>
                </li>
              </ul>
            </nav>
            </div>
            <div className="col-12">
              <div className="tabs">
                <div  id="ftab1" className="ftab active">
                  <div className="card">
                  <img src={ftabimg} alt="" />
                  <div className="text_side">
                    <h3>1. Center For <span>Professional Enhancement</span></h3>
                    <p>Center for Professional Enhancement (CPE) at LPU  aims at imparting new skill sets relevant to the current industry demands, ensuring holistic development of students with regard to aptitude, verbal ability, soft skills, behavioral and managerial skills.</p>
                  </div>
                  </div>
                </div>
                <div  id="ftab2" className="ftab">
                  <div className="card">
                  <img src={ftabimg} alt="" />
                  <div className="text_side">
                    <h3>2. Center For <span>Professional Enhancement</span></h3>
                    <p>Center for Professional Enhancement (CPE) at LPU  aims at imparting new skill sets relevant to the current industry demands, ensuring holistic development of students with regard to aptitude, verbal ability, soft skills, behavioral and managerial skills.</p>
                  </div>
                  </div>
                </div>
                <div id="ftab3" className="ftab">
                  <div className="card">
                  <img src={ftabimg} alt="" />
                  <div className="text_side">
                    <h3>3. Center For <span>Professional Enhancement</span></h3>
                    <p>Center for Professional Enhancement (CPE) at LPU  aims at imparting new skill sets relevant to the current industry demands, ensuring holistic development of students with regard to aptitude, verbal ability, soft skills, behavioral and managerial skills.</p>
                  </div>
                  </div>
                </div>
                <div id="ftab4" className="ftab">
                  <div className="card">
                  <img src={ftabimg} alt="" />
                  <div className="text_side">
                    <h3>4. Center For <span> Professional Enhancement </span></h3>
                    <p>Center for Professional Enhancement (CPE) at LPU  aims at imparting new skill sets relevant to the current industry demands, ensuring holistic development of students with regard to aptitude, verbal ability, soft skills, behavioral and managerial skills.</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Focused