import React, { useState } from "react";
import DotsIcon from "../../utils/SVG/dots";


const CardHeaderDropdown = () => {
const [menuOpen, setMenuOpen] = useState(false)
const handleCardDropdown = () =>{
  setMenuOpen(!menuOpen)
}

  return (
    <div className="card__header-dropdown">
      <div className="dropdown">
        <button onClick={handleCardDropdown}>
         <DotsIcon/>
        </button>
        <div className="dropdown-list" style={{ display: menuOpen ? 'block' : 'none' }}>
          <button onClick={handleCardDropdown} className="dropdown__item">
            Edit
          </button>
          <button onClick={handleCardDropdown} className="dropdown__item">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardHeaderDropdown;
