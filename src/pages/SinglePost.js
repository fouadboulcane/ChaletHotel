import React from 'react'
import Button from '../components/form/Button'
import Input from '../components/form/Input'
import InputWithLabel from '../components/form/InputWithLabel'
import Section from '../components/Section'
import SidebarBox from '../components/sidebar/SidebarBox'
import HeaderFive from '../components/typos/HeaderFive'
import PageLayout from '../layouts/PageLayout'

const SinglePost = () => {
    return (
        <PageLayout title="SINGLE POST">
            <Section>
                <div className="columns">
                    <div className="column is-two-thirds">
                        <div className="has-background-success">
                            <h3>Our Latest Rooms</h3>
                            <p>Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus. Vivamus bibendum nibh in dolor pharetra, a euismod nulla dignissim. Aenean viverra tincidunt nibh, in imperdiet nunc. Suspendisse eu ante pretium, consectetur leo at, congue quam. Nullam hendrerit porta ante vitae tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ligula libero, feugiat faucibus mattis eget, pulvinar et ligula.</p>
                        </div>

                        <div class="tags">
                            <span class="tag is-white border-all low-color">One</span>
                            <span class="tag is-white border-all low-color">Two</span>
                            <span class="tag is-white border-all low-color">Three</span>
                        </div>
                        <div className="border-t pt-6 mt-6">
                            <HeaderFive text="2 Comments" />
                            {[0, 1].map(sec => (
                                <div className="comment pt-5 pb-5">
                                    <div className="columns">
                                        <figure className="image is-32x32 ml-3">
                                            <img src="http://picsum.photos/32/32" className="is-rounded" alt="" />
                                        </figure>
                                        <p className="mtb-auto ml-3">nicdark <span >says:</span></p>
                                    </div>
                                    <span className="is-size-6o5 has-text-weight-light low-color mb-3">July 21, 2017 at 1:57 pm</span>
                                    <p className="is-size-6o5 has-text-weight-light low-color mb-3">Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum.</p>
                                    <span className="tag main-bg is-radiusless has-text-white">REPLY</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t pt-6 mt-6">
                            <HeaderFive text="Leave a Reply" />
                            <span className="is-size-6o5 has-text-weight-light low-color mb-3">Your email address will not be published. Required fields are marked *</span>
                            <form action="" className="mt-4">
                                <InputWithLabel type="textarea" label="Comment" />
                                <InputWithLabel type="text" label="Name*" />
                                <InputWithLabel type="text" label="Email*" />
                                <InputWithLabel type="checkbox" label="Save my name, email, and website in this browser for the next time I comment." />
                                <Button text="Post Comment" />
                            </form>
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div className="main-bg">Two</div>
                        <SidebarBox title="Best Rooms">
                            {[0, 1, 2].map(article => (
                                <div className="pt-2 pb-2">
                                    <div className="columns">
                                        <div className="column is-one-third">
                                            <figure className="image is-96x96">
                                                <img src="http://picsum.photos/96/96" alt="" />
                                            </figure>
                                        </div>
                                        <div className="column is-flex is-flex-direction-column is-justify-content-space-evenly">
                                            <h3 className="is-size-6 has-text-weight-light grey-color">Small Room</h3>
                                            <p className="is-size-6o5 has-text-weight-light low-color mb-3">From 30$ per night</p>
                                            <div>
                                                <span className="tag main-bg is-radiusless has-text-white">BOOK NOW</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </SidebarBox>
                        <SidebarBox title="Search">
                            <Input />
                            <Button text="SEARCH" />
                        </SidebarBox>
                        <SidebarBox title="Categories">
                            <div>
                                <p className="is-size-6o5 has-text-weight-light low-color pt-3 pb-3">Around Us</p>
                                <p className="is-size-6o5 has-text-weight-light low-color pt-3 pb-3 border-t">Luxury Hotels</p>
                                <p className="is-size-6o5 has-text-weight-light low-color pt-3 pb-3 border-t">News</p>
                            </div>
                        </SidebarBox>
                        <SidebarBox title="Our Branches">
                            {[0, 1].map(article => (
                                <div className="pt-2 pb-2">
                                    <div className="columns">
                                        <div className="column is-one-third">
                                            <figure className="image is-96x96">
                                                <img src="http://picsum.photos/96/96" alt="" />
                                            </figure>
                                        </div>
                                        <div className="column is-flex is-flex-direction-column is-justify-content-space-evenly">
                                            <h3 className="is-size-6 has-text-weight-light grey-color">Small Room</h3>
                                            <p className="is-size-6o5 has-text-weight-light low-color mb-3">From 30$ per night</p>
                                            <div>
                                                <span className="tag main-bg is-radiusless has-text-white">BOOK NOW</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </SidebarBox>
                    </div>
                </div>
            </Section>
        </PageLayout>
    )
}

export default SinglePost
