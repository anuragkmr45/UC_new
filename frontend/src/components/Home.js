import React, { useEffect, useState } from 'react'
// import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

import { API } from '../service/api.js';

import BgImg3 from "../images/Hero-bg.png";
import Img1 from '../images/Hero-img.svg'

import { FaUniversity, FaSchool } from "react-icons/fa";
import { BiStreetView, BiBuildingHouse } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

import CllgCard from "./CllgCard";
// import TextCarousel from "./TextCarousel";

function Home() {

  const navigate = useNavigate();
  const smoothDirect = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const parallex = {
    backgroundImage: `url(${BgImg3})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const hrLine = {
    width: "100px",
    border: "1.5px solid #66fcf1",
    backgroundColor: " #66fcf1",
  };

  // college finder dynamic data retreaving 
  const [cllg, getCllg] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try {

        let res = await API.getAllCllg({});

        getCllg(res.data)

      } catch (error) {

        console.log(error.message)
      }
    }
    fetchData();
  }, []);


  // college finder dynamic data retreaving 
  const [camp, getcamp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try {

        let res = await API.getAllExpByCllgName({});
        getcamp(res.data)

      } catch (error) {

        console.log(error.message)
      }
    }
    fetchData();
  }, []);


  return (
    <>
      <div style={parallex}>
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="fadeInRight">
                {/* <HiOutlineAcademicCap fontSize="5rem" /> */}
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  We are <br />
                  <span>UncoverCampus</span>
                </h1>
                <hr className="my-4" style={hrLine} />
                <h3 className="">
                  One Stop Solution For All Needs Of College Students
                </h3>
                {/* <button className="btn btn-outline-secondary" onClick={handleClick}><h3>Contact Us</h3></button> */}

                <div className="container">
                  <div className="px-2 py-2 my-5" style={{ backgroundColor: "white", borderRadius: "20px", maxWidth: "500px" }}>
                    <form action="#" className="form-search d-flex align-items-stretch aos-init">
                      <input type="text" className="form-control" placeholder="Search your College " style={{ backgroundColor: "white" }} />
                      <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                  </div>
                </div>
                <div className="container">
                  <div className="d-flex flex-wrap justify-content-around">
                    <div onClick={smoothDirect} style={{ cursor: 'pointer' }}>
                      <div className="text-center" onClick={() => { navigate('/collegefinder') }}>
                        <FaUniversity fontSize="3.5rem" color="aqua" />
                        <h4>50</h4>
                        <h5>Colleges</h5>
                        <hr style={{ color: "aqua", border: "2px solid aqua" }} />
                      </div>
                    </div>

                    <div onClick={smoothDirect} style={{ cursor: 'pointer' }}>
                      <div className="text-center" onClick={() => { navigate('/campusexplorer') }}>
                        <FaSchool fontSize="3.5rem" color="aqua" />
                        <h4>95</h4>
                        <h5>Area To Explor</h5>
                        <hr style={{ color: "aqua", border: "2px solid aqua" }} />
                      </div>
                    </div>

                    <div onClick={smoothDirect} style={{ cursor: 'pointer' }}>
                      <div className="text-center" onClick={() => { navigate('/events') }}>
                        <BiStreetView fontSize="3.5rem" color="aqua" />
                        <h4>20</h4>
                        <h5>Events</h5>
                        <hr style={{ color: "aqua", border: "2px solid aqua" }} />
                      </div>
                    </div>

                    <div onClick={smoothDirect} style={{ cursor: 'pointer' }}>
                      <div className="text-center" onClick={() => { navigate('/accommodation') }}>
                        <BiBuildingHouse fontSize="3.5rem" color="aqua" />
                        <h4>20</h4>
                        <h5>Accommodations</h5>
                        <hr style={{ color: "aqua", border: "2px solid aqua" }} />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="container fadeInLeft">
                <img src={Img1} alt="" style={{ height: "320px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="col-lg-4 lightCard" onClick={smoothDirect}>
            <div className="card mb-3 cardStyle1 fadeInUp" onClick={() => { navigate('/collegefinder') }}>
              <div className="card-body">
                <FaUniversity fontSize="5rem" color="aqua" />
                <h4 className="card-title">College Finder</h4>
                <hr style={hrLine} />
                <div className="elementor-divider">
                  <span className="elementor-divider-separator"></span>
                </div>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4" onClick={smoothDirect}>
            <div className="card mb-3 cardStyle1 fadeInUp" onClick={() => { navigate('/campusexplorer') }}>
              <div className="card-body">
                <FaSchool fontSize="5rem" color="aqua" />
                <h4 className="card-title">Campus Explorer</h4>
                <hr style={hrLine} />
                <div className="elementor-divider">
                  <span className="elementor-divider-separator"></span>
                </div>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4" onClick={smoothDirect}>
            <div className="card mb-3 cardStyle1 fadeInUp" onClick={() => { navigate('/events') }}>
              <div className="card-body">
                <BiStreetView fontSize="5rem" color="aqua" />
                <h4 className="card-title">Events</h4>
                <hr style={hrLine} />
                <div className="elementor-divider">
                  <span className="elementor-divider-separator"></span>
                </div>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4" onClick={smoothDirect}>
            <div className="card mb-3 cardStyle1 fadeInUp" onClick={() => { navigate('/accommodation') }}>
              <div className="card-body">
                <BiBuildingHouse fontSize="5rem" color="aqua" />
                <h4 className="card-title">Accommodations</h4>
                <hr style={hrLine} />
                <div className="elementor-divider">
                  <span className="elementor-divider-separator"></span>
                </div>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4" onClick={smoothDirect}>
            <div className="card mb-3 cardStyle1 fadeInUp" onClick={() => { navigate('/academics') }}>
              <div className="card-body">
                <ImBooks fontSize="5rem" color="aqua" />
                <h4 className="card-title">Academics</h4>
                <hr style={hrLine} />
                <div className="elementor-divider">
                  <span className="elementor-divider-separator"></span>
                </div>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="my-3 py-3">
        <div className="container">
          <div class="row align-items-md-stretch">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="h-100 p-5 text-bg-dark rounded-3">
                <h2>Get to know us</h2>
                <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match </p>
                <button class="btn btn-outline-light" type="button">Example button</button>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <TextCarousel />
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2> <span>About Us</span></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam quae, modi illo, provident corrupti officiis at magni aut error aliquam! At illo soluta consequuntur quidem id repellendus, quia omnis.</p>
              <div className='d-flex'>
                <HiOutlineLightBulb color='aqua' fontSize='5rem' className='m-2' />
                <div>
                  <h4> <span>who we are</span> </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit consectetur, harum dolorem blanditiis iusto reiciendis sint quas doloremque perferendis?
                  </p>
                </div>
              </div>

              <div className='d-flex'>
                <BsFillCheckCircleFill color='aqua' fontSize='5rem' className='m-2' />
                <div>
                  <h4> <span>Our Mission</span> </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit consectetur, harum dolorem blanditiis iusto reiciendis sint quas doloremque perferendis?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12"></div>
          </div>
        </div>
      </section>

      <div
        className="py-5"
        style={{ backgroundColor: "rgba(30, 30, 30, 0.627)" }}
      >
        <div className="container">
          <div className="heading text-center">
            <h2> College Finder</h2>
            <hr className="mx-auto" style={hrLine} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati, nisi.
            </p>
          </div>

          <div className="row">
            {
              cllg.slice(0, 4).map((post, i) => (
                <CllgCard key={i} id={post._id} cllgname={post.cllgName} camp={post.campus} campus='north' />
              ))
            }
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="heading text-center">
            <h2>Campus Explorer</h2>
            <hr className="mx-auto" style={hrLine} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati, nisi.
            </p>
          </div>

          <div className="row">
            {
              camp.slice(0, 4).map((post, i) => {
                return (

                  <div key={i} className='col-lg-3 col-md-6 col-sm-12' onClick={smoothDirect}>
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

    </>
  );
}

export default Home;
