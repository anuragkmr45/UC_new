import React from 'react'
import { useNavigate } from 'react-router-dom'

import { FaUniversity } from "react-icons/fa";

function ServiceCard(props) {

    const navigate = useNavigate();
    const smoothDirect = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    const hrLine = {
        width: "100px",
        border: "1.5px solid #66fcf1",
        backgroundColor: " #66fcf1",
    };

    return (
        <>
            <div className="lightCard" onClick={smoothDirect}>
                <div className="card mb-3 cardStyle1 fadeInUp" onClick={() => { navigate(`/${props.link}`) }}>
                    <div className="card-body">
                        <FaUniversity fontSize="5rem" color="aqua" />
                        <h4 className="card-title">{props.service}</h4>
                        <hr style={hrLine} />
                        <div className="elementor-divider">
                            <span className="elementor-divider-separator"></span>
                        </div>
                        <p className="card-text">
                            {props.text}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
