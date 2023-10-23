import React from 'react';
import CardHeaderDropdown from '../home/cardheaderdropdown';
import months from '../../data/dashboardData/month';
import days from '../../data/dashboardData/days';
import years from '../../data/dashboardData/year';
import AreaChart from '../home/areaChart';
import RadialBarChart from '../home/radialbox';
import PieChart from './pieChart';
import EarthIcon from '../../utils/SVG/earthIcon';
import BreadcamMenu from '../common/breadcamMenu';

const WrapElementContent = () => {
    return (
        <>
            <div className="body__overlay"></div>
            <div className="app__slide-wrapper">
            <div className="breadcrumb__area">
               <div className="breadcrumb__wrapper mb-35">
                  <div className="breadcrumb__main">
                     <div className="breadcrumb__inner">
                        <div className="breadcrumb__icon">
                           <i className="flaticon-home"></i>
                        </div>
                        <BreadcamMenu title="UI Elements"/>
                     </div>
                  </div>
               </div>
            </div>
            <div className="elements__area">
               <div className="row">
                  <div className="col-xxl-4 col-xl-6 col-lg-6">
                     <div className="body__card-wrapper mb-30">
                        <div className="card__header-top">
                           <div className="card__title-inner">
                              <h4 className="event__information-title">Input Fild</h4>
                           </div>
                           <CardHeaderDropdown/>
                        </div>
                        <div className="input__field-wrapper mt-35">
                           <div className="singel__input-field mb-15">
                              <label className="input__field-text">Normal Input Field</label>
                              <input type="text" placeholder="David"/>
                           </div>
                           <div className="warning__field mb-15">
                              <label className="input__field-text">Error Input Field</label>
                              <span className="input__alert alert-bg-1"><span>Warning:</span> This fild can not be empty</span>
                           </div>
                           <div className="warning__field mb-15">
                              <label className="input__field-text">Warning Input Field</label>
                              <span className="input__alert alert-bg-2"><span>Warning:</span> This fild can not be empty</span>
                           </div>
                           <div className="warning__field mb-15">
                              <label className="input__field-text">Success Input Field</label>
                              <span className="input__alert alert-bg-3"><span>Warning:</span> This fild can not be empty</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                     <div className="elements__area">
                        <div className="body__card-wrapper mb-30">
                           <div className="card__header-top">
                              <div className="card__title-inner">
                                 <h4 className="event__information-title">Buttons</h4>
                              </div>
                              <CardHeaderDropdown/>
                           </div>
                           <div className="butttons__element-wrapper mt-35">
                              <div className="button__grid-wrapper">
                                 <div className="fill__button-inner">
                                    <a className="element__btn red-bg" href="#">Home</a>
                                    <a className="element__btn perple-bg" href="#">Home</a>
                                    <a className="element__btn yellow-bg" href="#">Home</a>
                                    <a className="element__btn pink-bg" href="#">Home</a>
                                    <a className="element__btn blue-bg" href="#">Home</a>
                                    <a className="element__btn green-bg" href="#">Home</a>
                                 </div>
                                 <div className="border__button-inner">
                                    <a className="element__btn border-red" href="#">Home</a>
                                    <a className="element__btn border-perple" href="#">Home</a>
                                    <a className="element__btn border-yellow" href="#">Home</a>
                                    <a className="element__btn border-pink" href="#">Home</a>
                                    <a className="element__btn border-blue" href="#">Home</a>
                                    <a className="element__btn border-green" href="#">Home</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                     <div className="card__wrapper total__seat-wapper mb-30">
                        <div className="card__header mb-35">
                           <div className="card__header-top">
                              <div className="card__title-inner">
                                 <div className="card__header-icon">
                                    <EarthIcon/>                                         
                                 </div>
                                 <div className="card__header-title">
                                    <h4>Visits by Source</h4>
                                 </div>
                              </div>
                              <div className="card__header-right">
                                 <CardHeaderDropdown/>
                              </div>
                           </div>
                        </div>
                        <div className="total__seat-progress">
                           <PieChart/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-xl-6 col-lg-6">
                     <div className="card__wrapper total__seat-wapper">
                        <div className="card__header mb-35">
                           <div className="card__header-top">
                              <div className="card__title-inner">
                                 <div className="card__header-icon">
                                    <i className="flaticon-chair-2"></i>
                                 </div>
                                 <div className="card__header-title">
                                    <h4>Total Seats</h4>
                                 </div>
                              </div>
                              <div className="card__header-right">
                                 <CardHeaderDropdown/>
                              </div>
                           </div>
                        </div>
                        <div className="total__seat-progress">
                           <RadialBarChart/>
                           <div className="redialchart__content ">
                              <div className="redialchart__info">
                                 <span>Total Seats</span>
                                 <h4>$5500.00</h4>
                              </div>
                              <div className="redialchart__info">
                                 <span>Sold Seats</span>
                                 <h4>$4500.00</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-7 col-xl-7 col-lg-6">
                     <div className="card__wrapper">
                        <div className="card__header">
                           <div className="card__header-top">
                              <div className="card__title-inner">
                                 <div className="card__header-icon">
                                    <i className="flaticon-group"></i>
                                 </div>
                                 <div className="card__header-title">
                                    <h4>Web Traffic</h4>
                                 </div>
                              </div>
                              <div className="card__header-right">
                                 <div className="card__header-calendar">
                                 <form action="#">
                        <span>
                          <select name="month">
                            {months &&
                              months.length > 0 &&
                              months.map((month,index) => (
                                <option key={index} defaultValue={month.id}>
                                  {month.month}
                                </option>
                              ))}
                          </select>
                        </span>
                        <span>
                          <select name="day">
                            {days &&
                              days.length > 0 &&
                              days.map((day,index) => (
                                <option key={index} defaultValue={day.id}>
                                  {day.id}
                                </option>
                              ))}
                          </select>
                        </span>
                        <span>
                          <select name="year">
                            
                            {years &&
                              years.length > 0 &&
                              years.map((year, index) => (
                                <option key={index} defaultValue={year.year}>
                                  {year.year}
                                </option>
                              ))}
                          </select>
                        </span>
                      </form>
                                 </div>
                                <CardHeaderDropdown/>
                              </div>
                           </div>
                           <div className="Card__line-chart">
                              <div id="lineChart">
                              <AreaChart/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default WrapElementContent;