import React from 'react';
import './SideBar.css';
import { BrowserRouter, Link } from 'react-router-dom';

const SideBar = () => {
    return (
        
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <Link to="/" className="nav-link ">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="BgChange" className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse">
                        <i className="bi bi-menu-button-wide"></i><span>school year</span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">

                        <li>
                            <Link to="School-information">
                                <i className="bi bi-circle"></i><span>school year information</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="salle">
                                <i className="bi bi-circle"></i><span>Salle Disponible</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="cours">
                                <i className="bi bi-circle"></i><span>Liste Cours</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" to="#">
                        <i className="bi bi-journal-text"></i><span>Students</span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to="/StudentList">
                                <i className="bi bi-circle"></i><span>students list</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/note">
                                <i className="bi bi-circle"></i><span>Note</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" to="#">
                        <i className="bi bi-layout-text-window-reverse"></i><span>teachers</span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        
                        <li>
                            <Link to="TeacherList">
                                <i className="bi bi-circle"></i><span>teachers list</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                
                {/* <li className="nav-item">
                    <Link className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" to="#">
                        <i className="bi bi-gem"></i><span>classNameroom</span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to="icons-bootstrap.html">
                                <i className="bi bi-circle"></i><span>fisrt cycle</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="icons-remix.html">
                                <i className="bi bi-circle"></i><span>second cycle</span>
                            </Link>
                        </li>

                    </ul>
                </li> */}
                <li className="nav-heading">Pages</li>

                {/* <li className="nav-item">
                    <Link className="nav-link collapsed" to="User_Profile">
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </Link>
                </li> */}

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="Helps">
                        <i className="bi bi-question-circle"></i>
                        <span>helps</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="Contact">
                        <i className="bi bi-envelope"></i>
                        <span>Contact</span>
                    </Link>
                </li>

                {/* <li className="nav-item">
                    <Link className="nav-link collapsed" to="Register">
                        <i className="bi bi-card-list"></i>
                        <span>Register</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="Login">
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span>Login</span>
                    </Link>
                </li> */}
                {/* </Router> */}

            </ul>

        </aside>
      
    );
};

export default SideBar;