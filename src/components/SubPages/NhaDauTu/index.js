import { SlArrowDown } from "react-icons/sl";
import { IoMdSearch } from "react-icons/io";

// import SubHeader from '../SubHeader/index.js';
// import SubFooter from '../SubFooter/index.js';

import NhaDauTu_logo from '../../../assets/images/P_G_Logo.png';
import Oral_logo from '../../../assets/images/ORAL_B__RGB.png';
import Tide_logo from '../../../assets/images/Tide.png'; 
import Safeguard_logo from '../../../assets/images/Safeguard.png'; 
import littleBoy_logo from '../../../assets/images/littleBoy.jpg'; 
import manAndBoy_logo from '../../../assets/images/manAndBoy.jpg'; 
import NhaDauTu_item from '../../../assets/images/NhaDauTu_item.png'; 
import './NhaDauTu.GlobalStyles.scss';

function NhaDauTu() {
    return ( 
        <div className="NhaDauTu">
            <header className="NhaDauTu__header">
                <img className="NhaDauTu__header__logo" src={NhaDauTu_logo} />
                <div className="NhaDauTu__header__navigate">
                    <a className="NhaDauTu__header__navigate__link__first">Investor Relations</a>
                    <span className="NhaDauTu__header__navigate__link__second">About P&G</span>
                    <SlArrowDown className="NhaDauTu__header__navigate__icon" />
                    <span className="NhaDauTu__header__navigate__link__third">ESG</span>
                    <SlArrowDown className="NhaDauTu__header__navigate__icon"/>
                    <a className="NhaDauTu__header__navigate__link__fourth">Presentations & Events</a>
                    <span className="NhaDauTu__header__navigate__link__fifth">Stock Information</span>
                    <SlArrowDown className="NhaDauTu__header__navigate__icon"/>
                    <span className="NhaDauTu__header__navigate__link__sixth">Financial Reporting</span>
                    <SlArrowDown className="NhaDauTu__header__navigate__icon"/>
                    <span className="NhaDauTu__header__navigate__link__seventh">Shareholder Resources</span>
                    <SlArrowDown className="NhaDauTu__header__navigate__icon" />
                    <IoMdSearch className="NhaDauTu__header__navigate__icon__search"/>
                </div>
            </header>
            <div className="NhaDauTu__background">
                <div className="NhaDauTu__background__upRow">
                    <div className="NhaDauTu__background__upRow__item__one">
                        <img src={Oral_logo} />
                    </div>
                    <div className="NhaDauTu__background__upRow__item__two"></div>
                    <div className="NhaDauTu__background__upRow__item__three">
                        <p className="NhaDauTu__background__upRow__item__three__text">WELCOME TO PROCTER & GAMBLE</p>
                        <h1 className="NhaDauTu__background__upRow__item__three__title">INVESTOR RELATIONS</h1>
                    </div>
                    <div className="NhaDauTu__background__upRow__item__four"></div>
                    <div className="NhaDauTu__background__upRow__item__five">
                        <img src={Safeguard_logo} />
                    </div>
                </div>
                <div className="NhaDauTu__background__downRow">
                    <div className="NhaDauTu__background__downRow__item__one">
                        <img src={Tide_logo} />
                    </div>
                    <div className="NhaDauTu__background__downRow__item__two"></div>
                    <div className="NhaDauTu__background__downRow__item__three">
                        <img src={littleBoy_logo} />
                    </div>
                    <div className="NhaDauTu__background__downRow__item__four">
                        
                    </div>
                    <div className="NhaDauTu__background__downRow__item__five">
                        <img src={manAndBoy_logo} />
                    </div>
                </div>
            </div>
            <div className="NhaDauTu__content">
                <div className="NhaDauTu__content__container__left">
                    <div className="NhaDauTu__content__container__left__only">
                        <h3 className="NhaDauTu__content__container__left__only__title">Financial Releases</h3>
                        <div className="NhaDauTu__content__container__left__only__item">
                            <p className="NhaDauTu__content__container__left__only__date">May 28, 2024</p>
                            <a href="#" className="NhaDauTu__content__container__left__only__content">P&G to Webcast Presentation From the Deutsche Bank dbAccess Global Consumer Conference, June 4</a>
                            <a href="#" className="NhaDauTu__content__container__left__only__detail">Release Details</a>
                        </div>
                        <div className="NhaDauTu__content__container__left__only__item">
                            <p className="NhaDauTu__content__container__left__only__date">May 7, 2024</p>
                            <a href="#" className="NhaDauTu__content__container__left__only__content">P&G to Webcast Presentation at the Goldman Sachs Global Staples Forum, May 14</a>
                            <a href="#" className="NhaDauTu__content__container__left__only__detail">Release Details</a>
                        </div>
                        <div className="NhaDauTu__content__container__left__only__item">
                            <p className="NhaDauTu__content__container__left__only__date">April 19, 2024</p>
                            <a href="#" className="NhaDauTu__content__container__left__only__content">P&G Announces Fiscal Year 2024 Third Quarter Results</a>
                            <a href="#" className="NhaDauTu__content__container__left__only__detail">Release Details</a>
                        </div>
                        <div className="NhaDauTu__content__container__left__only__item">
                            <p className="NhaDauTu__content__container__left__only__date">April 9, 2024</p>
                            <a href="#" className="NhaDauTu__content__container__left__only__content">P&G Declares Dividend Increase</a>
                            <a href="#" className="NhaDauTu__content__container__left__only__detail">Release Details</a>
                        </div>
                        <div className="NhaDauTu__content__container__left__only__item">
                            <p className="NhaDauTu__content__container__left__only__date">March 22, 2024</p>
                            <a href="#" className="NhaDauTu__content__container__left__only__content">P&G to Webcast Discussion of Third Quarter 23/24 Earnings Results on April 19</a>
                            <a href="#" className="NhaDauTu__content__container__left__only__detail">Release Details</a>
                        </div>
                        <div className="NhaDauTu__content__container__left__only__btn">VIEW ALL RELEASES</div>
                    </div>
                </div>
                <div className="NhaDauTu__content__container__middle">
                    <div className="NhaDauTu__content__container__middle__item__first">
                        <h3 className="NhaDauTu__content__container__middle__item__first__title">
                            Upcoming Presentations & Events
                        </h3>
                        <div className="NhaDauTu__content__container__middle__item__first__item">
                            <p className="NhaDauTu__content__container__middle__item__first__date">July 30, 2024 (Anticipated)</p>
                            <a href="#" className="NhaDauTu__content__container__middle__item__first__content">Q4 2024 The Procter & Gamble Earnings Conference Call</a>
                            <a href="#" className="NhaDauTu__content__container__middle__item__first__detail">Release Details</a>
                        </div>
                        <div className="NhaDauTu__content__container__middle__item__first__btn">VIEW ALL RELEASES</div>
                    </div>
                    <div className="NhaDauTu__content__container__middle__item__second">
                        <h3 className="NhaDauTu__content__container__middle__item__second__title">
                            Latest Presentations & Events
                        </h3>
                        <div className="NhaDauTu__content__container__middle__item__second__item">
                            <p className="NhaDauTu__content__container__middle__item__second__date">June 4, 2024</p>
                            <a href="#" className="NhaDauTu__content__container__middle__item__second__content">The Procter & Gamble Company at Deutsche Bank dbAccess Global Consumer Conference</a>
                            <a href="#" className="NhaDauTu__content__container__middle__item__second__detail">Release Details</a>
                        </div>
                        <div className="NhaDauTu__content__container__middle__item__second__btn">VIEW ALL RELEASES</div>
                    </div>
                </div>
                <div className="NhaDauTu__content__container__right">
                    <div className="NhaDauTu__content__container__right__item__first">
                        <h3 className="NhaDauTu__content__container__right__item__first__title">
                            Environmental, Social & Governance
                        </h3>
                        <div className="NhaDauTu__content__container__right__item__first__btn">CLICK HERE</div>
                    </div>
                    <div className="NhaDauTu__content__container__right__item__second">
                        <h3 className="NhaDauTu__content__container__right__item__second__title">
                            2023 Annual Report & Proxy Statement
                        </h3>
                        <div className="NhaDauTu__content__container__right__item__second__body">
                            <img className="NhaDauTu__content__container__right__item__second__body__img" src={NhaDauTu_item} />
                            <div className="NhaDauTu__content__container__right__item__second__body__listsLink">
                                <a className="NhaDauTu__content__container__right__item__second__body__link">2023 Annual Report (Interactive)</a>
                                <a className="NhaDauTu__content__container__right__item__second__body__link">2023 Annual Report (PDF)</a>
                                <a className="NhaDauTu__content__container__right__item__second__body__link">2023 Proxy Statement</a>
                                <a className="NhaDauTu__content__container__right__item__second__body__link">2023 Form 10-K</a>
                                <a className="NhaDauTu__content__container__right__item__second__body__link">2023 Financials</a>
                                <a className="NhaDauTu__content__container__right__item__second__body__link">Historic Materials</a>
                            </div>
                        </div>
                        <div className="NhaDauTu__content__container__right__item__second__btn">VIEW ALL RELEASES</div>
                    </div>
                </div>
            </div>
            <footer className="NhaDauTu__footer"></footer>
        </div>
     );
}

export default NhaDauTu;