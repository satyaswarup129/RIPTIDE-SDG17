import React from 'react'
import './Events.css'
import gallery_1 from '../../assets/gallary-1.png'
import gallery_2 from '../../assets/gallary-2.png'
import gallery_3 from '../../assets/gallary-3.png'
import gallery_4 from '../../assets/gallary-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Events = () => {
  return (
    <div className='event'>
        <div className="gallary">
            <img src={gallery_1} alt=""/> 
            <img src={gallery_2} alt=""/>
            <img src={gallery_3} alt=""/>
            <img src={gallery_4} alt=""/>
        </div>
        <button className='btn dark-btn'>see more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Events