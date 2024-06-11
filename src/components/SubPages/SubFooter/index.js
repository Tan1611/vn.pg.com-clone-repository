import { useEffect, useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { FiPhone } from 'react-icons/fi';
import { FaBriefcase, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

import './SubFooter.GlobalStyles.scss';
import adchoices from '../../../assets/images/adchoices.jpg';

function SubFooter() {
    const [scrolling, setScrolling] = useState(false);

    const scrollToTopSmoothly = () => {
        const scrollStep = window.scrollY / 100;
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                setScrolling(true);
                window.scrollBy(0, -scrollStep);
            } else {
                clearInterval(scrollInterval);
                setScrolling(false);
            }
        }, 15);
    };

    useEffect(() => {
        const backButton = document.querySelector('.btn__back');
        if (backButton) {
            backButton.addEventListener('click', scrollToTopSmoothly);
        }

        return () => {
            if (backButton) {
                backButton.removeEventListener('click', scrollToTopSmoothly);
            }
        };
    }, []);

    return (
        <div className="wrap__SubFooter">
            <div className="body__SubFooter">
                <div className="body__SubFooter__btn">
                    <button className="btn__back">Quay trở về đầu tiên</button>
                </div>
                <div className="body__SubFooter__nav">
                    <ul className="body__SubFooter__nav__group responsive__group">
                        <li className="body__SubFooter__nav__contactus">
                            <FiPhone className="body__SubFooter__nav__contactus__icon" />
                            <a href="#" className="body__SubFooter__nav__contactus__text">
                                Liên hệ với chúng tôi
                            </a>
                        </li>
                        <li className="body__SubFooter__nav__career">
                            <FaBriefcase className="body__SubFooter__nav__career__icon" />
                            <a href="#" className="body__ooter__nav__career__text">
                                Cơ hội việc làm
                            </a>
                            <MdOutlineArrowOutward className="body__SubFooter__nav__career__icon" />
                        </li>
                    </ul>
                    <ul className="body__SubFooter__nav__group">
                        <label className="body__SubFooter__nav__partner__investor">ĐỐI TÁC VÀ NHÀ ĐẦU TƯ</label>
                        <li className="body__SubFooter__nav__investor">
                            <a href="#" className="body__SubFooter__nav__investor__text">
                                Nhà đầu tư
                            </a>
                            <MdOutlineArrowOutward className="body__SubFooter__nav__investor__icon" />
                        </li>
                        <li className="body__SubFooter__nav__partner">
                            <a href="#" className="body__SubFooter__nav__partner__text">
                                Làm đối tác với chúng tôi
                            </a>
                            <MdOutlineArrowOutward className="body__SubFooter__nav__partner__icon" />
                        </li>
                        <li className="body__SubFooter__nav__supplier">
                            <a href="#" className="body__SubFooter__nav__supplier__text">
                                Nhà cung cấp
                            </a>
                            <MdOutlineArrowOutward className="body__SubFooter__nav__supplier__icon" />
                        </li>
                    </ul>
                    <ul className="body__SubFooter__nav__group">
                        <label className="body__SubFooter__nav__group__companyus">CÔNG TY CHÚNG TÔI</label>
                        <li className="body__SubFooter__nav__leader">
                            <a href="#" className="body__SubFooter__nav__leader__text">
                                Lãnh đạo
                            </a>
                        </li>
                        <li className="body__SubFooter__nav__structure">
                            <a href="#" className="body__SubFooter__nav__structure__text">
                                Cấu trúc & Quản trị
                            </a>
                        </li>
                        <li className="body__SubFooter__nav__policy">
                            <a href="#" className="body__SubFooter__nav__policy__text">
                                Chính sách & Thực hành
                            </a>
                        </li>
                        <li className="body__SubFooter__nav__storage">
                            <a href="#" className="body__SubFooter__nav__storage__text">
                                Lưu trữ
                            </a>
                        </li>
                        <li className="body__SubFooter__nav__awards">
                            <a href="#" className="body__SubFooter__nav__awards__text">
                                Giải thưởng & công nhận
                            </a>
                            <MdOutlineArrowOutward className="body__SubFooter__nav__awards__icon" />
                        </li>
                        <li className="body__SubFooter__nav__news">
                            <a href="#" className="body__SubFooter__nav__news__text">
                                Tin tức
                            </a>
                            <MdOutlineArrowOutward className="body__SubFooter__nav__news__icon" />
                        </li>
                    </ul>
                    <ul className="body__SubFooter__nav__group">
                        <label className="body__SubFooter__nav__useful">HỮU ÍCH</label>
                        <li className="body__SubFooter__nav__sitemap">
                            <a href="#" className="body__SubFooter__nav__sitemap__text">
                                Sơ đồ trang web
                            </a>
                        </li>
                    </ul>
                    <ul className="body__SubFooter__nav__group">
                        <label className="body__SubFooter__nav__law">PHÁP LUẬT</label>
                        <li className="body__Footer__nav__privacy">
                            <a href="#" className="body__SubFooter__nav__privacy__text">
                                Thông báo bảo mật
                            </a>
                            <MdOutlineArrowOutward className="body__SubFooter__nav__privacy__icon" />
                        </li>
                        <li className="body__SubFooter__nav__conditions">
                            <a href="#" className="body__SubFooter__nav__conditions__text">
                                Điều khoản & Điều lệ
                            </a>
                            <MdOutlineArrowOutward className="body__SubFooter__nav__conditions__icon" />
                        </li>
                        <li className="body__SubFooter__nav__adchoices">
                            <a href="#" className="body__SubFooter__nav__adchoices__text">
                                AdChoices
                            </a>
                            <img src={adchoices} alt="adchoices" className="body__SubFooter__nav__adchoices__img" />
                        </li>
                    </ul>
                </div>
                <div className="body__SubFooter__bottom">
                    <div className="body__SubFooter__bottom__left">
                        <button className="body__SubFooter__bottom__left__btn">
                            <GrLanguage className="body__SubFooter__bottom__left__icon" />
                            <span className="body__SubFooter__bottom__left__text">Tiếng Việt</span>
                        </button>
                    </div>
                    <div className="body__SubFooter__bottom__center">
                        <span className="body__SubFooter__bottom__center__text">&copy; 2024 Procter & Gamble</span>
                    </div>
                    <div className="body__SubFooter__bottom__right">
                        <a href="#">
                            <FaFacebook className="body__SubFooter__bottom__right__facebook" />
                        </a>
                        <a href="#">
                            <FaXTwitter className="body__Subfooter__bottom__right__twitter" />
                        </a>
                        <a href="#">
                            <FaYoutube className="body__SubFooter__bottom__right__youtube" />
                        </a>
                        <a href="#">
                            <FaInstagram className="body__SubFooter__bottom__right__instagram" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="body__SubFooter__bottom__right__linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubFooter;
