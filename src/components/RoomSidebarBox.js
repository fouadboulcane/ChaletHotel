import React from 'react'

const RoomSidebarBox = () => {
    return (
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
    )
}

export default RoomSidebarBox
