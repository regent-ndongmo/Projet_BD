import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './School.css';
import Contact from '../Contact/Contact';

export default function Salle() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading,] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://192.168.22.68:7777/salle');
                setContacts(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    return (
        <main id="main" class="main">

            <div class="pagetitle">
                <h1>School informations</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">Home</li>
                        <li class="breadcrumb-item">School_year</li>
                        <li class="breadcrumb-item active">Salle</li>
                    </ol>
                </nav>
            </div>

            <section class="section faq">
                <table class="table datatable">
                    <thead>
                        <tr>
                            <th>
                                <b>L</b>ibelle
                            </th>
                            <th>Batiments</th>
                            <th>latitude</th>
                            <th>Longitude</th>
                            <th>Altitude</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{contacts.map(person => <div key={person.id}>{person.libelle}</div>)}</td>
                            <td>{contacts.map(person => <div key={person.id}>{person.batiment}</div>)}</td>
                            <td>{contacts.map(person => <div key={person.id}>{person.latitude}</div>)}</td>
                            <td>{contacts.map(person => <div key={person.id}>{person.longitude}</div>)}</td>
                            <td>{contacts.map(person => <div key={person.id}>{person.altitude}</div>)}</td>
                            
                        </tr>

                    </tbody>
                </table>

            </section>

        </main>
    )
}
