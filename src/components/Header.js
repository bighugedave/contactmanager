import React from "react";
import PropTypes from "prop-types";

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
                        <a href="/">Home</a>
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
