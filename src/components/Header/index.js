import React, { useEffect } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';

import './Header.GlobalStyles.scss';
import logo from '../../assets/images/P_G_Logo.png';
import { Link } from 'react-router-dom';

function Header() {
    useEffect(() => {
        const handleScroll = () => {
            const logo = document.querySelector('.logo-image');
            if (window.innerWidth > 899) {
                if (window.scrollY > 50) {
                    logo.classList.add('logo-image-small');
                } else {
                    logo.classList.remove('logo-image-small');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav>
            <div className="header-container">
                <Link to="/Location">
                    <button className="language-button">
                        <GrLanguage className="language-icon" />
                        <span className="language-text">Tiếng Việt</span>
                    </button>
                </Link>
                <ul className="brand-labels">
                    <ul className="brand-labels-text">Các nhãn hiệu của chúng tôi</ul>
                    <ul className="brand-labels-text-hidden">
                        <li className="brand-labels-text-hidden-text">
                            <a href="##">Các nhãn hiệu</a>
                        </li>
                        <li className="brand-labels-text-hidden-text">
<<<<<<< HEAD
                            <a href="##">Đổi mới</a>
                        </li>
                        <li className="brand-labels-text-hidden-text">
                            <a href="##">An toàn sản phẩm</a>
=======
                            <Link to="/Renewed">Đổi mới</Link>
                        </li>
                        <li className="brand-labels-text-hidden-text">
                            <Link to="/ProductSafety">An toàn sản phẩm</Link>
>>>>>>> Di
                        </li>
                        <li className="brand-labels-text-hidden-text">
                            <a href="##">Thành phần</a>
                        </li>
                        <li className="brand-labels-text-hidden-text">
<<<<<<< HEAD
                            <a href="##">#BECRUELTYFREE</a>
=======
                            <Link to="/CrueltyFreePage">#BECRUELTYFREE</Link>
>>>>>>> Di
                        </li>
                    </ul>
                    <IoIosArrowDown className="brand-labels-icon" />
                </ul>
                <ul className="impact-labels">
                    <ul className="impact-labels-text">Ảnh hưởng của chúng tôi</ul>
                    <ul className="impact-labels-text-hidden">
                        <li className="impact-labels-text-hidden-text">
                            <a href="##">Ảnh hưởng cộng đồng</a>
                        </li>
                        <li className="impact-labels-text-hidden-text">
                            <a href="##">Bình đẳng và hòa nhập</a>
                            <IoIosArrowForward className="equality-inclusion" />
                            <ul class="additional-list">
                                <li className="additional-list-text">
<<<<<<< HEAD
                                    <a href="##">Bình đắng giới</a>
                                </li>
                                <li className="additional-list-text">
                                    <a href="##">Người khuyết tật</a>
=======
                                    <Link to="/GenderEquality">Bình đắng giới</Link>
                                </li>
                                <li className="additional-list-text">
                                    <Link to="/PeopleWithDisabilities">Người khuyết tật</Link>
>>>>>>> Di
                                </li>
                                <li className="additional-list-text">
                                    <a href="##">LGBTQ+</a>
                                </li>
                            </ul>
                        </li>
                        <li className="impact-labels-text-hidden-text">
                            <a href="##">Bền vững</a>
                            <IoIosArrowForward className="lasting" />
                            <ul class="additional-list">
                                <li className="additional-list-text">
                                    <a href="##">Làm đẹp có trách nhiệm</a>
                                </li>
                            </ul>
                        </li>
                        <li className="impact-labels-text-hidden-text">
                            <a href="##">Đạo đức & trách nhiệm doanh nghiệp </a>
                        </li>
                        <li className="impact-labels-text-hidden-text"></li>
                    </ul>
                    <IoIosArrowDown className="impact-labels-icon" />
                </ul>
                <ul className="logo-container">
                    <img className="logo-image" src={logo} alt="logo" />
                </ul>
                <ul className="story-labels">
                    <ul className="story-labels-text">Câu chuyện của chúng tôi</ul>
                    <ul className="story-labels-text-hidden">
                        <li className="story-labels-text-hidden-text">
                            <a href="##">Chúng tôi là ai</a>
                        </li>
                    </ul>
                    <IoIosArrowDown className="story-labels-icon" />
                </ul>
                <button className="search-button">
                    <CiSearch className="search-icon" />
                </button>
            </div>
            <div className="fake-border"></div>
        </nav>
    );
}

export default Header;
