import { CiSearch } from 'react-icons/ci';

import SubHeader from '../SubHeader/index.js';
import SubFooter from '../SubFooter/index.js';

import './CacNhanHieu.GlobalStyles.scss';
import cacnhanhieuIcon from '../../../assets/images/icon-CacNhanHieu.png';
function CacNhanHieu() {

    

    return ( 
        <div>
            <SubHeader />
            <div className='wrap__CacNhanHieu'>
                <div className='CacNhanHieu__background'>
                    <div className='CacNhanHieu_background__body'>
                        <img className='CacNhanHieu__background__icon' src= {cacnhanhieuIcon} alt='icon-CacNhanHieu' />
                        <div className='CacNhanHieu__background__titleDot'>
                            <h1 className='CacNhanHieu__background__title'>Các nhãn hiệu</h1>
                            <h1 className='CacNhanHieu__background__dot'>.</h1>
                        </div>
                        <div className='CacNhanHieu__background__content'>
                            P&G mang đến những thương hiệu uy tín, chất lượng hàng dầu, với hiệu quả và giá trị vuọt trội
                            để đáp ứng nhu cầu làm sạch, giữ gìn sức khỏe và đảm bảo vệ sinh của người tiêu dùng trên toàn
                            thế giới.
                        </div>
                    </div>
                    <div className='mouse__scroll'>
                        <div className='mouse__scroll__wheel'></div>
                    </div>
                </div>
                <div className='CacNhanHieu__body'> 
                    <form className='CacNhanHieu__body__left' id='search__filters'>
                        <legend className='CacNhanHieu__body__left__title'>Bộ lọc</legend>
                        <div className='CacNhanHieu__body__left__header'>
                            <input type='text' className='CacNhanHieu__body__left__input' placeholder='Tim Kiếm' />
                            <CiSearch className="CacNhanHieu__body__left__icon" />
                        </div>
                        <div className='CacNhanHieu__body__left__content'>
                            <ul className='CacNhanHieu__body__left__content__list'>
                                <li className='CacNhanHieu__body__left__content__list__item'>
                                    <input className='CacNhanHieu__body__left__content__list__check' type='checkbox' id='cat__Chăm sóc trẻ em' />
                                    <label className='CacNhanHieu__body__left__content__list__title' htmlFor='cat__Chăm sóc trẻ em' >Chăm sóc trẻ em</label>
                                </li>
                                <li className='CacNhanHieu__body__left__content__list__item'>
                                    <input className='CacNhanHieu__body__left__content__list__check' type='checkbox' id='cat__Chăm sóc vải'/>
                                    <label className='CacNhanHieu__body__left__content__list__title' htmlFor ='cat__Chăm sóc vải' >Chăm sóc vải</label>
                                </li>
                                <li className='CacNhanHieu__body__left__content__list__item'>
                                    <input className='CacNhanHieu__body__left__content__list__check' type='checkbox' id='cat__Chăm sóc phụ nữ'/>
                                    <label className='CacNhanHieu__body__left__content__list__title' htmlFor='cat__Chăm sóc phụ nữ' >Chăm sóc phụ nữ</label>
                                </li>
                                <li className='CacNhanHieu__body__left__content__list__item'>
                                    <input className='CacNhanHieu__body__left__content__list__check' type='checkbox' id='cat__Grooming' />
                                    <label className='CacNhanHieu__body__left__content__list__title' htmlFor='cat__Grooming' >Grooming</label>
                                </li>
                                <li className='CacNhanHieu__body__left__content__list__item'>
                                    <input className='CacNhanHieu__body__left__content__list__check' type='checkbox' id='cat__Chăm sóc tóc' />
                                    <label className='CacNhanHieu__body__left__content__list__title' htmlFor='cat__Chăm sóc tóc'>Chăm sóc tóc</label>
                                </li>
                                <li className='CacNhanHieu__body__left__content__list__item'>
                                    <input className='CacNhanHieu__body__left__content__list__check' type='checkbox' id='cat__Chăm sóc nhà cửa' />
                                    <label className='CacNhanHieu__body__left__content__list__title' htmlFor='cat__Chăm sóc nhà cửa' >Chăm sóc nhà cửa</label>
                                </li>
                                <li className='CacNhanHieu__body__left__content__list__item'>
                                    <input className='CacNhanHieu__body__left__content__list__check' type='checkbox' id='cat__Chăm sóc răng miệng' />
                                    <label className='CacNhanHieu__body__left__content__list__title' htmlFor='cat__Chăm sóc răng miệng' >Chăm sóc răng miệng</label>
                                </li>
                                <li className='CacNhanHieu__body__left__content__list__item'>
                                    <input className='CacNhanHieu__body__left__content__list__check' type='checkbox' id='cat__Chăm sóc da và cá nhân' />
                                    <label className='CacNhanHieu__body__left__content__list__title' htmlFor='cat__Chăm sóc da và cá nhân' >Chăm sóc da và cá nhân</label>
                                </li>
                            </ul>
                        </div>
                        <button className='CacNhanHieu__body__left__content__clear' type="button">Xóa</button>
                    </form>
                    <div className='CacNhanHieu__body__right'>
                        <div className='CacNhanHieu__body__right__category'>
                            <h2 className='CacNhanHieu__body__right__category__title'>Chăm Sóc trẻ em</h2>
                            <div className='CacNhanHieu__body__right__category__list'>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>1</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>2</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>3</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                            </div>
                        </div>
                        <div className='CacNhanHieu__body__right__category'>
                            <h2 className='CacNhanHieu__body__right__category__title'>Chăm sóc vải</h2>
                            <div className='CacNhanHieu__body__right__category__list'>
                                 <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>1</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>2</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>3</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                            </div>
                        </div>
                        <div className='CacNhanHieu__body__right__category'>
                            <h2 className='CacNhanHieu__body__right__category__title'>Chăm sóc phụ nữ</h2>
                            <div className='CacNhanHieu__body__right__category__list'>
                                 <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>1</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>2</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>3</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                            </div>
                        </div>
                        <div className='CacNhanHieu__body__right__category'>
                            <h2 className='CacNhanHieu__body__right__category__title'>Grooming</h2>
                            <div className='CacNhanHieu__body__right__category__list'>
                                 <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>1</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>2</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>3</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                            </div>
                        </div>
                        <div className='CacNhanHieu__body__right__category'>
                            <h2 className='CacNhanHieu__body__right__category__title'>Chăm sóc tóc</h2>
                            <div className='CacNhanHieu__body__right__category__list'>
                                 <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>1</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>2</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>3</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                            </div>
                        </div>
                        <div className='CacNhanHieu__body__right__category'>
                            <h2 className='CacNhanHieu__body__right__category__title'>Chăm sóc nhà cửa</h2>
                            <div className='CacNhanHieu__body__right__category__list'>
                                 <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>1</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>2</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>3</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                            </div>
                        </div>
                        <div className='CacNhanHieu__body__right__category'>
                            <h2 className='CacNhanHieu__body__right__category__title'>Chăm sóc răng miệng</h2>
                            <div className='CacNhanHieu__body__right__category__list'>
                                 <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>1</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>2</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>3</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                            </div>
                        </div>
                        <div className='CacNhanHieu__body__right__category'>
                            <h2 className='CacNhanHieu__body__right__category__title'>Chăm sóc da và cá nhân</h2>
                            <div className='CacNhanHieu__body__right__category__list'>
                                 <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>1</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>2</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                                <div className='CacNhanHieu__body__right__category__list__brand'>
                                    <div className='CacNhanHieu__body__right__category__list__item'>3</div>
                                    <span className='CacNhanHieu__body__right__category__list__item__text'>cái gì đó</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SubFooter />
        </div>
     );
}

export default CacNhanHieu;