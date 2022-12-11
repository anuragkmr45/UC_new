import React, { useState } from "react";
import EventCard from "./EventCard";

import "./TabPanel.css";

function TabPanel() {
    const [showtab, setShowtab] = useState(1);

    const handletab = (e) => {
        setShowtab(e);
    };

    return (
        <>
            <>
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between mx-auto my-2">
                        <h6
                            className={showtab === 1 ? "active tabItem" : "tabItem"}
                            onClick={() => handletab(1)}
                        >
                            Type-1
                        </h6>
                        <h6
                            className={showtab === 2 ? "active tabItem" : "tabItem"}
                            onClick={() => handletab(2)}
                        >
                            Type-2
                        </h6>
                        <h6
                            className={showtab === 3 ? "active tabItem" : "tabItem"}
                            onClick={() => handletab(3)}
                        >
                            Type-3
                        </h6>
                        <h6
                            className={showtab === 4 ? "active tabItem" : "tabItem"}
                            onClick={() => handletab(4)}
                        >
                            Type-4
                        </h6>
                        <h6
                            className={showtab === 5 ? "active tabItem" : "tabItem"}
                            onClick={() => handletab(5)}
                        >
                            Type-5
                        </h6>
                    </div>
                    <div className="tab-content my-3" id="pills-tabContent">
                        {/* start tab 1*/}
                        <div
                            className={
                                showtab === 1
                                    ? "tab-pane fade show active p-lg-4"
                                    : "tab-pane fade show p-lg-4"
                            }
                        >
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <EventCard title="title-1" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat?" />
                                </div>
                            </div>
                        </div>
                        {/* close tab 1*/}

                        {/* start tab 2*/}
                        <div
                            className={
                                showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"
                            }
                        >
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <EventCard title="title-2" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat?" />
                                </div>
                            </div>
                        </div>
                        {/* close tab 2*/}

                        {/* start tab 3*/}
                        <div
                            className={
                                showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"
                            }
                        >
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <EventCard title="title-3" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat?" />
                                </div>
                            </div>
                        </div>
                        {/* close tab 3*/}

                        {/* start tab 4*/}
                        <div
                            className={
                                showtab === 4 ? "tab-pane fade show active" : "tab-pane fade"
                            }
                        >
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <EventCard title="title-4" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat?" />
                                </div>
                            </div>
                        </div>
                        {/* close tab 4*/}

                        {/* start tab 5*/}
                        <div
                            className={
                                showtab === 5 ? "tab-pane fade show active" : "tab-pane fade"
                            }
                        >
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <EventCard title="title-5" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat?" />
                                </div>
                            </div>
                        </div>
                        {/* close tab 5*/}
                    </div>
                </div>
            </>
        </>
    );
}

export default TabPanel;