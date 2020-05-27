import React from 'react';
import './App.css';
import { Link, NavLink } from 'react-router-dom'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <div className="body-content">
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm navbar">
        <h5 className="my-0 mr-md-auto font-weight-normal"><Link className="text-dark text">AR~~Port</Link></h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark mr-4 text"  href="#">Projects</Link>
          <Link className="p-2 text-dark mr-4 text" href="#">Contact</Link>
        </nav>
      </div>
      <section className="container intro-paragraph">
        <h1>Hi, I'm Aibek, I design and build</h1>
      </section>
        <div className="container intro-paragraph">
          <a className="btn btn-primary" href="http://github.com" role="button">Link</a>
        </div>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <h2>Making life easier</h2>
              <p>Hey everyone, I am a Fullstack Software Engineer focusing on creating immersive web and mobile experiences through a proccess of iterative design thinking. I design delightull products that are intuitive and user-friendly. I am in a constan state of learning, and I want to continue to improve and grow in a company where We build things people want and ease their daily life through technology.<br/><span>React, Redux, Git, ExpressJs, NodeJs</span></p>
            </div>
          </div>
        </div>
      </section>
        <section className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <h2>Making life easier</h2>
                <p>Hey everyone, I am a Fullstack Software Engineer focusing on creating immersive web and mobile experiences through a proccess of iterative design thinking. I design delightull products that are intuitive and user-friendly. I am in a constan state of learning, and I want to continue to improve and grow in a company where We build things people want and ease their daily life through technology.<br /><span>React, Redux, Git, ExpressJs, NodeJs</span></p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <h2>Making life easier</h2>
                <p>Hey everyone, I am a Fullstack Software Engineer focusing on creating immersive web and mobile experiences through a proccess of iterative design thinking. I design delightull products that are intuitive and user-friendly. I am in a constan state of learning, and I want to continue to improve and grow in a company where We build things people want and ease their daily life through technology.<br /><span>React, Redux, Git, ExpressJs, NodeJs</span></p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <h2>Making life easier</h2>
                <p>Hey everyone, I am a Fullstack Software Engineer focusing on creating immersive web and mobile experiences through a proccess of iterative design thinking. I design delightull products that are intuitive and user-friendly. I am in a constan state of learning, and I want to continue to improve and grow in a company where We build things people want and ease their daily life through technology.<br /><span>React, Redux, Git, ExpressJs, NodeJs</span></p>
              </div>
            </div>
          </div>
        </section>
    </div>
      <Footer />
    </>
  );
}

export default App;
