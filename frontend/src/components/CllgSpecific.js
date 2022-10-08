import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { API } from '../service/api'

import { FaUniversity } from "react-icons/fa";

import BgImg3 from "../images/BgImg-4.jpg";

import CllgImg from '../images/BgImg-2.jpg'

function CllgSpecific() {

    const parallex = {
        backgroundImage: `url(${BgImg3})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    const hrLine = {
        width: "150px",
        border: "1.5px solid #66fcf1",
        backgroundColor: " #66fcf1"
    }

    const navigate = useNavigate();
    const smoothDirect = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }


    const [post, setPost] = useState({});

    const { id } = useParams()
    // console.log(useParams().id)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await API.getOneCllg(id);
                setPost(res.data);

            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData();
    }, [id]);


    return (
        <>
            <div style={parallex}>
                <div className="page-wrapper mt-5" style={{ backgroundColor: 'rgba(5, 5, 5, 0.75)' }}>
                    <div className="container my-5 pt-5 d-flex">
                        <FaUniversity fontSize="5rem" color="aqua" />
                        <div className="header fadeInDown mx-4">
                            <h1>{post.cllgName}</h1>
                            <h3>{post.campus} Campus</h3>
                            <hr style={hrLine} />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-md-12 p-5 fadeInLeft" style={{ backgroundColor: "rgb(38, 38, 38)" }}>
                                <div>
                                    <h3>Location : </h3><p>{post.location}</p>
                                    <p>Nearest metro station </p>
                                </div>
                                <div>
                                    <h3>Courses Offered : </h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt impedit fugit aut molestias? Mollitia in neque suscipit, facere labore aperiam!</p>
                                </div>
                                <div>
                                    <h3>Docs req : </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestiae?</p>
                                </div>
                                <div>
                                    <h3>Societies : </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam, exercitationem quasi voluptatem dolores nemo.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-md-12 fadeInRight">
                                <div className="container p-3" style={{ backgroundColor: "rgb(38, 38, 38)" }}>
                                    <div className='m-3'>
                                        <img src={CllgImg} alt="" style={{ height: "200px", width: "300px" }} />
                                    </div>
                                    <div className='text-center my-2' onClick={smoothDirect}>
                                        <div className="campus btn-1" onClick={() => { navigate("/campusexplorerspecific/:collegeName") }}>
                                            <div className="content">
                                                <h5>Explore area near {post.cllgName}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    {/* onClick={() => { navigate("/CampusSpecificColleges/south") }} */}
                                    <div className='text-center my-2' onClick={smoothDirect}>
                                        <div className="campus btn-1" onClick={() => { navigate(`/CampusSpecificColleges/${post.campus}`) }}>
                                            <div className="content">
                                                <h5>More Colleges Under {post.campus} Campus</h5>
                                            </div>
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

export default CllgSpecific

