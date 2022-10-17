import React from 'react'
import { useNavigate } from 'react-router-dom'

function CllgCard(props) {

    const navigate = useNavigate();
    const smoothDirect = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    if (props.camp === props.campus) {
        return (
            <>{
                <div className="col-lg-3 col-md-col-4 col-sm-12 fadeInLeft" onClick={smoothDirect}>
                        <div className="card cardStyle2" onClick={() => { navigate(`/collegeSpecific/${props.id}`) }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2 className="card-text">{props.cllgname}</h2>
                            </div>
                        </div>
                </div>
            }
            </>
        )
    }
}

export default CllgCard
