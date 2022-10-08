import React from 'react'

import './TeamCard.css'

import { AiOutlineLinkedin } from "react-icons/ai";

function TeamCard(props) {
    return (
        <>
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <h6 className="card-title">{props.position}</h6>
                        <button className="btn"><a href={props.link}><AiOutlineLinkedin /></a></button>
                    </div>
            </div>
        </>
    )
}

export default TeamCard
