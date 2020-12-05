import React from 'react'
import Section from '../components/Section'
import Paragraph from '../components/typos/Paragraph'
import MainLayout from '../layouts/MainLayout'

const NotFound = () => {
    return (
        <MainLayout>
            <Section>
                <div className="hero is-medium has-text-centered">
                    <div className="hero-body">
                        <h1 className="title is-size-1 grey-color mb-1">404</h1>
                        <Paragraph>That page can not be found</Paragraph>
                    </div>
                </div>
            </Section>
        </MainLayout>
    )
}

export default NotFound
