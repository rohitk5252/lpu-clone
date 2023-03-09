import React from 'react'

const Faq = () => {
    const handleAccord = (id) => {
        const AllAccordHead = document.getElementsByClassName("accoridan_headf");
        const currHead = document.getElementById(id);
        for(var i=0; i<6; i++) {
            if(AllAccordHead[i].id !== id){
                AllAccordHead[i].classList.remove("open")
              }
        }
        currHead.classList.toggle("open")
    }

  return (
    <section id="faq" className='faq'>
        <div className="container">
        <div className="heading_part">
                <h3><span>FAQ</span></h3>
        </div>
        <div className="row wrapper">
            <div className="col-12 accordian">
            <div onClick={(e)=>handleAccord(e.target.id)} className="accoridan_headf open" id="accordf1">What if the email provider doesn’t open AMP emails? <i class="fa-solid fa-plus"></i></div>
            <div className="accordian_body">We have an HTML fallback that you can configure. Gmail, GSuite, Yahoo and Mail.ru will allow AMP emails to open, for other email clients that don’t support AMP, an HTML fallback will open. </div>
            </div>
            <div className="col-12 accordian">
            <div onClick={(e)=>handleAccord(e.target.id)} className="accoridan_headf" id="accordf2">How do I send AMP emails? <i class="fa-solid fa-plus"></i></div>
            <div className="accordian_body">We allow you to export and send the AMP emails created on envoie from your current email tool.</div>
            </div>
            <div className="col-12 accordian">
            <div onClick={(e)=>handleAccord(e.target.id)} className="accoridan_headf" id="accordf3">How do I send AMP emails? <i class="fa-solid fa-plus"></i></div>
            <div className="accordian_body">We allow you to export and send the AMP emails created on envoie from your current email tool.</div>
            </div>
            <div className="col-12 accordian">
            <div onClick={(e)=>handleAccord(e.target.id)} className="accoridan_headf" id="accordf4">How do I send AMP emails? <i class="fa-solid fa-plus"></i></div>
            <div className="accordian_body">We allow you to export and send the AMP emails created on envoie from your current email tool.</div>
            </div>
            <div className="col-12 accordian">
            <div onClick={(e)=>handleAccord(e.target.id)} className="accoridan_headf" id="accordf5">How do I send AMP emails? <i class="fa-solid fa-plus"></i></div>
            <div className="accordian_body">We allow you to export and send the AMP emails created on envoie from your current email tool.</div>
            </div>
            <div className="col-12 accordian">
            <div onClick={(e)=>handleAccord(e.target.id)} className="accoridan_headf" id="accordf6">How do I send AMP emails? <i class="fa-solid fa-plus"></i></div>
            <div className="accordian_body">We allow you to export and send the AMP emails created on envoie from your current email tool.</div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Faq