'use client'
import React, { useState } from 'react'
import RoomCardSix from './RoomCardSix'
import posts from '../data/data-room.json';

function RoomNine() {
    const [visiblePosts, setVisiblePosts] = useState(3);
    const postsPerLoad = 1;

    const handleLoadMore = () => {
        setVisiblePosts((prev) => prev + postsPerLoad);
    };
    return (
        <>
            {/* single rooms */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row gy-5">
                        {posts.slice(0, visiblePosts).map((data, index) => (
                            <div key={index} className="room__wrapper">
                                <RoomCardSix
                                    Slug={data.slug}
                                    Img={`${data.image}`}
                                    Title={data.title}
                                    Price={data.price}
                                />
                            </div>
                        ))}
                        {/* Load More Button */}
                        {visiblePosts < posts.length && (
                            <div className="load__more__link">
                                <button onClick={handleLoadMore}>
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* single rooms end */}
        </>

    )
}

export default RoomNine