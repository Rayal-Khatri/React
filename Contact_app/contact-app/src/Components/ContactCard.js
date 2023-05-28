import React from "react";
import User from "../Images/avatar.jpg";
const ContactCard = (props) => {
    const { id, Name, Ph_No } = props.contact;
    return (
        <div className="my-1 item ">
            <div className="card">
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex name-component">
                                <img src={User} alt="picture" className="rounded img-fluid" style={{width: "40px", height: "40px"}}/>
                                <p className="mx-3">{Name} </p>
                            </div>
                            <i style={{ color: "red" }} className="bi bi-trash hover cursor-pointer "></i>
                        </div>
                        <footer className="blockquote-footer">-{Ph_No}</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};
export default ContactCard