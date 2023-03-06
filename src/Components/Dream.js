import React from "react";
import ug from '../Assets/ug.png';
import byju from '../Assets/byju.png';
import google from '../Assets/google.png';
import micro from '../Assets/micro.png';
import activeug from '../Assets/activeug.png';
const Dream = () => {
  return (
    <section id="dreams">
      <div className="container">
        <div className="heading_part">
          <h3>
            Super Dream <span>Placements</span>
          </h3>
        </div>
        <div className="row flexrow">
            <div className="col-3 ctc">
                <h3>CTC<span>₹ 30 Lacs</span> or <span>above</span></h3>
                <h3>CTC<span>₹ 20 Lacs</span> or <span>above</span></h3>
            </div>
            <div className="col-9">
                <div className="row internal">
                <div className="col-4">
                    <div className="card active">
                <img src={activeug} alt="" />
                <h3>Utkarsh Kumar</h3>
                <span>LPU Alumni, Class of 2007</span>
                <img src={byju} alt="" />
                </div>
                </div>
                <div className="col-4">
                    <div className="card">
                <img src={ug} alt="" />
                <h3>Utkarsh Kumar</h3>
                <span>LPU Alumni, Class of 2007</span>
                <img src={google} alt="" />
                </div>
                </div>
                <div className="col-4">
                    <div className="card">
                <img src={ug} alt="" />
                <h3>Utkarsh Kumar</h3>
                <span>LPU Alumni, Class of 2007</span>
                <img src={byju} alt="" />
                </div>
                </div>
                <div className="col-4">
                    <div className="card">
                <img src={ug} alt="" />
                <h3>Utkarsh Kumar</h3>
                <span>LPU Alumni, Class of 2007</span>
                <img src={micro} alt="" />
                </div>
                </div>
                <div className="col-4">
                    <div className="card">
                <img src={ug} alt="" />
                <h3>Utkarsh Kumar</h3>
                <span>LPU Alumni, Class of 2007</span>
                <img src={byju} alt="" />
                </div>
                </div>
                <div className="col-4">
                    <div className="card">
                <img src={ug} alt="" />
                <h3>Utkarsh Kumar</h3>
                <span>LPU Alumni, Class of 2007</span>
                <img src={google} alt="" />
                </div>
                </div>
                
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Dream;
