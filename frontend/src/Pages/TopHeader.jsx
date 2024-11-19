import React from 'react'

export const TopHeader = ({ onHomeClick, onRegisterClick, isLoggedIn, onLogout, onLoginClick }) => {
    return (
      <header className="header">
        <div className="logo-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" className="logo" />
        </div>
        <nav>
          <ul className="nav-list">
            <li><a href="#" onClick={onHomeClick} style={{textDecoration:"none"}}>Home</a></li>
            {!isLoggedIn && <li><a href="#" onClick={onRegisterClick} style={{textDecoration:"none"}}>Register</a></li>}
            {!isLoggedIn && <li><a href="#" onClick={onLoginClick} style={{textDecoration:"none"}}>Login</a></li>}
            {isLoggedIn && <li><a href="#" onClick={onLogout} style={{textDecoration:"none"}}>Logout</a></li>}
            <li><a href="#" style={{textDecoration:"none"}}>About</a></li>
            <li><a href="#" style={{textDecoration:"none"}}>Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };

export const Header= ({ onHomeClick, onRegisterClick, isLoggedIn, onLogout, onLoginClick }) =>{
  return (
    <header>
      <h1 onClick={onHomeClick}>Mini Amazon</h1>
      <div className="header-links">
        {!isLoggedIn && (
          <>
            <span style={{padding:"20px"}}><button onClick={onRegisterClick}>Register</button></span>
            <button onClick={onLoginClick}>Login</button>
          </>
        )}
        {isLoggedIn && <button onClick={onLogout}>Logout</button>}
      </div>
    </header>
  );
}
