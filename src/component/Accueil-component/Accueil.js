import React from 'react';
import logo from '../../assets/logo1.png';
import "./Accueil.css";
import ShoppingList from '../ShoppingList-component/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';


const Accueil = () => {
    // const title = "Regent App"
    // const currentMonth = Date()
    // const isSpring = currentMonth >= 2 && currentMonth <= 5
    // console.log(currentMonth)
    return (
        <div>
            <header id="header" class="header fixed-top d-flex align-items-center">

            <div class="d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
                <img src={logo} alt=""></img>
                <span class="d-none d-lg-block">state management system</span>
            </a>
            <i class="bi bi-list toggle-sidebar-btn"></i>
            </div>

            <div class="search-bar">
            <form class="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword"></input>
                <button type="submit" title="Search"><i class="bi bi-search"></i></button>
            </form>
            </div>
            <nav class="header-nav ms-auto">

            <ul class="d-flex align-intems-center">
            <button class="bg-primary text-light rounded mx-3">
                <li class="badge bg-primary text-light btn btn-primary"> 
                <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i class="bi bi-printer bg-primary text-light"></i>
                    <span class="text-light" title="print your results">print</span>
                </a>
                </li>
            </button>
                

                <li class="nav-item d-block d-lg-none">
                <a class="nav-link nav-icon search-bar-toggle " href="#">
                    <i class="bi bi-search"></i>
                </a>
                </li>

                <li class="nav-item dropdown">

                <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i class="bi bi-bell"></i>
                    <span class="badge bg-primary badge-number">4</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                    <li class="dropdown-header">
                    You have 4 new notifications
                    <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                    </li>
                    <li>
                    <hr class="dropdown-divider"></hr>
                    </li>

                    <li class="notification-item">
                    <i class="bi bi-exclamation-circle text-warning"></i>
                    <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>30 min. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr class="dropdown-divider"></hr>
                    </li>

                    <li class="notification-item">
                    <i class="bi bi-x-circle text-danger"></i>
                    <div>
                        <h4>Atque rerum nesciunt</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>1 hr. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr class="dropdown-divider"></hr>
                    </li>

                    <li class="notification-item">
                    <i class="bi bi-check-circle text-success"></i>
                    <div>
                        <h4>Sit rerum fuga</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>2 hrs. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr class="dropdown-divider"></hr>
                    </li>

                    <li class="notification-item">
                    <i class="bi bi-info-circle text-primary"></i>
                    <div>
                        <h4>Dicta reprehenderit</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>4 hrs. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr class="dropdown-divider"></hr>
                    </li>
                    <li class="dropdown-footer">
                    <a href="#">Show all notifications</a>
                    </li>

                </ul>

                </li>

                <li class="nav-item dropdown">

                <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i class="bi bi-chat-left-text"></i>
                    <span class="badge bg-success badge-number">3</span>
                </a>

                
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">

                    
                    <li class="dropdown-header">
                    You have 3 new messages
                    <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                    </li>
                    <li>
                    <hr class="dropdown-divider"></hr>
                    </li>

                    <li class="message-item">
                    <a href="#">
                        <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle"></img>
                        <div>
                        <h4>Maria Hudson</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>4 hrs. ago</p>
                        </div>
                    </a>
                    </li>
                    <li>
                    <hr class="dropdown-divider"></hr>
                    </li>

                    <li class="message-item">
                    <a href="#">
                        <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle"></img>
                        <div>
                        <h4>Anna Nelson</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>6 hrs. ago</p>
                        </div>
                    </a>
                    </li>
                    <li>
                    <hr class="dropdown-divider"></hr>
                    </li>

                    <li class="message-item">
                    <a href="#">
                        <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle"></img>
                        <div>
                        <h4>David Muldon</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>8 hrs. ago</p>
                        </div>
                    </a>
                    </li>
                    <li>
                    <hr class="dropdown-divider"></hr>
                    </li>

                    <li class="dropdown-footer">
                    <a href="#">Show all messages</a>
                    </li>

                </ul>

                </li>
                

                

                <li class="nav-item dropdown pe-3">

                <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img src="assets/img/logo.png" alt="Profile" class="rounded-circle"></img>
                    <span class="d-none d-md-block dropdown-toggle ps-2">Groupes 5, 6 et 25</span>
                </a>

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li class="dropdown-header">
                    <h6>Regent</h6>
                    <span>Web Designer</span>
                    </li>
                    <li>
                    <hr class="dropdown-divider"></hr>
                    </li>

                    <li>
                    <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i class="bi bi-person"></i>
                        <span>My Profile</span>
                    </a>
                    </li>
                    <li>
                    <hr class="dropdown-divider"/>
                    </li>

                    <li>
                    <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i class="bi bi-gear"></i>
                        <span>Account Settings</span>
                    </a>
                    </li>
                    <li>
                    <hr class="dropdown-divider"/>
                    </li>

                    <li>
                    <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                        <i class="bi bi-question-circle"></i>
                        <span>Need Help?</span>
                    </a>
                    </li>
                    <li>
                    <hr class="dropdown-divider"/>
                    </li>

                    <li>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                        <i class="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                    </a>
                    </li>

                </ul>
                </li>
                

            </ul>
            </nav>

             </header>
        </div>
    )
};

export default Accueil;