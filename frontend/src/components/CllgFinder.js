import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

import { API } from '../service/api.js';

import { FaUniversity, FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

import BgImg1 from '../images/BgImg-1.jpg'

import CllgCard from './CllgCard.js';


function CllgFinder() {


  const parallex = {
    backgroundImage: `url(${BgImg1})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }

  const hrLine = {
    width: "200px",
    border: "1.5px solid #00ffee",
    backgroundColor: " #00ffee"
  }

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
      <div className="p-1" style={{ backgroundColor: "#28282B" }}>
        <div className="px-4 py-5 my-5 text-center fadeInDown">
          <h1 className="display-5 fw-bold"><span> College</span>  Finder</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around mb-5 fadeInUp">
          <Link to='nc' spy={true} smooth={true} offset={1}>
            <div className="campus btn-1">
              <div className="content text-center">
                <FaUniversity fontSize='4rem' />
                <h5>NORTH CAMPUS</h5>
              </div>
            </div>
          </Link>
          <Link to='sc' spy={true} smooth={true} offset={1}>
            <div className="campus btn-1">
              <div className="content text-center">
                <FaSchool fontSize='4rem' />
                <h5>South CAMPUS</h5>
              </div>
            </div>
          </Link>
          <Link to='oc' spy={true} smooth={true} offset={1}>
            <div className="campus btn-1">
              <div className="content text-center">
                <MdSchool fontSize='4rem' />
                <h5>Off CAMPUS</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <section style={parallex}>

        <div className="container py-5" name='nc'>
          <div className='d-flex justify-content-between'>
            <h1 className='fadeInLeft'>Top Colleges Under <span>South Campus</span></h1>
            <div onClick={smoothDirect}>
              <div className="btn-1 fadeInRight" onClick={() => { navigate("/CampusSpecificColleges/south") }}>
                <h6>More Colleges In  South Campus</h6>
              </div>
            </div>
          </div>
          <hr style={hrLine} />
          <div className="row fadeInDown">

          {
              posts.slice(0, 3).map((post, i) => (
                <CllgCard key={i} id={post._id} cllgname={post.cllgName} camp={post.campus} campus='south' />
              ))
            }

          </div>
        </div>

        <div className="container my-5" name='sc'>
          <div className='d-flex justify-content-between'>
            <h1>Top Colleges Under <span>Off Campus</span> </h1>
            <div onClick={smoothDirect}>
              <div className="btn-1 fadeInRight" onClick={() => { navigate("/CampusSpecificColleges/off") }}>
                <h6>More Colleges In  Off Campus</h6>
              </div>
            </div>
          </div>
          <hr style={hrLine} />
          <div className="row">

            {
              posts.slice(0, 3).map((post, i) => (
                <CllgCard key={i} id={post._id} cllgname={post.cllgName} camp={post.campus} campus='off' />
              ))
            }
          </div>
        </div>

        <div className="container my-5" name='oc'>
          <div className='d-flex justify-content-between'>
            <h1>Top Colleges Under <span>North Campus</span> </h1>
            <div onClick={smoothDirect}>
              <div className="btn-1 fadeInRight" onClick={() => { navigate("/CampusSpecificColleges/north") }}>
                <h6>More Colleges In  North Campus</h6>
              </div>
            </div>
          </div>
          <hr style={hrLine} />
          <div className="row">
          {
              posts.slice(0, 3).map((post, i) => (
                <CllgCard key={i} id={post._id} cllgname={post.cllgName} camp={post.campus} campus='north' />
              ))
            }
          </div>
        </div>
      </section>

    </>
  )
}

export default CllgFinder
