import React from 'react'

const Checkbox = ({ addClasses, children }) => {

    return (
        <div className={`control ${addClasses}`}>
            <label className="checkbox">
                <input type="checkbox" className="mr-2" />
                <label className="text-left mb-1 is-size-6o5 low-color">{children}</label>
            </label>
        </div>
    )
}

export default Checkbox
