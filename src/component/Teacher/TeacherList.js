import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TeacherList() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://192.168.22.68:8085/professeur');
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
        <div>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>students list</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <div class="breadcrumb-item"><a href="index.html">Home</a></div>
                            <div class="breadcrumb-item">teachers</div>
                            <div class="breadcrumb-item active">Teacher list</div>
                        </ol>
                    </nav>
                </div>

                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">

                            <div class="card">
                                <div class="card-body">



                                    <table class="table datatable">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <b>N</b>ame
                                                </th>
                                                <th>Prenom</th>
                                                <th>Date de Naissance</th>
                                                <th data-type="date" data-format="YYYY/DD/MM">Sexe</th>
                                                <th>Experience</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{contacts.map(person => <div key={person.id}>{person.nom}</div>)}</td>
                                                <td>{contacts.map(person => <div key={person.id}>{person.prenom}</div>)}</td>
                                                <td>{contacts.map(person => <div key={person.id}>{person.dateNaiss}</div>)}</td>
                                                <td>{contacts.map(person => <div key={person.id}>{person.sexe}</div>)}</td>
                                                <td>{contacts.map(person => <div key={person.id}>{person.experience}</div>)}</td>
                                            </tr>

                                        </tbody>
                                    </table>


                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
    }
