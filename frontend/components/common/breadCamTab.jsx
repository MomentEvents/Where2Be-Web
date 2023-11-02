import React from 'react';

const Breadcamtab = () => {
    return (
        <div className="breadcrumb__tab">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
           <li className="nav-item" role="presentation">
           <button className="nav-link active" id="day-tab-1" data-bs-toggle="tab" data-bs-target="#day-tab-1-pane" type="button" role="tab" aria-controls="day-tab-1-pane" aria-selected="true">day one</button>
           </li>
           <li className="nav-item" role="presentation">
           <button className="nav-link" id="day-tab-2" data-bs-toggle="tab" data-bs-target="#day-tab-2-pane" type="button" role="tab" aria-controls="day-tab-2-pane" aria-selected="false">day two</button>
           </li>
           <li className="nav-item" role="presentation">
           <button className="nav-link" id="day-tab-3" data-bs-toggle="tab" data-bs-target="#day-tab-3-pane" type="button" role="tab" aria-controls="day-tab-3-pane" aria-selected="false">day three</button>
           </li>
        </ul>
     </div>
    );
};

export default Breadcamtab;