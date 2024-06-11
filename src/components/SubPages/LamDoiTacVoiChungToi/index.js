import { FaSearch } from "react-icons/fa";

import LamDoiTacVoiChungToi__logo from '../../../assets/images/LamDoiTacVoiChungToi-logo.png';

import './LamDoiTacVoiChungToi.GlobalStyles.scss';
function LamDoiTacVoiChungToi() {

    return ( 
        <div className="LamDoiTacVoiChungToi">
            <header className="LamDoiTacVoiChungToi__header">
                <img className="LamDoiTacVoiChungToi__header__img" src={LamDoiTacVoiChungToi__logo} alt="logo header" />
                <div className="LamDoiTacVoiChungToi__header__navigation">
                    <a className="LamDoiTacVoiChungToi__header__navigation__link" href="#">CONNECT + DEVELOP</a>
                    <a className="LamDoiTacVoiChungToi__header__navigation__link" href="#">NEEDS</a>
                    <a className="LamDoiTacVoiChungToi__header__navigation__link" href="#">INNOVATION ROADMAP</a>
                    <a className="LamDoiTacVoiChungToi__header__navigation__link" href="#">SUSTAINABILITY SOLUTIONS</a>
                    <a className="LamDoiTacVoiChungToi__header__navigation__link" href="#">SIGNAL 360</a>
                    <a className="LamDoiTacVoiChungToi__header__navigation__link" href="#">P&G VENTURES</a>
                </div>
                <FaSearch className="LamDoiTacVoiChungToi__header__search" />
            </header>
            <div className="LamDoiTacVoiChungToi__content">
                <div className='LamDoiTacVoiChungToi__content__left'>
                    <video autoplay controls loop>
                        <source src="https://videos.ctfassets.net/6sj6n6vidzu4/1H41MShTLN42T2IN0XukLj/6ed7e0f831712a36bccb42bb4b16e5ea/20231025_HOME_DEVELOP_LAST_1920x970_preview.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        
                    </video>
                </div>
                <div className='LamDoiTacVoiChungToi__content__right'>
                    <video autoplay controls loop>
                        <source src="https://videos.ctfassets.net/6sj6n6vidzu4/7Lqd5eFh5q4ZHeTC5YSiyA/16dc12821d1e38cf7ee7501334ac333d/20231108_HOME_CONNECT_960x970_5mbps.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <footer className="LamDoiTacVoiChungToi__footer">
                <div className="LamDoiTacVoiChungToi__footer__body">
                    <div className="LamDoiTacVoiChungToi__footer__body__head">
                        <div className="LamDoiTacVoiChungToi__footer__body__first">
                            <a className="LamDoiTacVoiChungToi__footer__body__first__text">Contact Us</a>
                            <a className="LamDoiTacVoiChungToi__footer__body__first__text">Careers</a>
                        </div>
                        <div className="LamDoiTacVoiChungToi__footer__body__second">
                            <a className="LamDoiTacVoiChungToi__footer__body__second__text">Connect + Develop</a>
                            <a className="LamDoiTacVoiChungToi__footer__body__second__text">Curent Needs</a>
                            <a className="LamDoiTacVoiChungToi__footer__body__second__text">Sustainable Solutions</a>
                            <a className="LamDoiTacVoiChungToi__footer__body__second__text">Signal Innovation</a>
                            <a className="LamDoiTacVoiChungToi__footer__body__second__text">P&G Ventures</a>
                            <a className="LamDoiTacVoiChungToi__footer__body__second__text">Sitemap</a>
                        </div>
                        <div className="LamDoiTacVoiChungToi__footer__body__third">
                            <a className="LamDoiTacVoiChungToi__footer__body__third__text">Our Brands</a>
                            <a className="LamDoiTacVoiChungToi__footer__body__third__text">Who We Are</a>
                            <a className="LamDoiTacVoiChungToi__footer__body__third__text">Sustainability</a>
                            <a className="LamDoiTacVoiChungToi__footer__body__third__text">P&G Home</a>
                            <a className="LamDoiTacVoiChungToi__footer__body__third__text">P&G News</a>
                        </div>
                        <div className="LamDoiTacVoiChungToi__footer__body__fourth">
                            <a className="LamDoiTacVoiChungToi__footer__body__fourth__text">Privacy</a>
                            <a className="LamDoiTacVoiChungToi__footer__body__fourth__text">Consumer Health Data Privacy Policy</a>
                            <a className="LamDoiTacVoiChungToi__footer__body__fourth__text">Terms and Conditions</a>
                            <a className="LamDoiTacVoiChungToi__footer__body__fourth__text">Your Privacy Choices</a>
                            <a className="LamDoiTacVoiChungToi__footer__body__fourth__text">Do Not Sell or Share My Personal Information / Opt-Out of Targeted Advertising</a>
                        </div>
                    </div>
                    <div className="LamDoiTacVoiChungToi__footer__body__bottom">
                        <img className="LamDoiTacVoiChungToi__footer__body__bottom__img" src={LamDoiTacVoiChungToi__logo } />
                    </div>
                </div>
            </footer>
        </div>
     );
}

export default LamDoiTacVoiChungToi;