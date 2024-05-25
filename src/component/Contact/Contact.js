import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     try {
  //       const response = await axios.get('http://127.0.0.1:8080/produit/read');
  //       setContacts(response.data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err);
  //       setLoading(false);
  //     }
  //   };

  //   fetchContacts();
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    const formData = new FormData(event.target);
    const contactData = {};
    for (const [key, value] of formData.entries()) {
      contactData[key] = value;
    }
    console.log(contactData);

    // Ajoutez ici votre logique pour envoyer le message
    axios({
      method: 'POST',
      url:'http://127.0.0.1:8080/produit/create',
      data: contactData
    })
  };

    return (
        <main id="main" className="main">

          <div className="pagetitle">
            <h1>Contact</h1>
            {/* { contacts.map(person => <li key={person.id}>{person.name}</li>) } */}

            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item">Pages</li>
                <li className="breadcrumb-item active">Contact</li>
              </ol>
            </nav>
          </div>
          {/* <!-- End Page Title --> */}

          <section className="section contact">

            <div className="row gy-4">

              <div className="col-xl-6">

                <div className="row">
                  <div className="col-lg-6">
                    <div className="info-box card">
                      <i className="bi bi-geo-alt"></i>
                      <h3>Address</h3>
                      <p>A108 Adam Street,<br/>New York, NY 535022</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="info-box card">
                      <i className="bi bi-telephone"></i>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="info-box card">
                      <i className="bi bi-envelope"></i>
                      <h3>Email Us</h3>
                      <p>info@example.com<br/>contact@example.com</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="info-box card">
                      <i className="bi bi-clock"></i>
                      <h3>Open Hours</h3>
                      <p>Monday - Friday<br/>9:00AM - 05:00PM</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-xl-6">
                <div className="card p-4">
                  {/* <form onSubmit={handleSubmit} method="post" className="php-email-form"> */}
                  <form method='post' action='#' className="php-email-form">
                    <div className="row gy-4">

                      <div className="col-md-6">
                        <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                      </div>

                      <div className="col-md-6 ">
                        <input type="email" className="form-control" name="email" placeholder="Your Email" required/>
                      </div>

                      <div className="col-md-12">
                        <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
                      </div>

                      <div className="col-md-12">
                        <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                      </div>

                      <div className="col-md-12 text-center">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>

                        <button type="submit">Send Message</button>
                      </div>

                    </div>
                  </form>
                </div>

              </div>

            </div>

          </section>
        </main>
    );
};

export default Contact;