import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import MainLayout from './MainLayout'

const PageLayout = ({ children, title, withStepper }) => {
    const Background = '/images/parallax8.jpg'
    return (
        <MainLayout>
            <section className="hero is-medium has-text-centered" style={{ backgroundImage: `url(${Background})` }}>
                <div className="hero-body">
                    <h5 className="title is-size-1 p-0 has-text-white has-text-weight-light">{title}</h5>
                </div>

            </section>

            {withStepper ? (
                <Section addClasses="pt-0 pb-0 is-flex is-align-items-center" style={{ height: "60px", marginTop: "-60px" }}>
                    <nav className="navbar is-flex is-flex-direction-column is-align-items-center is-transparent" aria-label="breadcrumbs">
                        <ul className="navbar-menu pt-2">
                            <Link to="room-search">
                                <li className="navbar-item has-text-white ml-2 mr-2">
                                    <span className="tag is-rounded mr-2">1</span> SEARCH
                            </li>
                            </Link>
                            <Link to="/booking">
                                <li className="navbar-item has-text-white ml-2 mr-2">
                                    <span className="tag is-rounded mr-2">2</span> BOOKING
                            </li>
                            </Link>
                            <Link to="/checkout">
                                <li className="navbar-item has-text-white ml-2 mr-2">
                                    <span className="tag is-rounded mr-2">3</span> CHECKOUT
                            </li>
                            </Link>
                            <Link to="/thank-you">
                                <li className="navbar-item has-text-white ml-2 mr-2 is-active">
                                    <span className="tag is-rounded mr-2">4</span> THANK YOU
                            </li>
                            </Link>
                        </ul>
                    </nav>
                </Section>
            ) : ''}
            {children}
        </MainLayout>
    )
}

export default PageLayout
