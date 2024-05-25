import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../Layout/SearchBar/SearchBar';
import './style.css'

export default function Studentdivst() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://192.168.22.68:7777/eleve');
                // const response = await axios.get('http://192.168.22.68:7777:/produit/read');
                setContacts(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);
    console.log("Nom de chaque eleve",contacts)

    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        setFilteredData(contacts);
    }, []);

    const handleSearch = (query) => {
        const filtered = contacts.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
      };
    return (
        <div>



            <main id="main" class="main">
            {/* <SearchBar on={handleSearch}/> */}

                <div class="pagetitle">
                    <h1>students list</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <div class="breadcrumb-item"><a href="index.html">Home</a></div>
                            <div class="breadcrumb-item">students</div>
                            <div class="breadcrumb-item active">students list</div>
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
                                                <th>Sexe</th>
                                                <th data-type="date" data-format="YYYY/DD/MM">Born Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {/* <td>{filteredData.map(person => <div key={person.id}>{person.name}</div>)}</td>
                                                <td>{filteredData.map(person => <div key={person.id}>{person.email}</div>)}</td>
                                                <td>{filteredData.map(person => <div key={person.id}>{person.subject}</div>)}</td>
                                                <td>{filteredData.map(person => <div key={person.id}>{person.name}</div>)}</td>
                                                <td>{filteredData.map(person => <div key={person.id}>{person.message}</div>)}</td>
                                                 */}
                                                <td>{contacts.map(person => <div key={person.id}>{person.nom}</div>)}</td>
                                                <td>{contacts.map(person => <div key={person.id}>{person.prenom}</div>)}</td>
                                                <td>{contacts.map(person => <div key={person.id}>{person.sexe}</div>)}</td>
                                                <td>{contacts.map(person => <div key={person.id}>{person.dateNaiss}</div>)}</td>
                                                
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
