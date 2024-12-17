import '../css/blob.css'
import '../css/spots.css'
import '../css/header.css'
import syn606_gif from '../images/syn606.gif'
import { FiExternalLink } from "react-icons/fi";

const Header = () => {
    return (
        <>
            {/* animated blob */}
            <div className="blob"></div>

            <header className="ibm-plex-sans-regular">
                <div className="main-area container">
                    <div className="left-box">
                        <ul className="nav-list">
                            <li>
                                <a href="https://github.com/syn606" target="_blank" rel="noopener noreferrer">
                                    Github <FiExternalLink />
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com/@syn_606?si=rFxCyy6De3Y_fuRa" target="_blank" rel="noopener noreferrer">
                                    Youtube <FiExternalLink />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/anubhav-vikram-singh-259425299"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Linkedin <FiExternalLink />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="middle-box">
                        <h2 className="main-text-heading ibm-plex-sans-light">
                            Hey.. I'm
                            <div className="button_inner q">
                                <span className="main-text ibm-plex-serif-regular">SYN 606</span>
                                <div className="b_l_quad">
                                    {[...Array(48)].map((_, i) => (
                                        <div key={i} className="button_spots"></div>
                                    ))}
                                </div>
                            </div>
                        </h2>
                        <p>A web developer and cyber security analyst also a tech enthusiast.</p>
                    </div>

                    <div className="right-box">
                        <img src={syn606_gif} className="main-image" alt="a gif containing syn606 text logo." />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;