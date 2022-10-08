import React, { useEffect, useState } from 'react'

import { API } from '../service/api.js';

import BgImg1 from '../images/BgImg-1.jpg'

import CllgCard from './CllgCard.js';

function NorthSpCllg() {

    const parallex = {
        backgroundImage: `url(${BgImg1})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    const [posts, getPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            try {

                let res = await API.getAllCllg({});
                getPosts(res.data)

            } catch (error) {

                console.log(error.message)
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <section style={parallex}>
                <div className="container">
                    <div className="px-4 py-5 my-5 text-center fadeInUp">
                        <h1 className="display-5 fw-bold">North Campus Colleges</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, </p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="filter p-3 my-5 " style={{ backgroundColor: "rgba(21, 21, 21, 0.411)" }}>
                    <div className="row fadeInDown">
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <div className=" row d-flex">
                                <p className='col-2'>filter-1</p>
                                <p className='col-2'>filter-2</p>
                                <p className='col-2'>filter-3</p>
                                <p className='col-2'>filter-4</p>
                                <p className='col-2'>filter-5</p>
                                <p className='col-2'>filter-6</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <form className="d-flex" role="search">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {
                        posts.map((post, i) => (
                    <CllgCard key={i} id={post._id} cllgname={post.cllgName} camp={post.campus} campus='north' />
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default NorthSpCllg
