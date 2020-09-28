import React from 'react';
import Logo from './Logo';
import About from './About';
import GalleryCarousel from './GalleryCarousel';

const Home = (props) => {

    return (
        <div>
            <h1>Welcome to Dr. Ques' Art Gallery and Store</h1>
            <Logo />
            <About />

            <GalleryCarousel gallery={props.gallery} />
        </div>
    )
}

export default Home;