import "../../index.css"

const SideBar = () => {

    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <a className="nav-link " href="index.html">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-menu-button-wide"></i><span>school year</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">

                        <li>
                            <a href="components-carousel.html">
                                <i className="bi bi-circle"></i><span>school year information</span>
                            </a>
                        </li>
                        <li>
                            <a href="components-list-group.html">
                                <i className="bi bi-circle"></i><span>school examination result</span>
                            </a>
                        </li>
                        <li>
                            <a href="components-modal.html">
                                <i className="bi bi-circle"></i><span>history</span>
                            </a>
                        </li>


                        <li>
                            <a href="components-progress.html">
                                <i className="bi bi-circle"></i><span>Progression</span>
                            </a>
                        </li>

                        <li>
                            <a href="components-tooltips.html">
                                <i className="bi bi-circle"></i><span>home</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-journal-text"></i><span>Students</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="forms-elements.html">
                                <i className="bi bi-circle"></i><span>students list</span>
                            </a>
                        </li>
                        <li>
                            <a href="forms-layouts.html">
                                <i className="bi bi-circle"></i><span>add students</span>
                            </a>
                        </li>
                        <li>
                            <a href="forms-editors.html">
                                <i className="bi bi-circle"></i><span>search student</span>
                            </a>
                        </li>
                        <li>
                            <a href="forms-validation.html">
                                <i className="bi bi-circle"></i><span>modify student information</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-layout-text-window-reverse"></i><span>teachers</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="tables-general.html">
                                <i className="bi bi-circle"></i><span>teachers per classNamerom</span>
                            </a>
                        </li>
                        <li>
                            <a href="tables-data.html">
                                <i className="bi bi-circle"></i><span>teachers list</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-bar-chart"></i><span>statistics</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="charts-chartjs.html">
                                <i className="bi bi-circle"></i><span>year statistic</span>
                            </a>
                        </li>
                        <li>
                            <a href="charts-apexcharts.html">
                                <i className="bi bi-circle"></i><span>className statistic</span>
                            </a>
                        </li>
                        <li>
                            <a href="charts-echarts.html">
                                <i className="bi bi-circle"></i><span>financial statistic</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-gem"></i><span>classNameroom</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="icons-bootstrap.html">
                                <i className="bi bi-circle"></i><span>fisrt cycle</span>
                            </a>
                        </li>
                        <li>
                            <a href="icons-remix.html">
                                <i className="bi bi-circle"></i><span>second cycle</span>
                            </a>
                        </li>

                    </ul>
                </li>
                <li className="nav-heading">Pages</li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="users-profile.html">
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-faq.html">
                        <i className="bi bi-question-circle"></i>
                        <span>helps</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-contact.html">
                        <i className="bi bi-envelope"></i>
                        <span>Contact</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-register.html">
                        <i className="bi bi-card-list"></i>
                        <span>Register</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-login.html">
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span>Login</span>
                    </a>
                </li>

            </ul>

        </aside>

    )
}

export default SideBar;