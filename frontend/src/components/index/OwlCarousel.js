import React from 'react'
import Carousel from 'better-react-carousel'

import ServiceCard from './ServiceCard';

function OwlCarousel() {
    return (
        <>
            <Carousel cols={2} rows={1} gap={5} loop={true} autoplay={3000} scrollSnap={true} showDots={true} hideArrow={false}>
                <Carousel.Item>
                    <ServiceCard link='collegefinder' service='College Finder' text="Some quick example text to build on the card title and make up the bulk of the card's content." />
                </Carousel.Item>
                <Carousel.Item>
                    <ServiceCard link='campusexplorer' service='Campus Explorer' text="Some quick example text to build on the card title and make up the bulk of the card's content." />

                </Carousel.Item>
                <Carousel.Item>
                    <ServiceCard link='events' service='Events' text="Some quick example text to build on the card title and make up the bulk of the card's content." />

                </Carousel.Item>
                <Carousel.Item>
                    <ServiceCard link='accommodation' service='Accommodation' text="Some quick example text to build on the card title and make up the bulk of the card's content." />

                </Carousel.Item>
                <Carousel.Item>
                    <ServiceCard link='academics' service='Academics' text=".Some quick example text to build on the card title and make up the bulk of the card's content." />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default OwlCarousel
