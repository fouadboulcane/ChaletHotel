import React from 'react'
import Button from '../components/form/Button'
import InputWithLabel from '../components/form/InputWithLabel'
import Section from '../components/Section'
import HeaderFour from '../components/typos/HeaderFour'
import PreTitle from '../components/typos/PreTitle'
import PageLayout from '../layouts/PageLayout'

const ContactPage = () => {
    return (
        <PageLayout title="CONTACT">
            <Section>
                <div className="columns">
                    <div className="column is-half">
                        <div>
                            <HeaderFour text="Drop us a line" />
                            <p className="is-size-6o5 has-text-weight-light low-color mb-3 lineheight-md">Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus. Vivamus bibendum nibh in dolor pharetra, a euismod nulla dignissim.</p>
                            <form action="" className="mt-4">
                                <InputWithLabel type="text" label="Name" />
                                <InputWithLabel type="text" label="Email" />
                                <InputWithLabel type="textarea" label="Message" />
                                <Button text="SEND NOW" />
                            </form>
                        </div>
                    </div>
                    <div className="column is-half">
                        <div>
                            <div className="section main-bg"></div>
                            <div className="columns">
                                <div className="column">
                                    <p className="is-size-6o5 has-text-weight-light low-color pt-3 pb-3 is-flex is-flex-direction-row is-justify-content-space-between">Address<span className="">Avenue 234</span></p>
                                    <p className="is-size-6o5 has-text-weight-light low-color pt-3 pb-3 border-t is-flex is-flex-direction-row is-justify-content-space-between">City<span>New York - US</span></p>
                                    <p className="is-size-6o5 has-text-weight-light low-color pt-3 pb-3 border-t is-flex is-flex-direction-row is-justify-content-space-between">Check-in<span>15:00 am</span></p>
                                </div>
                                <div className="column">
                                    <p className="is-size-6o5 has-text-weight-light low-color pt-3 pb-3 is-flex is-flex-direction-row is-justify-content-space-between">Phone<span>00 837920234</span></p>
                                    <p className="is-size-6o5 has-text-weight-light low-color pt-3 pb-3 border-t is-flex is-flex-direction-row is-justify-content-space-between">Email<span>info@hotel.com</span></p>
                                    <p className="is-size-6o5 has-text-weight-light low-color pt-3 pb-3 border-t is-flex is-flex-direction-row is-justify-content-space-between">Check-out<span>11:00 am</span></p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <PreTitle title="AVAILABLE AT 10AM – 8PM" />
                                <h2 className="title is-size-1 grey-color mt-4">+ 202 555 0116</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </PageLayout>
    )
}

export default ContactPage
