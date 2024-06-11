import { IoIosArrowDown } from "react-icons/io";

import SubHeader from '../SubHeader/index.js';
import SubFooter from '../SubFooter/index.js';

import './LamDepCoTrachNhiem.GlobalStyles.scss';
import globeGreen from '../../../assets/images/LamDepCoTrachNhiem-globe-green.png';

import Approach from '../../../assets/images/LamDepCoTrachNhiem-approach-icon.png';
import Goals from '../../../assets/images/LamDepCoTrachNhiem-our-goals.png';
import Products from '../../../assets/images/AnhHuongCongDong-Innovative-products.png';
import Society from '../../../assets/images/LamDepCoTrachNhiem-society-icon.png';
import Handsake from '../../../assets/images/AnhHuongCongDong-handsake-icon.png';
function LamDepCoTrachNhiem() {
    return ( 
        <div>
            <SubHeader />
            <div  className='LamDepCoTrachNhiem'>
                <div className='LamDepCoTrachNhiem__background'>
                    <div className='LamDepCoTrachNhiem__background__content'>
                        <img className='LamDepCoTrachNhiem__background__globeGreen'
                            src={globeGreen}
                            alt='Làm đẹp có trách nhiệm globeGreen'
                        />
                        <div className='LamDepCoTrachNhiem__background__headerLine'>
                            <h1 className='LamDepCoTrachNhiem__background__headerLine__title'>
                                Làm đẹp có trách nhiệm <a className='LamDepCoTrachNhiem__background__headerLine__text'>.</a>
                            </h1>
                            {/* <p className='LamDepCoTrachNhiem__background__headerLine__text'>.</p> */}
                        </div>
                        <p className='LamDepCoTrachNhiem__background__subTitle'>
                            Kế hoạch chi tiết của chúng tôi cho thế hệ mai sau
                        </p>
                        <p className='LamDepCoTrachNhiem__background__subTitle__text'>
                            Ngay cả trong bối cảnh xảy ra thay đổi và gián đoạn
                            lớn thì việc xây dựng một thế giới bền vững, nâng cao
                            chất lượng cuộc sống, tôn trọng quyền con người và bảo
                            vệ môi trường vẫn luôn là mục tiêu có thể thực hiện được.
                        </p>
                    </div>
                </div>
                <div className='LamDepCoTrachNhiem__section__body'>
                    <p className='LamDepCoTrachNhiem__section__body__text'>
                        Làm đẹp có trách nhiệm - P&G Responsible Beauty là phương pháp
                        tiếp cận theo tư duy hệ thống để đưa ra quyết định, cung cấp kế
                        hoạch chi tiết để vượt qua những thách thức ở hiện tại và hướng
                        tới sự phát triển trong tương lai.
                    </p>
                    <div className='LamDepCoTrachNhiem__section__body__blockQuote'>
                        <p className='LamDepCoTrachNhiem__section__body__blockQuote__text'> 
                            P&G Responsible Beauty không phải là dự án phụ riêng biệt
                            của chúng tôi — mà là cách chúng tôi kinh doanh hàng ngày
                            trên khắp thế giới.
                        </p>
                        <strong className='LamDepCoTrachNhiem__section__body__blockQuote__author'>
                            -Alex Keith,
                        </strong>
                        <p className='LamDepCoTrachNhiem__section__body__blockQuote__position'>
                            Tổng giám đốc điều hành, P&G Beauty
                        </p>
                    </div>
                </div>
                <div className='LamDepCoTrachNhiem__anchor__list'>
                    <div className='LamDepCoTrachNhiem__anchor__list__items'>
                        <div className='LamDepCoTrachNhiem__anchor__list__items__first'>
                            <img
                                className='LamDepCoTrachNhiem__anchor__list__items__first__icon'
                                src={Approach}
                                alt="Làm đjep có trách nhiệm approach icon"
                            />
                            <p className='LamDepCoTrachNhiem__anchor__list__items__first__text'>xin chào</p>
                            <IoIosArrowDown className="LamDepCoTrachNhiem__anchor__list__items__first__arrowDown"/>
                        </div>
                        <div className='LamDepCoTrachNhiem__anchor__list__items__second'>
                            <img
                                className='LamDepCoTrachNhiem__anchor__list__items__second__icon'
                                src={Goals}
                                alt='Làm đẹp có trách nhiệm goals icon'
                            />
                            <p className='LamDepCoTrachNhiem__anchor__list__items__first__text'>xin chào</p>
                            <IoIosArrowDown className="LamDepCoTrachNhiem__anchor__list__items__second__arrowDown"/>
                        </div>
                        <div className='LamDepCoTrachNhiem__anchor__list__items__third'>
                            <img
                                className='LamDepCoTrachNhiem__anchor__list__items__third__icon'
                                src={Society}
                                alt="Làm đẹp cso trách nhiệm society icon"
                            />
                            <p className='LamDepCoTrachNhiem__anchor__list__items__first__text'>xin chào</p>
                            <IoIosArrowDown className="LamDepCoTrachNhiem__anchor__list__items__third__arrowDown"/>
                        </div>
                        <div className='LamDepCoTrachNhiem__anchor__list__items__fourth'>
                            <img
                                className='LamDepCoTrachNhiem__anchor__list__items__fourth__icon'
                                src={Products}
                                alt='Làm đẹp có trách nhiệm production icon'
                            />
                            <p className='LamDepCoTrachNhiem__anchor__list__items__first__text'>xin chào</p>
                            <IoIosArrowDown className="LamDepCoTrachNhiem__anchor__list__items__fourth__arrowDown"/>
                        </div>
                        <div className='LamDepCoTrachNhiem__anchor__list__items__fifth'>
                            <img
                                className='LamDepCoTrachNhiem__anchor__list__items__fifth__icon'
                                src={Handsake}
                                alt='Làm đẹp có trách nhiệm handsake icon'
                            />
                            <p className='LamDepCoTrachNhiem__anchor__list__items__fifth__text'>xin chào</p>
                            <IoIosArrowDown className="LamDepCoTrachNhiem__anchor__list__items__fifth__arrowDown"/>
                        </div>
                    </div>
                </div>
            </div>
            <SubFooter />
        </div>
     );
}

export default LamDepCoTrachNhiem;