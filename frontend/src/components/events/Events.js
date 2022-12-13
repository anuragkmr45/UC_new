import React from 'react'
import { useNavigate } from 'react-router-dom'

// import Carousel from '../../Carousel'
import OwlCarousel from './OwlCarousel';
import TabPanel from './TabPanel';

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
      {/* <div className="my-5 fadeInUp">
        <Carousel heigth="400px" />
      </div> */}
      <section className='mt-5 pt-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <p>Uncocercampus <span style={{ color: "rgb(224 72 23)" }}>Events</span></p>
              <h1 className='my-3'><b> <span style={{ color: "rgb(224 72 23)" }}>The Events</span> that actually help you grow!</b></h1>
              <h5 className='my-5'>Get access to free LIVE events that help you explore your favorite fields and grow to the next level. They’re taken by industry experts having vast knowledge about their subject.</h5>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12"></div>
          </div>
        </div>
      </section>
      <div className="container py-5" style={{ backgroundColor: "rgba(33,37,41)", borderRadius: "1.5rem" }}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 fadeInLeft">
            <div className="container-fluid">
              <h3 className="display-5"><span>Top</span> Events</h3>
              <p className="">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
              <button type="button" className="btn icons" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Register Your Event With Us</button>

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
        <div className="title-fluid text-center">
          <h2 className='m-3'>If you missed something, <span style={{ color: "rgb(224 72 23)" }}>access it right here</span></h2>
        </div>
        <TabPanel />
      </div>
    </>
  )
}

export default Events
