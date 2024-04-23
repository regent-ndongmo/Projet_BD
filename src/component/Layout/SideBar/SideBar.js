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
                    <Link to="BgChange" className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href='#'>
                        <i className="bi bi-menu-button-wide"></i><span>school year</span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">

                        <li>
                            <Link href="components-carousel.html">
                                <i className="bi bi-circle"></i><span>school year information</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="components-list-group.html">
                                <i className="bi bi-circle"></i><span>school examination result</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="components-modal.html">
                                <i className="bi bi-circle"></i><span>history</span>
                            </Link>
                        </li>


                        <li>
                            <Link to="Progression">
                                <i className="bi bi-circle"></i><span>Progression</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="components-tooltips.html">
                                <i className="bi bi-circle"></i><span>home</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-journal-text"></i><span>Students</span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link href="forms-elements.html">
                                <i className="bi bi-circle"></i><span>students list</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="forms-layouts.html">
                                <i className="bi bi-circle"></i><span>add students</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="forms-editors.html">
                                <i className="bi bi-circle"></i><span>search student</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="forms-validation.html">
                                <i className="bi bi-circle"></i><span>modify student information</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-layout-text-window-reverse"></i><span>teachers</span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link href="tables-general.html">
                                <i className="bi bi-circle"></i><span>teachers per classNamerom</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="tables-data.html">
                                <i className="bi bi-circle"></i><span>teachers list</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-bar-chart"></i><span>statistics</span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link href="charts-chartjs.html">
                                <i className="bi bi-circle"></i><span>year statistic</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="charts-apexcharts.html">
                                <i className="bi bi-circle"></i><span>className statistic</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="charts-echarts.html">
                                <i className="bi bi-circle"></i><span>financial statistic</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-gem"></i><span>classNameroom</span><i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link href="icons-bootstrap.html">
                                <i className="bi bi-circle"></i><span>fisrt cycle</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="icons-remix.html">
                                <i className="bi bi-circle"></i><span>second cycle</span>
                            </Link>
                        </li>

                    </ul>
                </li>
                <li className="nav-heading">Pages</li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" href="users-profile.html">
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" href="pages-faq.html">
                        <i className="bi bi-question-circle"></i>
                        <span>helps</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" href="pages-contact.html">
                        <i className="bi bi-envelope"></i>
                        <span>Contact</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" href="pages-register.html">
                        <i className="bi bi-card-list"></i>
                        <span>Register</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" href="pages-login.html">
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span>Login</span>
                    </Link>
                </li>
                {/* </Router> */}

            </ul>

        </aside>
      
    );
};

export default SideBar;