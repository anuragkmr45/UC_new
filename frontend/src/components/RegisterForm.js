import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'

function RegisterForm() {

    const [user, setUser] = useState({
        stuName: "",
        cllgName: "",
        email: "",
        phone: ""
    })

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const history = useNavigate();

    const PostData = async (e) =>{
        e.preventDefault();

        const { stuName, cllgName, email, phone } = user;

        const res = await fetch("/eventStuReg", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ stuName, cllgName, email, phone })
        })

        const data = await res.json()

        if (data.status === 422 || !data) {
            window.alert("invalid reg")
            console.log("invalid reg")
        }else {
            window.alert("success reg")
            console.log("success reg")
            
            history('/events');
        }
    }
    return (
        <>
            <button type="button" className="btn btn-outline-secondary py-3" style={{ borderRadius: "none" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Register For This Event
            </button>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{ backgroundColor: "rgba(7, 7, 7, 0.827)" }}>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content" style={{ backgroundColor: "rgba(50, 50, 50)" }}>
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5> */}
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-body">
                            <form method='POST' className="container">
                                <div className="mb-3 row">
                                    <input type="text" name='stuName' className="form-control" value={user.stuName} onChange={handleInputs} placeholder='Student Name' />
                                </div>
                                <div className="mb-3 row">
                                    <input type="text" name='cllgName' className="form-control" value={user.cllgName} onChange={handleInputs} placeholder='College Name' />
                                </div>
                                <div className="mb-3 row">
                                    <input type="email" name='email' className="form-control" value={user.email} onChange={handleInputs} placeholder='Email' />
                                </div>
                                <div className="mb-3 row">
                                    <input type="tel" name='phone' className="form-control" value={user.phone} onChange={handleInputs} placeholder='Phone no' />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer mx-auto">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={PostData}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterForm
