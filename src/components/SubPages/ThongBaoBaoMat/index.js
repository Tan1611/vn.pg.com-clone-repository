import { FaPlus, FaXTwitter, FaInstagram, FaLinkedin, FaPhone  } from "react-icons/fa6";
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoBriefcaseSharp } from "react-icons/io5";

// import SubHeader from '../SubHeader/index.js';
// import SubFooter from '../SubFooter/index.js';

import ThongBaoBaoMatIcon from '../../../assets/images/ThongBaoBaoMat-microsoftTeams-image-icon.png';
import Approach from '../../../assets/images/LamDepCoTrachNhiem-approach-icon.png';
import Goals from '../../../assets/images/LamDepCoTrachNhiem-our-goals.png';
import ChungToiLaAiBrands from '../../../assets/images/ChungToiLaAi-icon-our-brands.png';

import './ThongBaoBaoMat.GlobalStyles.scss';
function ThongBaoBaoMat() {
    return ( 
        <div className='ThongBaoBaoMat'>
            <div className='ThongBaoBaoMat__background'>
                <img
                    className='ThongBaoBaoMat__icon'
                    src={ThongBaoBaoMatIcon}
                    alt='Thông Báo bảo mật icon'
                />
            </div>
            <div className='ThongBaoBaoMat__content__header'>
                <p className='ThongBaoBaoMat__content__header__title' >ALL BRANDS, ONE POLICY TO PROTECT YOU.</p>
            </div>
            <div className='ThongBaoBaoMat__content__body'>
                <div className='ThongBaoBaoMat__content__body__firstItem'>
                    <div className='ThongBaoBaoMat__content__body__firstItem__group'>
                        <img
                            className='ThongBaoBaoMat__content__body__firstItem__img'
                            src={Approach}
                            alt='Thông báo bảo mật approach icon'
                        />
                        <p className='ThongBaoBaoMat__content__body__firstItem__title'>Privacy you deserve.</p>
                        <p className='ThongBaoBaoMat__content__body__firstItem__text'>We handle your data carefully and sensibly.
                            Our policies and compliance measures make sure of that.
                            You can always contact us if you have questions or concerns.
                        </p>
                    </div>
                </div>
                <div className='ThongBaoBaoMat__content__body__secondItem'>
                    <div>
                        <img
                            className=''
                            src={Goals}
                            alt='Thông báo bảo mật Goals icon'
                        />
                        <p>Data you share</p>
                        <p>We collect information that you share with us through our digital
                            or offline brand experiences as well as information you have provided
                            to other companies who share that data with us. You can control your data at any time.
                        </p>
                    </div>
                </div>
                <div className='ThongBaoBaoMat__content__body__thirdItem'>
                    <div>
                        <img
                            className=''
                            src={ChungToiLaAiBrands}
                            alt='Thông báo bảo mật Brands icon'
                        />
                        <p>Content you'll like</p>
                        <p>We use data to help customize your experience with more
                            products and offers relevant to you. We also use it to make
                            sure you don't see the same messages over and over.
                        </p>
                    </div>
                </div>
            </div>
            <div className='ThongBaoBaoMat__content__footer'>
                <div className='ThongBaoBaoMat__content__footer__title'>
                    <p className='ThongBaoBaoMat__content__footer__title__leftText'>Privacy Policy</p>
                    <p className='ThongBaoBaoMat__content__footer__title__rightText'>Updated April 2, 2024</p>
                </div>
                <p className='ThongBaoBaoMat__content__footer__download__text'>Download a copy of this Privacy Policy (PDF)</p>
                <div className="ThongBaoBaoMat__content__listDropdown">
                    <div className="ThongBaoBaoMat__content__listDropdown__row">
                        <p className='ThongBaoBaoMat__content__listDropdown__row__title'>FAQ</p>
                        <FaPlus className='ThongBaoBaoMat__content__listDropdown__row__iconPlus' />
                    </div>
                    <div className="ThongBaoBaoMat__content__listDropdown__row">
                        <p className='ThongBaoBaoMat__content__listDropdown__row__title'>How You Control Your Personal Data</p>
                        <FaPlus className='ThongBaoBaoMat__content__listDropdown__row__iconPlus' />
                    </div>
                    <div className="ThongBaoBaoMat__content__listDropdown__row">
                        <p className='ThongBaoBaoMat__content__listDropdown__row__title'>How We Gather & Use Personal Data</p>
                        <FaPlus className='ThongBaoBaoMat__content__listDropdown__row__iconPlus' />
                    </div>
                    <div className="ThongBaoBaoMat__content__listDropdown__row">
                        <p className='ThongBaoBaoMat__content__listDropdown__row__title'>How We Disclose Personal Data</p>
                        <FaPlus className='ThongBaoBaoMat__content__listDropdown__row__iconPlus' />
                    </div>
                    <div className="ThongBaoBaoMat__content__listDropdown__row">
                        <p className='ThongBaoBaoMat__content__listDropdown__row__title'>Types of Personal Data We Collect</p>
                        <FaPlus className='ThongBaoBaoMat__content__listDropdown__row__iconPlus' />
                    </div>
                    <div className="ThongBaoBaoMat__content__listDropdown__row">
                        <p className='ThongBaoBaoMat__content__listDropdown__row__title'>Legal Basis & Retention by Processing Purpose</p>
                        <FaPlus className='ThongBaoBaoMat__content__listDropdown__row__iconPlus' />
                    </div>
                    <div className="ThongBaoBaoMat__content__listDropdown__row">
                        <p className='ThongBaoBaoMat__content__listDropdown__row__title'>Children's Personal Data</p>
                        <FaPlus className='ThongBaoBaoMat__content__listDropdown__row__iconPlus' />
                    </div>
                    <div className="ThongBaoBaoMat__content__listDropdown__row">
                        <p className='ThongBaoBaoMat__content__listDropdown__row__title'>How We Protect Your Personal Information</p>
                        <FaPlus className='ThongBaoBaoMat__content__listDropdown__row__iconPlus' />
                    </div>
                    <div className="ThongBaoBaoMat__content__listDropdown__row">
                        <p className='ThongBaoBaoMat__content__listDropdown__row__title'>International Transfers</p>
                        <FaPlus className='ThongBaoBaoMat__content__listDropdown__row__iconPlus' />
                    </div>
                    <div className="ThongBaoBaoMat__content__listDropdown__row">
                        <p className='ThongBaoBaoMat__content__listDropdown__row__title'>Additional Regional Notices</p>
                        <FaPlus className='ThongBaoBaoMat__content__listDropdown__row__iconPlus' />
                    </div>
                    <div className="ThongBaoBaoMat__content__listDropdown__row">
                        <p className='ThongBaoBaoMat__content__listDropdown__row__title'>Contact Us</p>
                        <FaPlus className='ThongBaoBaoMat__content__listDropdown__row__iconPlus' />
                    </div>
                    
                </div>
            </div>
            <div className='ThongBaoBaoMat__footer'>
                <div className='ThongBaoBaoMat__footer__head'>
                    <div className='ThongBaoBaoMat__footer__head__left'>
                        <a href="#">
                            <FaFacebook className="ThongBaoBaoMat__footer__head__left__facebook" />
                        </a>
                        <a href="#">
                            <FaXTwitter className="ThongBaoBaoMat__footer__head__left__twitter" />
                        </a>
                        <a href="#">
                            <FaYoutube className="ThongBaoBaoMat__footer__head__left__youtube" />
                        </a>
                        <a href="#">
                            <FaInstagram className="ThongBaoBaoMat__footer__head__left__instagram" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="ThongBaoBaoMat__footer__head__left__linkedin" />
                        </a>
                    </div>
                    <div className='ThongBaoBaoMat__footer__head__right'>
                        <FaPhone className='ThongBaoBaoMat__footer__head__right__icon' />
                        <p className='ThongBaoBaoMat__footer__head__right__contact'>CONTACT</p>
                        <IoBriefcaseSharp className='ThongBaoBaoMat__footer__head__right__icon' />
                        <p className='ThongBaoBaoMat__footer__head__right__career'>CAREERS</p>
                    </div>
                </div>
                <div className='ThongBaoBaoMat__footer__content'>
                    <div className='ThongBaoBaoMat__footer__content__left'>
                        <p className='ThongBaoBaoMat__footer__content__left__title'>PARTNERS AND INVESTORS</p>
                        <a className='ThongBaoBaoMat__footer__content__left__link' href='#'>Investors</a>
                        <a className='ThongBaoBaoMat__footer__content__left__link' href='#'>Partner with us</a>
                        <a className='ThongBaoBaoMat__footer__content__left__link' href='#'>Suppliers</a>
                    </div>
                    <div className='ThongBaoBaoMat__footer__content__middle'>
                        <p className='ThongBaoBaoMat__footer__content__middle__title'>OUR COMPANY</p>
                        <a className='ThongBaoBaoMat__footer__content__middle__link' href="#">Leadership</a>
                        <a className='ThongBaoBaoMat__footer__content__middle__link' href="#">Structure and Governance</a>
                        <a className='ThongBaoBaoMat__footer__content__middle__link' href="#">Policies and Practices</a>
                        <a className='ThongBaoBaoMat__footer__content__middle__link' href="#">Archive</a>
                        <a className='ThongBaoBaoMat__footer__content__middle__link' href="#">Awards & Recognition</a>
                        <a className='ThongBaoBaoMat__footer__content__middle__link' href="#">Newsroom</a>
                    </div>
                    <div className='ThongBaoBaoMat__footer__content__right'>
                        <p className='ThongBaoBaoMat__footer__content__right__title'>LEGAL</p>
                        <a className='ThongBaoBaoMat__footer__content__right__link' href="#">Privacy Policy</a>
                        <a className='ThongBaoBaoMat__footer__content__right__link' href="#">Consumer Health Data Privacy Policy</a>
                        <a className='ThongBaoBaoMat__footer__content__right__link' href="#">Terms and Conditions</a>
                        <a className='ThongBaoBaoMat__footer__content__right__link' href="#">Your Privacy Choices</a>
                        <a className='ThongBaoBaoMat__footer__content__right__link' href="#">Do Not Sell or Share My Personal Information / </a>
                        <a className='ThongBaoBaoMat__footer__content__right__link' href="#">Opt-Out of Targeted Advertising</a>
                    </div>
                </div>
                <span className="ThongBaoBaoMat__footer__copyright">© 2024 Procter & Gamble</span>
            </div>
        </div>
     );
}

export default ThongBaoBaoMat;