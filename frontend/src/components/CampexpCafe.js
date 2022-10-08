import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { API } from '../service/api'

import OwlCarousel from './OwlCarousel.js'
import TabPanle from './TabPanle.js'

function CampexpCafe() {

    const [post, setPost] = useState([]);

    const { id } = useParams()
    // console.log(useParams().id)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await API.getAllExp(id);
                setPost(res.data);

            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData();
    }, [id]);


    return (
        <>
            <section className='mt-5 container fadeInDown' style={{ backgroundColor: "rgba(16, 16, 16)" }}>
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div className="p-2 my-4 rounded-1">
                            <div className="container-fluid py-5">
                                <h1 className="display-5 fw-bold">{post.name}</h1>
                                <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in</p>
                                {/* <button className="btn btn-primary btn-lg" type="button">Example button</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12">
                        <div className="mt-5">
                        <OwlCarousel />
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-3 py-5'>
                <div className="container" style={{backgroundColor: "rgba(16, 16, 16)"}}>
                    <TabPanle />
                </div>
            </section>
        </>
    )
}

export default CampexpCafe
