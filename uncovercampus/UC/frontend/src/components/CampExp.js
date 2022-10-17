import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { API } from '../service/api.js';

function CampExp() {
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

        let res = await API.getAllExpByCllgName({});
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
          <h1 className="display-5 fw-bold text-white">Campus <span>Explorer</span></h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-e</p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 fadeInLeft">
            <div className='p-5' style={{ backgroundColor: "rgba(33, 37, 41)" }}>
              <h2>List Of <span>Colleges</span> <br />searchbar</h2>

              <div className="container">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    College name
                  </label>
                </div>
              </div>
              <div className="container">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    College name
                  </label>
                </div>
              </div>
              <div className="container">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    College name
                  </label>
                </div>
              </div>
              <div className="container">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    College name
                  </label>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-8 col-md-8 col-sm-12 fadeInRight">
            <div className="container">
              <div className="row">
                {
                  posts.map((post, i) => {
                    return (

                      <div key={i} className='col-lg-6 col-md-6 col-sm-12' onClick={smoothDirect}>
                        <div className="card cardStyle2 my-3" style={{ maxWidth: "18rem" }} onClick={() => { navigate(`/campusexplorerspecific/${post}`) }}>
                          <img src="..." className="card-img-top" alt="..." />
                          <div className="card-body">
                            <p>{post}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CampExp
