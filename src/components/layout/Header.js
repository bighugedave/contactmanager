import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
                        <Link to="/">
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
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
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
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact/add">
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
                        </Link>
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
