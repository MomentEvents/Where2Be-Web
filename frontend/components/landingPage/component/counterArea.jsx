import React from 'react';
import overlay_img from "../../../public/assets/img/bg/cunter-bg.jpg"
import dynamic from "next/dynamic";

const Counter = dynamic(() => import('../../common/counter'), {
    ssr: false
})

const CounterArea = () => {
   const funfact_data=[
      {
         id:1,
         counter_title:'Participants',
         number:'1030'
      },
      {
         id:2,
         counter_title:'Speakers',
         number:'1600'
      },
      {
         id:3,
         counter_title:'Workshop',
         number:'1230'
      },
      {
         id:5,
         counter_title:'Awards Win',
         number:'1070'
      },
   ]
    return (
      <>
        <section
          className="counter__area include__bg pt-150 pb-120 counter__overlay fix"
          style={{ backgroundImage: `url(${overlay_img.src})` }}
        >
          <div className="counter__shape">
            <img src="/assets/img/shape/counter-shape.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              {funfact_data.map((item, index) => (
                <div
                  key={index}
                  className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
                >
                  <div className="counter__item text-center mb-60">
                    <div className="counter__icon">
                      <i className="flaticon-team"></i>
                    </div>
                    <div className="counter__content">
                      <div className="counter__number">
                        <span className="counter">
                          <Counter number={item.number}></Counter>
                        </span>
                      </div>
                      <div className="counter__title">
                        <h3>{item.counter_title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
};

export default CounterArea;