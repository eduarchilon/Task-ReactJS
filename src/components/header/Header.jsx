import React from 'react'
import './header.css'
import logo from '../../assets/images/logotipo.png'

function Header() {
  return (
    <header className='header__container'>
      <div className='container header'>
        <img className="header__logo" src={logo} alt="icon" width={100}/>
        <h1 className="header__title">TASK LIST</h1>
      </div>
    </header>
  )
}

export default Header