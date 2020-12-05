import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobeAmericas, faShareAlt, faUnlockAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <nav className="main-bg">
                <div className="container is-max-widescreen">
                    <div className="navbar-menu top-navbar">
                        <div className="navbar-start">
                            <div className="navbar-item pt-2 pb-2"><FontAwesomeIcon icon={faGlobeAmericas} className="mr-2" />LANGUAGES</div>
                            <div className="navbar-item pt-2 pb-2">EN</div>
                            <div className="navbar-item pt-2 pb-2">ES</div>
                            <div className="navbar-item pt-2 pb-2"><FontAwesomeIcon icon={faShareAlt} className="mr-2" />OUR SOCIAL</div>
                            <div className="navbar-item pt-1 pb-1 has-text-white">
                                <FontAwesomeIcon icon={faFacebookF} className="mr-4" />
                                <FontAwesomeIcon icon={faTwitter} className="mr-4" />
                                <FontAwesomeIcon icon={faLinkedinIn} className="mr-4" />
                                <FontAwesomeIcon icon={faPinterestP} className="mr-4" />
                            </div>
                        </div>
                        <div className="navbar-end">
                            <Link to="/my-account"><div className="navbar-item pt-2 pb-2"><FontAwesomeIcon icon={faUser} className="mr-2" />REGISTER</div></Link>
                            <Link to="/my-account"><div className="navbar-item pt-2 pb-2"><FontAwesomeIcon icon={faUnlockAlt} className="mr-2" />LOGIN</div></Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="hero text-centered is-small pt-5 pb-5">
                <div className="hero-body container is-max-widescreen">

                    <img src="/images/logo_chalet.png" width="170px" />


                </div>
            </div>
            <nav className="bordertop">
                <div className="container is-max-widescreen">
                    <div className="navbar-menu">
                        <div className="navbar-start mlr-auto bottom-navbar">
                            <Link to="/"><div className="navbar-item m-2 ml-4 mr-4">HOME</div></Link>
                            <Link to="/about-us"><div className="navbar-item m-2 ml-4 mr-4">ABOUT</div></Link>
                            <Link to="/room-search"><div className="navbar-item m-2 ml-4 mr-4">ROOMS</div></Link>
                            <Link to="/"><div className="navbar-item m-2 ml-4 mr-4">NEWS</div></Link>
                            <Link to="/"><div className="navbar-item m-2 ml-4 mr-4">LINK</div></Link>
                            <Link to="/contact"><div className="navbar-item m-2 ml-4 mr-4">CONTACT</div></Link>
                            <Link to="/" className="mtb-auto"><button className="button is-small main-bg has-text-white ml-3 mr-3 pl-3 pr-3 radius-sm lt-spacing">BOOK NOW</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
