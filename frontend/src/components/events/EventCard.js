import React from 'react'
import { useNavigate } from 'react-router-dom'

function EventCard(props) {

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
            <div onClick={smoothDirect}>
                <div className="card text-center" onClick={() => { navigate("/eventspecific") }}>
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventCard
