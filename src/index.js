import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/index';
import Footer from './components/Footer/index';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <header>
                <Header />
            </header>
            <main>
                <RouterProvider router={router} />
            </main>
            <footer>
                <Footer />
            </footer>
        </GlobalStyles>
    </React.StrictMode>,
);


reportWebVitals();
