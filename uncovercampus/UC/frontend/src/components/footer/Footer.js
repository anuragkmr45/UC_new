import React from "react";

import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a
                        href="/"
                        className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                    >
                        <svg className="bi" width="30" height="24">
                            <use xlink:href="#uncovercampus logo"></use>
                        </svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href="#">
                            <BsTwitter />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="#">
                            <BsInstagram />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="#">
                            <BsFacebook />
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;
