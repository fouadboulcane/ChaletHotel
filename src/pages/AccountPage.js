import React from 'react'
import Button from '../components/form/Button'
import InputWithLabel from '../components/form/InputWithLabel'
import Section from '../components/Section'
import PageLayout from '../layouts/PageLayout'

const AccountPage = () => {
    return (
        <PageLayout title="ACCOUNT">
            <Section>
                <div className="columns">
                    <div className="column">
                        <div className="border-all p-4">
                            <span className="tag main-bg is-radiusless has-text-white">ALREADY A MEMBER</span>
                            <h3 className="title is-size-5 has-text-weight-normal grey-color mt-3 mb-4">Log In</h3>
                            <form action="">
                                <InputWithLabel type="text" label="Username" placeholder="" />
                                <InputWithLabel type="text" label="Password" placeholder="" />
                                <InputWithLabel type="checkbox" label="Remember Me" />
                                <Button text="LOG IN" fullWidth />
                            </form>
                        </div>

                    </div>
                    <div className="column">
                        <div className="border-all p-4">
                            <span className="tag main-bg is-radiusless has-text-white">I DO NOT HAVE AN ACCOUNT</span>
                            <h3 className="title is-size-5 has-text-weight-normal grey-color mt-3 mb-4">Register</h3>
                            <form action="">
                                <InputWithLabel type="text" label="Username" placeholder="" />
                                <InputWithLabel type="text" label="Password" placeholder="" />
                                <InputWithLabel type="text" label="Email" placeholder="" />
                                <InputWithLabel type="text" label="First Name" placeholder="" />
                                <InputWithLabel type="text" label="Last Name" placeholder="" />
                                <InputWithLabel type="text" label="Nickname" placeholder="" />
                                <InputWithLabel type="textarea" label="About/Bio" placeholder="" />
                                <Button text="REGISTER" fullWidth />
                            </form>
                        </div>
                    </div>
                </div>
            </Section>
        </PageLayout>
    )
}

export default AccountPage
