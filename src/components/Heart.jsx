import React, {useState} from 'react';

const Heart = () => {
    const [activeHeart, setActiveHeart] = useState(false)

    return (
        activeHeart
            ?
            <button
                className='heart heart_active'
                onClick={() => setActiveHeart(!activeHeart)}
            >
            </button>
            :
            <button
                className='heart'
                onClick={() => setActiveHeart(!activeHeart)}
            >
            </button>
    );
};

export default Heart;