import React from 'react'


function Academics() {
  return (
    <>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5 fadeInUp">
          <h1 className="display-5 fw-bold text-white"><span>Academics</span></h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-e</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
              <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 fadeInLeft">
            <h2>Filter <span>Option</span> </h2>
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

          </div>

          <div className="col-lg-8 col-md-8 col-sm-12 fadeInRight">
            <div className="d-flex flex-wrap justify-content-around">
              <div className="card m-3 cardStyle2"  style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3 className="card-text"><span>Bcom</span></h3>
                  </div>
              </div>
              <div className="card m-3 cardStyle2"  style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the buontent.</p>
                  </div>
              </div>
              <div className="card m-3 cardStyle2"  style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the buontent.</p>
                  </div>
              </div>
              <div className="card m-3 cardStyle2"  style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the buontent.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Academics
