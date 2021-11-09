import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    {/* <img src="images/Logo.png"/> */}
                        <p class="top-margin-20">© Copyright <a href="../">XYZ</a></p>
                        <div class="footer-social-list">
                            <ul class="list-inline top-margin-20">
                                <li>
                                    <a href="https://www.facebook.com/abc" target="blank">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/abc" target="blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/abc" target="blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/abc" target="blank">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/abc" target="blank">
                                        <i class="fab fa-youtube"></i>
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
