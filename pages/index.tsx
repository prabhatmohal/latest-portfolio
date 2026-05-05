import Head from 'next/head'

import React, { useEffect, useState } from "react";
import { Inter, Rowdies } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Script from 'next/script'
import AOS from 'aos';
import 'aos/dist/aos.css';

// import $ from "jquery";
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  // https://rainbowit.net/themes/inbio/
  useEffect(() => {
    AOS.init();
  }, [])
  useEffect(() => {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.classList.remove('loader--active');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Prabhat Portfolio</title>
        <meta name="description" content="Hello! I Prabhat Mohal a professional Graphic and web designer. I have done coursework related to this field. I am an expert in designing and have been working for Five years with great effort. I am adept enough in the skills like photoshop and illustrator." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>

      <main className='main'>
        <div className="loader loader--active">
          <div className="loader__icon">
          </div>
          <div className="loader__tile"></div>
          <div className="loader__tile"></div>
          <div className="loader__tile"></div>
          <div className="loader__tile"></div>
          <div className="loader__tile"></div>
        </div>
        <header>
          <div className='videbackground'
            dangerouslySetInnerHTML={{
              __html: ` <video loop muted autoplay playsinline src='/tunnel_-_79764 (1080p).mp4' />, `,
            }}
          ></div>
          <div className='headernav' >
            <div className='container'>
              <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand text-white" href="#">Prabhat.</a>
                <button className="navbar-toggler menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item  active">
                      <a className="nav-link text-white" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="#About">About Us</a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link text-white" href="#Skills">Skills</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="#Portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Let&apos;s Connect
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>

          <div className=' header-section'>
            <div className='row'>
              <div className='col-lg-8 m-auto col-12'>
                <h1 data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom'><b>I bridge the gap between high-fidelity design and high-performance code.</b></h1>
                <p className='mt-5' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>Hello I&apos;m  <b>Prabhat Experienced Web development and Graphic Designer</b> with 8 years of expertise. Passionate about crafting visually stunning designs that captivate audiences and elevate brands. Proficient in both web and graphic design, I bring creativity, innovation, and technical skills to every project. Let&apos;s collaborate to bring your vision to life!</p>
                <p className='mt-3 mb-0 follow' >Available on - <a href="https://dribbble.com/Mohal" className='ms-3' target='blank'><i className="bi bi-dribbble"></i></a> <a href="https://www.behance.net/prabhatmohal1" target='blank' className='ms-3'><i className="bi bi-behance"></i></a></p>
              </div>
            </div>
          </div>
          <div className="icon-scroll" data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1000'></div>
          <div className="circle pulse orange pulses">
            <a href="tel:+91 7986724467">
              <div className='call-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </div>
            </a>
          </div>
        </header>

        <section className='about_section' id="About">
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6  aboutus position-relative'>
                <span className='gradient-txt ' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='100'>About Me</span>
                <h2 className='heading mb-5' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='600'>
                  Senior <b>Full-Stack Developer & <br /> UI/UX</b> Designer
                </h2>
                <p data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='800'>
                  <b>I build what I design.</b> With 8 years of expertise as a Senior Developer + UI/UX Designer, I bridge the gap between high-fidelity aesthetics and high-performance code. I don't just create &apos;pretty&apos; websites; I engineer scalable, &apos;Zillow-speed&apos; applications using Next.js, React, and Supabase.
                </p>
                <p data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1000'>
                  From the first pixel in Figma to the final deployment on Vercel, I ensure your vision is never lost in translation. Whether you need a high-conversion SaaS platform or a complex digital product, I turn your ideas into a seamless reality. Let&apos;s create something extraordinary together!
                </p>
                <img src='/graphc-1.png' className='graph' />
              </div>
              <div className='col-lg-6'>
                <div className='Aboutus_image'>
                  <Image src="/image.jpg" alt="Picture of the author" width={500} height={600} data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='800' />
                  <div className="experience" data-aos='fade-left' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='800'>
                    <h2>8 year Experience</h2>
                  </div>
                  <div className="experience project" data-aos='fade-right' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='800'>
                    <h2>80 + Project Completed</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="intro-section section-block">
		<div className="container">
			<div className="section-title">
				<h2>Welcome to my World</h2>
				<p className="lead">
					I'm a young tech enthasist and entrepreneur who love to take risk. I grew up in a tech family in New York City.
				</p>
			</div>
			<div className="row">
				<div className="col-xl-4 col-lg-6 aos-init aos-animate" data-aos="fade-up">
					<div className="item-wrapper">
						<div className="icon-box"><i className="pe-7s-science"></i></div>
						<div className="content-wrapper">
							<h3>Creativity</h3>
							<p>
								Duis aute irure dolor in it esse cillum dolore eu fugiat nulla pari erunt mollit anim id est laborum.
							</p>
						</div>
					</div> 
				</div>
				<div className="col-xl-4 col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
					<div className="item-wrapper">
						<div className="icon-box"><i className="pe-7s-diamond"></i></div>
						<div className="content-wrapper">
							<h3>Dedication</h3>
							<p>
								Beaboris nisi ut aliquip ex ea commodo
								consen cillum dolore eu fugiat nulla pariatur. 
							</p>
						</div> 
					</div>
				</div>
				<div className="col-xl-4 col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
					<div className="item-wrapper">
						<div className="icon-box"><i className="pe-7s-rocket"></i></div>
						<div className="content-wrapper">
							<h3>Hard Work</h3>
							<p>
								Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui offi llit anim id est laborum.
							</p>
						</div> 
					</div> 
				</div>
			</div> 
		</div>

		<div className="design-elements">
			<img className="de-intro-1 elem-updown" src="image/design-elements/intro-element-1.png" alt="intro element 1" />
		</div> 

	</section>  */}


        {/* <section className='my-5 py-5'>
          <div className="container">

            <h2 className='heading text-white mb-5 pb-3' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='100'>My <b>Experience</b></h2>
            <div className="row gy-3">
              <div className="col-lg-4">
                <div className="carrier text-white position-relative" data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='600'>
                  <h2>Jr. Web Designer</h2>
                  <p className='mb-4 pb-2'>After finishing my studies, I first concentrated on my work in Propeersinfo, here I worked as a web designer for 4 years. It was really a big experience for me</p>
                  <h3><i className="bi bi-clock me-2"></i> 2018 - 2022</h3>
                  <span className='count'>01</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="carrier text-white position-relative" data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='800'>
                  <h2>Senior Web Designer</h2>
                  <p className='mb-4 pb-2'>After working well for four years at Propeersinfo, I got the opportunity to work in one of the best place Bright world info tech india , and there I am now working as a Senior Web designer.</p>
                  <h3><i className="bi bi-clock me-2"></i> 2022 - 2023</h3>
                  <span className='count'>02</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="carrier text-white position-relative" data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1000'>
                  <h2>Senior Ui Ux Designer</h2>
                  <p className='mb-4 pb-2'>After working well for One years at Bright world infotech, I got the opportunity to work in one of the best place TeqMavens , and there I am now working as a Senior Web designer.</p>
                  <h3><i className="bi bi-clock me-2"></i> 2023 - Present</h3>
                  <span className='count'>03</span>
                </div>
              </div>
            </div>


          </div>
        </section> */}



        <section className='my-skills' id="Skills">
          <div className='container'>
            <div className='row'>
              <div className='col-12 my-5 py-3'>
                <h2 className='heading' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='100'>Professional<b> Skills</b></h2>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                  <div className="skill-inner">
                    <img src='/nodejs.png' />
                    <div className="number">98%</div>
                  </div>
                  <h2>Node/Nest.js</h2>
                </div>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                  <div className="skill-inner">
                    <img src='/node-js.png' />
                    <div className="number">99%</div>
                  </div>
                  <h2>Express</h2>
                </div>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                  <div className="skill-inner">
                    <img src='/mongodb.png' />
                    <div className="number">85%</div>
                  </div>
                  <h2>Mongodb</h2>
                </div>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                  <div className="skill-inner">
                    <img src='/database.png' />
                    <div className="number">90%</div>
                  </div>
                  <h2>Mysql</h2>
                </div>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                  <div className="skill-inner">
                    <img src='/postgress.png' />
                    <div className="number">90%</div>
                  </div>
                  <h2>Postgress</h2>
                </div>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                  <div className="skill-inner">
                    <img src='/firebase.png' />
                    <div className="number">85%</div>
                  </div>
                  <h2>Firebase</h2>
                </div>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                  <div className="skill-inner">
                    <img src='/reactjs.png' />
                    <div className="number">98%</div>
                  </div>
                  <h2>React/Redux</h2>
                </div>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                  <div className="skill-inner">
                    <img src='/database.png' />
                    <div className="number">75%</div>
                  </div>
                  <h2>Supabase</h2>
                </div>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                  <div className="skill-inner">
                    <img src='/python.png' />
                    <div className="number">75%</div>
                  </div>
                  <h2>Python</h2>
                </div>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                  <div className="skill-inner">
                    <img src='/aws.png' />
                    <div className="number">80%</div>
                  </div>
                  <h2>Aws/EC2/Lambda</h2>
                </div>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                  <div className="skill-inner">
                    <img src='/html.png' />
                    <div className="number">92%</div>
                  </div>
                  <h2>HTML 5</h2>
                </div>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='400'>
                  <div className="skill-inner">
                    <img src='/css.png' />
                    <div className="number">95%</div>
                  </div>
                  <h2 >Css 3 & SASS</h2>
                </div>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='500'>
                  <div className="skill-inner">
                    <img src='/bootstrap.png' />
                    <div className="number">90%</div>
                  </div>
                  <h2 >Bootstrap 4/5</h2>
                </div>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='600'>
                  <div className="skill-inner">
                    <img src='/wordpress.png' />
                    <div className="number">75%</div>
                  </div>
                  <h2 >Wordpress</h2>
                </div>
              </div>

              <div className='col-lg-2 col-6'>
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='700'>
                  <div className="skill-inner">
                    <img src='/react.png' />
                    <div className="number">55%</div>
                  </div>
                  <h2 >React Js</h2>
                </div>
              </div>

              <div className="col-lg-2 col-6">
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='800'>
                  <div className="skill-inner">
                    <img src='/figma.png' />
                    <div className="number">92%</div>
                  </div>
                  <h2 >Figma</h2>
                </div>
              </div>

              <div className="col-lg-2 col-6">
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='900'>
                  <div className="skill-inner">
                    <img src='/xd.png' />
                    <div className="number">80%</div>
                  </div>
                  <h2 >Adobe Xd</h2>
                </div>
              </div>

              <div className="col-lg-2 col-6">
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1000'>
                  <div className="skill-inner">
                    <img src='/photoshop.png' />
                    <div className="number">85%</div>
                  </div>
                  <h2 >PhotoShop</h2>
                </div>
              </div>

              <div className="col-lg-2 col-6">
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1100'>
                  <div className="skill-inner">
                    <img src='/illu.png' />
                    <div className="number">75%</div>
                  </div>
                  <h2 >Adobe Illustrator</h2>
                </div>
              </div>

              <div className="col-lg-2 col-6">
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1200'>
                  <div className="skill-inner">
                    <img src='/pre.png' />
                    <div className="number">75%</div>
                  </div>
                  <h2 >Adobe Premiere Pro</h2>
                </div>
              </div>

              <div className="col-lg-2  col-6">
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1300'>
                  <div className="skill-inner">
                    <img src='/tool.png' />
                    <div className="number">80%</div>
                  </div>
                  <h2 >UI UX Designing</h2>
                </div>
              </div>

              <div className="col-lg-2 col-6">
                <div className='Skills-progress text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1400'>
                  <div className="skill-inner">
                    <img src='/crm.png' />
                    <div className="number">75%</div>
                  </div>
                  <h2 >CRM</h2>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className='bg-white py-5 '>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="contact-us position-relative">
                  <h2 data-bs-toggle="modal" data-bs-target="#staticBackdrop">Let&apos;s <b>Contact</b> <i className="bi bi-arrow-up-right"></i></h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='showcase mt-5' id='Portfolio'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-12 col-md-12 col-sm-12 text-center'>
                <h2 className='heading text-white' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='100' >Latest <b>Projects</b></h2>
              </div>
              <div className='col-12 col-sm-12 col-md-12 col-lg-12 '>
                <ul className="nav nav-pills mb-3  justify-content-center " id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation" data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                    <button className="nav-link active text-white" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Latest</button>
                  </li>
                  {/* FIX: Removed 'active' from dev tab to avoid two active tabs at once */}
                  <li className="nav-item" role="presentation" data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                    <button className="nav-link text-white" id="pills-dev-tab" data-bs-toggle="pill" data-bs-target="#pills-dev" type="button" role="tab" aria-controls="pills-dev" aria-selected="false">Development</button>
                  </li>
                  <li className="nav-item" role="presentation" data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='400'>
                    <button className="nav-link text-white" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Web Design</button>
                  </li>
                  <li className="nav-item" role="presentation" data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='500'>
                    <button className="nav-link text-white" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Figma Design</button>
                  </li>
                  <li className="nav-item" role="presentation" data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='600'>
                    <button className="nav-link text-white" id="pills-mobile-tab" data-bs-toggle="pill" data-bs-target="#pills-mobile" type="button" role="tab" aria-controls="pills-mobile" aria-selected="false">Mobile App Design</button>
                  </li>
                  <li className="nav-item" role="presentation" data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='700'>
                    <button className="nav-link text-white" id="pills-Banner-tab" data-bs-toggle="pill" data-bs-target="#pills-Banner" type="button" role="tab" aria-controls="pills-Banner" aria-selected="false">Banner Design</button>
                  </li>
                </ul>
              </div>

              <div className='col-lg-12'>
                <div className="tab-content" id="pills-tabContent">

                  {/* ===================== LATEST TAB ===================== */}
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className='row'>

                      {/* ---- Development projects shown FIRST on Latest tab ---- */}
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='200'>
                          <div className='cardimg'>
                            <figure>
                              <img src="ApexBooking.png" />
                              <a href='https://apex-booking.netlify.app/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Health Checkup Booking App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                          <div className='cardimg'>
                            <figure>
                              <img src="saas-boilerplate.png" />
                              <a href='https://pro-demo.nextjs-boilerplate.com/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Saas Boilerplate</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='400'>
                          <div className='cardimg'>
                            <figure>
                              <img src="nextjs-boilerplate-saas.png" />
                              <a href='https://pro-demo.nextjs-boilerplate.com/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Multiple Tenant</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='500'>
                          <div className='cardimg'>
                            <figure>
                              <img src="nextjs-commerce.png" />
                              <a href='https://demo.vercel.store/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Next.js Commerce</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='600'>
                          <div className='cardimg'>
                            <figure>
                              <img src="calcom.png" />
                              <a href='https://cal.com/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Cal.com - Scheduling App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='700'>
                          <div className='cardimg'>
                            <figure>
                              <img src="dify-ai.png" />
                              <a href='https://dify.ai/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Dify - AI App Builder</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='800'>
                          <div className='cardimg'>
                            <figure>
                              <img src="openstatus.png" />
                              <a href='https://www.openstatus.dev/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>OpenStatus - Monitoring</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='900'>
                          <div className='cardimg'>
                            <figure>
                              <img src="cruip-landing.png" />
                              <a href='https://open.cruip.com/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>SaaS Landing Page</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1000'>
                          <div className='cardimg'>
                            <figure>
                              <img src="unkey-api.png" />
                              <a href='https://unkey.com/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Unkey - API Platform</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      {/* ---- Remaining Latest projects ---- */}
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='800'>
                          <div className='cardimg'>
                            <figure>
                              <img src="customerai.png" />
                              <a href='https://www.figma.com/proto/afYOuJf0oaAMiCa4TlkYwj/Customer-Ai?page-id=0%3A1&node-id=1-2&node-type=frame&viewport=443%2C270%2C0.19&t=kFNHjAkRh8JKthh9-1&scaling=scale-down&content-scaling=fixed' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Product landing Page</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='800'>
                          <div className='cardimg'>
                            <figure>
                              <img src="PWA.png" />
                              <a href='https://www.figma.com/design/vLTHWoW23uJJXivATudesS/PWA-Design?node-id=23-2&t=KvbgejCvs4J4zHne-1' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>CRM App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='800'>
                          <div className='cardimg'>
                            <figure>
                              <img src="signup.png" />
                              <a href='https://www.figma.com/design/zhfimo9kQwvMhpGfSnTWVv/Login?node-id=0-1&t=29cu09nYNhAylBIR-1' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Signup</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='800'>
                          <div className='cardimg'>
                            <figure>
                              <img src="taxi.png" />
                              <a href='https://www.figma.com/design/LMIDiZNzSYbA4CYXW3HeUs/Taxi-group?node-id=0-1&t=o0lt1iviMDpOPEOw-1' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Taxi Booking App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='800'>
                          <div className='cardimg'>
                            <figure>
                              <img src="chery.png" />
                              <a href='https://www.figma.com/file/5WdGW4KikOzmstEfYbJnaW/Untitled?type=design&node-id=10%3A3&mode=design&t=kKFdF367dgGF83Ir-1' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Playway school website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='900'>
                          <div className='cardimg'>
                            <figure>
                              <img src="money.png" />
                              <a href='https://www.figma.com/proto/F4q3MOw6v2UkejklUapYcS/Moneypetrol?page-id=0%3A1&type=design&node-id=1-2&viewport=468%2C62%2C0.06&t=CgfCvYhZSTuCSruK-1&scaling=scale-down-width&mode=design' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>App Product page</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1000'>
                          <div className='cardimg'>
                            <figure>
                              <img src="countrySide.png" />
                              <a href='https://www.figma.com/proto/EAZWVhYQWqgVEFES91cOrn/Country-side?page-id=0%3A1&type=design&node-id=1-2&viewport=367%2C353%2C0.33&t=EHEO5P7dxr1rZ697-1&scaling=scale-down-width&mode=design' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Country Side Product page</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='200'>
                          <div className='cardimg'>
                            <figure>
                              <img src="life-sheet.png" />
                              <a href='https://www.figma.com/proto/3zHhVsSxa9iOmw5lxswjw6/LIFE-SHEET?page-id=0%3A1&type=design&node-id=3-2445&viewport=-5%2C-103%2C0.2&t=XJWoJjU2vLX2cxgk-1&scaling=min-zoom&mode=design' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Life Sheet Website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                          <div className='cardimg'>
                            <figure>
                              <img src="capital.png" />
                              <a href='https://www.figma.com/proto/YJdutWYN38Wm7urHM9hJD3/Leithal-Capital?page-id=0%3A1&type=design&node-id=2-2&viewport=242%2C292%2C0.43&t=SqnaGEAZCU4xmb76-1&scaling=scale-down-width&mode=design' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Investment  Website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='400'>
                          <div className='cardimg'>
                            <figure>
                              <img src="gigiblock.png" />
                              <a href='https://www.figma.com/proto/0M5BrNdz2TY4caX5CmJt1N/Gigi-block?page-id=0%3A1&type=design&node-id=3-650&viewport=151%2C-116%2C0.25&t=vstDuJY50qKXZ4bi-1&scaling=scale-down-width&mode=design' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Gigi blocks kids Website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='500'>
                          <div className='cardimg'>
                            <figure>
                              <img src="blog.png" />
                              <a href='https://www.figma.com/proto/3zHhVsSxa9iOmw5lxswjw6/LIFE-SHEET?page-id=0%3A1&type=design&node-id=3-2445&viewport=-5%2C-103%2C0.2&t=XJWoJjU2vLX2cxgk-1&scaling=min-zoom&mode=design' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Blog Website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='600'>
                          <div className='cardimg'>
                            <figure>
                              <img src="NpVision.png" />
                              <a href='https://www.figma.com/proto/FdntJNwVKxrEVRSD8NY0EI/Nvision-Products?page-id=0%3A1&type=design&node-id=1-2&viewport=487%2C332%2C0.45&t=1W0wmRPbrOKKmLiL-1&scaling=min-zoom&mode=design' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Product Page Website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='700'>
                          <div className='cardimg'>
                            <figure>
                              <img src="BlacK-Stallion.png" />
                              <a href='http://black-stallion.io/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Black Stallion</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='800'>
                          <div className='cardimg'>
                            <figure>
                              <img src="MBG.png" />
                              <a href='https://metaversebattlegame.io/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Metaverse Battle Game</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='900'>
                          <div className='cardimg'>
                            <figure>
                              <img src="BSstaking.png" />
                              <a href='https://bsstaking.io/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>BS Staking</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1000'>
                          <div className='cardimg'>
                            <figure>
                              <img src="coravel.png" />
                              <a href='https://corvalpharma.com/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Corval Pharma</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1100'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Nft.png" />
                              <a href='#' target='blank' className='portbtn'>Coming Soon </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>NFT MarketPlace</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1200'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Megastore.png" />
                              <a href='http://megastore.nopmods.com/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Mega Store(Theme)</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1300'>
                          <div className='cardimg'>
                            <figure>
                              <img src="king.png" />
                              <a href='https://shop.kingnut.com/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Kingnut</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1400'>
                          <div className='cardimg'>
                            <figure>
                              <img src="cosmetictattoobeauty_com_au.png" />
                              <a href='http://cosmetictattoobeauty.com.au/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Cosmetic Tattoo Beauty</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1500'>
                          <div className='cardimg'>
                            <figure>
                              <img src="benjaminkrauselaw.png" />
                              <a href='https://benjaminkrauselaw.com/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Benjamin Krause Law</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1600'>
                          <div className='cardimg'>
                            <figure>
                              <img src="breaksabroad_co_uk.png" />
                              <a href='https://breaksabroad.co.uk/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Breaksabroad</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1700'>
                          <div className='cardimg'>
                            <figure>
                              <img src="buypharama.png" />
                              <a href='https://buy-pharma.md/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Buy Pharma</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1800'>
                          <div className='cardimg'>
                            <figure>
                              <img src="southsoundlawgroup.png" />
                              <a href='https://south-sound-law-group.mysites.io/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Southsound Lawgroup</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1900'>
                          <div className='cardimg'>
                            <figure>
                              <img src="serge-figma.png" />
                              <a href='https://www.figma.com/proto/1JeEuQo2DqOhOvpl8o5fCd/Serge_lobreau?page-id=0%3A1&node-id=51%3A2' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Portfolio Website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='2000'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Vendorapp.png" />
                              <a href='https://www.figma.com/proto/6CjwasW20VAt2DGeUGplMa/Vendor-app?node-id=69%3A410&scaling=scale-down&page-id=0%3A1&starting-point-node-id=69%3A410' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Vendor App </h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='2100'>
                          <div className='cardimg'>
                            <figure>
                              <img src="User-App.png" />
                              <a href='https://www.figma.com/proto/tC5ugyPeRnJ3gyS1V6jJjt/User-App?node-id=147%3A436&starting-point-node-id=147%3A436&scaling=scale-down' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Food Ordering App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='2200'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Deliveryapp.png" />
                              <a href='https://www.figma.com/proto/EsTSDT40MWs3Vyn468jmuj/Delivery-app?node-id=1%3A13&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A13' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Delivery App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='2200'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Wallet.png" />
                              <a href='https://www.figma.com/file/T4bkkgbTgf7ocfrGIhWxGe/Wallet-App?node-id=0%3A1&t=oEFIMsHNk6sdU19x-1' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Wallet App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* ===================== DEVELOPMENT TAB ===================== */}
                  <div className="tab-pane fade" id="pills-dev" role="tabpanel" aria-labelledby="pills-dev-tab">
                    <div className='row'>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='200'>
                          <div className='cardimg'>
                            <figure>
                              <img src="ApexBooking.png" />
                              <a href='https://apex-booking.netlify.app/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Health Checkup Booking App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='300'>
                          <div className='cardimg'>
                            <figure>
                              <img src="saas-boilerplate.png" />
                              <a href='https://pro-demo.nextjs-boilerplate.com/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Saas Boilerplate</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='400'>
                          <div className='cardimg'>
                            <figure>
                              <img src="nextjs-boilerplate-saas.png" />
                              <a href='https://pro-demo.nextjs-boilerplate.com/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Multiple Tenant</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='500'>
                          <div className='cardimg'>
                            <figure>
                              <img src="nextjs-commerce.png" />
                              <a href='https://demo.vercel.store/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Next.js Commerce</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='600'>
                          <div className='cardimg'>
                            <figure>
                              <img src="calcom.png" />
                              <a href='https://cal.com/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Cal.com - Scheduling App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='700'>
                          <div className='cardimg'>
                            <figure>
                              <img src="dify-ai.png" />
                              <a href='https://dify.ai/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Dify - AI App Builder</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='800'>
                          <div className='cardimg'>
                            <figure>
                              <img src="openstatus.png" />
                              <a href='https://www.openstatus.dev/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>OpenStatus - Monitoring</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='900'>
                          <div className='cardimg'>
                            <figure>
                              <img src="cruip-landing.png" />
                              <a href='https://open.cruip.com/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>SaaS Landing Page</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card' data-aos='fade-up' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' data-aos-delay='1000'>
                          <div className='cardimg'>
                            <figure>
                              <img src="unkey-api.png" />
                              <a href='https://unkey.com/' target='blank' className='portbtn'>Live Preview</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Unkey - API Platform</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* ===================== WEB DESIGN TAB ===================== */}
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className='row'>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="BlacK-Stallion.png" />
                              <a href='http://black-stallion.io/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Black Stallion</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="MBG.png" />
                              <a href='https://metaversebattlegame.io/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Metaverse Battle Game</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="BSstaking.png" />
                              <a href='https://bsstaking.io/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>BS Staking</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="psychicsoulvisions.png" />
                              <a href='https://psychicsoulvisions.com.au/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Psychic Soulvisions</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="coravel.png" />
                              <a href='https://corvalpharma.com/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Corval Pharma</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="progesterone.png" />
                              <a href='https://progesterone.in/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Progesterone</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Nft.png" />
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>NFT MarketPlace</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="propeersinfo.png" />
                              <a href='https://propeersinfo.com/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Propeersinfo</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Techmind.png" />
                              <a href='https://techmind.co.in/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Techmind</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="nopmods.png" />
                              <a href='https://www.nopmods.com/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Nopmods</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Megastore.png" />
                              <a href='http://megastore.nopmods.com/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Mega Store(Theme)</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="textute.png" />
                              <a href='https://www.texture-fabrics.com/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Texture Fabrics</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="bihar.png" />
                              <a href='https://biharnewspost.com/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>The Bihar New Post</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="shooter.png" />
                              <a href='https://www.shootersconnectionstore.com/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Shooters Connection</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Wine.png" />
                              <a href='https://www.winemakersdepot.com/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Wine Makers Depot</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="king.png" />
                              <a href='https://shop.kingnut.com/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Kingnut</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="cosmetictattoobeauty_com_au.png" />
                              <a href='http://cosmetictattoobeauty.com.au/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Cosmetic Tattoo Beauty</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="benjaminkrauselaw.png" />
                              <a href='https://benjaminkrauselaw.com/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Benjamin Krause Law</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="breaksabroad_co_uk.png" />
                              <a href='https://breaksabroad.co.uk/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Breaksabroad</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="buypharama.png" />
                              <a href='https://buy-pharma.md/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Buy Pharma</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="southsoundlawgroup.png" />
                              <a href='https://south-sound-law-group.mysites.io/' target='blank' className='portbtn'>View Website </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Southsound Lawgroup</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===================== FIGMA DESIGN TAB ===================== */}
                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className='row'>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="chery.png" />
                              <a href='https://www.figma.com/file/5WdGW4KikOzmstEfYbJnaW/Untitled?type=design&node-id=10%3A3&mode=design&t=kKFdF367dgGF83Ir-1' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Playway school website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="money.png" />
                              <a href='https://www.figma.com/proto/F4q3MOw6v2UkejklUapYcS/Moneypetrol?page-id=0%3A1&type=design&node-id=1-2&viewport=468%2C62%2C0.06&t=CgfCvYhZSTuCSruK-1&scaling=scale-down-width&mode=design' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>App Product page</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="countrySide.png" />
                              <a href='https://www.figma.com/proto/EAZWVhYQWqgVEFES91cOrn/Country-side?page-id=0%3A1&type=design&node-id=1-2&viewport=367%2C353%2C0.33&t=EHEO5P7dxr1rZ697-1&scaling=scale-down-width&mode=design' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Country Side Product page</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="life-sheet.png" />
                              <a href='https://www.figma.com/proto/3zHhVsSxa9iOmw5lxswjw6/LIFE-SHEET?page-id=0%3A1&type=design&node-id=3-2445&viewport=-5%2C-103%2C0.2&t=XJWoJjU2vLX2cxgk-1&scaling=min-zoom&mode=design' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Life Sheet Website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="capital.png" />
                              <a href='https://www.figma.com/proto/YJdutWYN38Wm7urHM9hJD3/Leithal-Capital?page-id=0%3A1&type=design&node-id=2-2&viewport=242%2C292%2C0.43&t=SqnaGEAZCU4xmb76-1&scaling=scale-down-width&mode=design' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Investment  Website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="gigiblock.png" />
                              <a href='https://www.figma.com/proto/0M5BrNdz2TY4caX5CmJt1N/Gigi-block?page-id=0%3A1&type=design&node-id=3-650&viewport=151%2C-116%2C0.25&t=vstDuJY50qKXZ4bi-1&scaling=scale-down-width&mode=design' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Gigi blocks kids Website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="blog.png" />
                              <a href='https://www.figma.com/proto/3zHhVsSxa9iOmw5lxswjw6/LIFE-SHEET?page-id=0%3A1&type=design&node-id=3-2445&viewport=-5%2C-103%2C0.2&t=XJWoJjU2vLX2cxgk-1&scaling=min-zoom&mode=design' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Blog Website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="NpVision.png" />
                              <a href='https://www.figma.com/proto/FdntJNwVKxrEVRSD8NY0EI/Nvision-Products?page-id=0%3A1&type=design&node-id=1-2&viewport=487%2C332%2C0.45&t=1W0wmRPbrOKKmLiL-1&scaling=min-zoom&mode=design' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Product Page Website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="lamer.png" />
                              <a href='https://www.figma.com/proto/otg0ShO13CNyg8ok7gCvMP/Untitled?page-id=0%3A1&node-id=1-53&viewport=-363%2C313%2C0.25&scaling=scale-down-width' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Lamer Website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="lamer2.png" />
                              <a href='https://www.figma.com/proto/otg0ShO13CNyg8ok7gCvMP/Untitled?page-id=0%3A1&node-id=1-2&viewport=-363%2C313%2C0.25&scaling=scale-down-width' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Website Design</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="marketplace-new.png" />
                              <a href='https://www.figma.com/proto/QcyRkrEIKpI9hAEb4ilgAA/Marketplace-design?page-id=0%3A1&node-id=0-6&viewport=4679%2C1063%2C0.34&scaling=scale-down-width' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Gaming Marketplace</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="onmen.png" />
                              <a href='https://www.figma.com/proto/jRnIYumKLEBbAk3ZUA35HP/ONMEN?page-id=0%3A1&node-id=22-2&viewport=224%2C33%2C0.08&scaling=scale-down-width' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Onmen </h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="clickit.png" />
                              <a href='https://www.figma.com/proto/l7KP6WKaz5RaC6RzkwtnaC/Clickit?page-id=0%3A1&node-id=1-2&viewport=479%2C78%2C0.06&scaling=scale-down-width' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>ClickIt </h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="serge.png" />
                              <a href='https://www.figma.com/proto/cTlRtdyVJxUirpaLhulf2z/Serge?page-id=0%3A1&node-id=1-3&viewport=479%2C62%2C0.07&scaling=scale-down-width' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Serge </h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="albia.png" />
                              <a href='https://www.figma.com/proto/5cqwL04OFVZxoQA3o92m5h/Albia-Biocare?page-id=0%3A1&node-id=5-153&viewport=147%2C210%2C0.11&scaling=scale-down' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Albia MobileApp </h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="ride.png" />
                              <a href='https://www.figma.com/proto/PRDrKvt5dJJcbbf4iE5YAc/Untitled?page-id=0%3A1&node-id=3-101&viewport=1%2C240%2C0.19&scaling=scale-down&starting-point-node-id=2%3A2&show-proto-sidebar=1' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Ride MobileApp </h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="serge-figma.png" />
                              <a href='https://www.figma.com/proto/1JeEuQo2DqOhOvpl8o5fCd/Serge_lobreau?page-id=0%3A1&node-id=51%3A2' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Portfolio Website</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="PeakSpire.png" />
                              <a href='https://www.figma.com/proto/KOLdIDGkfwqc3hJkit8V8w/PeakSprire?page-id=0%3A1&node-id=20%3A21&viewport=337%2C87%2C0.08&scaling=scale-down' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>PeakSprier</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Marketplace-image.png" />
                              <a href='https://www.figma.com/proto/WOzf98Ku4rJkCMcPNlROKn/Marketplace?page-id=0%3A1&node-id=2%3A2&viewport=164%2C214%2C0.07&scaling=min-zoom' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Marketplace </h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Newlife.png" />
                              <a href='https://www.figma.com/proto/n3oPlQrQKrlKb962iBxIeL/Newlife_nature?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2' target='blank' className='portbtn'> Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>New Life</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="tenant.png" />
                              <a href='https://www.figma.com/file/RNggdDjnyCWJ0tAMVbtrFj/The-Tenant-(Copy)?node-id=0%3A1&t=r8ilw4kNV6ZHn23M-1' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>The Tenant</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Vendorapp.png" />
                              <a href='https://www.figma.com/file/6CjwasW20VAt2DGeUGplMa/Vendor-app?node-id=0%3A1&t=CtpSFkE4wo5SIZQL-1' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Vendor App </h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="User-App.png" />
                              <a href='https://www.figma.com/proto/tC5ugyPeRnJ3gyS1V6jJjt/User-App?node-id=147%3A436&starting-point-node-id=147%3A436&scaling=scale-down' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Food Ordering App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Deliveryapp.png" />
                              <a href='https://www.figma.com/file/EsTSDT40MWs3Vyn468jmuj/Delivery-app?node-id=0%3A1&t=vFkBGnBccVCieIJz-1' target='blank' className='portbtn'>Figma Design</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Delivery App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Wallet.png" />
                              <a href=' https://www.figma.com/file/T4bkkgbTgf7ocfrGIhWxGe/Wallet-App?node-id=0%3A1&t=oEFIMsHNk6sdU19x-1' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Wallet App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===================== MOBILE APP DESIGN TAB ===================== */}
                  <div className="tab-pane fade" id="pills-mobile" role="tabpanel" aria-labelledby="pills-mobile-tab">
                    <div className='row'>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="nopmods2.png" />
                              <a href='https://play.google.com/store/apps/details?id=io.ionic.NopModsNopCommerceMobileApp' target='blank' className='portbtn'>Download now </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Ecommerce Store</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Bihar-app.png" />
                              <a href='https://play.google.com/store/apps/details?id=io.ionic.biharnewspost' target='blank' className='portbtn'>Download now </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>News App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Vendorapp.png" />
                              <a href='https://www.figma.com/file/6CjwasW20VAt2DGeUGplMa/Vendor-app?node-id=0%3A1&t=CtpSFkE4wo5SIZQL-1' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Vendor App </h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="albia.png" />
                              <a href='https://www.figma.com/proto/5cqwL04OFVZxoQA3o92m5h/Albia-Biocare?page-id=0%3A1&node-id=5-153&viewport=147%2C210%2C0.11&scaling=scale-down' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Albia MobileApp </h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="ride.png" />
                              <a href='https://www.figma.com/proto/PRDrKvt5dJJcbbf4iE5YAc/Untitled?page-id=0%3A1&node-id=3-101&viewport=1%2C240%2C0.19&scaling=scale-down&starting-point-node-id=2%3A2&show-proto-sidebar=1' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Ride MobileApp </h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="User-App.png" />
                              <a href='https://www.figma.com/proto/tC5ugyPeRnJ3gyS1V6jJjt/User-App?node-id=147%3A436&starting-point-node-id=147%3A436&scaling=scale-down' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Food Ordering App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Deliveryapp.png" />
                              <a href='https://www.figma.com/file/EsTSDT40MWs3Vyn468jmuj/Delivery-app?node-id=0%3A1&t=vFkBGnBccVCieIJz-1' target='blank' className='portbtn'>Figma Design</a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Delivery App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg'>
                            <figure>
                              <img src="Wallet.png" />
                              <a href=' https://www.figma.com/file/T4bkkgbTgf7ocfrGIhWxGe/Wallet-App?node-id=0%3A1&t=oEFIMsHNk6sdU19x-1' target='blank' className='portbtn'>Figma Design </a>
                            </figure>
                            <figcaption>
                              <h2 className='text-white'>Wallet App</h2>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===================== BANNER DESIGN TAB ===================== */}
                  <div className="tab-pane fade" id="pills-Banner" role="tabpanel" aria-labelledby="pills-Banner-tab">
                    <div className="row">
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg banner'>
                            <figure>
                              <img src="vaccination.jpg" />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg banner'>
                            <figure>
                              <img src="Vijay-diwas.jpg" />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg banner'>
                            <figure>
                              <img src="Hr-day.jpg" />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg banner'>
                            <figure>
                              <img src="nurse-day.jpg" />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg banner'>
                            <figure>
                              <img src="mothersday.jpg" />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg banner'>
                            <figure>
                              <img src="quote.jpg" />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg banner'>
                            <figure>
                              <img src="ganesh.jpg" />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg banner'>
                            <figure>
                              <img src="shaheed.jpg" />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg banner'>
                            <figure>
                              <img src="quote-2.jpg" />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg banner'>
                            <figure>
                              <img src="quote-3.jpg" />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div className='card'>
                          <div className='cardimg banner'>
                            <figure>
                              <img src="linkdin-post.jpg" />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className='container r'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-12 col-sm-12'>
              <h2 className='text-white'>Designed and Developed by Prabhat Mohal</h2>
            </div>
            <div className='col-lg-6 col-md-6 col-12 col-sm-12 '>
              <h2 className='text-white text-right'>Copyright © 2024</h2>
            </div>
          </div>
        </div>
      </footer>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel"> Let&apos;s <b> Connect</b></h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg "></i></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-4">
                  <div className="contact">
                    <a href="tel:+917986724467"><i className="bi bi-telephone"></i> Phone Number</a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact">
                    <a href="mailto:prabhatmohal1998@gmail.com"><i className="bi bi-envelope"></i> Email</a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact">
                    <a href="https://api.whatsapp.com/send?phone=7986724467" target='blank'> <i className="bi bi-whatsapp"></i> Whatapp</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}