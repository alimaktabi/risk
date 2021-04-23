import React from "react";
import { Link } from "react-router-dom";
import image from '../../risk-image.ppm'
import Styles from './Intro.module.sass'
import LazyLoad from "react-lazyload";

const Intro = () => {
    return (
        <div className={`container text-center mt-5 ${Styles.root}`}>
            <h3>تست آنلاین</h3>
            <small className="text-muted">لورم اپیسوم</small>
            <hr className="my-4"/>
            <div className="row mt-5 align-items-center">
                <div className="col-lg-6 text-primary text-start">
                    <p style={{textAlign: 'justify'}}>
                        نمره خطر معیاری است که برای پیش بینی جنبه های مراقبت از بیمار (هزینه ، خطر بستری شدن در بیمارستان و غیره) استفاده می شود. این معیار با استفاده از شاخص های بیمار و در مقایسه با جمعیت استاندارد ساخته شده است.
                    </p>
                    <p className="text-muted">
                        نمره خطر معیاری است که برای پیش بینی جنبه های مراقبت از بیمار (هزینه ، خطر بستری شدن در بیمارستان و غیره) استفاده می شود. این معیار با استفاده از شاخص های بیمار و در مقایسه با جمعیت استاندارد ساخته شده است.

                    </p>
                </div>
                <div className={`col-lg-6 ${Styles.image}`}>
                    <LazyLoad height={250} once>
                    <img src={image}
                         alt="risk-score image"/>
                    </LazyLoad>
                </div>
            </div>
        </div>
    );
};

export default Intro;