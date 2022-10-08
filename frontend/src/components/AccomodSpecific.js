import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-scroll'

import { API } from '../service/api'

import { GoLocation } from "react-icons/go";
import { BsWifi } from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { BiDumbbell, BiWater } from "react-icons/bi";
import { MdLocalLaundryService, MdStorage, MdOutlineAir } from "react-icons/md";
import { GiVacuumCleaner, GiWashingMachine, GiBathtub } from "react-icons/gi";
import { MdFastfood, MdOutlineWindow } from "react-icons/md";

import Carousel from './Carousel'

import Img1 from '../images/BgImg-2.jpg'
import BgImg1 from '../images/BgImg-1.jpg'

import ContactPg from './ContactPg';

function AccomodSpecific() {

    const parallex = {
        backgroundImage: `url(${BgImg1})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    const serviceItem = {
        border: "1px solid aqua",
        color: "aqua",
        padding: "8px",
        margin: "5px",
        borderRadius: "20px"
    }

    const hrLine = {
        width: "100px",
        border: "2px solid aqua",
        backgroundColor: " aqua",
    };

    const navigate = useNavigate();
    const smoothDirectEvent = () => {
        window.scroll({
            top: 400,
            left: 0,
            behavior: "smooth",
        });
    }


    const [post, setPost] = useState({});

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await API.getOnePg(id);
                // console.log(res)
                setPost(res.data);

            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData();
    }, [id]);


    return (
        <>
            <section style={parallex}>
                <div className="container py-5 my-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 fadeInLeft">
                            <div className="container-fluid">
                                <h3 className="display-5">{post.pgName}</h3>
                                <p className="">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                                <button className="btn btn-primary btn-lg" type="button">Example button</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 fadeInRight">
                            <Carousel className="fadeInUp" heigth="250px" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="container" style={parallex}>

            </div> */}

            <div className="container" style={parallex}>
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12 p-5 m-3 fadeInLeft" style={{ backgroundColor: "rgb(6, 6, 6)" }}>
                        <div className="container">
                            <div>
                                <h3>Start From</h3>
                                <h2>₹20,399/mo*</h2>
                            </div>
                            <div className='my-5'>
                                <img src={Img1} alt="" style={{ height: '10rem' }} />
                            </div>
                        </div>
                        <div className="filter p-2 my-2 " style={{ backgroundColor: "rgba(21, 21, 21, 0.411)" }}>
                            <div className="fadeInDown">
                                <div className="">
                                    <div className="d-flex flex-wrap justify-content-around">

                                        <Link to='occupancies' spy={true} smooth={true} offset={1}>
                                            <p>occupancies 1</p>
                                        </Link>

                                        {/* <Link to='nc' spy={true} smooth={true} offset={1}> */}
                                        <p>link 2</p>
                                        {/* </Link> */}

                                        {/* <Link to='services' spy={true} smooth={true} offset={1}> */}
                                        <p>Amenities</p>
                                        {/* </Link> */}

                                        {/* <Link to='nc' spy={true} smooth={true} offset={1}> */}
                                        <p>link 3</p>
                                        {/* </Link> */}

                                        {/* <Link to='nc' spy={true} smooth={true} offset={1}> */}
                                        <p>link 4</p>
                                        {/* </Link> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dtl m-2" name='occupancies'>
                            <h3>accommodation detail - 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat?</p>
                        </div>
                        <div className="dtl m-2">
                            <h3>accommodation detail - 2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat?</p>
                        </div>
                        <div className="dtl m-2" name='services'>
                            <h3>Amenities And Services</h3>
                            <hr style={hrLine} />
                            <div className="d-flex flex-wrap justify-content-around">
                                <p style={serviceItem} ><BsWifi className='m-1' />Height speed wifi</p>
                                <p style={serviceItem} ><MdLocalLaundryService className='m-1' />Laundry Service</p>
                                <p style={serviceItem} ><GiVacuumCleaner className='m-1' />Professional Housekeeping</p>
                                <p style={serviceItem} ><BiWater className='m-1' />Water Supply</p>
                                <p style={serviceItem} ><BiDumbbell className='m-1' />Workout Zone</p>
                                <p style={serviceItem} ><GiWashingMachine className='m-1' />Washing Machine</p>
                                <p style={serviceItem} ><CgSmartHomeRefrigerator className='m-1' />Spacious Refrigerator</p>
                                <p style={serviceItem} ><MdFastfood className='m-1' />Hot and Delicious Meals</p>
                                <p style={serviceItem} ><MdOutlineWindow className='m-1' />Window</p>
                                <p style={serviceItem} ><MdStorage className='m-1' />Spacious Cupboard</p>
                                <p style={serviceItem} ><GiBathtub className='m-1' />Attached Washroom</p>
                                <p style={serviceItem} ><MdOutlineAir className='m-1' />Air Conditioning</p>
                            </div>
                        </div>
                        <div className="dtl m-2">
                            <h3>accommodation detail - 3</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat?</p>
                        </div>
                        <div className="dtl m-2">
                            <h3>accommodation detail - 4</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat?</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center m-3 sidebar fadeInRight" >
                        <div className='py-5 px-3' style={{ backgroundColor: "rgb(6, 6, 6)" }}>
                            <h3><span>Book</span> a visit</h3>
                            <div className="container">
                                <ContactPg />
                            </div>
                            <div className="container">
                                <div className='text-center my-5' onClick={smoothDirectEvent}>
                                    <div className="campus btn-1" onClick={() => { navigate("/events") }}>
                                        <div className="content">
                                            <h4><GoLocation /> Show In Maps</h4>
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

export default AccomodSpecific
