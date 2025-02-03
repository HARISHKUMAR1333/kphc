const navBarElement = `<div class="nav-bar-wrapper">
        <div class="logo">
            <img src="./images/common/logo.svg" />
            <p class="heading-text">KPHealthCare</p>
        </div>
        <ul class="nav-menu align-to-right">
            <li class="active"><a href="home.html">Home</a></li>
            <li class=""><a href="services.html">Our Services</a></li>
            <li class=""><a href="our_clients">Our Clients</a></li>
            <li class=""><a href="contact_us">Contacts</a></li>
        </ul>
    </div>`;

const footer = `<footer class ='footermain-wrapper'>
        <section class="footer__area-common" >
            <div class="container">
                <div class="row mb-minus-50">
                    <!-- Footer Logo and Social Links -->
                    <div class="col-lg-3 col-6">
                        <div class="footer__widget footer__widget-item-1">
                            <div class="footer__logo mb-30">
                                <a href="index.html">
                                    <img class="img-fluid" src="./images/common/logo.svg" alt="logo">
                                </a>
                            </div>

                            <div class="footer__content">
                                <p class="mb-0">It is a long established fact that a reader will be distracted</p>
                            </div>

                            <div class="footer__social mt-30">
                                <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                                <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Footer Services Links -->
                    <div class="col-lg-2 col-6">
                        <div class="footer__widget footer__widget-item-2">
                            <div class="footer__widget-title">
                                <h4>Services</h4>
                            </div>
                            <div class="footer__link">
                                <ul>
                                    <li><a href="about-us.html">Reliable Rentals</a></li>
                                    <li><a href="about-us.html">Golden Key Properties</a></li>
                                    <li><a href="about-us.html">Swift Home Sales</a></li>
                                    <li><a href="about-us.html">Elite Realty Services</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Footer Newsletter Subscription -->
                    <div class="col-lg-4 col-6">
                        <div class="footer__widget footer__widget-item-3">
                            <div class="footer__widget-title">
                                <h4>Our newsletter</h4>
                            </div>

                            <div class="footer__subscribe-content">
                                <p class="mb-30">Custom Software Development Tailored Solutions for Your Business Custom
                                </p>

                                <!-- <div class="footer__subscribe d-flex mt-30">
                                    <input type="text" placeholder="Enter e-mail">
                                    <button type="submit" class="rr-btn rr-btn__theme">
                                        <span class="btn-wrap">
                                            <span class="text-one"><i class="fa-solid fa-paper-plane"></i></span>
                                            <span class="text-two"><i class="fa-solid fa-paper-plane"></i></span>
                                        </span>
                                    </button>
                                </div> -->
                            </div>
                        </div>
                    </div>

                    <!-- Footer Contact Info -->
                    <div class="col-lg-3 col-6">
                        <div class="footer__widget footer__widget-item-4">
                            <div class="footer__widget-title">
                                <h4>Our Office</h4>
                            </div>

                            <div class="footer__link footer__link-location">
                                <ul>
                                    <li><a href="mailto:debra.holt@example.com"><i class="fa-solid fa-envelope"></i>
                                            test@example.com</a></li>
                                    <li><a href="https://maps.app.goo.gl/4XYAPDmpesGnSbsC8"><i
                                                class="fa-solid fa-location-dot"></i> 3891 Ranchview Dr. dev,
                                            cbn 62639</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Bottom Section -->
            <div class="footer__bottom-wrapper">
                <div class="container">
                    <div class="footer__bottom">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="footer__copyright text-lg-start text-center">
                                    <p class="mb-0">© <a href="index.html">KpHealthCare</a> 2024 | All Rights Reserved</p>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="footer__copyright-menu">
                                    <ul>
                                        <li><a href="about-us.html">Trams &amp; Condition</a></li>
                                        <li><a href="about-us.html">Privacy Policy</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>`;
function init() {
  document.getElementById('commonNavbar').innerHTML = navBarElement;
  document.getElementById('commonfooter').innerHTML = footer;
}

window.addEventListener('scroll', function () {
  var navBarWrapper = document.querySelector('.nav-bar-wrapper');

  if (window.scrollY >= 90) {
    navBarWrapper.classList.add('scroll-Navbar');
  } else {
    navBarWrapper.classList.remove('scroll-Navbar');
  }
});

init();
