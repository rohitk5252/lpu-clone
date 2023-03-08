import React from "react";

const Records = () => {
  const handleTab = (e) => {
    e.preventDefault();
    const hre = e.target.getAttribute("hre")
    const tabs = document.getElementsByClassName("tabb");
    const li = document.getElementsByClassName("li");
    
    for (var i = 0; i < 4; i++) {
      li[i].classList.remove("active");
      tabs[i].classList.remove("active");
    }

    e.target.parentNode.classList.add("active")
    document.getElementById(hre).classList.add("active");
  };
  return (
    <section id="records">
      <div className="container">
        <div className="heading_part">
          <h3>
            Placement <span>Statistics</span>
          </h3>
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
            <p>Recruiters hired LPU students</p>
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
            <p>Companies Offering CTC 5 Lacs p.a</p>
          </div>
          <div className="col-2">
            <h3>
              <span>110+</span>
            </h3>
            <p>Recruiters of IITs/IIMs/ NITs also hire from LPU</p>
          </div>
          <div className="col-2">
            <h3>
              <span>₹ 1.6L</span>
            </h3>
            <p>Highest Internship Stipend per month</p>
          </div>
        </div>
        <div className="row tab">
          <div className="col-12">
            <nav>
              <ul className="tab">
                <li
                  onClick={(e) => handleTab(e)}
                  id="li1"
                  class="li active"
                >
                  <a hre="tab1">Salary</a>
                </li>
                <li
                  onClick={(e) => handleTab(e)}
                  id="li2"
                  class="li"
                >
                  <a hre="tab2">Recruitment</a>
                </li>
                <li
                  onClick={(e) => handleTab(e)}
                  id="li3"
                  class="li"
                >
                  <a hre="tab3">Internship</a>
                </li>
                <li
                  onClick={(e) => handleTab(e)}
                  id="li4"
                  class="li"
                >
                  <a hre="tab4">Alumni</a>
                </li>
              </ul>
            </nav>
            <div className="tabs">
              <div
                id="tab1"
                className="tabb active"
              >
                <table className="table">
                  <tr className="tr_heading">
                    <th></th>
                    <th>2011</th>
                    <th>2012</th>
                    <th>2013</th>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                </table>
              </div>
              <div
                id="tab2"
                className="tabb"
              >
                <table className="table">
                  <tr className="tr_heading">
                    <th></th>
                    <th>2014</th>
                    <th>2015</th>
                    <th>2016</th>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                </table>
              </div>
              <div
                id="tab3"
                className="tabb"
              >
                <table className="table">
                  <tr className="tr_heading">
                    <th></th>
                    <th>2017</th>
                    <th>2018</th>
                    <th>2019</th>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                </table>
              </div>
              <div
                id="tab4"
                className="tabb"
              >
                <table className="table">
                  <tr className="tr_heading">
                    <th></th>
                    <th>2020</th>
                    <th>2021</th>
                    <th>2022</th>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                  <tr>
                    <td>Average CTC of Top 10%</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                    <td>Rs. 4.5 Lakh</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Records;