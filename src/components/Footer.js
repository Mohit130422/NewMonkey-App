import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
export class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    {/* <img src="images/Logo.png"/> */}
                        <p className="top-margin-20">© Copyright <a href="../">2021 Developed by StepoGrammer, All Right Reserved | Powered by Stark Industries</a></p>
                        <div className="footer-social-list">
                            <ul className="list-inline top-margin-20">
                                <li>
                                    <a href="https://www.facebook.com/abc" target="blank">
                                    <FontAwesomeIcon icon={faFacebook }/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/abc" target="blank">
                                    <FontAwesomeIcon icon={faInstagram }/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/abc" target="blank">
                                    <FontAwesomeIcon icon={faTwitter }/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/abc" target="blank">
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/abc" target="blank">
                                    <FontAwesomeIcon icon={faYoutube }/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </footer>

            </div>
        )
    }
}

export default Footer
