import React from 'react'
import Section from '../components/Section'
import PageLayout from '../layouts/PageLayout'

const AboutPage = () => {
    return (
        <PageLayout title="ABOUT US">
            <Section>
                <div className="columns">
                    <div className="column is-half pr-5">
                        <div className="has-text-right">
                            <h2 className="title is-size-2 main-color has-text-weight-light">Hello. Our hotel has been present for over 20 years. We make the best for all our customers</h2>
                        </div>
                    </div>
                    <div className="column is-half pl-5">
                        <div className="col-count-2 mt-2">
                            <p className="main-color">Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.
                            <br /><br />
                            Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.

                            Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.
                            <br /><br />
                            Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.</p>
                        </div>
                    </div>
                </div>

                <div className="columns mt-5">
                    <div className="column is-one-third">
                        <figure class="image is-1by1">
                            <img src="/images/square2.jpg" />
                            <div className="is-overlay overlayer">
                                <div className="mlr-auto has-text-centered pb-2">
                                    <h5 className="title is-size-5 has-text-white mb-3 has-text-weight-light">TOP RESTAURANT</h5>
                                    <h6 className="title is-size-7 has-text-white mb-5">BREAKFAST & DINNER</h6>
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div className="column is-one-third">
                        <figure class="image is-1by1">
                            <img src="/images/square4.jpg" />
                            <div className="is-overlay overlayer">
                                <div className="mlr-auto has-text-centered pb-2">
                                    <h5 className="title is-size-5 has-text-white mb-3 has-text-weight-light">SPA & WELLNESS</h5>
                                    <h6 className="title is-size-7 has-text-white mb-5">OPEN DAILY</h6>
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div className="column is-one-third">
                        <figure class="image is-1by1">
                            <img src="/images/square3.jpg" />
                            <div className="is-overlay overlayer">
                                <div className="mlr-auto has-text-centered pb-2">
                                    <h5 className="title is-size-5 has-text-white mb-3 has-text-weight-light">BEST SUITES</h5>
                                    <h6 className="title is-size-7 has-text-white mb-5">COOL VIEW</h6>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </Section>

            <div className="section is-small has-background-grey-lighter">
                <div className="container is-max-widescreen">
                    <div className="columns">
                        <div className="column is-two-fifths">
                            <h2 className="title is-size-2 has-text-white">Doing the right thing, at the right time.</h2>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <h2 className="title is-size-6 has-text-white">Doing the right thing, at the right time.</h2>
                        </div>
                    </div>
                </div>
            </div>

            <Section>
                <div className="columns">
                    <div className="column is-four-fifths mlr-auto">
                        <div className="columns">
                            <div className="column is-half">
                                <div className="columns">
                                    <div className="column is-2">
                                        <img src="https://picsum.photos/50/50" alt="" />
                                    </div>
                                    <div className="column has-background-primary pl-0 pt-0">
                                        <p className="title is-size-6o5 lineheight-md has-text-weight-light grey-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="columns">
                                    <div className="column is-2">
                                        <img src="https://picsum.photos/50/50" alt="" />
                                    </div>
                                    <div className="column pl-0">
                                        <p className="title is-size-6o5 lineheight-md has-text-weight-light grey-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </PageLayout>
    )
}

export default AboutPage
