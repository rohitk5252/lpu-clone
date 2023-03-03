import React from 'react'
import logo from '../Assets/logo.png'
const Header = () => {

  return (
    <> 
    <header id="header" className='header'>
    <div className="container">
            <div className="logo_part">
                    <a href="/"><img src={logo} alt="" /></a>
            </div>

            <nav>
                <ul className='navigation'>
                    <li><a href="">About</a></li>
                    <li><a href="">Admissions</a></li>
                    <li><a href="">Acedemics</a></li>
                    <li><a href="">Research</a></li>
                    <li><a className='active' href="">Placements</a></li>
                    <li><a href="">Campus Life</a></li>
                    <li><a href="">Disciplines</a></li>
                </ul>
            </nav>

            
            <button className='Btn Btn--primary Btn--rounded'>Apply Now</button>
            
    </div>   
</header>
    <div className='header2'>
        <div className="container">
        <ul className='navigation2'>
                    <li><a href="">About</a></li>
                    <li><a href="">Admissions</a></li>
                    <li><a href="">Acedemics</a></li>
                    <li><a href="">Research</a></li>
                    <li><a className='active' href="">Placements</a></li>
                    <li><a href="">Campus Life</a></li>
                    <li><a href="">Disciplines</a></li>
                </ul>
        </div>
    </div>
    </>
  )
}

export default Header