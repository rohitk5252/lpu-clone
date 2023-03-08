import React from 'react'
import speakimg from '../Assets/speakimg.png'
const Speak = () => {
  return (
    <section id="speak">
        <div className="container">
            <div className="heading_part text_justify">
                <h3>What<span> Industry and Students</span> Speak about <span>LPU Placements</span> </h3>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <img src={speakimg} alt="" />
                        <h4>Aditya Pal Singh</h4>
                        <span>Director Head, Talent Acquisition</span>
                        <p>Recruiting from LPU has always been fruitful to us, no matter what the requirement is, this campus always has the best to offer. Being a strategic partner, LPU can be called one of the best talent pools as they have understood the demand of the industry and well equipped students with the same.</p>
                        <div className="buttons">
                            <button className="prevCard"><i class="fa-solid fa-arrow-left"></i></button>
                            <button className="nextCard"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Speak