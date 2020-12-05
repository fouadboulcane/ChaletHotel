import React from 'react'
import HeaderFive from '../typos/HeaderFive'

const SidebarBox = ({ children, title }) => {
    return (
        <section className="section pt-5 pb-5">
            <HeaderFive text={title} />
            {children}
        </section>
    )
}

export default SidebarBox
