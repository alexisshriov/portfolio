import React from 'react';
import './MainPage.scss'

const MainPage = () => {
  return(
    <div className="main-page">
      <div className="nav-menu">
        <div>
          Alexis Sierra
        </div>
        <div className="nav-bar">
          <div className="nav-item">
            <a href="#personal-info">Personal Info</a>
          </div>
          <div className="nav-item">
            Portfolio
          </div>
          <div className="nav-item">
            Contact
          </div>
        </div>
      </div>
      <section class="personal-info" id="personal-info">
        personal info
      </section>
      <div className="grid-wrapper">
        porfolio
      </div>
      <div className="contact-info">
        contact
      </div>
    </div>

  )
}

export default MainPage;