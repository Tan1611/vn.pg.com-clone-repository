import { FaXTwitter, FaInstagram, FaLinkedin, FaPhone  } from "react-icons/fa6";
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoBriefcaseSharp } from "react-icons/io5";

// import SubHeader from '../SubHeader/index.js';
// import SubFooter from '../SubFooter/index.js';
import firstImage from '../../../assets/images/P_G_Logo.png';
import secondImage from '../../../assets/images/TinTuc-social-SaveTheDate.png';
import thirdImage from '../../../assets/images/TinTuc-employees.png';
import fourthImage from '../../../assets/images/TinTuc-pride-month.png';

import './TinTuc.GlobalStyles.scss';
function TinTuc() {
    return ( 
        <div className='TinTuc'>
            <header className='TinTuc__header'>
            </header>
            <div className='TinTuc__body'>
                <div className="TinTuc__body__banner">
                    <div className="TinTuc__body__banner__inner">
                        <div className="TinTuc__body__banner__inner__content">
                            <div className="TinTuc__body__banner__inner__content__titleDot">
                                <h1 className="TinTuc__body__banner__inner__content__title">NEWSROOM</h1>
                                <p className="TinTuc__body__banner__inner__content__dot">.</p>
                            </div>
                            <h2 className="TinTuc__body__banner__inner__content__module__title">
                                Featured Article
                            </h2>
                            <p className="TinTuc__body__banner__inner__content__module__text">
                                P&G to Webcast Presentation From the Deutsche
                                Bank dbAccess Global Consumer Conference, June 4
                            </p>
                            <span className="TinTuc__body__banner__inner__content__date">May 28, 2024</span>
                        </div>
                    </div>
                </div>
                <div className="TinTuc__body__outer">
                    <h2 className="TinTuc__body__outer__title">Our stories</h2>
                    <div className="TinTuc__body__outer__items">
                        <div className="TinTuc__body__outer__items__first">
                            <img
                                className="TinTuc__body__outer__items__first__img"
                                src={firstImage}
                                alt="ảnh"
                            />
                            <a className="TinTuc__body__outer__items__first__link">
                                P&G at the 2024 Deutsche Bank Global Consumer Conference
                            </a>
                            <p className="TinTuc__body__outer__items__first__text">
                                June 05, 2024
                            </p>
                            <a className="TinTuc__body__outer__items__first__more">
                                Read more
                            </a>
                        </div>
                        <div className="TinTuc__body__outer__items__second">
                            <img
                                className="TinTuc__body__outer__items__second__img"
                                src={secondImage}
                                alt="ảnh"
                            />
                            <a className="TinTuc__body__outer__items__second__link">
                                Signal 2024 | P&G's Annual Innovation Summit Will Bring Together Visionary Leaders in Cincinnati
                            </a>
                            <p className="TinTuc__body__outer__items__second__text">
                                June 05, 2024
                            </p>
                            <a className="TinTuc__body__outer__items__second__more">
                                Read more
                            </a>
                        </div>
                        <div className="TinTuc__body__outer__items__third">
                            <img
                                className="TinTuc__body__outer__items__third__img"
                                src={thirdImage}
                                alt="ảnh"
                            />
                            <a className="TinTuc__body__outer__items__third__link">
                                The Secret Behind P&G Innovation? Unleashing the Power of People
                            </a>
                            <p className="TinTuc__body__outer__items__third__text">
                                June 04, 2024
                            </p>
                            <a className="TinTuc__body__outer__items__third__more">
                                Read more
                            </a>
                        </div>
                        <div className="TinTuc__body__outer__items__fourth">
                            <img
                                className="TinTuc__body__outer__items__fourth__img"
                                src={fourthImage}
                                alt="ảnh"
                            />
                            <a className="TinTuc__body__outer__items__fourth__link">
                                Reflecting on P&G’s Longstanding Commitment to Advancing LGBTQ+ Equality and Efforts to Better Serve the LGBTQ+ Community
                            </a>
                            <p className="TinTuc__body__outer__items__fourth__text">
                                June 04, 2024
                            </p>
                            <a className="TinTuc__body__outer__items__fourth__more">
                                Read more
                            </a>
                        </div>
                    </div>
                    <button className="TinTuc__body__outer__btn">SEE ALL BLOGS</button>
                </div>
            </div>
            <footer className='TinTuc__footer'>
                <div className='TinTuc__footer__head'>
                    <div className='TinTuc__footer__head__left'>
                        <a href="#">
                            <FaFacebook className="TinTuc__footer__head__left__facebook" />
                        </a>
                        <a href="#">
                            <FaXTwitter className="TinTuc__footer__head__left__twitter" />
                        </a>
                        <a href="#">
                            <FaYoutube className="TinTuc__footer__head__left__youtube" />
                        </a>
                        <a href="#">
                            <FaInstagram className="TinTuc__footer__head__left__instagram" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="TinTuc__footer__head__left__linkedin" />
                        </a>
                    </div>
                    <div className='TinTuc__footer__head__right'>
                        <FaPhone className='TinTuc__footer__head__right__icon' />
                        <p className='TinTuc__footer__head__right__contact'>CONTACT</p>
                        <IoBriefcaseSharp className='TinTuc__footer__head__right__icon' />
                        <p className='TinTuc__footer__head__right__career'>CAREERS</p>
                    </div>
                </div>
                <div className='TinTuc__footer__content'>
                    <div className='TinTuc__footer__content__left'>
                        <p className='TinTuc__footer__content__left__title'>PARTNERS AND INVESTORS</p>
                        <a className='TinTuc__footer__content__left__link' href='#'>Investors</a>
                        <a className='TinTuc__footer__content__left__link' href='#'>Partner with us</a>
                        <a className='TinTuc__footer__content__left__link' href='#'>Suppliers</a>
                    </div>
                    <div className='TinTuc__footer__content__middle'>
                        <p className='TinTuc__footer__content__middle__title'>OUR COMPANY</p>
                        <a className='TinTuc__footer__content__middle__link' href="#">Leadership</a>
                        <a className='TinTuc__footer__content__middle__link' href="#">Structure and Governance</a>
                        <a className='TinTuc__footer__content__middle__link' href="#">Policies and Practices</a>
                        <a className='TinTuc__footer__content__middle__link' href="#">Archive</a>
                        <a className='TinTuc__footer__content__middle__link' href="#">Awards & Recognition</a>
                        <a className='TinTuc__footer__content__middle__link' href="#">Newsroom</a>
                    </div>
                    <div className='TinTuc__footer__content__right'>
                        <p className='TinTuc__footer__content__right__title'>LEGAL</p>
                        <a className='TinTuc__footer__content__right__link' href="#">Privacy Policy</a>
                        <a className='TinTuc__footer__content__right__link' href="#">Consumer Health Data Privacy Policy</a>
                        <a className='TinTuc__footer__content__right__link' href="#">Terms and Conditions</a>
                        <a className='TinTuc__footer__content__right__link' href="#">Your Privacy Choices</a>
                        <a className='TinTuc__footer__content__right__link' href="#">Do Not Sell or Share My Personal Information / </a>
                        <a className='TinTuc__footer__content__right__link' href="#">Opt-Out of Targeted Advertising</a>
                    </div>
                </div>
                <span className="TinTuc__footer__copyright">© 2024 Procter & Gamble</span>
            </footer>
        </div>
     );
}

export default TinTuc;