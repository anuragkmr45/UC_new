import React from 'react'

import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'

function Card1(props) {

    // const navigate = useNavigate();
    const smoothDirect = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
    const styleLink = {
        textDecoration: "none",
        color: "white"
        
    }
    return (
        <div className="col fadeInRight">
            <div className="card shadow-sm cardStyle2">
                <Link to={/collegeSpecific/props.id} onClick={smoothDirect} style={styleLink}>
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>

                    <div className="card-body">
                        <h4 className="card-head">{props.head }</h4>
                        <p className="card-text">{props.text}</p>
                        <div className="d-flex justify-content-between align-items-center">
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Card1
