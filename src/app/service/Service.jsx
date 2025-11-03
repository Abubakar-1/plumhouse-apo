import Link from 'next/link'
import React from 'react'

function ServiceFive() {
    return (
        <>
            {/* service */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row">
                        <div className="service__list">
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <i className="flaticon-24-hours" />
                                </div>
                                <Link href="#" className="h6">
                                    24-Hour Security
                                </Link>
                                <p>
                                    A 24-hour security service provides and surveillance, properties,
                                    or sensitive information around the clock.
                                </p>
                            </div>
                            {/* single service item end */}
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <i className="flaticon-wifi" />
                                </div>
                                <Link href="#" className="h6">
                                    Free Wifi
                                </Link>
                                <p>
                                    Free Wi-Fi has become an essential service in our increasingly
                                    connected world. It by people to access the internet
                                </p>
                            </div>
                            {/* single service item end */}
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <i className="flaticon-gym" />
                                </div>
                                <Link href="#" className="h6">
                                    Fitness Center
                                </Link>
                                <p>
                                    A fitness center is a vibrant and dynamic environment designed to
                                    promote health and Fitnee Center well-being.
                                </p>
                            </div>
                            {/* single service item end */}
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <i className="flaticon-plane" />
                                </div>
                                <Link href="#" className="h6">
                                    Airport transport
                                </Link>
                                <p>
                                    Airport transportation plays a crucial role in travel experiences
                                    for passengers. It various services, including taxis, ride-sharing
                                </p>
                            </div>
                            {/* single service item end */}
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <img
                                        src="/assets/images/icon/desk.svg"
                                        width={40}
                                        height={40}
                                        alt=""
                                    />
                                </div>
                                <Link href="#" className="h6">
                                    Work Desk
                                </Link>
                                <p>
                                    A well-organized work desk is more than just a place to complete
                                    tasks; it's a hub of productivity and creativity.
                                </p>
                            </div>
                            {/* single service item end */}
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <i className="flaticon-swimming" />
                                </div>
                                <Link href="#" className="h6">
                                    Swimming Pool
                                </Link>
                                <p>
                                    A swimming pool is a refreshing oasis, offering a place to cool
                                    off, relax, and enjoy various water activities.
                                </p>
                            </div>
                            {/* single service item end */}
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <img
                                        src="/assets/images/icon/bed.svg"
                                        width={40}
                                        height={40}
                                        alt=""
                                    />
                                </div>
                                <Link href="#" className="h6">
                                    Rooms and Suites
                                </Link>
                                <p>
                                    On-site security personnel and surveillance. from standard to
                                    luxury suites, Secure it is storage for valuables.
                                </p>
                            </div>
                            {/* single service item end */}
                            {/* single service item */}
                            <div className="service__item">
                                <div className="service__item__icon">
                                    <i className="flaticon-shower" />
                                </div>
                                <Link href="#" className="h6">
                                    Shower
                                </Link>
                                <p>
                                    The warm water cascaded down, enveloping a soothing as I stood in
                                    the shower. Each droplet danced on my skin, washing.
                                </p>
                            </div>
                            {/* single service item end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* service end */}
        </>

    )
}

export default ServiceFive