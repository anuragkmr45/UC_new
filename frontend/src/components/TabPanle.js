import React, { useState } from 'react'

function TabPanle() {

    const hrLine = {
        width: "100px",
        border: "1.5px solid #66fcf1",
        backgroundColor: "rgba(0, 255, 255, 0.54)",
    };

    const [showtab, setShowtab] = useState(1);

    const handletab = (e) => {
        setShowtab(e);
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="d-flex flex-wrap" style={{ backgroundColor: "rgba(16, 16, 16)" }}>
                        <h4 className={showtab === 1 ? "active navtabItem" : "navtabItem"} onClick={() => handletab(1)}>Overview</h4>
                        <h4 className={showtab === 2 ? "active navtabItem" : "navtabItem"} onClick={() => handletab(2)}>Deals And Offers</h4>
                        <h4 className={showtab === 3 ? "active navtabItem" : "navtabItem"} onClick={() => handletab(3)}>Images</h4>
                        <h4 className={showtab === 4 ? "active navtabItem" : "navtabItem"} onClick={() => handletab(4)}>Reviews</h4>
                    </div>
                    <div className="tab-content" id="pills-tabContent">

                        {/* start tab 1*/}
                        <div className={showtab === 1 ? "tab-pane fade show active p-4" : "tab-pane fade show p-4"} >

                            <div className="row">
                                <div className="col-lg-8 col-md-7 col-sm-12 fadeInLeft">

                                    <h1>About this place</h1>
                                    <hr className="my-3" style={hrLine} />

                                    <div>
                                        <h2>Popular Dishes</h2>
                                        <p>Lorem, ipsum dolor.</p>
                                        <p>Lorem, ipsum dolor.</p>
                                        <p>Lorem, ipsum dolor.</p>
                                        <p>Lorem, ipsum dolor.</p>
                                    </div>

                                    <div>
                                        <h2>People Say This Place Is Known For</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, nisi!</p>
                                    </div>

                                    <div>
                                        <h2>Average Cost</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius, as, sequi ad sunt excepturi!</p>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-5 col-sm-12 fadeInRight">
                                    <div style={{ border: "2px solid white" }}>
                                        <h2>Location</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* close tab 1*/}


                        {/* start tab 2*/}
                        <div className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"} >

                            <div className="row">
                                <div className="col-lg-8 col-md-7 col-sm-12">
                                    <div class="card mb-3 cardStyle1">
                                        <div class="row g-0">
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">Card title</h5>
                                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-i</p>
                                                </div>
                                                <button type="button" className="btn btn-outline-success m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Place Order</button>
                                            </div>
                                            <div class="col-md-4">
                                                <img src="..." class="img-fluid rounded-start" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* place order modal start  */}
                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{ backgroundColor: "rgba(10, 10, 10, 0.55)" }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content" style={{ backgroundColor: "rgba(10 , 10, 10)" }}>
                                            <div className="modal-body">
                                                <div className="container">
                                                    <form method='POST'>
                                                        <div className="my-2">
                                                            <input type="text" className='form-control' aria-describedby="nameHelp" placeholder='Your Name' />
                                                        </div>
                                                        <div className="my-2">
                                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email' />
                                                        </div>
                                                        <div className="my-2">
                                                            <input type="tel" className="form-control" id="exampleInputPassword1" aria-describedby="phoneHelp" placeholder='Your Phone' />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Place order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* place order modal end  */}

                                <div className="col-lg-4 col-md-5 col-sm-12">
                                    <div className="text-center fadeInRight">
                                        <div className="px-2 py-2 mt-5">
                                            <form action="#" className="form-search d-flex align-items-stretch aos-init">
                                                <input type="text" className="form-control" placeholder="Search your College " style={{ backgroundColor: "rgba(60, 60, 60)" }} />
                                            </form>
                                        </div>
                                        <h4>Best offers</h4>
                                        <h4>Todays Special </h4>
                                        <h4>Friends Special </h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* close tab 2*/}


                        {/* start tab 3*/}
                        <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"} >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sint consectetur omnis sit adipisci, odio ipsa voluptates tenetur libero tempora aliquid laboriosam nulla nemo autem eius repudiandae voluptatibus suscipit assumenda at sequi voluptatem, maiores fugit porro! Error, similique sapiente magnam accusantium voluptatibus iure corporis nam aspernatur cumque. Corporis, officia rem!
                        </div>
                        {/* close tab 3*/}


                        {/* start tab 4*/}
                        <div className={showtab === 4 ? "tab-pane fade show active" : "tab-pane fade"} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae quidem minus labore dolorum, iusto aperiam illo explicabo, consequatur nulla temporibus quaerat perferendis mollitia debitis? Consequuntur cum praesentium totam corrupti iure, voluptatibus deserunt iste error eos similique perferendis nulla accusantium excepturi! Facilis est accusantium eius voluptatibus earum dicta eos ullam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae quidem minus labore dolorum, iusto aperiam illo explicabo, consequatur nulla temporibus quaerat perferendis mollitia debitis? Consequuntur cum praesentium totam corrupti iure, voluptatibus deserunt iste error eos similique perferendis nulla accusantium excepturi! Facilis est accusantium eius voluptatibus earum dicta eos ullam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae quidem minus labore dolorum, iusto aperiam illo explicabo, consequatur nulla temporibus quaerat perferendis mollitia debitis? Consequuntur cum praesentium totam corrupti iure, voluptatibus deserunt iste error eos similique perferendis nulla accusantium excepturi! Facilis est accusantium eius voluptatibus earum dicta eos ullam.
                        </div>
                        {/* close tab 4*/}


                    </div>
                </div>
            </section>
        </>
    )
}

export default TabPanle
