import React from 'react'

const Button = ({ text, fullWidth, noMtop, ...otherProps }) => {
    const fullClass = fullWidth ? 'is-fullwidth' : ''
    const marginTop = noMtop ? '' : 'mt-5'
    return (
        <button className={`button ${marginTop} mybtn grey-bg is-radiusless ${fullClass}`} {...otherProps}>
            <h5 className="title is-size-7 has-text-weight-bold has-text-white">{text}</h5>
        </button>
    )
}

export default Button
