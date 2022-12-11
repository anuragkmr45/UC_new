import React from 'react'
import { useNavigate } from 'react-router-dom'

import Carousel from '../Carousel'

import BgImg1 from '../../images/BgImg-1.jpg'

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import RegisterForm from '../RegisterForm';


function EventSpecific() {

    const navigate = useNavigate();
    const smoothDirectEvent = () => {
        window.scroll({
            top: 680,
            left: 0,
            behavior: "smooth",
        });
    }


    const parallex = {
        backgroundImage: `url(${BgImg1})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    return (
        <>
            <div style={parallex}>
                <div className='container mt-5 fadeInDown'>
                    <div className="row">
                        <div className="">
                            <div className="p-5 mb-4 bg-dark row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="container-fluid">
                                        <h1 className="display-5 mt-5">Event name</h1>
                                        <div className="container mt-3">
                                            <RegisterForm />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <Carousel height='200px' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 m-3 fadeInLeft" style={{ backgroundColor: "rgba(33,37,41)" }}>
                            <div className="dtl m-2">
                                <h3>event detail - 1</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat?</p>
                            </div>
                            <div className="dtl m-2">
                                <h3>event detail - 2</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat?</p>
                            </div>
                            <div className="dtl m-2">
                                <h3>event detail - 3</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat?</p>
                            </div>
                            <div className="dtl m-2">
                                <h3>event detail - 4</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat?</p>
                            </div>
                            <div className="dtl m-2">
                                <h3>event detail - 5</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat?</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 m-3 fadeInRight" style={{ backgroundColor: "rgba(33,37,41)" }}>
                            <div className="container my-5 text-center">
                                <RegisterForm />
                            </div>
                            <div className="share text-center">
                                <h5>Share this events</h5>
                                <div className="d-flex justify-content-around">
                                    <div className="instagram social p-2" style={{ border: "2px solid white", borderRadius: "50%" }}><FaInstagram fontSize='1.3rem' /></div>
                                    <div className="facebook social p-2" style={{ border: "2px solid white", borderRadius: "50%" }}><BsFacebook fontSize='1.3rem' /></div>
                                    <div className="facebook social p-2" style={{ border: "2px solid white", borderRadius: "50%" }}><FaLinkedinIn fontSize='1.3rem' /></div>
                                    <div className="facebook social p-2" style={{ border: "2px solid white", borderRadius: "50%" }}><AiFillTwitterCircle fontSize='1.3rem' /></div>
                                </div>
                            </div>
                            <div className="container">
                                <div className='text-center my-5' onClick={smoothDirectEvent}>
                                    <div className="campus btn-1" onClick={() => { navigate("/events") }}>
                                        <div className="content">
                                            <h5>Explore More Events</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventSpecific
