'use client'
import React, { useState } from 'react';
import RoomCardFour from './RoomCardFour';
import posts from '../data/data-room.json';

function RoomSix() {
    const [visiblePosts, setVisiblePosts] = useState(6); // Initially show 6 posts
    const postsPerLoad = 3; // Number of posts to load each time

    const handleLoadMore = () => {
        setVisiblePosts((prev) => prev + postsPerLoad);
    };

    return (
        <>
            {/* single rooms */}
            <div className="rts__section">
                <div className="container">
                    <div className="row g-30">
                        {posts.slice(0, visiblePosts).map((data, index) => (
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                <RoomCardFour
                                    Slug={data.slug}
                                    Img={`${data.image}`}
                                    Title={data.title}
                                    Price={data.price}
                                />
                            </div>
                        ))}
                    </div>
                    {/* row end */}
                    {visiblePosts < posts.length && (
                        <div className="load__more__link">
                            <button onClick={handleLoadMore}>
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {/* single rooms end */}
        </>
    );
}

export default RoomSix;
