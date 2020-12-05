import React from 'react'

const Section = ({ children, addClasses, ...otherProps }) => {
    return (
        <section className={`section ${addClasses}`} {...otherProps}>
            <div className="container is-max-widescreen">
                {children}
            </div>
        </section>
    )
}

export default Section
