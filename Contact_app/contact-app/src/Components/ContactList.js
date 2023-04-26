import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact) => {
        return (
            <div className="bg-dark">
                <ContactCard contact={contact}></ContactCard>
            </div>
        );
    });
    return <div className="celled list">{renderContactList}</div>
};

export default ContactList