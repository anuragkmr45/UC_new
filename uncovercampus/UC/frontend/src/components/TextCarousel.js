import React from 'react'

import Img from '../images/Hero-bg.png'

function TextCarousel() {
    return (
        <>
            <div id="myCarousel" className="carousel slide py-4" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {/* <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button> */}
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <svg className="bd-placeholder-img" width="100%" height="200%" src={Img} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="200%" fill="black"></rect></svg>

                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <svg className="bd-placeholder-img" width="100%" height="200%" src={Img} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="200%" fill="black"></rect></svg>

                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <svg className="bd-placeholder-img" width="100%" height="200%" src={Img} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="200%" fill="black"></rect></svg>

                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default TextCarousel
