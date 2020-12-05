import React from 'react'
import { Link } from 'react-router-dom'

const RoomBox = ({ withFooter }) => {
    return (

        <Link to="/">
            <div className="card is-shadowless is-radiusless border-all">
                <div className="card-image">
                    <figure className="image is-5by3">
                        <img src="/images/room1.jpg" />
                        <div className="is-overlay overlayer">
                            <h5 className="title is-size-6o5 has-text-white ml-5 mb-5 has-text-weight-light">HOTEL ROME</h5>
                        </div>
                    </figure>
                </div>
                <div className="card-content">
                    <h5 className="main-color title is-size-4 has-text-weight-light mb-3">New Website</h5>
                    <div className="is-flex grey-color title is-size-6o5 has-text-weight-light">
                        <img src="/images/icon-user-grey.svg" width="22px" className="mr-2" />
                        <p className="mt-1 mr-4">1 Guests</p>
                        <img src="/images/icon-plan-grey.svg" width="22px" className="mr-2" />
                        <p className="mt-1">15 ft²</p>
                    </div>
                    <p className="title mt-2 is-size-6 grey-color lineheight-md has-text-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi animi ullam sequi hic quaerat reiciendis.</p>
                    <button className="mybtn-reverse p-3 pl-5 pr-5">BOOK NOW FOR 30$</button>
                    {withFooter ? (
                        <div className="navbar border-t mt-4 pt-4">
                            <div className="is-flex grey-color title is-size-6o5 has-text-weight-light mt-2 mb-0">
                                <figure className="image image is-24x24 mr-3">
                                    <img src="/images/icon-14-1.png" className="mr-3" data-tooltip="Tooltip Text" />
                                </figure>
                                <figure className="image image is-24x24 mr-3">
                                    <img src="/images/icon-18.png" className="mr-3" />
                                </figure>
                                <figure className="image image is-24x24 mr-3">
                                    <img src="/images/icon-14.png" className="mr-3" />
                                </figure>
                                <figure className="image image is-24x24 mr-3">
                                    <img src="/images/icon-10.png" />
                                </figure>
                            </div>
                            <div className="navbar-end mt-4 mb-0">
                                <p className="title is-size-6o5 has-text-weight-light main-color is-flex">
                                    <p>FULL INFO</p>
                                </p>
                            </div>
                        </div>
                    ) : ''}
                </div>
            </div>
        </Link>

    )
}

export default RoomBox
