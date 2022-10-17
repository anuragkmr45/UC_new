import React from 'react'
import img from '../images/BgImg-2.jpg'
import img2 from '../images/BgImg-1.jpg'

function Carousel(props) {
    const carouselImg = {
        height: props.heigth,
        // opacity: "0"
    }
    const parallex = {
        backgroundImage: `url(${img})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    return (
        <>
            <div style={parallex}>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="1500">
                            <img src={img} className="d-block w-100" alt="..." style={carouselImg} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label - 1</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="1500">
                            <img src={img2} className="d-block w-100" alt="..." style={carouselImg} />

                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label - 2</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="1500">
                            <img src={img} className="d-block w-100" alt="..." style={carouselImg} />

                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label - 3</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Carousel
