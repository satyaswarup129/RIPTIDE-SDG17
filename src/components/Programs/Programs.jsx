import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-2.png'
import program_2 from '../../assets/program-3.png'
import program_3 from '../../assets/program-4.png'
import program_icon_1 from '../../assets/program-icon-4.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import { BrowserRouter,Link } from 'react-router-dom'

const Programs = () => {
  return (
    <div className='programs' >
<div className="program"> <img src ={program_1} alt="" />
 <Link></Link> 
<div className="caption">
 <Link to ="https://sdgs.un.org/news"><img src={program_icon_1} alt=""/></Link> 
    <p><b>N E W S</b></p>
</div>
</div>
<div className="program"> <img src ={program_2} alt="" />
<div className="caption">
 <Link to= "https://sdgs.un.org/publications"><img src={program_icon_2} alt=""/></Link> 
    <p><b>B L O G</b></p>
</div>
</div>
<div className="program"> <img src ={program_3} alt="" />
<div className="caption">
    <Link to="https://66ab6870bfb004cf826ed82e--ubiquitous-sundae-b8baaa.netlify.app"><img src={program_icon_3} alt=""/></Link> 
    <p><b>I M A G E S</b></p>
</div>
</div>
    </div>
  )
}

export default Programs