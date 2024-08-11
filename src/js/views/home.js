import React, { useState, useEffect } from "react";
import "../../styles/home.css";

export const Home = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Reemplaza "michell" con el nombre de agenda válido
        fetch('https://playground.4geeks.com/contact/agendas/michell/contacts')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data fetched:', data); // Añadido para diagnóstico
                setContacts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Fetch error:', error); // Añadido para diagnóstico
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container">
            <div className="row">
                {contacts.length > 0 ? (
                    contacts.map(contact => (
                        <div key={contact.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={contact.image || "https://placehold.co/400"} alt={contact.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{contact.name}</h5>
                                    <p className="card-text">
                                        <i className="fa-solid fa-location-dot"></i> {contact.address}
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-phone"></i> {contact.phone}
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-regular fa-envelope"></i> {contact.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No contacts available.</p>
                )}
            </div>
        </div>
    );
};

