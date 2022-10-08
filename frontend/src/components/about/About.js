import React from 'react'
import { useNavigate } from 'react-router-dom'

// import Img1 from '../images/Hero-img.svg'

import { FaUniversity, FaSchool } from "react-icons/fa";
import { BiStreetView, BiBuildingHouse } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import TeamCard from './TeamCard';

function About() {

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

      <section>

      </section>

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

      <section style={{ backgroundColor: '#212529' }} className='py-5'>
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
      </section>

      <section>
        <div>
          <h1>Our Team</h1>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <TeamCard />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <TeamCard />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <TeamCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
