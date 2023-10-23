import React from 'react';
import PricingIcon from '../../utils/SVG/pricingIcon';
import TickArrow from '../../utils/SVG/tickArrow';
import Link from 'next/link';

const PricingSection = () => {
    const pricingCard = [
        {
          id: 1,
          price: "$599",
          pricingLavel: "CIP",
          cheklist1: "Everything from ALL Access",
          cheklist2: "Cocktail Hour",
          cheklist3: "Premium Seating",
          cheklist4: "Speaker Meet & Greets",
          cheklist5: "Signed Books",
          pricingClass: "pricing__item-label",
        },
        {
          id: 1,
          price: "$799",
          pricingLavel: "VIP",
          cheklist1: "Everything from ALL Access",
          cheklist2: "Cocktail Hour",
          cheklist3: "Premium Seating",
          cheklist4: "Speaker Meet & Greets",
          cheklist5: "Signed Books",
          pricingClass: "pricing__item-label pricing__item-label-color1",
        },
        {
          id: 3,
          price: "$999",
          pricingLavel: "VVIP",
          cheklist1: "Everything from ALL Access",
          cheklist2: "Cocktail Hour",
          cheklist3: "Premium Seating",
          cheklist4: "Speaker Meet & Greets",
          cheklist5: "Signed Books",
          pricingClass: "pricing__item-label pricing__item-label-color2",
        },
      ];
    return (
        <section className="pricing__area dark_light_class pt-185 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-6">
              <div className="section__title-wrapper is-left mb-105">
                <span className="section__back-title">R</span>
                <span className="section__subtitle">REGISTRATION NOW</span>
                <h2 className="section__title">
                  Get <span className="text__highlight"> Ticket <TickArrow /></span> Now
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6">
              <div className="price__short-details d-lg-flex justify-content-center mb-105">
                <p>
                  Velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                  auctor, nisi <br />
                  elit consequat ipsum, nec sagittis sem nibh.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {pricingCard.map((price,index) => (
              <div
                key={index}
                className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
              >
                <div className="pricing__item mb-30">
                  <div className="pricing__item-header">
                    <div>
                      <span className="pricing__item-title"> {price.price} </span>
                    </div>
                    <div className="pricing__item-lable">
                      <span className={price.pricingClass}> {price.pricingLavel}</span>
                      <PricingIcon />
                    </div>
                  </div>
                  <div className="pricing__item-content">
                    <ul>
                      <li>
                        <i className="flaticon-comment"></i> {price.cheklist1}
                      </li>
                      <li>
                        <i className="flaticon-comment"></i> {price.cheklist2}
                      </li>
                      <li>
                        <i className="flaticon-comment"></i> {price.cheklist3}
                      </li>
                      <li>
                        <i className="flaticon-comment"></i> {price.cheklist4}
                      </li>
                      <li>
                        <i className="flaticon-comment"></i> {price.cheklist5}
                      </li>
                    </ul>
                  </div>
                  <div className="pricing__btn-wrap">
                    <button type="button" className="pricing__btn">Buy Ticket</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default PricingSection;