import React from 'react'
import './file.css'
import homelogo from '../../assets/images/homelogo.png'
import calllogo from '../../assets/images/phonelogo.png'
import whlogo from '../../assets/images/whatsapplogo.png'
import maillogo from '../../assets/images/whitemail.png'
import whiteFacebook from '../../assets/images/whitef.png'
import linkedlogo from '../../assets/images/whitelinked.png'

export default function Header() {
    return (
        <div className='header'>
            <div className='top-div'>
                <div className='left-info'>
                    <div>
                        <img src={calllogo} />
                        <h5>+911111111111/</h5> 
                    </div>
                    <div>
                        <img src={whlogo} />
                        <h5>+911111111111</h5>
                    </div>
                    <div>
                        <img src={maillogo} />
                        <h5>abcdef@gmail.com</h5>
                    </div>
                </div>
                <div className='right-info'>
                    <a href='#'>Have any questions?</a>
                    <img src={whiteFacebook}/>
                    <img src={linkedlogo}/>
                </div>
            </div>
            <div className='logo-div'>
                <h2>LOGO</h2>
            </div>
            <div className='menu-div'>
                <div className='divider'></div>
                <img src={homelogo} />
                <div className='divider'></div>
                <div className='menu-item'>
                    <h3>Menu</h3>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <h3>Menu 1</h3>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <h3>Menu 2</h3>
                </div>
                <div className='divider'></div>
            </div>
            <div className='bottom-div'>
                <span>Project Report</span>
            </div>
        </div>
    )
}
