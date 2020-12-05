import React from 'react'
import SignUp from './SignUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <section className="section main-bg has-text-white">
                <div className="container is-max-widescreen">
                    <div className="columns">
                        <div className="column is-one-third">
                            <h4 className="title is-size-5 has-text-white has-text-weight-normal mb-0">Phone Support</h4>
                            <p className="title is-size-7 mt-0 has-text-white mt-2 has-text-weight-light">24 HOURS A DAY</p>
                            <span className="title is-5 has-text-white has-text-weight-light">+ 01 345 647 745</span>
                        </div>
                        <div className="column is-one-third">
                            <h4 className="title is-size-5 has-text-white has-text-weight-normal mb-0">Connect With Us</h4>
                            <p className="title is-size-7 mt-0 has-text-white mt-2 has-text-weight-light">SOCIAL MEDIA CHANNELS</p>
                            <div className="is-flex">
                                <FontAwesomeIcon className="title is-size-3 has-text-white pr-2 mr-1" icon={faInstagram} />
                                <FontAwesomeIcon className="title is-size-3 has-text-white pr-3 mr-1" icon={faTwitter} />
                                <FontAwesomeIcon className="title is-size-3 has-text-white pr-3 mr-1" icon={faFacebook} />
                                <FontAwesomeIcon className="title is-size-3 has-text-white pr-3 mr-1" icon={faPinterest} />
                                <FontAwesomeIcon className="title is-size-3 has-text-white pr-3 mr-1" icon={faYoutube} />
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <h4 className="title is-size-5 has-text-white has-text-weight-normal mb-0">Connect With Us</h4>
                            <p className="title is-size-7 mt-0 has-text-white mt-2 has-text-weight-light">SOCIAL MEDIA CHANNELS</p>
                            <SignUp />
                        </div>
                    </div>
                </div>
            </section>
            <nav>
                <div className="navbar-menu container is-max-widescreen">
                    <div className="navbar-start">
                        <div className="navbar-item">Home</div>
                        <div className="navbar-item">About Us</div>
                        <div className="navbar-item">Services</div>
                        <div className="navbar-item">Booking</div>
                        <div className="navbar-item">Contact</div>
                    </div>

                    <div className="navbar-end">

                        <div className="column is-three-fifths">
                            <img src="/images/willmont.png" alt="" height="100px;" />
                        </div>

                    </div>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
