import React from 'react';
import "../../styles/Contactos.css";

function Contactos({ contact }) {
    if (!contact) {
        return <p>No contact found.</p>;
    }

    return (
        <div className="contact-card">
            <img className="contact-image" src={contact.image || "https://placehold.co/400"} alt={contact.name} />
            <div className="contact-details">
                <h4 className="contact-name">{contact.name}</h4>
                <p className="contact-info">
                    <i className="fa-solid fa-location-dot"></i> {contact.address}
                </p>
                <p className="contact-info">
                    <i className="fa-solid fa-phone"></i> {contact.phone}
                </p>
                <p className="contact-info">
                    <i className="fa-regular fa-envelope"></i> {contact.email}
                </p>
            </div>
        </div>
    );
}

export default Contactos;