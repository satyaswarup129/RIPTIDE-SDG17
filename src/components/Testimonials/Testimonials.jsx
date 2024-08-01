import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-1.png'
import user_3 from '../../assets/user-1.png'
import user_4 from '../../assets/user-1.png'
import user_5 from '../../assets/user-1.png'
import user_6 from '../../assets/user-1.png'
import user_7 from '../../assets/user-1.png'



const Testimonials = () => {
    
      const slider = useRef();
      let tx =0;
 const slideForward = ()=>{
     if(tx >-50){
        tx -=25;
     }
     slider.current.style.transform = `translateX(${tx}%)`;
 }  
 const slideBackward = ()=>{
    if(tx < 0){
        tx +=25;
     }
     slider.current.style.transform = `translateX(${tx}%)`;
 }  


  return (
    <div className='Testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Binay Ranjan sahu</h3>
                                <span>Rourkela,Indian</span>
                            </div>
                         </div>
                         <p>Lead designer of our group</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Pralaya Tripathy</h3>
                                <span>Khurda,Indian</span>
                            </div>
                         </div>
                         <p>Lead coder of our group</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Vinayak Kumar</h3>
                                <span>Cuttack,Indian</span>
                            </div>
                         </div>
                         <p>Assistant coder,designer of our group</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Satyaswarup Jena</h3>
                                <span>Baleswar,Indian</span>
                            </div>
                         </div>
                         <p>Team Leader of our group</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_5} alt="" />
                            <div>
                                <h3>Chiranjeet Bhukta</h3>
                                <span>Rourkela,Indian</span>
                            </div>
                         </div>
                         <p>Assistant coder of our group</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Arpan Giri</h3>
                                <span>Baleswar,Indian</span>
                            </div>
                         </div>
                         <p>Assistant coder of our group</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_7} alt="" />
                            <div>
                              <h3>Sagar Das</h3> 
                                <span>Kendrapada,Indian</span>
                            </div>
                         </div>
                         <p>Assistant designer of our group</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials