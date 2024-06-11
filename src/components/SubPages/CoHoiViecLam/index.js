import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

// import SubHeader from '../SubHeader/index.js';
// import SubFooter from '../SubFooter/index.js';

import CoHoiViecLam_logo from '../../../assets/images/CoHoiViecLam-header.png';

import './CoHoiViecLam.GlobalStyles.scss';

function CoHoiViecLam() {
    return ( 
        <div className="CoHoiViecLam">
            <header className="CoHoiViecLam__header">
                <img className="CoHoiViecLam__header__logo" src={CoHoiViecLam_logo} />
                <div className="CoHoiViecLam__header__dropDown">
                    <span className="CoHoiViecLam__header__dropDown__title">Working at P&G</span>
                    <MdOutlineKeyboardArrowDown className="CoHoiViecLam__header__dropDown__icon__arrow"/>
                </div>
                <div className="CoHoiViecLam__header__dropDown">
                    <span className="CoHoiViecLam__header__dropDown__title">Experience Levels</span>
                    <MdOutlineKeyboardArrowDown className="CoHoiViecLam__header__dropDown__icon__arrow" />
                </div>
                <div className="CoHoiViecLam__header__dropDown">
                    <span className="CoHoiViecLam__header__dropDown__title">Hiring Process</span>
                    <MdOutlineKeyboardArrowDown className="CoHoiViecLam__header__dropDown__icon__arrow" />
                </div>
                <div className="CoHoiViecLam__header__dropDown">
                    <span className="CoHoiViecLam__header__dropDown__title">Events</span>
                </div>
                <div className="CoHoiViecLam__header__dropDown">
                    <span className="CoHoiViecLam__header__dropDown__title">Stay Informed</span>
                </div>
                <div className="CoHoiViecLam__header__dropDown">
                    <span className="CoHoiViecLam__header__dropDown__title">Search Jobs</span>
                </div>
                <div className="CoHoiViecLam__header__dropDown">
                    <span className="CoHoiViecLam__header__dropDown__title">My Account</span>
                </div>
                <div className="CoHoiViecLam__header__dropDown__right">
                    <MdLanguage className="CoHoiViecLam__header__dropDown__icon" />
                    <span className="CoHoiViecLam__header__dropDown__title__right">Asian Pacific</span>
                </div>
                <div className="CoHoiViecLam__header__dropDown__right">
                    <CiHeart className="CoHoiViecLam__header__dropDown__icon" />
                    <span className="CoHoiViecLam__header__dropDown__title__right">Saved jpbs</span>
                </div>
            </header>
            <div className="CoHoiViecLam__body">
                <div className="CoHoiViecLam__body__banner">
                    <div className="CoHoiViecLam__body__banner__overlay">
                        <div className="CoHoiViecLam__body__banner__block">
                            <div className="CoHoiViecLam__body__banner__block__title">
                                Careers at P&G Asia Pacific
                            </div>
                            <div className="CoHoiViecLam__body__banner__block__text">
                                <span className="CoHoiViecLam__body__banner__block__text__normal">
                                    MAKE AN IMPACT ON MORE THAN JUST YOUR CAREER 
                                </span>
                                <p className="CoHoiViecLam__body__banner__block__text__special"> #PGDAY1</p>
                            </div>
                            <div className="CoHoiViecLam__body__banner__block__search">
                                <input
                                    className="CoHoiViecLam__body__banner__block__search__input"
                                    type="text"
                                    placeholder="Search job title or location"
                                />
                                <CiSearch className="CoHoiViecLam__body__banner__block__search__icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="CoHoiViecLam__footer">
                <div className="CoHoiViecLam__footer__item">
                    <div className="CoHoiViecLam__footer__item__first">
                        <img className="CoHoiViecLam__footer__item__first__logo" src={CoHoiViecLam_logo} />
                        <span className="CoHoiViecLam__footer__item__first__text">Procter & Gamble Plz, Cincinnati, Ohio, 45202, United States</span>
                    </div>
                    <div className="CoHoiViecLam__footer__item__second">
                        <h2 className="CoHoiViecLam__footer__item__second__title">Working at P&G</h2>
                        <a className="CoHoiViecLam__footer__item__second__link">About Us</a>
                        <a className="CoHoiViecLam__footer__item__second__link">Benefits</a>
                        <a className="CoHoiViecLam__footer__item__second__link">Culture</a>
                        <a className="CoHoiViecLam__footer__item__second__link">Leadership & Development</a>
                        <a className="CoHoiViecLam__footer__item__second__link">Hiring Process</a>
                        <a className="CoHoiViecLam__footer__item__second__link">Disability Accommodation</a>
                        <a className="CoHoiViecLam__footer__item__second__link">Application Help</a>
                        <a className="CoHoiViecLam__footer__item__second__link">Our Locations</a>
                    </div>
                    <div className="CoHoiViecLam__footer__item__third">
                        <h2 className="CoHoiViecLam__footer__item__third__title">Career Areas</h2>
                        <a className="CoHoiViecLam__footer__item__third__link">Engineering</a>
                        <a className="CoHoiViecLam__footer__item__third__link">Finance and ​Accounting</a>
                        <a className="CoHoiViecLam__footer__item__third__link">Human Resources</a>
                        <a className="CoHoiViecLam__footer__item__third__link">Information ​​​​Technology</a>
                        <a className="CoHoiViecLam__footer__item__third__link">Legal and Patent</a>
                        <a className="CoHoiViecLam__footer__item__third__link">Manufacturing and Quality Assurance</a>
                        <a className="CoHoiViecLam__footer__item__third__link">Marketing and Brand Management</a>
                        <a className="CoHoiViecLam__footer__item__third__link">Research & Development</a>
                        <a className="CoHoiViecLam__footer__item__third__link">Sales</a>
                        <a className="CoHoiViecLam__footer__item__third__link">Supply Chain & Logistics</a>
                        <a className="CoHoiViecLam__footer__item__third__link">Other Career</a>
                    </div>
                    <div className="CoHoiViecLam__footer__item__fourth">
                        <h2 className="CoHoiViecLam__footer__item__fourth__title">Experience Levels</h2>
                        <a className="CoHoiViecLam__footer__item__fourth__link">Student Programs</a>
                        <a className="CoHoiViecLam__footer__item__fourth__link">Internships</a>
                        <a className="CoHoiViecLam__footer__item__fourth__link">Recent Grads / Entry Level</a>
                        <a className="CoHoiViecLam__footer__item__fourth__link">Experienced Professionals</a>
                        <a className="CoHoiViecLam__footer__item__fourth__link">Plant Technicians</a>
                    </div>
                    <div className="CoHoiViecLam__footer__item__fifth">
                        <a className="CoHoiViecLam__footer__item__fifth__link">Blog</a>
                        <a className="CoHoiViecLam__footer__item__fifth__link">Events</a>
                        <a className="CoHoiViecLam__footer__item__fifth__link">Search Jobs</a>
                        <a className="CoHoiViecLam__footer__item__fifth__link">Stay Informed</a>
                        <a className="CoHoiViecLam__footer__item__fifth__link">My Account</a>
                    </div>
                </div>
            </footer>
        </div>
     );
}

export default CoHoiViecLam;