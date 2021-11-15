import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    {/* <img src="images/Logo.png"/> */}
                        <p className="top-margin-20">© Copyright <a href="../">XYZ</a></p>
                        <div className="footer-social-list">
                            <ul className="list-inline top-margin-20">
                                <li>
                                    <a href="https://www.facebook.com/abc" target="blank">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/abc" target="blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/abc" target="blank">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/abc" target="blank">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/abc" target="blank">
                                        <i className="fab fa-youtube"></i>
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
