import React from 'react'

const PreTitle = ({ centered, title }) => {
    if (centered) {
        return (
            <div className="section-category has-text-centered">
                <h6 className="title is-size-7 has-text-weight-light mb-0 grey-color">{title}</h6>
                <hr className="section-category__underline mt-2 mb-1 mlr-auto" />
            </div>
        )
    } else {
        return (
            <div className="section-category">
                <h6 className="title is-size-7 has-text-weight-light mb-0 grey-color">{title}</h6>
                <hr className="section-category__underline mt-2 mb-1" />
            </div>
        )
    }
}

export default PreTitle
