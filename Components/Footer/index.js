import React, { Component } from 'react'
import './style.css';
 class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footerItem">
                    <ul className="footerNav">
                        <li  className="menuItem ">
                            <a  href="https://www.facebook.com/">
                                <i className="fa fa-facebook-f"></i>
                                <span className="spaning">&nbsp;&nbsp;Facebook</span>
                            </a>
                        </li>
                        <li className="menuItem ">
                            <a  href="https://www.instagram.com/">
                                <i className="fa fa-instagram" ></i>
                                <span className="spaning">&nbsp;&nbsp;Instagram</span>
                            </a>
                        </li>
                        <li className="menuItem ">
                            <a  href="https://twitter.com/">
                                <i className="fa fa-twitter"></i>
                                <span className="spaning">&nbsp;&nbsp;Twitter</span>
                            </a>
                        </li>
                    </ul>
                    <p className="right">
                        <span className="copyright">Copyright&copy;</span> 
                        2020 all right reserved To dev academy
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;