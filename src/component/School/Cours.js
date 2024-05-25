import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cours = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://192.168.22.68:7777/cours');
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
            <div>
                <main id="main" class="main">

                    <div class="pagetitle">
                        <h1>Cours</h1>
                        <nav>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item">Components</li>
                                <li class="breadcrumb-item active">Cours</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End Page Title --> */}

                    <section class="section">
                        <table class="table datatable">
                            <thead>
                                <tr>
                                    <th>
                                        <b>I</b>d
                                    </th>
                                    <th>Libelle</th>
                                    <th>Credit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{contacts.map(person => <div key={person.id}>{person.id}</div>)}</td>
                                    <td>{contacts.map(person => <div key={person.id}>{person.libelle}</div>)}</td>
                                    <td>{contacts.map(person => <div key={person.id}>{person.coef}</div>)}</td>
                                
                                 </tr>

                            </tbody>
                        </table>
                    </section>

                </main>
                {/* //   <!-- End #main --> */}

            </div>
        </div>
    );
};

export default Cours;