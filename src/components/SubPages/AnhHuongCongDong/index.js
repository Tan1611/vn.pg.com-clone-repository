import { IoIosArrowDown } from "react-icons/io";

import SubHeader from '../SubHeader/index.js';
import SubFooter from '../SubFooter/index.js';

import './AnhHuongCongDong.GlobalStyles.scss';
import BannerAnhHuongCongDong from '../../../assets/images/AnhHuongCongDong-background.png';
import IconAnhHuongCongDong from '../../../assets/images/AnhHuongCongDong-icon.png';
import Handsake from '../../../assets/images/AnhHuongCongDong-handsake-icon.png';
import Everyday from '../../../assets/images/AnhHuongCongDong-Everyday-practices.png';
import Products from '../../../assets/images/AnhHuongCongDong-Innovative-products.png';
import Community from '../../../assets/images/AnhHuongCongDong-Supporting-Communities_2.png';

function AnhHuongCongDong() {
    return ( 
        <div>
            <SubHeader />
            <div className="AnhHuongCongDong">
                <div className='AnhHuongCongDong__banner'>
                    <div className='AnhHuongCongDong__banner__header'>
                        <img className='AnhHuongCongDong__banner__img' src={BannerAnhHuongCongDong} alt='Banner Ảnh Hưởng Cộng ĐỒng' />
                        <div className='AnhHuongCongDong__banner__before'></div>
                        <img className='AnhHuongCongDong__banner__icon' src={IconAnhHuongCongDong} alt='Icon' />
                    </div>
                    <div className='AnhHuongCongDong__headerLine'>
                        <h1 className='AnhHuongCongDong__headerLine__text'>Hỗ Trợ Cộng Đồng</h1>
                        <span className='AnhHuongCongDong__headerLine__dot'> .</span>
                    </div>
                    <h2 className='AnhHuongCongDong__section__headLine'>Cùng nhau xây dựng một thế giới tốt đẹp</h2>
                    <div className='AnhHuongCongDong__section__body'>
                        <p className='AnhHuongCongDong__section__body__text'>Tại P&G, chúng tôi cam kết làm điều đúng đắn, trở thành "Một động lực tốt
                            và một động lực cho sự tăng trưởng". Đó là lý do mọi nhân viên và các
                            thương hiệu của chúng tôi luôn thực hiện những điều tốt đẹp mỗi ngày.
                        </p>
                        <p className='AnhHuongCongDong__section__body__text'>
                            Từ hỗ trợ công tác giáo dục về vệ sinh đến cung cấp nhu cầu thiết yếu
                            đơn giản như nước hoặc cung cấp nhu yếu phẩm tới các gia đình chịu ảnh
                            hưởng từ thiên tai, mục tiêu của chúng tôi là cải thiện sức khỏe và phúc
                            lợi cho các cộng đồng mà chúng tôi hoạt động.
                        </p>
                        <p className='AnhHuongCongDong__section__body__text'>
                            <a target='_blank' className='AnhHuongCongDong__section__body__learnMore'>Tìm hiểu thêm </a>về những câu chuyện mới nhất về
                            cách chúng tôi đang tạo ra sự khác biệt tích cực trong các cộng đồng
                            trên khắp thế giới.
                        </p>
                    </div>
                    <div className='AnhHuongCongDong__anchor__list'>
                        <p className='AnhHuongCongDong__anchor__list__title'>Nhấp chuột để chuyến đến từng phần.</p>
                        <div className='AnhHuongCongDong__anchor__list__items'>
                            <div className='AnhHuongCongDong__anchor__list__items__first'>
                                <img className='AnhHuongCongDong__anchor__list__items__first__icon' src={Handsake} alt='Handsake' />
                                <p className='AnhHuongCongDong__anchor__list__items__first__text'>xin chào</p>
                                <IoIosArrowDown className="AnhHuongCongDong__anchor__list__items__first__arrowDown"/>
                            </div>
                            <div className='AnhHuongCongDong__anchor__list__items__second'>
                                <img className='AnhHuongCongDong__anchor__list__items__second__icon' src={Everyday} alt='Everyday' />
                                <p className='AnhHuongCongDong__anchor__list__items__first__text'>xin chào</p>
                                <IoIosArrowDown className="AnhHuongCongDong__anchor__list__items__second__arrowDown"/>
                            </div>
                            <div className='AnhHuongCongDong__anchor__list__items__third'>
                                <img className='AnhHuongCongDong__anchor__list__items__third__icon' src={Products} alt='Products' />
                                <p className='AnhHuongCongDong__anchor__list__items__first__text'>xin chào</p>
                                <IoIosArrowDown className="AnhHuongCongDong__anchor__list__items__third__arrowDown"/>
                            </div>
                            <div className='AnhHuongCongDong__anchor__list__items__fourth'>
                                <img className='AnhHuongCongDong__anchor__list__items__fourth__icon' src={Community} alt='Community' />
                                <p className='AnhHuongCongDong__anchor__list__items__first__text'>xin chào</p>
                                <IoIosArrowDown className="AnhHuongCongDong__anchor__list__items__fourth__arrowDown"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SubFooter />
        </div>
     );
}

export default AnhHuongCongDong;