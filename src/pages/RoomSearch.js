import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RoomBox from '../components/RoomBox'
import Section from '../components/Section'
import PageLayout from '../layouts/PageLayout'

const RoomSearch = () => {
    const [visibility, setVisibility] = useState(false)

    const visibilityClass = visibility ? '' : 'hidden'
    const flipClass = visibility ? 'flip' : ''
    return (
        <PageLayout title="ROOMS">
            <Section>
                <div className="columns">
                    <div className="column is-one-third">
                        <figure className="image is-square mb-5 ">
                            <img src="/images/parallax8.jpg" />
                        </figure>

                        <div className="mt-3">
                            <div className="border-t pt-5 pb-5">
                                <input class="slider is-fullwidth is-large" step="1" min="0" max="100" value="50" type="range" />
                            </div>
                            <div className="border-t">
                                <div className="is-flex pt-5 pb-5" onClick={() => setVisibility(!visibility)}>
                                    <h3>Services: </h3>
                                    <p className="navbar-end mr-4"> <img src="/images/icon-down-arrow-grey.svg" className={flipClass} width="12px" alt="" /> </p>
                                </div>
                                <div className={`col-count-2 mt-5 mb-5 ${visibilityClass}`}>
                                    {[0, 1, 2, 3].map(inp => (

                                        <label class="checkbox mb-2 low-color">
                                            <input type="checkbox" className="mr-2" />
                                                King Beds
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="border-t pt-5 pb-5">
                                <h3>Extra Services:</h3>
                            </div>
                        </div>
                    </div>
                    <div className="column is-two-thirds">
                        <div className="columns is-multiline">
                            {[0, 1, 2, 3, 4].map(i => (
                                <div className="column is-half">
                                    <RoomBox withFooter />
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </PageLayout>
    )
}

export default RoomSearch
