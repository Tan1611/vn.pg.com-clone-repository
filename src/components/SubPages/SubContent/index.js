import React, { useState, useEffect, useRef } from 'react';
import { useWindowSize } from '../../Content/useWindowSize.js';
import { FaPause } from 'react-icons/fa6';
import { FaPlay } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

import './SubContent.GlobalStyles.scss';
import image_1 from '../../../assets/images/HP_1.png';
import image_2 from '../../../assets/images/HP_2_mb.png';
import image_3 from '../../../assets/images/HP_3.png';
import image_4 from '../../../assets/images/HP_4_mb.png';

import brand_1 from '../../../assets/images/Pampers.png';
import brand_2 from '../../../assets/images/Pantene.png';
import brand_3 from '../../../assets/images/Rejoice.png';
import brand_4 from '../../../assets/images/Safeguard.png';
import brand_5 from '../../../assets/images/Tide.png';
import brand_6 from '../../../assets/images/ORAL_B__RGB.png';
import brand_7 from '../../../assets/images/Ariel.png';
import brand_8 from '../../../assets/images/DownyBlue.png';
import brand_9 from '../../../assets/images/Gillette.png';
import brand_10 from '../../../assets/images/Olay.png';
import brand_11 from '../../../assets/images/ambipur.png';
import brand_12 from '../../../assets/images/download.png';

import mon_baby from '../../../assets/images/Mom_and_baby.png';
import a_girl from '../../../assets/images/A_girl_showhand.png';

import img_bg_1 from '../../../assets/images/HP-Investor_Relations.png';
import img_bg_2 from '../../../assets/images/HP-Careers.png';
import icon_advocate from '../../../assets/images/advocates-icon.png';
import icon_employees from '../../../assets/images/employees-icon.png';

function SubContent() {
    const [isPaused, setIsPaused] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const contentSustainableDevelopmentRef = useRef(null);

    const [startIdx, setStartIdx] = useState(0);
    const [endIdx, setEndIdx] = useState(4); // Ban đầu hiển thị 5 sản phẩm đầu
    const [numSlides, setNumSlides] = useState(3); // Số lượng slide mặc định

    const brands = [
        brand_1,
        brand_2,
        brand_3,
        brand_4,
        brand_5,
        brand_6,
        brand_7,
        brand_8,
        brand_9,
        brand_10,
        brand_11,
        brand_12,
    ];

    // Dùng hook để lấy size cửa sổ
    const size = useWindowSize();

    // Sử dụng useEffect để cập nhật số lượng slide dựa trên kích thước của cửa sổ
    useEffect(() => {
        if (size.width < 899) {
            // Nếu kích thước màn hình nhỏ hơn 899px, chỉ trượt 1 slide
            setNumSlides(1);
        } else {
            // Nếu kích thước màn hình lớn hơn hoặc bằng 899px, trượt 3 slide
            setNumSlides(3);
        }
    }, [size.width]);

    const nextSlide = () => {
        let newStartIdx = startIdx + numSlides;
        let newEndIdx = endIdx + numSlides;

        // Nếu đã đến cuối mảng, quay lại lấy phần tử đầu
        if (newEndIdx > brands.length) {
            newStartIdx = 0;
            newEndIdx = numSlides;
        }

        setStartIdx(newStartIdx);
        setEndIdx(newEndIdx);
    };

    const prevSlide = () => {
        let newStartIdx = startIdx - numSlides;
        let newEndIdx = endIdx - numSlides;

        // Nếu đang ở phần tử đầu mảng, quay lại lấy phần tử cuối
        if (newStartIdx < 0) {
            newStartIdx = brands.length - numSlides;
            newEndIdx = brands.length;
        }

        setStartIdx(newStartIdx);
        setEndIdx(newEndIdx);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (contentSustainableDevelopmentRef.current) {
                const { top } = contentSustainableDevelopmentRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const scrollPosition = top / windowHeight;
                setScrollPosition(scrollPosition);
            }
        };

        window.addEventListener('scroll', handleScroll);

        const images = document.querySelectorAll('.content__introduce img');
        let index = 0;
        let intervalId;

        const showImage = () => {
            if (!isPaused) {
                images.forEach((img) => {
                    img.classList.remove('active');
                });
                images[index].classList.add('active');
                index = (index + 1) % images.length;
            }
        };

        intervalId = setInterval(showImage, 2000); // Thay đổi hình ảnh mỗi 2 giây

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(intervalId);
        };
    }, [isPaused]);

    const handleTogglePause = () => {
        setIsPaused(!isPaused);
    };

    const isLargeScreen = size.width >= 899;

    const contentSustainableDevelopmentStyle = {
        transform: isLargeScreen ? `translateX(${scrollPosition < 0.5 ? -25 : 0}%)` : 'none',
        transition: isLargeScreen ? 'transform 2s ease' : 'none',
    };

    return (
        <div className="wrap__SubContent">
            <div className="content__introduce">
                <img className="content__introduce__image1" src={image_1} />
                <img className="content__introduce__image2" src={image_2} />
                <img className="content__introduce__image3" src={image_3} />
                <img className="content__introduce__image4" src={image_4} />
                <button className="content__introduce__btn" onClick={handleTogglePause}>
                    {isPaused ? (
                        <FaPlay className="content__introduce__btn__play" />
                    ) : (
                        <FaPause className="content__introduce__btn__pause" />
                    )}
                </button>
                <h1 className="content__introduce__title">Chiến Lược Tăng Trưởng Toàn Diện</h1>
                <button className="content__introduce__report__btn">
                    <a className="content__introduce__report__btn__text" href="#">
                        Báo Cáo Thường Niên 2023
                    </a>
                    <MdArrowOutward className="content__introduce__report__btn__icon" />
                </button>
            </div>
            <div className="content__commitment__effort">
                <div className="content__commitment__effort__title">
                    <span className="content__commitment__effort__ourbrand__text">CÁC NHÃN HÀNG CỦA CHÚNG TÔI</span>
                    <h2 className="content__commitment__effort__products__text">Các sản phẩm giúp cuộc sống dễ sàng hơn</h2>
                </div>
                <div className="content__commitment__effort__list__products">
                    {brands.slice(startIdx, endIdx + 1).map((brand, index) => (
                        <div className="content__commitment__effort__brand" key={index}>
                            <img src={brand} alt="brand" />
                            <div className="hover__content">
                                <p className="hover__content__text">Brand</p>
                                <button className="hover__content__btn">
                                    <a href="#" title="brand">
                                        Đến Trang
                                    </a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="content__commitment__effort__showmore__products">
                    <button
                        className="content__commitment__effort__showmore__products__btn"
                        title="xem các biểu tượng mang tính thương hiệu của chúng tôi"
                    >
                        Xem các thương hiệu mang tính biểu tượng của chúng tôi
                    </button>
                    <div className="content__commitment__effort__showmore__products__prev__next">
                        <FaArrowLeftLong
                            onClick={prevSlide}
                            className="content__commitment__effort__showmore__products__prev"
                        />
                        <FaArrowRightLong
                            onClick={nextSlide}
                            className="content__commitment__effort__showmore__products__next"
                        />
                    </div>
                </div>
            </div>
            <div
                className="content__sustainable__development"
                ref={contentSustainableDevelopmentRef}
                style={contentSustainableDevelopmentStyle}
            >
                <div className="content__sustainable__development__left">
                    <img className="content__sustainable__development__left__img" src={mon_baby} alt="Mom and baby" />
                </div>
                <div className="content__sustainable__development__right">
                    <div className="content__sustainable__development__right__body">
                        <h2 className="content__sustainable__development__right__body__text">
                            Từng bước giảm tác động đến môi trường
                        </h2>
                        <button className="content__sustainable__development__right__body__btn">Nỗ lực của chúng tôi</button>
                    </div>
                    <img
                        className="content__sustainable__development__right__img"
                        src={a_girl}
                        alt="A girl show her hand"
                    />
                </div>
            </div>
            <div className="content__websites__orther">
                <div className="content__websites__orther__left">
                    <div className="overlay">
                        <img className="content__websites__orther__left__img" src={img_bg_1} alt="Investor_Relations" />
                        <div className="overlay__hidden">
                            <img className="overlay__hidden__img" src={icon_advocate} alt="advocate-icon" />
                            <h3 className="overlay__hidden__text">Quan hệ với nhà đầu tư</h3>
                            <button className="overlay__hidden__btn">Nhận thông tin nhà đầu tư</button>
                        </div>
                    </div>
                </div>
                <div className="content__websites__orthe__right">
                    <div className="overlay">
                        <img className="content__websites__orther__right__img" src={img_bg_2} alt="Carrer" />
                        <div className="overlay__hidden">
                            <img className="overlay__hidden__img" src={icon_employees} alt="employees-icon" />
                            <h3 className="overlay__hidden__text">Việc làm tại P&G</h3>
                            <button className="overlay__hidden__btn">Nhận thông tin việc làm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubContent;
