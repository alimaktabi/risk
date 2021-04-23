import React from "react";
import { Link } from "react-router-dom";
const logo = require('../logo.svg');


const Header = () => {
    return (
        <header
            className="p-3 text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link
                        className="d-flex px-3 logo align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                        to="/">
                            <img src={logo} width="30"
                                 height="30"
                                 className="img-fluid"
                                 alt="Logo"
                            />
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-secondary">تست آنلاین</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">امکانات</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">سوالات متداول</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">درباره ما</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="جستجو..." />
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">ورود</button>
                        <button type="button" className="btn btn-warning">ثبت نام</button>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;