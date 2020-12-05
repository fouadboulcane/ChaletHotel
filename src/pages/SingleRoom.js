import React from 'react'
import Button from '../components/form/Button'
import Input from '../components/form/Input'
import RoomBox from '../components/RoomBox'
import RoomSidebarBox from '../components/RoomSidebarBox'
import Section from '../components/Section'
import SidebarBox from '../components/sidebar/SidebarBox'
import HeaderFour from '../components/typos/HeaderFour'
import Paragraph from '../components/typos/Paragraph'
import PageLayout from '../layouts/PageLayout'

const room_infos = [
    {
        image_link: '/images/icon-user-grey.svg',
        text: '1 Guests'
    },
    {
        image_link: '/images/icon-plan-grey.svg',
        text: '15 Ft²'
    },
    {
        image_link: '/images/icon-bed-grey.svg',
        text: '30 $ / PER NIGHT'
    },
    {
        image_link: '/images/icon-calendar-grey.svg',
        text: 'WEEK PRICE'
    },
]

const SingleRoom = () => {

    const room_services = [
        {
            icon: '/images/icon-14-1.png',
            name: 'Swimming Pool'
        },
        {
            icon: 'images/icon-18.png',
            name: 'Television'
        },
        {
            icon: 'images/icon-14.png',
            name: 'No Smoking'
        },
        {
            icon: 'images/icon-10.png',
            name: 'Private Bathroom'
        },
    ]
    return (
        <PageLayout title="SINGLE ROOM">
            <Section>
                <div className="columns border-b">
                    <div className="column is-two-thirds">
                        <div className="main-bg">Two</div>
                        <div className="columns mt-3 pt-4 pb-4 border-b">
                            {room_infos.map(info => (
                                <div className="column is-one-fourth has-text-centered">
                                    <figure className="image is-48x48 mlr-auto">
                                        <img src={info.image_link} alt="" />
                                    </figure>
                                    <Paragraph>{info.text}</Paragraph>
                                </div>
                            ))}
                        </div>
                        <div className="pt-4 pb-4 border-b">
                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel molestie nisl. Duis ac mi leo. Mauris at convallis erat. Aliquam interdum semper luctus. Aenean ex tellus, gravida ut rutrum dignissim, malesuada vitae nulla. Sed viverra, nisl dapibus lobortis porttitor, risus risus dictum risus, sed rhoncus orci urna dignissim leo. Cras id nunc nulla. Aliquam a tortor fermentum, finibus elit ac, dictum purus. Nulla mollis ex interdum commodo luctus. In hac habitasse platea dictumst. Quisque vel rutrum ipsum. Praesent at imperdiet diam. Ut vel vulputate massa. Duis condimentum tincidunt tristique. Donec sollicitudin efficitur venenatis. Integer ex lectus, lobortis nec cursus ac, suscipit ut magna.
                            </Paragraph>
                        </div>
                        <div className="pt-6 pb-6 border-b">
                            <HeaderFour text="Room Services" />
                            <div className="columns is-multiline mt-2">
                                {room_services.map(service => (
                                    <div className="column is-one-third is-flex">
                                        <figure className="image is-32x32 mr-3 mt-1">
                                            <img src={service.icon} alt="" />
                                        </figure>
                                        <Paragraph>{service.name}</Paragraph>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pt-6 pb-6">
                            <HeaderFour text="Around The Hotel" />
                            <div className="columns">
                                {[0, 1, 2].map(item => (
                                    <div className="column is-one third">
                                        <figure className="image is-3by4">
                                            <img src="images/square2.jpg" alt="" />
                                            <div className="is-overlay overlayer">
                                                <h5 className="title is-size-6o5 has-text-white ml-5 mb-5 has-text-weight-light">HOTEL ROME</h5>
                                            </div>
                                        </figure>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div className="main-bg">Two</div>
                        <SidebarBox title="Best Rooms">
                            {[0, 1, 2].map(article => (
                                <RoomSidebarBox />
                            ))}
                        </SidebarBox>
                        <SidebarBox title="Search">
                            <Input />
                            <Button text="SEARCH" />
                        </SidebarBox>
                        <SidebarBox title="Categories">
                            <div>
                                <p className="is-size-6o5 has-text-weight-light low-color pt-3 pb-3">Around Us</p>
                                <p className="is-size-6o5 has-text-weight-light low-color pt-3 pb-3 border-t">Luxury Hotels</p>
                                <p className="is-size-6o5 has-text-weight-light low-color pt-3 pb-3 border-t">News</p>
                            </div>
                        </SidebarBox>
                        <SidebarBox title="Branches">
                            {[0, 1].map(article => (
                                <RoomSidebarBox />
                            ))}
                        </SidebarBox>
                    </div>
                </div>
            </Section>
            <Section>
                <HeaderFour text="Similar Rooms" />
                <div className="columns">
                    {[0, 1, 2].map(recom => (
                        <div className="column is-one-third">
                            <RoomBox />
                        </div>
                    ))}
                </div>
            </Section>
        </PageLayout>
    )
}

export default SingleRoom
