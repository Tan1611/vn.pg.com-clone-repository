import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage/HomePage';

function App() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <HomePage />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
