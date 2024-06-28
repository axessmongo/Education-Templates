import React from 'react';
import img1 from '../assets/images/hero-banner-1.jpg'
import img2 from '../assets/images/hero-banner-2.jpg'
import img3 from '../assets/images/hero-shape-1.svg'
import img4 from '../assets/images/hero-shape-2.png'
import img5 from '../assets/images/category-1.svg'
import img6 from '../assets/images/category-2.svg'
import img7 from '../assets/images/category-3.svg'
import img8 from '../assets/images/category-4.svg'
import img9 from '../assets/images/about-banner.jpg'
import img10 from '../assets/images/about-shape-1.svg'
import img11 from '../assets/images/about-shape-2.svg'
import img12 from '../assets/images/about-shape-3.png'
import img13 from '../assets/images/about-shape-4.svg'
import img14 from '../assets/images/course-1.jpg'
import img15 from '../assets/images/course-2.jpg'
import img16 from '../assets/images/course-3.jpg'
import img17 from '../assets/images/video-shape-1.png'
import img18 from '../assets/images/video-shape-2.png'
import img19 from '../assets/images/blog-1.jpg'
import img20 from '../assets/images/blog-2.jpg'
import img21 from '../assets/images/blog-3.jpg'
import videoBg from '../assets/images/video-bg.png'
import videoBannerImg from '../assets/images/video-banner.jpg'
import herobg from '../assets/images/hero-bg.svg'
import blogShape from '../assets/images/blog-shape.png';
import footerBg from '../assets/images/footer-bg.png';
import logo from '../assets/images/logo.png';
import { IonIcon } from '@ionic/react';


function Home() {
    return (
        <>

            <header className="header position-fixed" data-header>
                <div className="container">

                    <a href="#" className="logo">
                        <img src={logo} width="80" height="50" alt="EduWeb logo" />
                    </a>

                    <nav className="navbar" data-navbar>

                        <div className="wrapper">
                            <a href="#" className="logo">
                                <img src={logo} width="162" height="50" alt="EduWeb logo" />
                            </a>

                            {/* <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                                <IonIcon icon="close-outline" aria-hidden="true" />
                            </button> */}
                        </div>

                        <ul className="navbar-list fs-3">

                            <li className="navbar-item">
                                <a href="#home" className="navbar-link" style={{ textDecoration: 'none' }} data-nav-link>Home</a>
                            </li>

                            <li className="navbar-item">
                                <a href="#about" className="navbar-link" style={{ textDecoration: 'none' }} data-nav-link>About</a>
                            </li>

                            <li className="navbar-item">
                                <a href="#courses" className="navbar-link" style={{ textDecoration: 'none' }} data-nav-link>Courses</a>
                            </li>

                            <li className="navbar-item">
                                <a href="#blog" className="navbar-link" style={{ textDecoration: 'none' }} data-nav-link>Blog</a>
                            </li>

                            <li className="navbar-item">
                                <a href="#contact" className="navbar-link" style={{ textDecoration: 'none' }} data-nav-link>Contact</a>
                            </li>

                        </ul>

                    </nav>

                    <div className="header-actions">

                        {/* <button className="header-action-btn" aria-label="toggle search" title="Search">
                            <IonIcon icon="search-outline" aria-hidden="true" />
                        </button>

                        <button className="header-action-btn" aria-label="cart" title="Cart">
                            <IonIcon icon="cart-outline" aria-hidden="true" />
                            <span className="btn-badge">0</span>
                        </button> */}

                        <a href="#contact" className="btns has-before">
                            <span className="span">Apply Now</span>
                            {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
                        </a>

                        <button className="header-action-btn" aria-label="open menu" data-nav-toggler>
                            <IonIcon icon="menu-outline" aria-hidden="true" />
                        </button>

                    </div>

                    <div className="overlay" data-nav-toggler data-overlay></div>

                </div>
            </header>

            <section className="section hero has-bg-image" id="home" aria-label="home"
                style={{ backgroundImage: `url(${herobg})` }}>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="h1 section-title display-1">
                            Top Program for Exchange  <span className="span">Enrollment</span>
                        </h1>
                        <p className="hero-text">
                            Our exchange program offers unparalleled learning experiences, connecting students with
                            global perspectives and diverse cultures. Enroll now to enhance your education and broaden
                            your horizons.
                        </p>
                        <a href="#" className="btns has-before">
                            <span className="span">Find courses</span>
                            {/* <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon> */}
                        </a>
                    </div>

                    <figure className="hero-banner">
                        <div className="img-holder one" style={{ '--width': 270, '--height': 300 }}>
                            <img src={img1} width="270" height="300" alt="hero banner" className="img-cover" />
                        </div>
                        <div className="img-holder two" style={{ '--width': 240, '--height': 370 }}>
                            <img src={img2} width="240" height="370" alt="hero banner" className="img-cover" />
                        </div>
                        <img src={img3} width="380" height="190" alt="" className="shape hero-shape-1" />
                        <img src={img4} width="622" height="551" alt="" className="shape hero-shape-2" />
                    </figure>
                </div>
            </section>

            <section className="section category" aria-label="category">
                <div className="container">

                    <p className="section-subtitle">Categories</p>

                    <h2 className="h2 section-title display-1">
                        Online <span className="span">Classes</span>
                    </h2>

                    <p className="section-text">

                    </p>

                    <ul className="grid-list">

                        <li>
                            <div className="category-card bg-body-secondary">

                                <div className="card-icon">
                                    <img src={img5} width="40" height="40" loading="lazy"
                                        alt="Online Degree Programs" className="img" />
                                </div>

                                <h3 className="h3" >
                                    <a href="#" className="card-title" style={{ textDecoration: 'none' }}>Online Degree Programs</a>
                                </h3>

                                <p className="card-text">
                                    Earn your degree from the comfort of your home with our fully online courses.
                                </p>

                                {/* <span className="card-badges">7 Courses</span> */}

                            </div>
                        </li>

                        <li>
                            <div className="category-card bg-danger-subtle" >

                                <div className="card-icon">
                                    <img src={img6} width="40" height="40" loading="lazy"
                                        alt="Non-Degree Programs" className="img" />
                                </div>

                                <h3 className="h3">
                                    <a href="#" className="card-title " style={{ textDecoration: 'none' }}>Non-Degree Programs</a>
                                </h3>

                                <p className="card-text ">
                                    Expand your knowledge and skills with our specialized non-degree offerings.
                                </p>

                                {/* <span className="card-badge">4 Courses</span> */}

                            </div>
                        </li>

                        <li>
                            <div className="category-card bg-body-secondary" >

                                <div className="card-icon">
                                    <img src={img7} width="40" height="40" loading="lazy"
                                        alt="Off-Campus Programs" className="img" />
                                </div>

                                <h3 className="h3">
                                    <a href="#" className="card-title " style={{ textDecoration: 'none' }}>Off-Campus Programs</a>
                                </h3>

                                <p className="card-text ">
                                    Experience hands-on learning and real-world applications through our off-campus programs.
                                </p>

                                {/* <span className="card-badge">8 Courses</span> */}

                            </div>
                        </li>

                        <li>
                            <div className="category-card bg-danger-subtle">

                                <div className="card-icon">
                                    <img src={img8} width="40" height="40" loading="lazy"
                                        alt="Hybrid Distance Programs" className="img" />
                                </div>

                                <h3 className="h3">
                                    <a href="#" className="card-title" style={{ textDecoration: 'none' }}>Hybrid Distance Programs</a>
                                </h3>

                                <p className="card-text">
                                    Combine online learning with occasional on-campus sessions for a flexible educational
                                    experience.
                                </p>

                                {/* <span className="card-badge">8 Courses</span> */}

                            </div>
                        </li>

                    </ul>

                </div>
            </section>

            <section className="section about" id="about" aria-label="about">
                <div className="container">

                    <figure className="about-banner">

                        <div className="img-holder" style={{ '--width': 550, '--height': 370 }}>
                            <img src={img9} width="520" height="370" loading="lazy" alt="about banner"
                                className="img-cover" />
                        </div>

                        {/* <img src={img10} width="360" height="420" loading="lazy" alt=""
                            className="shape about-shape-1" />

                        <img src={img11} width="371" height="220" loading="lazy" alt=""
                            className="shape about-shape-2" /> */}

                        <img src={img12} width="722" height="528" loading="lazy" alt=""
                            className="shape about-shape-3" />

                    </figure>

                    <div className="about-content">

                        <p className="section-subtitle">About Us</p>

                        <h2 className="h2 section-title display-3">
                        Over 10 years of excellence in  <span className="span">online education.</span>
                        </h2>

                        <p className="section-text">
                        Transforming online education with over a decade of expertise.
                        </p>
                        <p className='section-text fw-bolder'>Key Highlights:</p>

                        <ul className="about-list">

                            <li className="about-items">
                                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                                <span className="span fs-4">✔️ Proven track record of delivering high-quality online classes.</span>
                            </li>

                            <li className="about-items">
                                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                                <span className="span fs-4">✔️  Expert instructors with real-world experience. </span>
                            </li>

                            <li className="about-items">
                                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                                <span className="span fs-4">✔️ Flexible and interactive learning environment.</span>
                            </li>

                        </ul>

                        <img src={img13} width="100" height="100" loading="lazy" alt=""
                            className="shape about-shape-4" />

                    </div>

                </div>
            </section>

            <section className="section course" id="courses" aria-label="course">
                <div className="container">

                    <p className="section-subtitle">Popular Courses</p>

                    <h2 className="h2 section-title display-1">Pick A Course To Get Started</h2>

                    <ul className="grid-list">
                        <li>
                            <div className="course-card">
                                <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                                    <img src={img14} width="370" height="220" loading="lazy"
                                        alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
                                </figure>

                                <div className="abs-badge">
                                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                                    <span className="span">3 Weeks</span>
                                </div>

                                <div className="card-content">
                                    <span className="badge">Beginner</span>
                                    <h3 className="h3">
                                        <a href="#" className="card-title" style={{ textDecoration: 'none' }}>Build Responsive Real- World Websites with HTML and CSS</a>
                                    </h3>
                                    <div className="wrapper">
                                        <div className="rating-wrapper">
                                            {[...Array(5)].map((_, index) => (
                                                <ion-icon key={index} name="star"></ion-icon>
                                            ))}
                                        </div>
                                        <p className="rating-text">(5.0/7 Rating)</p>
                                    </div>
                                    <data className="price" value="29">₹13,999</data>
                                    <ul className="card-meta-list">
                                        <li className="card-meta-item">
                                            <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
                                            <span className="span">8 Lessons</span>
                                        </li>
                                        <li className="card-meta-item">
                                            <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
                                            <span className="span">20 Students</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="course-card">
                                <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                                    <img src={img15} width="370" height="220" loading="lazy"
                                        alt="Java Programming Masterclass for Software Developers" className="img-cover" />
                                </figure>

                                <div className="abs-badge">
                                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                                    <span className="span">8 Weeks</span>
                                </div>

                                <div className="card-content">
                                    <span className="badge">Advanced</span>
                                    <h3 className="h3">
                                        <a href="#" className="card-title" style={{ textDecoration: 'none' }}>Java Programming Masterclass for Software Developers</a>
                                    </h3>
                                    <div className="wrapper">
                                        <div className="rating-wrapper">
                                            {[...Array(5)].map((_, index) => (
                                                <ion-icon key={index} name="star"></ion-icon>
                                            ))}
                                        </div>
                                        <p className="rating-text">(4.5 /9 Rating)</p>
                                    </div>
                                    <data className="price" value="49">₹17,999</data>
                                    <ul className="card-meta-list">
                                        <li className="card-meta-item">
                                            <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
                                            <span className="span">15 Lessons</span>
                                        </li>
                                        <li className="card-meta-item">
                                            <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
                                            <span className="span">35 Students</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="course-card">
                                <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                                    <img src={img16} width="370" height="220" loading="lazy"
                                        alt="The Complete Camtasia Course for Content Creators" className="img-cover" />
                                </figure>

                                <div className="abs-badge">
                                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                                    <span className="span">3 Weeks</span>
                                </div>

                                <div className="card-content">
                                    <span className="badge">Intermediate</span>
                                    <h3 className="h3">
                                        <a href="#" className="card-title" style={{ textDecoration: 'none' }}>The Complete Camtasia Course for Content Creators</a>
                                    </h3>
                                    <div className="wrapper">
                                        <div className="rating-wrapper">
                                            {[...Array(5)].map((_, index) => (
                                                <ion-icon key={index} name="star"></ion-icon>
                                            ))}
                                        </div>
                                        <p className="rating-text">(4.9 /7 Rating)</p>
                                    </div>
                                    <data className="price" value="35">₹19,999</data>
                                    <ul className="card-meta-list">
                                        <li className="card-meta-item">
                                            <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
                                            <span className="span">13 Lessons</span>
                                        </li>
                                        <li className="card-meta-item">
                                            <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
                                            <span className="span">18 Students</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>

                    {/* <a href="#" className="btn has-before">
                        <span className="span">Browse more courses</span>
                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </a> */}

                </div>
            </section>

            <section className="video has-bg-image" aria-label="video" style={{ backgroundImage: `url(${videoBg})` }}>
                <div className="container">

                    <div className="video-card">

                        <div className="video-banner img-holder has-after" style={{ '--width': '', '--height': '' }}>
                            <img src={videoBannerImg} width="970" height="550" loading="lazy" alt="video banner" className="img-cover" />

                            {/* <button className="play-btn" aria-label="play video">
                                <i className="bi bi play"></i>
                            </button> */}
                        </div>

                        <img src={img17} width="1089" height="605" loading="lazy" alt="" className="shape video-shape-1" />

                        <img src={img18} width="158" height="174" loading="lazy" alt="" className="shape video-shape-2" />

                    </div>

                </div>
            </section>

            <section className="section stats" aria-label="stats">
                <div className="container">

                    <ul className="grid-list">

                        <li>
                            <div className="stats-card bg-danger-subtle" >
                                <h3 className="card-title">2.3k</h3>
                                <p className="card-text">Student Enrolled</p>
                            </div>
                        </li>

                        <li>
                            <div className="stats-card bg-body-secondary" >
                                <h3 className="card-title">9.4K</h3>
                                <p className="card-text">Class Completed</p>
                            </div>
                        </li>

                        <li>
                            <div className="stats-card bg-danger-subtle" >
                                <h3 className="card-title">100%</h3>
                                <p className="card-text">Satisfaction Rate</p>
                            </div>
                        </li>

                        <li>
                            <div className="stats-card bg-body-secondary" >
                                <h3 className="card-title">35+</h3>
                                <p className="card-text">Top Instructors</p>
                            </div>
                        </li>

                    </ul>

                </div>
            </section>

            <section className="section blog has-bg-image" id="blog" aria-label="blog">
                <div className="container">
                    <p className="section-subtitle">Latest Articles</p>
                    <h2 className="h2 section-title display-1">Get News With LearnFlex</h2>
                    <ul className="grid-list">
                        <li>
                            <div className="blog-card">
                                <figure className="card-banner img-holder has-after" style={{ '--width': 370, '--height': 370 }}>
                                    <img src={img19} width="370" height="370" loading="lazy" alt="Become A Better Blogger: Content Planning" className="img-cover" />
                                </figure>
                                <div className="card-content">
                                    <a href="#" className="card-btn" aria-label="read more">
                                        <i className="bi bi-arrow-right" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="card-subtitle" style={{ textDecoration: 'none' }}>Online</a>
                                    <h3 className="h3">
                                        <a href="#" className="card-title" style={{ textDecoration: 'none' }}>Become A Better Blogger: Content Planning</a>
                                    </h3>
                                    <ul className="card-meta-list">
                                        <li className="card-meta-item">
                                            <i className="bi bi-calendar" aria-hidden="true"></i>
                                            <span className="span">April 10, 2024</span>
                                        </li>
                                        <li className="card-meta-item">
                                            <i className="bi bi-chat-dots" aria-hidden="true"></i>
                                            <span className="span">Com 09</span>
                                        </li>
                                    </ul>
                                    {/* <p className="card-text">
                                        Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                                    </p> */}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="blog-card">
                                <figure className="card-banner img-holder has-after" style={{ '--width': 370, '--height': 370 }}>
                                    <img src={img20} width="370" height="370" loading="lazy" alt="Become A Better Blogger: Content Planning" className="img-cover" />
                                </figure>
                                <div className="card-content">
                                    <a href="#" className="card-btn" aria-label="read more">
                                        <i className="bi bi-arrow-right" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="card-subtitle" style={{ textDecoration: 'none' }}>Online</a>
                                    <h3 className="h3">
                                        <a href="#" className="card-title" style={{ textDecoration: 'none' }}>Become A Better Blogger: Content Planning</a>
                                    </h3>
                                    <ul className="card-meta-list">
                                        <li className="card-meta-item">
                                            <i className="bi bi-calendar" aria-hidden="true"></i>
                                            <span className="span">April 10, 2024</span>
                                        </li>
                                        <li className="card-meta-item">
                                            <i className="bi bi-chat-dots" aria-hidden="true"></i>
                                            <span className="span">Com 09</span>
                                        </li>
                                    </ul>
                                    {/* <p className="card-text">
                                        Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                                    </p> */}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="blog-card">
                                <figure className="card-banner img-holder has-after" style={{ '--width': 370, '--height': 370 }}>
                                    <img src={img21} width="370" height="370" loading="lazy" alt="Become A Better Blogger: Content Planning" className="img-cover" />
                                </figure>
                                <div className="card-content">
                                    <a href="#" className="card-btn" aria-label="read more">
                                        <i className="bi bi-arrow-right" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="card-subtitle" style={{ textDecoration: 'none' }}>Online</a>
                                    <h3 className="h3">
                                        <a href="#" className="card-title" style={{ textDecoration: 'none' }}>Become A Better Blogger: Content Planning</a>
                                    </h3>
                                    <ul className="card-meta-list">
                                        <li className="card-meta-item">
                                            <i className="bi bi-calendar" aria-hidden="true"></i>
                                            <span className="span">may 10, 2024</span>
                                        </li>
                                        <li className="card-meta-item">
                                            <i className="bi bi-chat-dots" aria-hidden="true"></i>
                                            <span className="span">Com 09</span>
                                        </li>
                                    </ul>
                                    {/* <p className="card-text">
                                        Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                                    </p> */}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <img src={blogShape} width="186" height="186" loading="lazy" alt="" className="shape blog-shape" />
                </div>
            </section>

            <footer className="footer" id='contact' style={{ backgroundImage: `url(${footerBg})` }}>
                <div className="footer-top section">
                    <div className="container grid-list">
                        <div className="footer-brand">
                            <a href="#" className="logo">
                                <img src={logo} width="100" height="50" alt="EduWeb logo" />
                            </a>
                            {/* <p className="footer-brand-text">
                                Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.
                            </p> */}
                            {/* <div className="wrapper">
                                <span className="span">Add:</span>
                                <address className="address">70-80 Upper St Norwich NR2</address>
                            </div> */}
                            <div className="wrapper pt-5">
                                <span className="span">Call:</span>
                                <a href="tel:+011234567890" className="footer-link" style={{ textDecoration: 'none' }}>+01 123 4567 890</a>
                            </div>
                            <div className="wrapper pt-3">
                                <span className="span">Email:</span>
                                <a href="#" className="footer-link" style={{ textDecoration: 'none' }}>info@learnflex.online</a>
                            </div>
                        </div>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-list-title">Online Platform</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link" style={{ textDecoration: 'none' }}>About</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link" style={{ textDecoration: 'none' }}>Courses</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link" style={{ textDecoration: 'none' }}>Instructor</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link" style={{ textDecoration: 'none' }}>Events</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link" style={{ textDecoration: 'none' }}>Instructor Profile</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link" style={{ textDecoration: 'none' }}>Purchase Guide</a>
                            </li>
                        </ul>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-list-title">Links</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link" style={{ textDecoration: 'none' }}>Contact Us</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link" style={{ textDecoration: 'none' }}>Gallery</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link" style={{ textDecoration: 'none' }}>News & Articles</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link" style={{ textDecoration: 'none' }}>FAQ's</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link" style={{ textDecoration: 'none' }}>Sign In/Registration</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link" style={{ textDecoration: 'none' }}>Coming Soon</a>
                            </li>
                        </ul>
                        <div className="footer-list">
                            <p className="footer-list-title">Contacts</p>
                            <p className="footer-list-text">
                                Enter your email address to register to our newsletter subscription
                            </p>
                            <form action="" className="newsletter-form">
                                <input type="email" name="email_address" placeholder="Your email" required className="input-field" />
                                <button type="submit" className="btn has-before">
                                    <span className="span">Subscribe</span>
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </form>
                            <ul className="social-list">
                                <li>
                                    <a href="#" className="social-link">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <i className="bi bi-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p className="copyright">
                            Copyright©️ 2024 All Rights Reserved by <a href="#" style={{ textDecoration: 'none' }} className="copyright-link">learnflexonline</a>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Home