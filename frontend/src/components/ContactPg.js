import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { API } from '../service/api'

function ContactPg() {

    const initialPost = {
        name: '',
        email: '',
        phone: '',
        area: '',
    }

    const [visit, setVisit] = useState(initialPost);

    const handleChange = (e) => {
        setVisit({ ...visit, [e.target.name]: e.target.value });
    }

    const navigate = useNavigate();
    const savePost = async () => {
        await API.postContact(visit);
        navigate('/');
    }

    return (
        <>
            <form>
                <div className='my-2'>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Your Name" name='name' onChange={(e) => handleChange(e)} />
                </div>

                <div className="my-2">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" name='email' onChange={(e) => handleChange(e)} />
                </div>

                <div className="input-group my-2">
                    <div className="input-group-prepend mx-1">
                        <div className="input-group-text" style={{ backgroundColor: "rgb(26, 26, 26)", color: "grey", border: "none" }}>+91</div>
                    </div>
                    <input type="tel" className="form-control" id="exampleInputNumber1" aria-describedby="emailHelp" placeholder='Contact Number' name='phone' onChange={(e) => handleChange(e)} />
                </div>
                
                <div className='my-2'>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Your Name" name='area' onChange={(e) => handleChange(e)} />
                </div>

                <button type="submit" className="btn btn-outline-secondary" onClick={() => savePost()}>Submit</button>
            </form>
        </>
    )
}

export default ContactPg
