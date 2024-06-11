import { MdOutlineArrowOutward } from "react-icons/md";

import SubHeader from '../SubHeader/index.js';
import SubFooter from '../SubFooter/index.js';

import './ChungToiLaAi.GlobalStyles.scss';
import BannerChungToiLaAi from '../../../assets/images/ChungToiLaAi-background.png';
import IconChungToiLaAi from '../../../assets/images/ChungToiLaAi-book-icon.png';
import ChungToiLaAiBrands from '../../../assets/images/ChungToiLaAi-icon-our-brands.png';
import ChungToiLaAiCommitment from '../../../assets/images/ChungToiLaAi-icon-our-commitment.png';
function ChungToiLaAi() {
    return ( 
        <div>
            <SubHeader />
            <div className="ChungToiLaAi">
                <div className='ChungToiLaAi__banner'>
                    <div className='ChungToiLaAi__banner__header'>
                        <img className='ChungToiLaAi__banner__img' src={BannerChungToiLaAi} alt='Banner Chúng tôi là ai' />
                        <div className='ChungToiLaAi__banner__before'></div>
                        <img className='ChungToiLaAi__banner__icon' src={IconChungToiLaAi} alt='Icon' />
                    </div>
                    <div className='ChungToiLaAi__headerLine'>
                        <h1 className='ChungToiLaAi__headerLine__text'>Chúng tôi là ai</h1>
                        <span className='ChungToiLaAi__headerLine__dot'> .</span>
                    </div>
                    <h2 className='ChungToiLaAi__section__headLine'>Biến mỗi ngày trở nên phi thường</h2>
                    <div className='ChungToiLaAi__section__body'>
                        <p className='ChungToiLaAi__section__body__text'>Thương hiệu của chúng tôi được
                            tin tưởng trong hàng triệu phòng khách, nhà bếp, phòng giặt và phòng tắm và
                            đã được truyền từ thế hệ này sang thế hệ khác. Trong suốt 181 năm, chúng đã
                            thách thức các tập quán, dẫn dắt đổi mới và giúp định hình văn hóa.
                        </p>
                        <p className='ChungToiLaAi__section__body__text'>Nhưng cho dù tăng trưởng bao nhiêu,
                            chúng tôi luôn duy trì một nền tảng sâu sắc trong các 
                            <a target='_blank' className='ChungToiLaAi__section__body__target'>
                                 mục đích, giá trị và nguyên tắc.
                            </a>
                        </p>
                        <p className='ChungToiLaAi__section__body__text'>
                            Chúng tôi đã theo đuổi các giá trị này hơn 66.000 ngày và sẽ không dừng lại.
                        </p>
                    </div>
                    <div className='ChungToiLaAi__hightlight'>
                        <div className='ChungToiLaAi__hightlight__body'></div>
                        <p className='ChungToiLaAi__hightlight__body__text'>Chúng tôi tin tưởng vào việc
                            tìm ra những cách nhỏ nhưng có ý nghĩa để cải thiện cuộc sống — hiện tại và
                            cho những thế hệ mai sau.
                        </p>
                    </div>
                    <h2 className='ChungToiLaAi__section__headLine'>Chúng tôi làm gì</h2>
                    <div className='ChungToiLaAi__large__list'>
                        <div className='ChungToiLaAi__large__list__first'>
                            <img className='ChungToiLaAi__large__list__first__img' src={ChungToiLaAiBrands} alt='Chúng tôi là ai brands' />
                            <p className='ChungToiLaAi__large__list__first__text'>Chúng tôi làm ra những sản phẩm chất lượng cao</p>
                            <button className='ChungToiLaAi__large__list__first__btn'>Xem các nhãn hiệu của chúng tôi</button>
                        </div>
                        <div className='ChungToiLaAi__large__list__second'>
                            <img className='ChungToiLaAi__large__list__second__img' src={ChungToiLaAiCommitment} alt='Chúng tôi là ai commitment' />
                            <p className='ChungToiLaAi__large__list__second__text'>Và sử dụng mỗi kilogram sức mạnh của chúng để tạo sự khác biệt</p>
                            <button className='ChungToiLaAi__large__list__second__btn'>Xem ảnh hưởng của chúng tôi</button>
                        </div>
                    </div>
                    <h2 className='ChungToiLaAi__section__headLine'>Bạn thích nội dung đang nghe?</h2>
                    <p className="ChungToiLaAi__section__headLine__text">Nếu bạn chia sẻ các giá trị của chúng tôi, bạn hãy gia nhập đội P & G. Chúng tôi luôn tìm kiếm những nhà lãnh đạo có tâm và có tầm nhìn.</p>
                    <div className='ChungToiLaAi__section__headLine__buttonIcon' >
                        <span className='ChungToiLaAi__section__headLine__buttonIcon__text'>Cơ hội việc làm </span>
                        <MdOutlineArrowOutward className='ChungToiLaAi__section__headLine__buttonIcon__icon'/>
                    </div>
                </div>
            </div>
            <SubFooter />
        </div>
     );
}

export default ChungToiLaAi;