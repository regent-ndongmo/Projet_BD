import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './School.css';


export default function SchoolInformation() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading,] = useState(true);
    const [activite, setActivite] = useState([]);
    const [sequence, setSequence] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://192.168.22.68:7777/cycle');
                setContacts(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://192.168.22.68:7777/activite');
                setActivite(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://192.168.22.68:7777/sequence');
                setSequence(response.data);
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
            {/* { activite.map(person => <li key={person.id}>{person.name}</li>) }
            { activite.map(person => <li key={person.id}>{person.name}</li>) }
            { sequence.map(person => <li key={person.id}>{person.name}</li>) } */}
            <div class="pagetitle">
                <h1>School informations</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">Home</li>
                        <li class="breadcrumb-item">Pages</li>
                        <li class="breadcrumb-item active">School information</li>
                    </ol>
                </nav>
            </div>

            <section class="section faq">
                <div class="row">
                    <div class="col-lg-6">

                        <div class="card basic">
                            <div class="card-body">
                                <h5 class="card-title">Cycles</h5>

                                <div className='libele'>
                                    <ol>
                                        {contacts.map(person => <li key={person.id}>{person.libelle}</li>)}
                                    </ol>
                                </div>

                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Sequences</h5>

                                <div className='libele'>
                                    <ol>
                                        {sequence.map(person => <li key={person.id}>{person.libelle}</li>)}
                                    </ol>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="col-lg-6">

                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Activites</h5>

                                <div className='libele'>
                                    <table class="table datatable">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <b>L</b>ibele
                                                </th>
                                                <th>Discription</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{activite.map(person => <div key={person.id}>{person.libelle}</div>)}</td>
                                                <td>{activite.map(person => <div key={person.id}>{person.description}</div>)}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    )
}
