import React from 'react';
import CardHeaderDropdown from './cardheaderdropdown';
import AttendenceTable from '../attendencePage/component/AttendenceTable';
import attendenceData from '../../data/attendenceData/attendenceData';

const RegisterUserList = () => {
    return (
        <>
            <div className="row">
                <div className="col-xxl-12">
                   <div className="card__wrapper">
                   <div className="card__header">
                     <div className="card__header-top mb-5">
                        <div className="card__title-inner">
                           <div className="card__header-icon">
                              <i className="flaticon-ticket-1"></i>
                           </div>
                           <div className="card__header-title">
                              <h4>Recent Attendees</h4>
                           </div>
                        </div>
                        <CardHeaderDropdown/>
                     </div>
                  </div>
                  <div className="attendant__wrapper mb-20">
                        <table>
                        <thead>
                           <tr>
                              <th>ID No</th>
                              <th>Name</th>
                              <th>Seminar</th>
                              <th>Time</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                            {/*  */}
                            <AttendenceTable attendenceData={attendenceData}/>
                        </tbody>
                        </table>
                  </div>
                  <div className="pagination__wrapper">
                     <div className="basic__pagination d-flex align-items-center justify-content-end">
                        <nav>
                           <ul>
                              <li>
                                 <a href="#">1</a>
                              </li>
                              <li>
                                 <span className="current">2</span>
                              </li>
                              <li>
                                 <a href="#">3</a>
                              </li>
                              <li>
                                 <a href="#">4</a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                 </a>
                              </li>
                           </ul>
                        </nav>
                     </div>
                  </div>
                   </div>
                </div>
            </div>
        </>
    );
};

export default RegisterUserList;