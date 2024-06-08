import './style.css';
import ProductSafety from '../ProductSafety/bodyDesktop/productSafety.jsx';
import ProductSafetyMB from '../ProductSafety/bodyMobile/productSafetyMB.jsx';
import Header from '../../components/Header/index.js';
import Footer from '../../components/Footer/index.js';

function layout() {
    return (
        <div>
            <div className="view-pc">
                <Header />
                <ProductSafety />
                <Footer />
            </div>

            <div className="view-mobile">
                <Header />
                <ProductSafetyMB />
                <Footer />
            </div>
        </div>
    );
}

export default layout;
