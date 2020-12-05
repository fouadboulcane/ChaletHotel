
import React, { useState } from 'react'
import Button from './form/Button'

const SignUp = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('user' + email + ' successfully signed up')
    }

    return (
        <form className="is-flex mt-4" onSubmit={handleSubmit}>
            <div className="control is-flex-grow-1">
                <input className="input is-hovered custom-input is-radiusless" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {/* <Button text="SUBSCRIBE" noMtop /> */}
            <button className="button is-borderless second-bg is-radiusless has-text-white" type="submit">SUBSCRIBE</button>
        </form>
    )
}

export default SignUp