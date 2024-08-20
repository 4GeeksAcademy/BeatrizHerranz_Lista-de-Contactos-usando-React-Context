import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/home.css";

export const Home = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://playground.4geeks.com/contact/agendas/BeatrizHerranz/contacts')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data fetched:', data); 
                setContacts(data.contacts);
                setLoading(false);
                console.log(data)

            })
            .catch(error => {
                console.error('Fetch error:', error); 
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container">
            <div className="row justify-content-center">
                {contacts.length > 0 ? (
                    contacts.map(contact => (
                        <div key={contact.id} className="col-md-8 mb-4">
                            <div className="card">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img className="card-img" src={contact.image || "https://placehold.co/400"} alt={contact.name} />
                                    </div>
                                    <div className="col-md-8">
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

