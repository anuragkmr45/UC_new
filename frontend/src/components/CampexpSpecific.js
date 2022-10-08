import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { API } from '../service/api'

function CampexpSpecific() {

    const navigate = useNavigate();
    const smoothDirect = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    const [showtab, setShowtab] = useState(1);

    const handletab = (e) => {
        setShowtab(e);
    }

    const [posts, setPosts] = useState([]);

    const { collegeName } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await API.getOneExpByCllgName(collegeName);
                setPosts(res.data);

            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData();
    }, [collegeName]);


    return (
        <>
            <section>
                <div className="bg-dark text-secondary pt-5 pb-2 text-center">
                    <div className="py-5 fadeInUp">
                        <h1 className="display-5 fw-bold text-white">Explore Area Near <span> {collegeName}</span></h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-e
                            </p>
                        </div>
                        <div className="my-auto">
                            <div className="d-flex flex-wrap justify-content-around" style={{ backgroundColor: "rgba(16, 16, 16)" }}>
                                <h4 className={showtab === 1 ? "active item" : "item"} onClick={() => handletab(1)}>Cafe</h4>
                                <h4 className={showtab === 2 ? "active item" : "item"} onClick={() => handletab(2)}>Clubs</h4>
                                <h4 className={showtab === 3 ? "active item" : "item"} onClick={() => handletab(3)}>Restaurants</h4>
                                <h4 className={showtab === 4 ? "active item" : "item"} onClick={() => handletab(4)}>Parks</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container my-5">
                <div className="tab-content text-dark" id="pills-tabContent">

                    {/* start tab 1*/}
                    <div className={showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"} >
                        <div className="row">
                            <div className="col-lg-8 col-md-7 col-sm-12 py-3">
                                <div className='row' style={{ backgroundColor: "rgba(16, 16, 16)", color: "white" }} >
                                    {
                                        posts.map((post, i) => {
                                            return (
                                                <div key={i} className="col-lg-6 col-md-6 col-sm-12" onClick={smoothDirect}>
                                                    <div className="card my-1 cardStyle1" onClick={() => { navigate(`/Cafesnearcollege/${post._id}`) }}>
                                                        <img src="..." className="card-img-top" alt="..." />
                                                        <div className="card-body">
                                                            <h3>{post.name}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12">
                                <div style={{ backgroundColor: "rgba(16, 16, 16)" }}>
                                    <div className="text-center m-3 fadeInRight">
                                        <p>filter</p>
                                        <p>best offers</p>
                                        <p>searchbar </p>
                                        <p>searchbar </p>
                                        <p>searchbar </p>
                                        <p>searchbar </p>
                                        <p>searchbar </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* close tab 1*/}


                    {/* start tab 2*/}
                    <div className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"} >
                        <p>Tab 2 Content</p>
                        <p>Fill the form</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                            vel voluptatum?
                        </p>
                    </div>
                    {/* close tab 2*/}


                    {/* start tab 3*/}
                    <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"} >
                        <p>Fill the Contact Form</p>

                        <p>
                            Name: <input type="text" name='username' className='form-control' />
                        </p>
                        <p>
                            <button className='btn btn-primary'>Submit</button>
                        </p>
                    </div>
                    {/* close tab 3*/}



                    {/* start tab 4*/}
                    <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"} >
                        <p>Fill the Contact Form</p>

                        <p>
                            Name: <input type="text" name='username' className='form-control' />
                        </p>
                        <p>
                            <button className='btn btn-primary'>Submit</button>
                        </p>
                    </div>
                    {/* close tab 4*/}


                </div>
            </div>

        </>
    )

}

export default CampexpSpecific
