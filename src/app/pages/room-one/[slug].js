import { useRouter } from 'next/router';
import Link from 'next/link';
import Posts from '../../data/data-room.json'; // Adjust the path based on your project structure

const RoomDetailsMain = ({ roomPost }) => {
    const router = useRouter();

    // Show a loading state if the page is not yet generated
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {/* room details area */}
            <div className="rts__section single page__hero__height page__hero__bg no__shadow" >
                <img src={`${roomPost.bannerImg}`} alt="" />
            </div>
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row g-5 sticky-wrap">
                        <div className="col-xxl-8 col-xl-7">
                            <div className="room__details">
                                <span className="h4 price">{roomPost.price}</span>
                                <h2 className="room__title">{roomPost.title}</h2>
                                <div className="room__meta">
                                    <span>
                                        <i className="flaticon-construction" />
                                        35 sqm
                                    </span>
                                    <span>
                                        <i className="flaticon-user" />5 Person
                                    </span>
                                </div>
                                <p>
                                    Our elegantly appointed rooms and suites are designed to offer the
                                    utmost in comfort and style. Each room features modern amenities,
                                    plush furnishings, and thoughtful touches to ensure a relaxing
                                    stay.
                                    <br /> <br />
                                    Indulge in a culinary journey at our on-site restaurants, where
                                    our talented chefs create mouthwatering dishes using the freshest
                                    local ingredients. Start your day with a sumptuous breakfast,
                                    enjoy a leisurely lunch, and savor a gourmet dinner in an elegant
                                    setting.
                                </p>
                                <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
                                    <div className="room__image__item">
                                        <img
                                            className="rounded-2"
                                            src="/assets/images/pages/room/r-d-1.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="room__image__item">
                                        <img
                                            className="rounded-2"
                                            src="/assets/images/pages/room/r-d-2.webp"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <span className="h4 d-block mb-30">Room Amenities</span>
                                <div className="room__amenity mb-50">
                                    <div className="group__row">
                                        <div className="single__item">
                                            <img
                                                src="/assets/images/icon/wifi.svg"
                                                height={30}
                                                width={36}
                                                alt=""
                                            />
                                            <span>Free Wifi</span>
                                        </div>
                                        <div className="single__item">
                                            <img
                                                src="/assets/images/icon/shower.svg"
                                                height={30}
                                                width={36}
                                                alt=""
                                            />
                                            <span>Shower</span>
                                        </div>
                                        <div className="single__item">
                                            <img
                                                src="/assets/images/icon/aeroplane.svg"
                                                height={30}
                                                width={36}
                                                alt=""
                                            />
                                            <span>Airport transport</span>
                                        </div>
                                    </div>
                                    <div className="group__row">
                                        <div className="single__item">
                                            <img
                                                src="/assets/images/icon/balcony.svg"
                                                height={30}
                                                width={36}
                                                alt=""
                                            />
                                            <span>Balcony</span>
                                        </div>
                                        <div className="single__item">
                                            <img
                                                src="/assets/images/icon/refrigerator.svg"
                                                height={30}
                                                width={36}
                                                alt=""
                                            />
                                            <span>Refrigerator</span>
                                        </div>
                                        <div className="single__item">
                                            <img
                                                src="/assets/images/icon/support.svg"
                                                height={30}
                                                width={36}
                                                alt=""
                                            />
                                            <span>24/7 Support</span>
                                        </div>
                                    </div>
                                    <div className="group__row">
                                        <div className="single__item">
                                            <img
                                                src="/assets/images/icon/desk.svg"
                                                height={30}
                                                width={36}
                                                alt=""
                                            />
                                            <span>Work Desk</span>
                                        </div>
                                        <div className="single__item">
                                            <img
                                                src="/assets/images/icon/fitness.svg"
                                                height={30}
                                                width={36}
                                                alt=""
                                            />
                                            <span>Fitness Center</span>
                                        </div>
                                        <div className="single__item">
                                            <img
                                                src="/assets/images/icon/swimming-pool.svg"
                                                height={30}
                                                width={36}
                                                alt=""
                                            />
                                            <span>Swimming Pool</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="h4 d-block mb-50">Room Features</span>
                                <div className="room__feature mb-30">
                                    <div className="room__feature__image mb-50">
                                        <img
                                            className="rounded-2"
                                            src="/assets/images/pages/room/r-d-3.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="group__row">
                                        <ul className="list__item">
                                            <li>Children and extra beds</li>
                                            <li>Climate Control</li>
                                            <li>Art and Decor</li>
                                            <li>Coffee/Tea Maker</li>
                                            <li>High-End Bedding</li>
                                            <li>Smart Technology</li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    Our elegantly appointed rooms and suites are designed to offer the
                                    utmost in comfort and style. Each room features modern amenities,
                                    plush furnishings, and thoughtful touches to ensure a relaxing
                                    stay.
                                </p>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5 sticky-item">
                            <div className="rts__booking__form has__background is__room__details sticky-item">
                                <form action="#" method="post" className="advance__search">
                                    <h5 className="pt-0">Book Your Stay</h5>
                                    <div className="advance__search__wrapper">
                                        {/* single input */}
                                        <div className="query__input wow fadeInUp">
                                            <label htmlFor="check__in" className="query__label">
                                                Check In
                                            </label>
                                            <div className="query__input__position">
                                                <input
                                                    type="text"
                                                    id="check__in"
                                                    name="check__in"
                                                    placeholder="15 Jun 2024"
                                                    required=""
                                                />
                                                <div className="query__input__icon">
                                                    <i className="flaticon-calendar" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* single input end */}
                                        {/* single input */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".3s">
                                            <label htmlFor="check__out" className="query__label">
                                                Check Out
                                            </label>
                                            <div className="query__input__position">
                                                <input
                                                    type="text"
                                                    id="check__out"
                                                    name="check__out"
                                                    placeholder="15 May 2024"
                                                    required=""
                                                />
                                                <div className="query__input__icon">
                                                    <i className="flaticon-calendar" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* single input end */}
                                        {/* single input */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".4s">
                                            <label htmlFor="adult" className="query__label">
                                                Adult
                                            </label>
                                            <div className="query__input__position">
                                                <select name="adult" id="adult" className="form-select">
                                                    <option value={1}>1 Person</option>
                                                    <option value={2}>2 Person</option>
                                                    <option value={3}>3 Person</option>
                                                    <option value={4}>4 Person</option>
                                                    <option value={5}>5 Person</option>
                                                    <option value={6}>6 Person</option>
                                                    <option value={7}>7 Person</option>
                                                </select>
                                                <div className="query__input__icon">
                                                    <i className="flaticon-user" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* single input end */}
                                        {/* single input */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                                            <label htmlFor="child" className="query__label">
                                                Child
                                            </label>
                                            <div className="query__input__position">
                                                <select name="child" id="child" className="form-select">
                                                    <option value={1}>1 Child</option>
                                                    <option value={2}>2 Child</option>
                                                    <option value={3}>3 Child</option>
                                                    <option value={4}>4 Child</option>
                                                    <option value={5}>5 Child</option>
                                                    <option value={6}>6 Child</option>
                                                    <option value={7}>7 Child</option>
                                                </select>
                                                <div className="query__input__icon">
                                                    <i className="flaticon-user" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* single input end */}
                                        {/* single input */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                                            <label htmlFor="room" className="query__label">
                                                Room
                                            </label>
                                            <div className="query__input__position">
                                                <select name="room" id="room" className="form-select">
                                                    <option value={1}>1 Room</option>
                                                    <option value={2}>2 Room</option>
                                                    <option value={3}>3 Room</option>
                                                    <option value={4}>4 Room</option>
                                                    <option value={5}>5 Room</option>
                                                </select>
                                                <div className="query__input__icon is__svg">
                                                    <img src="/assets/images/icon/room.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* single input end */}
                                        {/* single input */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                                            <label htmlFor="exbed" className="query__label">
                                                Extra Bed
                                            </label>
                                            <div className="query__input__position">
                                                <select name="exbed" id="exbed" className="form-select">
                                                    <option value={1}>1 Bed</option>
                                                    <option value={2}>2 Bed</option>
                                                    <option value={3}>3 Bed</option>
                                                    <option value={4}>4 Bed</option>
                                                </select>
                                                <div className="query__input__icon is__svg">
                                                    <img src="/assets/images/icon/bed-alt.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* single input end */}
                                        <h5 className="p-0 mt-20">Extra Services</h5>
                                        {/* checkbox item */}
                                        <div className="query__input checkbox wow fadeInUp">
                                            <input type="checkbox" name="clean" id="clean" />
                                            <label htmlFor="clean">Room Clean</label>
                                            <span>$12 / Night</span>
                                        </div>
                                        {/* checkbox item end */}
                                        {/* checkbox item */}
                                        <div className="query__input checkbox wow fadeInUp">
                                            <input type="checkbox" name="parking" id="parking" />
                                            <label htmlFor="parking">Parking</label>
                                            <span>Free</span>
                                        </div>
                                        {/* checkbox item end */}
                                        {/* checkbox item */}
                                        <div className="query__input checkbox wow fadeInUp">
                                            <input type="checkbox" name="transport" id="transport" />
                                            <label htmlFor="transport">Airport transport</label>
                                            <span>$30 / Night</span>
                                        </div>
                                        {/* checkbox item end */}
                                        {/* checkbox item */}
                                        <div className="query__input checkbox wow fadeInUp">
                                            <input type="checkbox" name="pet" id="pet" />
                                            <label htmlFor="pet">Pet-Friendly</label>
                                            <span>$40 / Night</span>
                                        </div>
                                        {/* checkbox item end */}
                                        {/* calculation */}
                                        <div className="total__price">
                                            <span className="total h6 mb-0">Total Price</span>
                                            <span className="price h6 m-0">$82</span>
                                        </div>
                                        {/* calculation end */}
                                        {/* submit button */}
                                        <Link to='/cart'
                                            className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
                                            data-wow-delay=".6s"
                                        >
                                            <span>Book Your Room</span>
                                        </Link>
                                        {/* submit button end */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* room details area end */}
        </>
    );
};

export default RoomDetailsMain;

// Generate paths for each blog post based on slug
export async function getStaticPaths() {
    const paths = Posts.map(post => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: true, // Fallback to enable static generation for new posts
    };
}

// Fetch the blog post based on slug
export async function getStaticProps({ params }) {
    const roomPost = Posts.find(post => post.slug === params.slug);

    if (!roomPost) {
        return {
            notFound: true, // Return 404 if post not found
        };
    }

    return {
        props: {
            roomPost,
        },
    };
}
