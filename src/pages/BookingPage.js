import React from 'react'
import { Link } from 'react-router-dom'
import BookingForm from '../components/form/BookingForm'
import Button from '../components/form/Button'
import Checkbox from '../components/form/Checkbox'
import InputWithLabel from '../components/form/InputWithLabel'
import Section from '../components/Section'
import HeaderFive from '../components/typos/HeaderFive'
import PageLayout from '../layouts/PageLayout'

const BookingPage = () => {
    return (
        <PageLayout title="BOOKING" withStepper>
            {/* <InHeroBottom /> */}

            <Section>
                <div className="columns">
                    <div className="column is-one-third">
                        <div className="main-bg">
                            <figure className="image is-5by3">
                                <img src="/images/room5.jpg" alt="" />
                                <div className="is-overlay">
                                    <div className="card-content">
                                        <span className="tag main-bg has-text-white is-radiusless">SMALL ROOM</span>
                                    </div>
                                </div>
                            </figure>
                            <div>
                                <h5 className="title is-size-6o5 has-text-weight-light has-text-white has-text-centered mt-5">SERVICES</h5>
                                <div className="columns is-multiline pl-5 pr-5 pb-5">
                                    <div className="column is-half">
                                        <div className="second-bg has-text-white is-flex is-flex-direction-column is-justify-content-center is-align-items-center pt-4 pb-4">
                                            <h4 className="title is-size-6o5 has-text-weight-light has-text-white mb-3">CHECK-IN</h4>
                                            <p className="title is-size-1 has-text-weight-light mb-3 has-text-white">04</p>
                                            <span className="title is-size-7 mt-0 has-text-white mb-1 has-text-weight-light is-italic">Dec, 2020</span>
                                            <span className="title is-size-7 has-text-white has-text-weight-light">FRIDAY</span>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="second-bg has-text-white is-flex is-flex-direction-column is-justify-content-center is-align-items-center pt-4 pb-4">
                                            <h4 className="title is-size-6o5 has-text-weight-light has-text-white mb-3">CHECK-OUT</h4>
                                            <p className="title is-size-1 has-text-weight-light mb-3 has-text-white">16</p>
                                            <span className="title is-size-7 mt-0 has-text-white mb-1 has-text-weight-light is-italic">Dec, 2020</span>
                                            <span className="title is-size-7 has-text-white has-text-weight-light">WEDNESDAY</span>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="second-bg has-text-white is-flex is-flex-direction-column is-justify-content-center is-align-items-center pt-4 pb-4">
                                            <p className="title is-size-3 has-text-weight-light mb-3 has-text-white">2</p>
                                            <span className="title is-size-7 has-text-white has-text-weight-light">GUESTS</span>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="second-bg has-text-white is-flex is-flex-direction-column is-justify-content-center is-align-items-center pt-4 pb-4">
                                            <p className="title is-size-3 has-text-weight-light mb-3 has-text-white">12</p>
                                            <span className="title is-size-7 has-text-white has-text-weight-light">NIGHTS</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="second-bg p-5">
                                    <div className="is-flex is-justify-content-center mt-3 mb-3">
                                        <div className="mtb-auto">
                                            <h1 className="title is-size-1 has-text-white has-text-weight-light">2880</h1>
                                        </div>
                                        <div className="ml-3 mtb-auto">
                                            <span className="title is-size-6o5 has-text-weight-light has-text-white">$</span>
                                            <br />
                                            <span className="title is-size-6o5 has-text-weight-light has-text-white">/ TOTAL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-two-thirds">
                        <div className="pb-6 border-b">
                            <HeaderFive text="Add Extra Services: " />
                            <div className="columns is-multiline pt-5 pb-5">
                                {[0, 1, 2, 3, 4, 5].map(checkes => (
                                    <div className="column is-half pt-1 pb-1"><Checkbox addClasses="mb-0"><strong>Wifi:</strong> 100 $ ( Room / Night ) = 1200 $</Checkbox></div>

                                ))}
                            </div>
                        </div>
                        <div className="pt-6 pb-6">
                            <HeaderFive text="Add Your Informations: " />
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </Section>
        </PageLayout>
    )
}

export default BookingPage
