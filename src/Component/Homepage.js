import React from 'react';
import '../App.css'; 

function Homepage() {
  return (
    <>

      <div>
        <header>
          <div className="top-header">
            <div className="container d-flex justify-space-between">
              <div className="th-icon">
                <i className="fa-brands fa-linkedin-in" />
                <i className="fa-brands fa-facebook-f" />
                <i className="fa-brands fa-google-plus-g" />
              </div>
              <div className="th-info">
                <a href="#"><i className="fa-solid fa-envelope" /></a>
                <span>info@demo.com</span>
                <a href="#"><i className="fa-solid fa-phone" /></a>
                <span>+1 9999999999</span>
              </div>
            </div>
          </div>
          <div className="main-header">
            <div className="container d-flex justify-space-between align-items-center">
              <div className="logo">
                <a href="index.html">
                  <img src="./images/asset 0.webp" alt />
                </a>
              </div>
              <nav>
                <ul className="d-flex">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Department</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Pages</a></li>
                  <li><a href="#">Doctors</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
              <a href="#" className="btn">Make an Appointment</a>
            </div>    
          </div>
        </header>
        <section>
          <div className="banner-img">
            <div className="container">
              <div className="banner-content">
                <h1>Health Care <br /> <span>For Whole Family</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit iste <br /> eveniet
                  debitis autem aperiam explicabo labore vitae quidem.</p>
                <a href="#" className="btn">Check Our Service</a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="service-bg">
            <div className="container d-flex">
              <div className="service">
                <i className="fa-solid fa-heart-pulse" />
                <h2>Hospitality</h2>
                <p>Clinical excellence must be the priority for any health care service provider.</p>
                <a href="#" className="btn service-btn">Make an Appointment</a>
              </div>
              <div className="service">
                <i className="fa-solid fa-heart-pulse" />
                <h2>Hospitality</h2>
                <p>Clinical excellence must be the priority for any health care service provider.</p>
                <a href="#" className="btn service-btn">Make an Appointment</a>
              </div>
              <div className="service">
                <i className="fa-solid fa-heart-pulse" />
                <h2>Hospitality</h2>
                <p>Clinical excellence must be the priority for any health care service provider.</p>
                <a href="#" className="btn service-btn">Make an Appointment</a>
              </div>
            </div>
          </div> 
        </section>
        <section>
          <div className="d-bg">
            <div className="container">
              <h2>Our Departments</h2>
              <p className="d-para">Esteem spirit temper too say adieus who direct esteem. <br />
                It esteems luckily or picture placing drawing.</p>
              <div className="d-flex">
                <div className="department">
                  <img src="./images/asset 5.webp" alt />
                  <div className="d-content">
                    <h3>Eye Care</h3>
                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#">Learn More</a>
                  </div>
                </div>
                <div className="department">
                  <img src="./images/asset 4.png" alt />
                  <div className="d-content">
                    <h3>Eye Care</h3>
                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#">Learn More</a>
                  </div>
                </div>
                <div className="department">
                  <img src="./images/asset 6.webp" alt />
                  <div className="d-content">
                    <h3>Eye Care</h3>
                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="department">
                  <img src="./images/asset 7.webp" alt />
                  <div className="d-content">
                    <h3>Eye Care</h3>
                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#">Learn More</a>
                  </div>
                </div>
                <div className="department">
                  <img src="./images/asset 8.webp" alt />
                  <div className="d-content">
                    <h3>Eye Care</h3>
                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#">Learn More</a>
                  </div>
                </div>
                <div className="department">
                  <img src="./images/asset 3.webp" alt />
                  <div className="d-content">
                    <h3>Eye Care</h3>
                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                    <a href="#">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="review-bg d-flex align-items-center">
            <div className="container">
              <div className="review-content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus ratione adipisci eligendi voluptas eum dolor facilis fuga laudantium? Adipisci provident inventore ex dolorum dolore. Alias ipsam cumque optio omnis. voluptas eum dolor facilis fuga laudantium? Adipisci provident inventore ex dolorum dolore. Alias ipsam cumque optio omnis.</p>
                <h4>ASANA KORIM</h4>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="dr-title">Expert Doctors</h2>
            <div className="d-flex">
              <div className="dr-img">
                <img src="./images/asset 11.webp" alt />
                <div className="dr-content">
                  <h3>Mirazul Alom</h3>
                  <small>Neurologist</small>
                </div>
              </div>
              <div className="dr-img">
                <img src="./images/asset 10.png" alt />
                <div className="dr-content">
                  <h3>Mirazul Alom</h3>
                  <small>Neurologist</small>
                </div>
              </div>
              <div className="dr-img">
                <img src="./images/asset 12.png" alt />
                <div className="dr-content">
                  <h3>Mirazul Alom</h3>
                  <small>Neurologist</small>
                </div>
              </div>
              <div className="dr-img">
                <img src="./images/asset 13.webp" alt />
                <div className="dr-content">
                  <h3>Mirazul Alom</h3>
                  <small>Neurologist</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="d-flex bg">
            <div className="bg-images1">
              <div className="online-cont d-flex align-items-center">
                <div className="online-content ">
                  <h1>For Any Emergency Contact</h1>
                  <p>Esteem spirit temper too say adieus.</p>
                </div>
                <div className><a href="#" className="btn btn-custom">Chek Our Service</a></div>
              </div>
            </div>
            <div className="bg-images2">
              <div className="online-cont d-flex align-items-center">
                <div className="online-content ">
                  <h1>Make an Online Appointment</h1>
                  <p>Esteem spirit temper too say adieus.</p>
                </div>
                <div className><a href="#" className="btn btn-custom">Chek Our Service</a></div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

export default Homepage;
