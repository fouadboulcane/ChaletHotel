import React from 'react'


const InputWithLabel = ({ type, label, register, error, ...inputProps }) => {
    error && console.log(error)
    if (type === 'text') {
        return (
            <div className="control mb-2">
                <label className="text-left mb-1 is-size-6o5 low-color">{label}</label>
                <input
                    className="input mt-1 is-radiusless pl-4 pr-4 custom-input"
                    type="text"
                    ref={register}
                    style={{ borderColor: error && "red" }}
                    {...inputProps}
                />
                <span className="has-text-danger title is-size-7 has-text-weight-light">{error && error.message}</span>
            </div>
        )
    }
    if (type === 'textarea') {
        return (
            <div className="control mb-2">
                <label className="text-left low-color">{label}</label>
                <textarea
                    ref={register}
                    className="textarea mt-2 is-radiusless pl-4 pr-4 custom-input"
                    style={{ borderColor: error && "red" }}
                    {...inputProps}
                >
                </textarea>
            </div>
        )
    }

    if (type === 'checkbox') {
        return (
            <div className="control mt-2">
                <label className="checkbox">
                    <input
                        type="checkbox"
                        className="mr-2"
                        ref={register}
                        {...inputProps}
                    />
                    <label className="text-left mb-1 is-size-6o5 low-color">{label}</label>
                </label>
            </div>
        )
    }
}

export default InputWithLabel
