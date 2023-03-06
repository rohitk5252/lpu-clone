import React from "react";
import gandhi from "../Assets/gandhi.png";

const Ecosyctem = () => {
  const handleAccord = (id) => {
    const AllAccordHead = document.getElementsByClassName("accoridan_head");
    const currHead = document.getElementById(id);
    //  console.log( AllAccordHead)
    for (const key in AllAccordHead) {
      console.log(key);
    }
    currHead.classList.toggle("open");
    currHead.parentElement.classList.toggle("bgWhite");
  };

  return (
    <section id="ecos">
      <div className="container">
        <h3 className="text_center">
          A full ecosystem <span>single design</span>
        </h3>

        <p className="text_center">
          Go from diagrams, wireframes and prototypes without switching apps or
          updating across platforms.
        </p>
        <div className="row">
          <div className="col-6 img_side">
            <img src={gandhi} alt="" />
          </div>
          <div className="col-6 wrapper">
            <div className="accordian">
              <div
                onC={(e) => handleAccord(e.target.id)}
                className="accoridan_head active"
                id="accord1"
              >
                Lorem ipsum dolor sit, Culpa, consequuntur.?{" "}
                <i class="fa-sharp fa-solid fa-chevron-down"></i>
              </div>
              <div className="accordian_body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident architecto nisi dignissimos eveniet assumenda sint
                animi quidem sunt enim quae!{" "}
              </div>
            </div>
            <div className="accordian">
              <div
                onC={(e) => handleAccord(e.target.id)}
                className="accoridan_head"
                id="accord2"
              >
                Lorem ipsum dolor sit, Culpa, consequuntur.?{" "}
                <i class="fa-sharp fa-solid fa-chevron-down"></i>
              </div>
              <div className="accordian_body">
                We allow you to export and send the AMP emails created on envoie
                from your current email tool.
              </div>
            </div>
            <div className="accordian">
              <div
                onC={(e) => handleAccord(e.target.id)}
                className="accoridan_head"
                id="accord3"
              >
                How do I send AMP emails?{" "}
                <i class="fa-sharp fa-solid fa-chevron-down"></i>
              </div>
              <div className="accordian_body">
                We allow you to export and send the AMP emails created on envoie
                from your current email tool.
              </div>
            </div>
            <div className="accordian">
              <div
                onC={(e) => handleAccord(e.target.id)}
                className="accoridan_head"
                id="accord4"
              >
                Lorem ipsum dolor sit, Culpa, consequuntur.?{" "}
                <i class="fa-sharp fa-solid fa-chevron-down"></i>
              </div>
              <div className="accordian_body">
                We allow you to export and send the AMP emails created on envoie
                from your current email tool.
              </div>
            </div>
            <div className="accordian">
              <div
                onC={(e) => handleAccord(e.target.id)}
                className="accoridan_head"
                id="accord5"
              >
                Lorem ipsum dolor sit, Culpa, consequuntur.?{" "}
                <i class="fa-sharp fa-solid fa-chevron-down"></i>
              </div>
              <div className="accordian_body">
                We allow you to export and send the AMP emails created on envoie
                from your current email tool.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosyctem;
