import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = props => {
    const { branding } = props;

    return (
        <nav>
            <div className="nav-wrapper blue">
                <a href="/" className="brand-logo">
                    {branding}
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="/">
                            <FontAwesomeIcon
                                className="fa-sm"
                                icon="home"
                                style={{
                                    cursor: "pointer",
                                    color: "white",
                                    marginRight: "10px"
                                }}
                            />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <FontAwesomeIcon
                                className="fa-sm"
                                icon="question"
                                style={{
                                    cursor: "pointer",
                                    color: "white",
                                    marginRight: "10px"
                                }}
                            />
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/contact/add">
                            <FontAwesomeIcon
                                className="fa-sm"
                                icon="plus"
                                style={{
                                    cursor: "pointer",
                                    color: "white",
                                    marginRight: "10px"
                                }}
                            />
                            Add Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

Header.defaultProps = {
    branding: "My App"
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;
