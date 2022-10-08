import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { API } from '../service/api.js';

import PgCard1 from './PgCard1.js';

function Accommodation() {
    const navigate = useNavigate();
    const smoothDirect = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    const [posts, getPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            try {

                let res = await API.getAllPg({});
                getPosts(res.data)
                
            } catch (error) {

                console.log(error.message)
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="bg-dark text-secondary px-4 py-5 text-center">
                <div className="py-5 fadeInUp">
                    <h1 className="display-5 fw-bold text-white">Accommodation</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
                            <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 fadeInLeft">
                        <form className="d-flex" role="search">
                            <input className="form-control my-2" type="search" placeholder="Search Accommodation Near Your College" aria-label="Search" />
                        </form>


                        <div className="row">
                            {
                                posts.map((post, i) => (
                                    <div key={i} className="col-lg-6 col-md-4 col-sm-12">
                                        <PgCard1 id={post._id} pgName={post.pgName} ownerName={post.ownerName} gender={post.gender} nearMetro={post.nearMetro} />
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 fadeInRight">
                        <h2>Filter Option</h2>
                        <div className="container">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                        </div>
                        <div className="container">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                        </div>
                        <div className="container">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                        </div>
                        <div className="container">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                        </div>

                        <div className="container mt-5">
                            <h2 className='text-cen'>headding hear </h2>
                            <div className="px-2">
                                <div className="card mb-3 cardStyle2" onClick={smoothDirect}>
                                    <div className="row g-0" onClick={() => { navigate("/accomodationnearme") }}>
                                        <div className="col-md-4">
                                            <img src="..." className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in </p>
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

export default Accommodation
