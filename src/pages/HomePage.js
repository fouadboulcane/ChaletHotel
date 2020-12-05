import React, { useState } from 'react'
import ArticleBox from '../components/ArticleBox'
import Button from '../components/form/Button'
import Input from '../components/form/Input'
import InputWithLabel from '../components/form/InputWithLabel'
import RoomBox from '../components/RoomBox'
import PreTitle from '../components/typos/PreTitle'
import MainLayout from '../layouts/MainLayout'
import Paragraph from '../components/typos/Paragraph'
import HeaderFive from '../components/typos/HeaderFive'
import CustomDatepicker from '../components/CustomDatepicker'

const HomePage = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const toDayAndMonth = (aDate) => {
        const stringit = aDate.toString().split(' ')
        return stringit
    }
    // const stos = startDate.toString()
    // const day = stos.split(" ")[2]
    // const month = stos.split(" ")[1]
    console.log(toDayAndMonth(startDate))

    return (
        <MainLayout>
            <section className="hero is-medium has-background-grey-lighter">
                <div className="container is-max-widescreen">
                    <div className="hero-body">
                        Hello
                    </div>
                </div>
            </section>


            <section className="section pt-3 has-background-primary">
                <div className="container is-max-widescreen">
                    <div className="columns">
                        <div className="column is-one-quarter main-bg p-5">
                            <h4 className="title is-size-5 mb-0 has-text-white has-text-weight-normal">Quote Post</h4>
                            <p className="title mt-2 is-size-6o5 lineheight-md has-text-weight-light has-text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, molestiae. Soluta, asperiores.</p>
                            <button className="btn-v2 pt-2 pb-2 pl-4 pr-4">READ MORE</button>
                        </div>
                        <div className="column is-one-quarter second-bg p-5">
                            <h4 className="title is-size-5 mb-0 has-text-white has-text-weight-normal">Quote Post</h4>
                            <div className="is-flex is-flex-direction-column is-justify-content-space-around mt-4">
                                <p className="title is-size-6o5 has-text-weight-light mt-2 has-text-white pt-3 pb-3">Check-In <span className="is-pulled-right">14 - 19:00</span></p>
                                <p className="title is-size-6o5 has-text-weight-light mt-2 has-text-white pt-3 pb-3">Check-Out <span className="is-pulled-right">8 - 12:00</span></p>
                            </div>
                        </div>
                        <div className="column is-half has-background-white is-flex is-flex-direction-column is-justify-content-center">
                            <div className="columns is-flex is-align-content-center">
                                <div className="column">
                                    <div className="columns mtb-auto">
                                        <div className="column is-one-third has-text-centered">
                                            <Paragraph>CHECK-IN</Paragraph>
                                            <div className="is-flex is-justify-content-space-around">
                                                <div className="is-flex">
                                                    <div className="mr-1">
                                                        <span className="title is-size-2 grey-color">{toDayAndMonth(startDate)[2]}</span>
                                                    </div>
                                                    <div className="">
                                                        <span className="title is-size-6o5 has-text-weight-light grey-color">{toDayAndMonth(startDate)[1]}</span>
                                                        <p className="m-0">
                                                            <CustomDatepicker onChange={date => setStartDate(date)} />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column is-one-third has-text-centered border-l">
                                            <Paragraph>CHECK-OUT</Paragraph>
                                            <div className="is-flex is-justify-content-space-around">
                                                <div className="is-flex">
                                                    <div className="mr-1">
                                                        <span className="title is-size-2 grey-color">{toDayAndMonth(endDate)[2]}</span>
                                                    </div>
                                                    <div>
                                                        <span className="title is-size-6o5 has-text-weight-light grey-color">{toDayAndMonth(endDate)[1]}</span>
                                                        <p className="m-0 has-text-centered">
                                                            <CustomDatepicker onChange={date => setEndDate(date)} />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column is-one-third border-l has-text-centered">
                                            <Paragraph>GUESTS</Paragraph>
                                            <div className="is-flex is-justify-content-space-around">
                                                <div className="is-flex">
                                                    <div className="mr-1">
                                                        <span className="title is-size-2 grey-color">1</span>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="m-0 has-text-centered">
                                                            <img src="/images/icon-down-arrow-grey.svg" width="13px" alt="" className="flip" />
                                                        </p>
                                                        <p className="m-0 has-text-centered">
                                                            <img src="/images/icon-down-arrow-grey.svg" width="13px" alt="" />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-one-quarter is-flex is-justify-content-center">
                                    <figure class="image is-128x128 has-background-danger">
                                        <img src="http://picsum.photos/128/128" />
                                        <div className="is-overlay overlayer-center has-text-centered has-text-white">Check Availability</div>
                                    </figure>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="section pt-5 pb-6">
                <div className="container is-max-widescreen">
                    <div className="section-category has-text-centered">
                        <h6 className="title is-size-7 has-text-weight-light mb-0 grey-color">LUXURY HOTELS</h6>
                        <hr className="section-category__underline mt-2 mb-1 mlr-auto" />
                    </div>
                    <h4 className="title is-size-3 mt-4 has-text-centered grey-color">Best Rooms</h4>
                    <div class="columns">
                        <div class="column is-half">
                            <div className="card is-radiusless is-shadowless border-all">
                                <div className="card-image">
                                    <figure class="image is-16by9">
                                        <img src="/images/room5.jpg" />
                                        <div className="is-overlay overlayer">
                                            <h5 className="title is-size-6o5 has-text-white ml-5 mb-5 has-text-weight-light">HOTEL ROME</h5>
                                        </div>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <h5 className="title is-size-4 has-text-weight-light grey-color mb-1">Small Room</h5>
                                    <div className="is-flex grey-color title is-size-6o5 has-text-weight-light mt-2">
                                        <img src="/images/icon-user-grey.svg" width="22px" className="mr-2" />
                                        <p className="mt-1 mr-3">1 Guests</p>
                                        <img src="/images/icon-plan-grey.svg" width="22px" className="mr-2" />
                                        <p className="mt-1">15 ft²</p>
                                    </div>
                                    {/* <p className="grey-color title is-size-6o5 has-text-weight-light"><img src="/images/icon-user-grey.svg" width="22px" className="mr-2 mt-2" /><span>1 Guests</span> <span className="ml-2">15 ft</span></p> */}
                                    <p className="title mt-3 is-size-6o5 low-color lineheight-md has-text-weight-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem est repudiandae ad beatae, totam vero.</p>
                                    <button className="mybtn p-3 pl-5 pr-5">BOOK NOW FROM 30$</button>
                                </div>
                            </div>
                        </div>
                        <div class="column is-half">
                            <div className="columns">
                                <div className="column">
                                    <figure class="image is-1by1">
                                        <img src="/images/room4.jpg" />
                                        <div className="is-overlay overlayer">
                                            <h5 className="title is-size-6o5 has-text-white ml-5 mb-5 has-text-weight-light">HOTEL ROME</h5>
                                        </div>
                                    </figure>
                                </div>
                                <div className="column">
                                    <figure class="image is-1by1">
                                        <img src="/images/room5.jpg" />
                                        <div className="is-overlay overlayer">
                                            <h5 className="title is-size-6o5 has-text-white ml-5 mb-5 has-text-weight-light">HOTEL ROME</h5>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <figure class="image is-1by1">
                                        <img src="/images/room6.jpg" />
                                        <div className="is-overlay overlayer">
                                            <h5 className="title is-size-6o5 has-text-white ml-5 mb-5 has-text-weight-light">HOTEL ROME</h5>
                                        </div>
                                    </figure>
                                </div>
                                <div className="column">
                                    <figure class="image is-1by1">
                                        <img src="/images/room2.jpg" />
                                        <div className="is-overlay overlayer">
                                            <h5 className="title is-size-6o5 has-text-white ml-5 mb-5 has-text-weight-light">HOTEL ROME</h5>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section p-0">
                <figure className="image is-2by1">
                    <img src="/images/parallax8.jpg" alt="" />
                    <div className="is-overlay">
                        <div className="container is-max-widescreen pt-6 pb-6">
                            <div className="columns is-desktop is-vcentered pt-5">
                                <div className="column is-three-fifths has-text-centered">
                                    <div className="column is-four-fifths mlr-auto">
                                        <h5 className="title is-size-6 mb-0 has-text-white has-text-weight-light">NEW OPENING SOON</h5>
                                        <h4 className="title is-size-2 mt-1 has-text-white">Restaurant</h4>
                                        <div className="columns mt-3">
                                            <div className="column">
                                                <p className="title is-size-3 has-text-weight-light grey-color mb-0 has-text-white">000</p>
                                                <button className="is-borderless has-background-white main-color pl-2 pr-2 mt-5">DAYS</button>
                                            </div>
                                            <div className="column">
                                                <p className="title is-size-3 has-text-weight-light grey-color mb-0 has-text-white">00</p>
                                                <button className="is-borderless has-background-white main-color pl-2 pr-2 mt-5">DAYS</button>
                                            </div>
                                            <div className="column">
                                                <p className="title is-size-3 has-text-weight-light grey-color mb-0 has-text-white">00</p>
                                                <button className="is-borderless has-background-white main-color pl-2 pr-2 mt-5">DAYS</button>
                                            </div>
                                            <div className="column">
                                                <p className="title is-size-3 has-text-weight-light grey-color mb-0 has-text-white">000</p>
                                                <button className="is-borderless has-background-white main-color pl-2 pr-2 mt-5">DAYS</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-two-fifths">
                                    <div className="card">
                                        <div className="card-content p-0">
                                            <div className="has-text-centered pt-5 pb-5 lightgrey-bg">
                                                <span className="tag main-bg is-radiusless has-text-white">BOOK NOW</span>
                                                <h5 className="title is-size-4 grey-color mt-1">Contact Us</h5>
                                            </div>
                                            <form className="p-6">
                                                <InputWithLabel type="text" label="Name" placeholder="" />
                                                <InputWithLabel type="text" label="Email" placeholder="" />
                                                <InputWithLabel type="textarea" label="Message" placeholder="" />
                                                <Button text="SEND NOW" fullWidth />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </figure>
            </section>

            <section className="section">
                <div className="container is-max-widescreen">
                    <div className="columns">
                        <div className="column is-one-third">
                            <div className="columns">
                                <div className="column">
                                    <figure className="image is-48x48">
                                        <img src="/images/icon-14-1.png" alt="" />
                                    </figure>
                                </div>
                                <div className="column is-four-fifths">
                                    <h4 className="title is-size-4 has-text-weight-light grey-color">Lorem Ipsum</h4>
                                    <p className="title is-size-6o5 lineheight-md has-text-weight-light low-color">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In enim, error impedit ipsum id magnam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <div className="columns">
                                <div className="column">
                                    <figure className="image is-48x48">
                                        <img src="/images/icon-13.png" alt="" />
                                    </figure>
                                </div>
                                <div className="column is-four-fifths">
                                    <h4 className="title is-size-4 has-text-weight-light grey-color">Lorem Ipsum</h4>
                                    <p className="title is-size-6o5 lineheight-md has-text-weight-light low-color">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In enim, error impedit ipsum id magnam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <div className="columns">
                                <div className="column">
                                    <figure className="image is-48x48">
                                        <img src="/images/icon-11.png" alt="" />
                                    </figure>
                                </div>
                                <div className="column is-four-fifths">
                                    <h4 className="title is-size-4 has-text-weight-light grey-color">Lorem Ipsum</h4>
                                    <p className="title is-size-6o5 lineheight-md has-text-weight-light low-color">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In enim, error impedit ipsum id magnam.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="section pt-6 pb-6">
                <div className="container is-max-widescreen">
                    <PreTitle title="LUXURY HOTELS" centered />
                    <h4 className="title is-size-3 mt-4 has-text-centered grey-color">Best Rooms</h4>
                    <div class="columns">
                        <div className="column">
                            <ArticleBox
                                article_image="/images/blog1.jpg"
                                pretitle="LUXURY HOTEL"
                                title="New Website"
                                excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi animi ullam sequi hic quaerat reiciendis."
                                button_text="READ MORE"
                                button_link="#"
                            />
                            <figure class="image is-3by2 mt-5">
                                <img src="" />
                                <div className="is-overlay main-bg columns is-gapless is-vcentered is-justify-content-center p-7">
                                    <div className="column has-text-centered mtb-middle">
                                        <figure className="image is-24x24 mlr-auto">
                                            <img src="/images/icon-link-2-white.svg" alt="" />
                                        </figure>
                                        <h5 className="has-text-white title is-size-4 has-text-weight-light mt-3 lt-spacing">Check New <br /> Events</h5>
                                    </div>
                                </div>
                            </figure>
                        </div>
                        <div className="column">
                            <figure class="image is-3by2 mb-5">
                                <img src="" />
                                <div className="is-overlay main-bg  columns is-gapless is-vcentered is-justify-content-center p-7">
                                    <div className="column has-text-centered mtb-middle">
                                        <h5 className="has-text-white title is-size-4 has-text-weight-light">Follow our Resort <br /> Luxury Hotels</h5>
                                        <hr className="section-category__underline mlr-auto" />
                                        <p className="has-text-white mt-3">JOHN DOE</p>
                                    </div>
                                </div>
                            </figure>
                            <ArticleBox
                                article_image="/images/blog2.jpg"
                                pretitle="LUXURY HOTEL"
                                title="Around Us"
                                excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi animi ullam sequi hic quaerat reiciendis."
                                button_text="READ MORE"
                                button_link="#"
                            />
                        </div>
                        <div className="column">
                            <figure class="image is-4by5">
                                <img src="/images/blog3.jpg" />
                                <div className="is-overlay overlayer">
                                    <h5 className="title is-size-6o5 has-text-white ml-5 mb-5 has-text-weight-light">
                                        <div className="section-category">
                                            <h6 className="title is-size-7 has-text-weight-light mb-0 has-text-white">LUXURY HOTEL</h6>
                                            <hr className="section-category__underline mt-2 mb-1" />
                                        </div>
                                        <h5 className="has-text-white title is-size-4 has-text-weight-light mt-4">Around Us</h5>
                                        <a className="has-text-white mt-2 title is-size-7 has-text-weight-light">READ MORE</a>
                                    </h5>
                                </div>
                            </figure>
                            <figure class="image is-5by4 mt-5">
                                <img src="/images/blog4.jpg" />
                                <div className="is-overlay overlayer">
                                    <h5 className="title is-size-6o5 has-text-white ml-5 mb-5 has-text-weight-light">
                                        <div className="section-category">
                                            <h6 className="title is-size-7 has-text-weight-light mb-0 has-text-white">LUXURY HOTEL</h6>
                                            <hr className="section-category__underline mt-2 mb-1" />
                                        </div>
                                        <h5 className="has-text-white title is-size-4 has-text-weight-light mt-4">Around Us</h5>
                                        <a className="has-text-white mt-2 title is-size-7 has-text-weight-light">READ MORE</a>
                                    </h5>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section second-bg">
                <div className="container is-max-widescreen">
                    <div className="columns text-center">
                        <div className="column"><img src="/images/wordpress.png" /></div>
                        <div className="column"><img src="/images/webflow.png" /></div>
                        <div className="column"><img src="/images/mailchimp.png" /></div>
                        <div className="column"><img src="/images/envato.png" /></div>
                        <div className="column"><img src="/images/themeforest.png" /></div>
                        <div className="column"><img src="/images/tuts.png" /></div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default HomePage
