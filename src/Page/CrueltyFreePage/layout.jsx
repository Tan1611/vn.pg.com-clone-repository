import Footer from '../../components/Footer/index.js';
import Header from '../../components/Header/index.js';
import CrueltyFreePage from '../CrueltyFreePage/bodyDesktop/CrueltyFreePage.jsx';
import CrueltyFreeMBPage from '../CrueltyFreePage/bodyMobile/CrueltyFreePage.jsx';
import './style.css';
function layout() {
    return (
        <div>
            <div className="view-pc">
                <Header />
                <CrueltyFreePage />
                <Footer />
            </div>

            <div className="view-mobile">
                <Header />
                <CrueltyFreeMBPage />
                <Footer />
            </div>
        </div>
    );
}

export default layout;
