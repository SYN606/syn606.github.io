import React from "react";
import { FaDiscord, FaTelegram, FaYoutube, FaLinkedin } from "react-icons/fa";
import '../css/footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer_box">
                        <div className="footer_box-1">
                            <p className="msg open-sans">
                                It was a distinct honor to have you visit my website. I greatly appreciate your time and interest. Please feel free to submit any inquiries or suggestions you may have.
                            </p>
                            <span className="thanks">Thank you for your visit.</span>
                        </div>

                        <div className="footer_box-2">
                            <h4 className="ibm-plex-serif-regular">Contact me</h4>
                            <ul className="footer_nav-list">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/syn606"
                                        className="open-sans"
                                    >
                                        <FaLinkedin className="logo" /> LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.com/invite/YcQXAuDK2m" className="open-sans">
                                        <FaDiscord className="logo" /> Discord Server
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/@syn_606?si=rFxCyy6De3Y_fuRa" className="open-sans">
                                        <FaYoutube className="logo" /> YouTube
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/syn_606" className="open-sans">
                                        <FaTelegram className="logo" /> Telegram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
