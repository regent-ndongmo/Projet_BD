import React from 'react';
import "./Container.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Container = () => {
    return (
        <main id="main" className="main">

            <div className="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
                </nav>
            </div>
            {/* <!-- End Page Title --> */}

            <section className="section dashboard">
                <div className="dashbord-container">

                    <div class="card">
                        <Link to="/StudentList">
                            <img class="card-img-top" src="assets/BD/img0.jpg" alt="Card image cap"/>
                        </Link>
                        <div class="card-body">
                            <p class="card-text">Nos eleves dans cette etablissement ont une experience de qualite avec un ensemble de livres et de documentaires a leur disposition</p>
                        </div>
                    </div>

                    <div class="card">
                        <Link to="/School-information">
                            <img class="card-img-top" src="assets/BD/img01.jpg" alt="Card image cap"/>
                        </Link>
                        <div class="card-body">
                            <p class="card-text">Nous avons plusieur etablissement dans la ville dont l'une de nos meilleure etablissementse presente comme l'image ci dessus</p>
                        </div>
                    </div>

                    <div class="card">
                        <Link to="/TeacherList">
                            <img class="card-img-top" src="assets/BD/img02.jpg" alt="Card image cap"/>
                        </Link>
                        <div class="card-body">
                            <p class="card-text">Nous avons a notre disposition des enseignants de qualite avec des competences parfaites pour l'encadrement et le suivie des enfants</p>
                        </div>
                    </div>

                    <div class="card">
                        <Link to="/TeacherList">
                            <img class="card-img-top" src="assets/BD/img03.jpg" alt="Card image cap"/>
                        </Link>
                        <div class="card-body">
                            <p class="card-text">Le suivie des eleves est notre priorite pour les assurer un avenir meilleur et complet</p>
                        </div>
                    </div>

                    <div class="card">
                        <Link to="/salle">
                            <img class="card-img-top" src="assets/BD/img4.jpeg" alt="Card image cap"/>
                        </Link>
                        <div class="card-body">
                            <p class="card-text">La structure de notre etablissement se presente exactement comme l'image ci dessus</p>
                        </div>
                    </div>

                    <div class="card">
                        <Link to="/StudentList">
                            <img class="card-img-top" src="assets/BD/img04.jpeg" alt="Card image cap"/>
                        </Link>
                        <div class="card-body">
                            <p class="card-text">Discipline-Travail-Success represente la politique et la norme de notre etablissement dans son ensemble</p>
                        </div>
                    </div>

                    
                

                </div>
            </section>

        </main>
    );
};

export default Container;
