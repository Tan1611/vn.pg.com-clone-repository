import React, { useEffect, useState } from 'react';
import './SignInSignUp.css';

function SignInSignUp() {
    // State to manage the active panel for the desktop version
    const [rightPanelActive, setRightPanelActive] = useState(false);

    // State to manage the view for mobile (login or register)
    const [mobileView, setMobileView] = useState('register');

    useEffect(() => {
        // Logic to handle mobile initial display state
        if (window.innerWidth <= 768) {
            setMobileView('register');
        }
    }, []);

    // Handlers for desktop view
    const handleSignUpClick = () => {
        setRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setRightPanelActive(false);
    };

    // Handlers for mobile view
    const showLoginForm = () => {
        setMobileView('login');
    };

    const showRegisterForm = () => {
        setMobileView('register');
    };

    return (
        <div className="bodyFrom">
            <div className="login-logout-mobile-container">
                <div
                    className="login-logout-register-container"
                    style={{ display: mobileView === 'register' ? 'block' : 'none' }}
                >
                    <h1 className="login-logout-h1">Đăng ký</h1>
                    <form id="register-form" className="login-logout-form">
                        <input className="login-logout-inputRegister" type="text" placeholder="Name" required />
                        <input className="login-logout-inputRegister" type="email" placeholder="Email" required />
                        <input className="login-logout-inputRegister" type="password" placeholder="Password" required />
                        <div className="login-logout-textRegister">
                            <span className="login-logout-span">Bạn đã có tài khoản?</span>
                            <span className="login-logout-changeLogin" onClick={showLoginForm}>
                                Đăng nhập.
                            </span>
                        </div>
                        <button className="login-logout-buttonRegister" type="submit">
                            Đăng ký
                        </button>
                    </form>
                </div>
                <div
                    className="login-logout-login-container"
                    style={{ display: mobileView === 'login' ? 'block' : 'none' }}
                >
                    <h1 className="login-logout-h1">Đăng nhập</h1>
                    <form className="login-logout-form" id="login-form">
                        <input className="login-logout-inputLogin" type="text" placeholder="Tên người dùng" required />
                        <input className="login-logout-inputLogin" type="password" placeholder="Mật khẩu" required />
                        <div className="login-logout-textLogin">
                            <span className="login-logout-span">Bạn chưa có tài khoản?</span>
                            <span className="changeRegister" onClick={showRegisterForm}>
                                Đăng ký.
                            </span>
                        </div>
                        <button className="login-logout-buttonLogin" type="submit">
                            Đăng nhập
                        </button>
                    </form>
                </div>
            </div>

            <h2 className="login-logout-h2">Sign in/up Form</h2>
            <div className={`login-logout-container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
                <div className="login-logout-form-container login-logout-sign-up-container">
                    <form className="login-logout-form" action="#">
                        <h1 className="login-logout-h1">Create Account</h1>
                        <input className="login-logout-input" type="text" placeholder="Name" />
                        <input className="login-logout-input" type="email" placeholder="Email" />
                        <input className="login-logout-input" type="password" placeholder="Password" />
                        <button className="login-logout-button">Sign Up</button>
                    </form>
                </div>
                <div className="login-logout-form-container login-logout-sign-in-container">
                    <form className="login-logout-form" action="#">
                        <h1 className="login-logout-h1">Sign in</h1>
                        <input className="login-logout-input" type="email" placeholder="Email" />
                        <input className="login-logout-input" type="password" placeholder="Password" />
                        <button className="login-logout-button">Sign In</button>
                    </form>
                </div>
                <div className="login-logout-overlay-container">
                    <div className="login-logout-overlay">
                        <div className="login-logout-overlay-panel login-logout-overlay-left">
                            <h1 className="login-logout-h1">Welcome Back!</h1>
                            <p className="login-logout-p">To keep connected please login with your personal info</p>
                            <button className="login-logout-button" id="signIn" onClick={handleSignInClick}>
                                Sign In
                            </button>
                        </div>
                        <div className="login-logout-overlay-panel login-logout-overlay-right">
                            <h1 className="login-logout-h1">Hello!</h1>
                            <p className="login-logout-p">If you don't have an account yet, Click "Sign Up"</p>
                            <button className="login-logout-button" id="signUp" onClick={handleSignUpClick}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInSignUp;
