import React from 'react';
import { monthsData } from '../Data/MonthData';
import RightArrow from '../assets/images/rightArrow.svg';
import profileImage from '../assets/images/Ellipse.png';
//import profileImage from '../assets/images/rightArrow.svg'
export default function EventContainer() {

    const [month, setMonth] = React.useState('January');

    const handleChange = (event) => {
        setMonth(event.target.value);
      };
    
  return (
    <div >
        <div>
            <img src = {RightArrow} className='backArrow'></img>
        </div>
        <div className='yearDisplay'>
            2021
        </div>
        <select className='monthDropdown' value={month} onChange={handleChange}>
        {monthsData.map((option) => (
        <option className='monthNameDropDown' key = {option.name} value={option.value}>{option.name}</option>
        ))}
    </select>
    <div>
            <img src={profileImage} className='profile'></img>
    </div>
  </div>
  )
}
