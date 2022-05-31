import React from 'react'
import './file.css'
import circlemail from '../../assets/images/circlemaillogo.png'
import circlephone from '../../assets/images/circlephone.png'
import facebooklogo from '../../assets/images/facebooktransparent.png'
import instagramlogo from '../../assets/images/instagramtransparent.png'
import linkedin from '../../assets/images/linkedintransparent.png';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='contact-info'>
          <div className='finfo'>
            <img src={circlemail}/>
            <h5>abcatgoogle@gmail.com</h5>
          </div>
          <div className='sinfo'>
            <img src={circlephone}/>
            <h5>+911111111111</h5>
          </div>
          <div className='tinfo'>
            <img src={facebooklogo}/>
            <img src={instagramlogo}/>
            <img src={linkedin}/>
          </div>
        </div>
        <div className='divider-line'></div>
        <div className='copyright'>
            <p>Copyright 2021</p>
        </div>
    </div>
  )
}
