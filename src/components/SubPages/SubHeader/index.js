import React, { useState, useEffect, useRef  } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';

import './SubHeader.GlobalStyles.scss';
import logo from '../../../assets/images/P_G_Logo.png';

function SubHeader() {

    const [isSearchActive, setIsSearchActive] = useState(false);
    const inputRef = useRef(null);
    // const logoRef = useRef(null);

    // Xử lý scroll chuột logo sẽ trượt theo
    useEffect(() => {
        const handleScroll = () => {
            const logo = document.querySelector('.logo__image');
            if (logo && window.innerWidth > 899) {
                if (window.scrollY > 50) {
                    logo.classList.add('logo__image__small');
                } else {
                    logo.classList.remove('logo__image__small');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // Xử lý hiển thị input search
    useEffect(() => {
        function handleClickOutside(event) {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setIsSearchActive(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [inputRef]);

    // Xử lý focus vào input search khi hiển thị
    useEffect(() => {
        if (isSearchActive) {
            inputRef.current.focus();
        }
    }, [isSearchActive]);

    // Xử lý hiển thị icon search
    const handleSearchIconClick = () => {
        setIsSearchActive(prevState => !prevState);
    };

    

    return ( 
        <nav className='subHeader'>
            <div className="logo__container">
                <img className="logo__image" src={logo} alt="logo" />
            </div>
            <div className="subHeader__left">
                <div className='subHeader__left__language'>
                    <button className='subHeader__left__language--icon'><GrLanguage /></button>
                    <span className='subHeader__left__language--text'>Tiếng Việt</span>
                </div>
                <div className='subHeader__left__listDropdown'>
                    <div className='subHeader__left__listDropdown--left'>
                        <ul className="subHeader__left__listDropdown--brandLabels">
                            <ul className="brandLabels__text">Các nhãn hiệu của chúng tôi</ul>
                                <ul className="brandLabels__text__hidden">
                                    <li className="brandLabels__text__hidden--text">
                                        <a href="#">Các nhãn hiệu</a>
                                    </li>
                                    <li className="brandLabels__text__hidden--text">
                                        <a href="#">Đổi mới</a>
                                    </li>
                                    <li className="brandLabels__text__hidden--text">
                                        <a href="#">An toàn sản phẩm</a>
                                    </li>
                                    <li className="brandLabels__text__hidden--text">
                                        <a href="#">Thành phần</a>
                                    </li>
                                    <li className="brandLabels__text__hidden--text">
                                        <a href="#">#BECRUELTYFREE</a>
                                    </li>
                                </ul>
                            <IoIosArrowDown className="brandLabels__icon" />
                            </ul>
                        <ul className="subHeader__left__listDropdown--impactLabels">
                            <ul className="impactLabels__text">Ảnh hưởng của chúng tôi</ul>
                                <ul className="impactLabels__text__hidden">
                                    <li className="impactLabels__text__hidden--text">
                                        <a href="#">Ảnh hưởng cộng đồng</a>
                                    </li>
                                    <li className="impactLabels__text__hidden--text">
                                        <a href="#">Bình đẳng và hòa nhập</a>
                                        <IoIosArrowForward className="equality__inclusion" />
                                        <ul class="additional__list">
                                            <li className="additional__list--text">
                                                <a href="#">Bình đắng giới</a>
                                            </li>
                                            <li className="additional__list--text">
                                                <a href="#">Người khuyết tật</a>
                                            </li>
                                            <li className="additional__list--text">
                                                <a href="#">LGBTQ+</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="impactLabels__text__hidden--text">
                                        <a href="#">Bền vững</a>
                                        <IoIosArrowForward className="lasting" />
                                        <ul class="additional__list">
                                            <li className="additional__list--text">
                                                <a href="#">Làm đẹp có trách nhiệm</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="impactLabels__text__hidden--text">
                                        <a href="#">Đạo đức & trách nhiệm doanh nghiệp </a>
                                    </li>
                                    <li className="impactLabels__text__hidden--text"></li>
                                </ul>
                            <IoIosArrowDown className="impactLabels__icon" />
                        </ul>
                    </div>
                    <div className='subHeader__left__listDropdown--right'>
                        <ul className="subHeader__left__listDropdown--storyLabels">
                            <ul className="storyLabels__text">Câu chuyện của chúng tôi </ul>
                                <ul className="storyLabels__text__hidden">
                                    <li className="storyLabels__text__hidden--text">
                                        <a href="#">Chúng tôi là ai</a>
                                    </li>
                                </ul>
                            <IoIosArrowDown className="storyLabels__icon" />
                        </ul>
                    </div>
                </div>
            </div>

            <div className="subHeader__right">
                <form className={`subHeader__right__search ${isSearchActive ? 'active' : ''}`} ref={inputRef} >
                    <input
                        type='search'
                        className= "search__button__input"
                        placeholder='Chúng tôi có thể giúp gì được cho bạn ?'
                    />
                    <label className='search__button__icon' onClick={handleSearchIconClick}>
                        <CiSearch className="search__icon" />
                    </label>
                </form>
            </div>
        </nav>
     );
}

export default SubHeader;