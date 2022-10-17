import React from 'react'
import { useNavigate } from 'react-router-dom'

function PgCard1(props) {

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
            <div className="card cardStyle1" onClick={smoothDirect}>
                <div onClick={() => { navigate(`/accomodationnearme/${props.id}`) }}>

                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.pgName}</h5>
                        <h6 className="card-text">Owner name - {props.ownerName}</h6>
                    </div>
                    <ul className="list-group list-group-flush" style={{backgroundColor: "rgba(96, 96, 96, .2)", listStyle:"none"}}>
                        <li className="my-1"> <b>For</b> - {props.gender}</li>
                        <li className="my-1"><b>Near</b> - {props.nearMetro}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PgCard1
