import React from 'react'
import { useNavigate } from 'react-router-dom'

import Carousel from './Carousel'
import OwlCarousel from './OwlCarousel';

function Events() {
  const hrLine = {
    width: "300px",
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
  return (
    <>
      <div className="my-5 fadeInUp">
        <Carousel heigth="400px" />
      </div>
      <div className="container py-5" style={{ backgroundColor: "rgba(33,37,41)" }}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 fadeInLeft">
            <div className="container-fluid">
              <h3 className="display-5"><span>Top</span> Events</h3>
              <p className="">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
              <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Register Your Event With Us</button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{ backgroundColor: "rgba(7, 7, 7, 0.827)" }}>
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content" style={{ backgroundColor: "rgba(50, 50, 50)" }}>
                    <div className="modal-body">

                      <form method='POST' className="container">

                        <div className="mb-3 row">
                          <input type="text" name='stuName' className="form-control" placeholder='Student Name' />
                        </div>
                        <div className="mb-3 row">
                          <input type="text" name='cllgName' className="form-control" placeholder='College Name' />
                        </div>
                        <div className="mb-3 row">
                          <input type="email" name='email' className="form-control" placeholder='Email' />
                        </div>
                        <div className="mb-3 row">
                          <input type="tel" name='phone' className="form-control" placeholder='Phone no' />
                        </div>
                      </form>

                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Understood</button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 fadeInRight">
            <OwlCarousel className="fadeInUp" heigth="250px" />
          </div>
        </div>
      </div>
      <div className="container py-5 my-5 fadeInDown">
        <div className="title-fluid text-center d-flex justify-content-evenly">
          <hr className='fadeInRight' style={hrLine} />
          <h2 className='m-3'>More Events</h2>
          <hr className='fadeInLeft' style={hrLine} />
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 sm-12" onClick={smoothDirect}>
            <div className="card m-2 cardStyle2" onClick={() => { navigate("/eventspecific") }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events
